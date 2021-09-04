<template>
  <div id="app">
    <div class="header">
      <!--Titulo Aplicativo-->
      <div class="OCR">
        <img src="./assets/Lib_logo.png" alt="1" class="center" />
      </div>
    </div>
    <p class="button_panel">
      <router-link to="/login"
        ><img
          src="https://cdn-icons-png.flaticon.com/512/747/747376.png"
          alt="ADD_BOOk"
          style="width: 42px; height: 42px" /></router-link
      >|
      <router-link to="/add"
        ><img
          src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
          alt="ADD_BOOk"
          style="width: 42px; height: 42px" /></router-link
      >|
      <router-link to="/cart"
        ><img
          src="https://cdn-icons-png.flaticon.com/512/833/833314.png"
          alt="ADD_BOOk"
          style="width: 42px; height: 42px" /></router-link
      >|
      <router-link to="/index"
        ><img
          src="https://cdn-icons-png.flaticon.com/512/864/864685.png"
          alt="ADD_BOOk"
          style="width: 42px; height: 42px" /></router-link
      >|
    </p>
    <router-view></router-view>
    <Foot />
  </div>
</template>

<script>
// import gql from "graphql-tag";
import Foot from './components/Footerbooks.vue'
export default {
  name: "App",
  components:{
    Foot
  },
  data: function () {
    return {
      is_auth: false,
    };
  },
  created: function () {
    // this.updateAccessToken();
  },
  methods: {
    // updateAccessToken: async function () {
    //   if (localStorage.getItem("refresh_token") == null) {
    //     this.$router.push({ name: "user_auth" });
    //     this.is_auth = false;
    //     return;
    //   }
    //   await this.$apollo
    //     .mutate({
    //       mutation: gql`
    //         mutation ($refreshTokenRefresh: String!) {
    //           refreshToken(refresh: $refreshTokenRefresh) {
    //             access
    //           }
    //         }
    //       `,
    //       variables: {
    //         refreshTokenRefresh: localStorage.getItem("refresh_token"),
    //       },
    //     })
    //     .then((result) => {
    //       localStorage.setItem("access_token", result.data.refreshToken.access);
    //       this.is_auth = true;
    //     })
    //     .catch((error) => {
    //       alert("Su sesión expiró, vuelva a iniciar sesión.");
    //       this.$router.push({ name: "user_auth" });
    //       this.is_auth = false;
    //       localStorage.clear();
    //     });
    // },
    // logIn: async function (data, username) {
    //   localStorage.setItem("access_token", data.access);
    //   localStorage.setItem("refresh_token", data.refresh);
    //   localStorage.setItem("user_id", data.user_id);
    //   localStorage.setItem("current_username", username);
    //   await this.updateAccessToken();
    //   if (this.is_auth) this.init();
    // },
    // init: function () {
    //   this.$router.push({
    //     name: "user",
    //     params: { username: localStorage.getItem("current_username") },
    //   });
    // },
    // account: function () {
    //   this.$router.push({
    //     name: "account",
    //     params: { username: localStorage.getItem("current_username") },
    //   });
    // },
    // transacction: function () {
    //   this.$router.push({
    //     name: "transacction",
    //     params: { username: localStorage.getItem("current_username") },
    //   });
    // },
    // historial: function () {
    //   this.$router.push({
    //     name: "historial",
    //     params: { username: localStorage.getItem("current_username") },
    //   });
    // },
    // logOut: async function () {
    //   localStorage.removeItem("access_token");
    //   localStorage.removeItem("refresh_token");
    //   localStorage.removeItem("user_id");
    //   localStorage.removeItem("current_username");
    //   await this.updateAccessToken();
    // },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
}
.header {
  font: 1em OCR A Extended;
  margin-top: -60px;
  margin-left: -30px;
  padding: 0;
  width: 102.5%;
  min-height: 150px;
  background-color: orange;
  color: #f5c313;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  text-align: center;
  align-self: center;
}
.button_panel {
  margin-right: 0px;
  margin-top: 25px;
  margin-left: auto;
  align-items: right;
}
</style>