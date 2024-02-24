<template>
    <div class="backimage">
      <div class="login">
      <h1 style="text-align: left; padding-left: 30%;">Log In</h1>
      <div id="main">
        <nav v-bind:class="active" v-on:click.prevent>
          <a href="#" class="logins" v-on:click="makeActive('logins')">Login</a> 
          <router-link to="/register"> <a href="#" class="register" v-on:click="makeActive('register')">Register</a></router-link>
        </nav>
        <!-- <p>CHOOSE {{ active }}</p> -->
      </div>
      <div class="container">
        <!-- <ul><label for="uname"><b>Username</b></label></ul> -->
        <ul><input type="text" placeholder="Enter Username" name="uname" required></ul>

        <!-- <ul><label for="psw"><b>Password</b></label></ul> -->
        <ul> <input type="password" placeholder="Enter Password" name="psw" required></ul>
        <div class="container">
          <div class="remem" style="float: left; padding-left: 20%;">
          <input type="checkbox" checked="checked" name="remember"> Remember me
          </div>
          <span class="psw" style="float: right; padding-right: 20%;"> <a href="#">Forgotpassword?</a></span>
        </div>
       </div>
    <div class="option">
      <div class="option1">
    <button class="btn" style="border-radius: 25px;width: 50%;">Login</button>
   </div>
 
      
        <button onclick="location.href='/city'"  class="btn1" style="border-radius: 25px; width: 50%;"><img class="icon" src="../assets/img/google.png"> Home</button> 
        <button onclick="location.href='/citynext'" class="btn2" style="border-radius: 25px;width: 50%;"><img class="icon" src="../assets/img/facebook.png"> Menu</button>
        <button class="btn3" style="border-radius: 25px;width: 50%;"><img class="icon" src="../assets/img/twitter.png"> Trash</button>
      </div>
      </div>
    </div>
  </template>
  <script>
  export default {
 
  data() {
    
    return {  
      
 active:'logins'
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
        }
    }
}
  
  </script>
  <style>
  /* .btn_group{
    
  } */
  body {
  background-image: url("../assets/img/BG1.png");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: 100% 100%;
}
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body{
    /* font-family: ; */
    color: #2f3e5c;
    text-align: center;
    font-size: 16px;
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
  /* p{
    font-size: 22px;
    font-weight: bold;
    color: #7d9098;
  } */
  .option1{
    padding-bottom: 2%;
  }
  p b{
    color: #fff;
    display: inline-block;
    padding: 5px 10px;
    background-color: #c4d7e0;
    border-radius: 2px;
    text-transform: uppercase;
  }
  .login{
    width: 50%;
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
  .btn1,.btn3,.btn2{
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
    font-weight: 600;
    user-select: none;
    border-radius: 4px;
    background-color: #f2f2f2;
  }
.btn {
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
    font-weight: 600;
    user-select: none;
    border-radius: 4px;
}
.option{
  display: grid;
  width: 100%;
  height: 230px;
  gap: 10%;
  /* padding-bottom: 10%; */
}
    input[type=text],input[type=password] {
      border-radius: 25px;
      margin: auto;
      height: 3rem;
      width: 50%;
      font-size: 1.8rem;
      border: 4px solid #000;
      padding: 14px;

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
.icon{
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
  padding: 20px;
}
  </style>