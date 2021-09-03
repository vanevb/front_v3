<template>
 <div class="login">
    <img src="../assets/login.png" alt="login" style="width:128px;height:128px;">
    <h1 class="title">Bienvenido</h1>
    
      <form v-on:submit.prevent="processAuthUser" class="form">
        <input class="form-input" v-model="user_in.email" type="usuario" id="usuario" required placeholder="Usuario">
        <input class="form-input" v-model="user_in.password" type="password" id="password" placeholder="Password">
        <button class="form-submit" type="submit">Ingresar</button>
      </form>
  </div>
</template>

<script>
// import gql from 'graphql-tag'
// import jwt_decode from "jwt-decode"
export default {
    name: "Login",

    data: function(){
        return {
            user_in: {
                email:"",
                password:""
            }
        }
    },

    methods: {
        processAuthUser: async function(){
            console.log(this.$apollo)
            // await this.$apollo.mutate({
            //     mutation: gql`
            //         mutation ($loginUserLogin: UserLogin) {
            //           loginUser(login: $loginUserLogin) {
            //             success
            //             token
            //           }
            //         }`, 
            //     variables: {
            //         loginUserLogin: this.user_in
            //     }

            // }).then((result) => {

            //     console.log(result)
            //     // let data = result.data.authenticate
            //     // data.user_id = jwt_decode(data.access).user_id.toString().padStart(3, "0")

            //     // this.$emit('log-in', data, this.user_in.username)

            // }).catch((error) => {
            //     // alert("El usuario y/o contraseña son incorrectos")
            //     console.log(error)
            // });
            console.log("acaa",this.user_in)
        }
    }
}
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
  background: #EBEBEB;
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