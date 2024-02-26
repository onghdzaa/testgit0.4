<template>
  
     <!-- <v-facebook-login app-id="1069212137469617"></v-facebook-login> -->
      <div class="wrapper">
      <h1 style="text-align: left; padding-left: 10%;">Log In</h1>
      <div class="slide-controls">
        
          <input type="radio" name="slide" id="login" checked>
          <input type="radio" name="slide" id="signup">
         <label for="login" class="slide login">Log In</label>
          <label v-on:click="nexttap()" for="signup" class="slide signup">Sign Up</label>
          <div class="slider-tab"></div>
        </div>
      <!-- <div id="main">
        <nav v-bind:class="active" v-on:click.prevent>
          <a href="#" class="logins" v-on:click="makeActive('logins')">Login</a> 
          <router-link to="/register"> <a href="#" class="register" v-on:click="makeActive('register')">Register</a></router-link>
        </nav>
       
      </div> <p>CHOOSE {{ active }}</p> -->
      <div class="container">
        <!-- <ul><label for="uname"><b>Username</b></label></ul> -->
        <input type="text" placeholder="Enter Username" name="uname" required>

        <!-- <ul><label for="psw"><b>Password</b></label></ul> -->
         <input type="password" placeholder="Enter Password" name="psw" required>
        <div class="container">
          <div class="remem" style="float: left; padding-left: 10%; padding-top: 4%;">
          <input type="checkbox" checked="checked" name="remember"> Remember me
          </div>
          <span class="psw" style="float: right; padding-right: 10%;padding-top: 4%;padding-bottom: 4%;"> <a href="#">Forgotpassword?</a></span>
        </div>
       </div>
    <div class="option">
      <div class="option1">
    <button class="btnlogin" style="border-radius: 25px;width: 100%;">Log In</button>
   </div>
 
      
        <button @click="loginz" class="btnlogin1" style="border-radius: 25px; width: 100%;"><img class="iconlogin" src="../assets/img/google.png"> Home</button> 
        <HFaceBookLogin 
  v-slot="fbLogin" 
  appId="1069212137469617" 
  @onSuccess="onSuccess" 
  @onFailure="onFailure"
  scope="email,public_profile"
  fields="id,name,email,first_name,last_name,birthday"
>
        <button @click="fbLogin.initFBLogin" class="btnlogin2" style="border-radius: 25px;width: 100%;"><img class="iconlogin" src="../assets/img/facebook.png"> Menu</button></HFaceBookLogin>
        <button class="btnlogin3" style="border-radius: 25px;width: 100%;"><img class="iconlogin" src="../assets/img/twitter.png"> Trash</button>
          <v-facebook-login v-model="model" @sdk-init="handleSdkInit" />
    <!-- <button v-if="scope.logout && model.connected" @click="scope.logout">
      Logout
    </button> -->
      </div>
      </div>

  </template>
  <script setup>
 import { googleTokenLogin } from "vue3-google-login"
 import { HFaceBookLogin } from '@healerlab/vue3-facebook-login';
//  import {FB a dVFacebookLogin} from 'vue-facebook-login-component'
const loginz = () => {
  googleTokenLogin().then((response) => {
    console.log("Handle the response", response)
  })
}
// const loginfacebook = () => {
//   googleTokenLogin().then((response) => {
//     console.log("Handle the response", response)
//   })
// }


// const onSuccess = (response) => {
//   // get your auth token and info
// }

// const onFailure = () => {
//   // logic if auth failed
// }
</script>

  <script>
 
  export default {
    name:"facebookLogin",
    components: {
      // VFacebookLogin,
    },
  data() {
    
    return {  
      
 active:'logins',

    };
  }
    ,
  methods: {
    countersx(){
      console.log("xxxxx");
      console.log(this.isOpen);
      this.isOpen=true;
      console.log(this.isOpen);
        },
        makeActive(item){
          this.active = item;
        },
        nexttap() {
          console.log("ssssssssss");
           
           this.$router.push("/register");
        },
    //     async logInWithFacebook() {
    //   await this.loadFacebookSDK(document, "script", "facebook-jssdk");
    //   await this.initFacebook();
    //   window.FB.login(function(response) {
    //     if (response.authResponse) {
    //       alert("You are logged in &amp; cookie set!");
    //       // Now you can redirect the user or do an AJAX request to
    //       // a PHP script that grabs the signed request from the cookie.
    //     } else {
    //       alert("User cancelled login or did not fully authorize.");
    //     }
    //   });
    //   return false;
    // },

    // async initFacebook() {
    //   window.fbAsyncInit = function() {
    //     window.FB.init({
    //       appId: "1069212137469617", //You will need to change this
    //       cookie: true, // This is important, it's not enabled by default
    //       version: "v13.0"
    //     });
    //   };
    // },

    // async loadFacebookSDK(d, s, id) {
    //   var js,
    //     fjs = d.getElementsByTagName(s)[0];
    //   if (d.getElementById(id)) {
    //     return;
    //   }
    //   js = d.createElement(s);
    //   js.id = id;
    //   js.src = "https://connect.facebook.net/en_US/sdk.js";
    //   fjs.parentNode.insertBefore(js, fjs);
    // }
  

    }
}
  
  </script>
  <style>
  body {
  background-image: url("../assets/img/BG1.png");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: 100% 100%;
}
html{
  display: grid;
  height: 100%;
  width: 100%;
  place-items: center;

}

  a,a:visited{
    outline: none;
    color: aqua;
  }
  a:hover{
    text-decoration: none;
  }
  nav{
    width: 50%;
            
    display: inline-block;
    margin: 60px auto 45px;
    background-color: #e1dcdc;
    box-shadow: 2px 2px 2px 2px rgb(0, 0, 0);
    border-radius: 50px;
  }
  nav a{
    display: inline-block;
    padding: 4px 30px;
    color: #000000 !important;
    font-weight: bold;
    font-size: 18px;
    text-decoration: none;
    line-height: 1;
    /* text-transform: uppercase; */
    background-color: transparent;
    transition: background-color 0.25s;
  }nav a:first-child{
    
    border-radius: 2px 0 0 2px;
  }
  nav a:last-child{
    border-radius: 0 2px 2px 0;
  }
  nav.logins .logins,
  nav.register .register{
    border-radius: 25px;
    
    background-color: #2600ff;
  }
  /* .wrapper{
  overflow: hidden;
  max-width: 390px;
  background: #fff;
  padding: 30px;
  border-radius: 15px;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
} */
.wrapper .title-text{
  display: flex;
  width: 200%;
}
.wrapper .title{
  width: 50%;
  font-size: 35px;
  font-weight: 600;
  text-align: center;
  transition: all 0.6s cubic-bezier(0.68,-0.55,0.265,1.55);
} 
.wrapper .slide-controls{
  position: relative;
  display: flex;
  height: 50px;
  width: 100%;
  overflow: hidden;
  margin: 30px 0 10px 0;
  justify-content: space-between;
  border: 1px solid lightgrey;
  border-radius: 15px;
}
.slide-controls .slide{
  height: 100%;
  width: 100%;
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  line-height: 48px;
  cursor: pointer;
  z-index: 1;
  transition: all 0.6s ease;
}
.slide-controls label.signup{
  color: #000;
}
.slide-controls .slider-tab{
  position: absolute;
  height: 100%;
  width: 50%;
  left: 0;
  z-index: 0;
  border-radius: 15px;
 background-color: #302c74;
  transition: all 0.6s cubic-bezier(0.68,-0.55,0.265,1.55);
}
input[type="radio"]{
  display: none;
}
#signup:checked ~ .slider-tab{
  left: 50%;
}
#signup:checked ~ label.signup{
  color: #fff;
  cursor: default;
  user-select: none;
}
#signup:checked ~ label.login{
  color: #000;
}
#login:checked ~ label.signup{
  color: #000;
}
#login:checked ~ label.login{
  cursor: default;
  user-select: none;
}
  /* p{
    font-size: 22px;
    font-weight: bold;
    color: #7d9098;
  } */
  .option1{
    /* padding-bottom: 2%; */
  }
  p b{
    color: #fff;
    display: inline-block;
    padding: 5px 10px;
    background-color: #c4d7e0;
    border-radius: 2px;
    text-transform: uppercase;
  }
  .wrapper{
    overflow: hidden;
    max-width: 500px;
   height: 100%;
   border-radius: 25px;
  background-color: white;
  padding: 32px;
  display: inline-block;
  
  margin: 0 10px;
  }
.backimage{
  /* background-size: contain;
  background-repeat: no-repeat;
  width: 200px; */
  /* height: 90vh;
background-image:url(../assets/img/BG1.png) ; */

  }
  /* Style buttons */
  .btnlogin1,.btnlogin3,.btnlogin2{
    margin: auto;
  top: 5%;
  position: relative;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    
    /* font-size: ; */
    /* padding: 1.8rem 15rem; */
    /* font-weight: 600; */
    user-select: none;
    border-radius: 4px;
    background-color: #f2f2f2;
  }
.btnlogin {
  margin: auto;
  /* margin-top: 20px; */
  top: 5%;
  color: white;
  position: relative;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #302c74;

    /* font-size: ; */
    /* padding: 1.8rem 15rem; */
    font-weight: 600;
    user-select: none;
    border-radius: 4px;
}

.option{
  padding-top:2%; 
  display: grid;
  width: 100%;
  height: 180px;
  gap: 5%;
  /* padding-bottom: 10%; */
}
    input[type=text],input[type=password] {
      border-radius: 25px;
      margin-top: 10px;
      height: 2rem;
      width: 94%;
      font-size: 1rem;
      border: 4px solid #000;
      padding-left: 14px;
      font-weight: 600;
    }
    li {
  display: inline-block;
  margin: 0px 30px 0 250px;
}
/* Darker background on mouse-over */
.btn2:hover {
  background-color: RoyalBlue;
}
.btn1:hover {
  background-color: RoyalBlue;
}
.btn3:hover {
  background-color: RoyalBlue;
}
.iconlogin{
  position: absolute;
      width: 6%;
      
      left: 0;
      /* background-color: $color__white; */
      border-radius: 3px;
      margin-left: 1rem;
}
ul {
  list-style-type: none;
  padding: 10px;
}
.container {
  padding: 0px;
}
  </style>