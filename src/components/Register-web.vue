<template>
    <div class="loginzzss">
      <div class="loginzzs">
      <h1 style="text-align: left; padding-left: 10%;">Register</h1>
      <div class="slide-controls">
          <input type="radio" name="slide" id="login" >
          <input type="radio" name="slide" id="signup" checked>
         <label v-on:click="nexttap()" for="login" class="slide login">Login</label>
          <label  for="signup" class="slide signup">Sign Up</label>
          <div class="slider-tab"></div>
        </div>
      <div class="container">
        <!-- <ul><label for="uname"><b>Username</b></label></ul> -->
       <input type="text" placeholder="Username" name="uname" required>

        <!-- <ul><label for="psw"><b>Password</b></label></ul> -->
        <input type="password" placeholder="E-mail" name="psw" required>
       <input type="email" placeholder="Password" name="psw" required>
        <input type="confirmpassword" placeholder="Confirm Password" name="psw" required>
       
      <div class="table">
        
            Requirements
      </div>
    
    
   
  </div>
      <div class="optionregister">
        <button @click="countersx()" class="btn1register" ><img class="iconregister"  src="../assets/icon/S11-2.gif"><img class="iconregister" style=" margin-left: 6%;" src="../assets/icon/S12-2.gif"> Home<img class="icon1register" src="../assets/icon/next.png"></button> 
        <PopUP @close="isOpen= false" v-if="isOpen"><h2>pppp</h2></PopUP>
        <button @click="countersx()" class="btn1register" ><img class="iconregister" src="../assets/icon/S15-3.png"><img class="iconregister" style=" margin-left: 6%;" src="../assets/icon/S13-2.gif"> Menu<img class="icon1register" src="../assets/icon/next.png"></button>
        <PopUP @close="isOpen= false" v-if="isOpen"><h2>pppp</h2></PopUP>
        <button @click="countersx()" class="btn1register" ><img class="iconregister" src="../assets/icon/S14-2.gif"><img class="iconregister" style=" margin-left: 6%;" src="../assets/icon/S11-2.gif"> Trash<img class="icon1register" src="../assets/icon/next.png"></button>
        <!-- <PopUP :label="label"><h2>pppp</h2></PopUP> --><PopUP @close="isOpen= false" v-if="isOpen"><h2>pppp</h2></PopUP>
        <!-- <ul> <router-link to="/login"></router-link></ul> -->
        
        <button class="btnregister" style="border-radius: 25px;">Sign Up</button>
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
        },
        nexttap() {
          console.log("ssssssssss");
           
           this.$router.push("/login");
        }
      
    },
    
}

  </script>
  <style>



  
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
  .loginzzss{
    position: fixed;
  display: grid;
  height: 100%;
  width: 100%;
  place-items: center;
  }
  .loginzzs .slide-controls{
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
    /* color: #7d9098; */
  }
  p b{
    color: #fff;
    display: inline-block;
    padding: 5px 10px;
    background-color: #c4d7e0;
    border-radius: 2px;
    text-transform: uppercase;
  }
  .loginzzs{
    overflow: hidden;
    max-width: 500px;
  max-height: 700px;
   border-radius: 25px;
  background-color: white;
  padding: 32px;
  display: inline-block;
  
  margin: 0 10px;
  }
  /* Style buttons */
.btnregister {
  margin: auto;
  top: 5%;
  position: relative;
    height: 2rem;
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    
    /* font-size: 1.1rem; */
    /* padding: 1.8rem 15rem; */
    /* font-weight: 600; */
    user-select: none;
    border-radius: 4px;
    margin-top: 20px;
    color: white;
     background-color: #302c74;
}
.btn1register {
  margin: auto;
  top: 5%;
  position: relative;
    height: 2rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    /* font-size: 1.1rem; */
    /* padding: 1.8rem 15rem; */
    font-weight: 600;
    /* user-select: none; */
    /* border-radius: 4px; */
margin: 0px 10px 10px 0px;}

    input[type=text],input[type=password],input[type=confirmpassword],input[type=email] {
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
.btnregister:hover,.btn1register:hover {
  background-color: #302c74;
}
.iconregister{
  position: absolute;
      width: 4%;
      /* height: 100%; */
      left: 0;
      /* background-color: $color__white; */
      border-radius: 3px;
      margin-left: 1%;
      
}
.icon1register{
  position: absolute;
      width: 7%;
      height: 99%;
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
margin: 20px 0px 20px 0px;    /* padding: 14px; */
    /* justify-content: center; */
  
}

  </style>