<template>
    <div class="backimage">
      <div class="login">
      <h1 style="text-align: left; padding-left: 30%;">Register</h1>
      <div id="main">
        <nav v-bind:class="active" v-on:click.prevent>
            <router-link to="/login"> <a href="#" class="logins" v-on:click="makeActive('logins')">Login</a> </router-link>
          <a href="#" class="register" v-on:click="makeActive('register')">Register</a>
        </nav>
      </div>
      <div class="container">
        <!-- <ul><label for="uname"><b>Username</b></label></ul> -->
        <ul><input type="text" placeholder="Username" name="uname" required></ul>

        <!-- <ul><label for="psw"><b>Password</b></label></ul> -->
        <ul> <input type="password" placeholder="E-mail" name="psw" required></ul>
        <ul> <input type="email" placeholder="Password" name="psw" required></ul>
        <ul> <input type="confirmpassword" placeholder="Confirm Password" name="psw" required></ul>
       
      <div class="table">
        
            Requirements
      </div>
    
    <ul><button class="btn" style="border-radius: 25px;">Login</button></ul>
   
  </div>
      <div class="option">
        <ul><button @click="countersx()" class="btn1" ><img class="icon"  src="../assets/icon/S11-2.gif"><img class="icon" style=" margin-left: 5%;" src="../assets/icon/S11-2.gif"> Home<img class="icon1" src="../assets/icon/next.png"></button> </ul>
        <PopUP @close="isOpen= false" v-if="isOpen"><h2>pppp</h2></PopUP>
        <ul><button @click="countersx()" class="btn1" ><img class="icon" src="../assets/img/facebook.png"><img class="icon" style=" margin-left: 5%;" src="../assets/icon/S11-2.gif"> Menu<img class="icon1" src="../assets/icon/next.png"></button></ul>
        <PopUP @close="isOpen= false" v-if="isOpen"><h2>pppp</h2></PopUP>
        <ul><button class="btn1" ><img class="icon" src="../assets/img/twitter.png"><img class="icon" style=" margin-left: 5%;" src="../assets/icon/S11-2.gif"> Trash<img class="icon1" src="../assets/icon/next.png"></button></ul>
        <!-- <PopUP :label="label"><h2>pppp</h2></PopUP> -->
        <!-- <ul> <router-link to="/login"></router-link></ul> -->
      </div>
      </div>
    </div>
  </template>
  <script>

 import PopUP from '@/components/Register-popup.vue';
  export default {
    //const:isOpen,
    // var: isOpen,
    components: {
    PopUP,
  },
    data() {
        return {
            isOpen: false,
            active: 'register',
            
        };
    },
    methods: {
        closebtm() {
            // console.log("xxxxx");
            // console.log(this.isOpen);
            this.isOpen = false;
            console.log(this.isOpen);
        },
        countersx() {
        
            console.log(this.isOpen);
            this.isOpen = true;
            console.log(this.isOpen);
        },
        makeActive(item) {
            this.active = item;
        }
    },
    
}

  </script>
  <style>
  /* .btn_group{
    
  } */
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
    body {
  background-image: url("../assets/img/BG1.png");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: 100% 100%;
}
  
  a,a:visited{
    outline: none;
    color: aqua;
  }
  a:hover{
    text-decoration: none;
  }
  nav{
    width: 430px;
            
    display: inline-block;
    margin: 60px auto 45px;
    background-color: #e1dcdc;
    box-shadow: 2px 2px 2px 2px rgb(0, 0, 0);
    border-radius: 50px;
  }
  nav a{
    display: inline-block;
    padding: 18px 30px;
    color: #000000 !important;
    font-weight: bold;
    font-size: 18px;
    text-decoration: none;
    line-height: 1;
    text-transform: uppercase;
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
  p{
    font-size: 22px;
    font-weight: bold;
    color: #7d9098;
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
    height: auto;
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


  }
  /* Style buttons */
.btn {
  margin: auto;
  top: 5%;
  position: relative;
    height: 2rem;
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    
    font-size: 1.1rem;
    /* padding: 1.8rem 15rem; */
    font-weight: 600;
    user-select: none;
    border-radius: 4px;
}
.btn1 {
  margin: auto;
  top: 5%;
  position: relative;
    height: 2rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    font-size: 1.1rem;
    /* padding: 1.8rem 15rem; */
    font-weight: 600;
    /* user-select: none; */
    /* border-radius: 4px; */
}

    input[type=text],input[type=password],input[type=confirmpassword],input[type=email] {
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
.btn:hover,.btn1:hover {
  background-color: RoyalBlue;
}
.icon{
  position: absolute;
      width: 3%;
      /* height: 100%; */
      left: 0;
      /* background-color: $color__white; */
      border-radius: 3px;
      margin-left: 1%;
}
.icon1{
  position: absolute;
      width: 3rem;
      height: 3rem;
      right: 0; 
      /* background-color: $color__white; */
      border-radius: 3px;
      /* margin-left: 10px;  */
            /* float: right;  */
}
ul {
  list-style-type: none;
  padding: 10px;
}
.container {
  padding: 20px;
}
.table{
  border-collapse: collapse;
  width: 100%;
  border-bottom: 2px solid;
  border-top: 2px solid;
  height: 50px;
  display: flex;
    align-items: center;
    padding: 14px;
    /* justify-content: center; */
  
}

  </style>