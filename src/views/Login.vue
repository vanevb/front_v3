<template>
  <div class="login">
    <img
      src="../assets/login.png"
      alt="login"
      style="width: 128px; height: 128px"
    />
    <h1 class="title">Bienvenido</h1>

    <form v-on:submit.prevent="processAuthUser" class="form">
      <input
        class="form-input"
        v-model="user_in.email"
        type="usuario"
        id="usuario"
        required
        placeholder="Usuario"
      />
      <input
        class="form-input"
        v-model="user_in.password"
        type="password"
        id="password"
        placeholder="Password"
      />
      <button class="form-submit" type="submit">Ingresar</button>
    </form>
  </div>
</template>

<script>
// import gql from 'graphql-tag'
// import jwt_decode from "jwt-decode"
import loginMutation from '../graphql/LoginMutation.gql';
// import { onLogin} from '../vue-apollo';
export default {
  name: "Login",

  data: function () {
    return {
      user_in: {
        email: "",
        password: "",
      },
    };
  },

  methods: {
    signIn() {
      this.loading = true;
      this.$apollo.mutate({
        // mutation: require("@/graphql/mutation/signIn.gql"),
        variables: {
          username: this.username,
          password: this.password,
        },
        // update: (store, { data: { signIn } }) => {
        //   const apolloClient = this.$apollo.provider.defaultClient;
        //   // onLogin(apolloClient, signIn.token);
        //   this.loading = false;
        //   this.$router.push({ name: "home" });
        // },
      });
    },

    processAuthUser: async function () {
      await this.$apollo.mutate({
          mutation:loginMutation,
          variables: {
              loginUserLogin: this.user_in
          }

      }).then((result) => {
          // onLogin(this.$apollo,result.data.loginUser.token);
          console.log(result)
          alert("Sesión iniciada correctamente");
          this.$router.push({ name: 'index' })

      }).catch((error) => {
          alert(error)
      });
      console.log("acaa", this.user_in);
    },
  },
};
</script>

<style scoped>
.login {
  padding: 2rem;
}
.title {
  text-align: center;
  font-size: 35px;
  color: oran;
  margin: 0;
  font-family: sans-serif;
}

.img {
  margin: 0;
}
.form {
  margin: 1rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 33.3%;
  min-width: 350px;
  max-width: 100%;
  background: none;
  padding: 0;
}

.form-label {
  margin-top: 2rem;
  color: orange;
  margin-bottom: 0.5rem;
}

.form-input {
  padding: 10px 10px;
  background: #ebebeb;
  background-image: none;
  border: 1px solid white;
  color: #3d2602;
  margin: 5px;
  font-size: 15px;
}
.form-submit {
  background: orange;
  border: none;
  color: white;
  margin-top: 10px;
  padding: 1rem 0;
  cursor: pointer;
  transition: background 0.2s;
  align-items: center;
  width: 15%;
  font-size: 15px;
}
</style>