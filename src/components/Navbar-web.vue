<template>
    <div class="container">
    <div class="topnav">
        <a1 >copyright © 2023 All Rights Reserved</a1>
        
      <a href="#home"> <img class="icon1" src="../assets/img/google.png"> Home</a>
      <a2 href="#contact"> <img class="icon1" src="../assets/img/google.png"> Contact</a2>
      <!-- <a href="#"><i class="../assets/img/twitter.png"></i> Search</a>  -->
      <img class="iconapp" src="../assets/img/google.png">
    
    </div>
  </div>


</template>

<script>



export default {
  data() {
    return {  
       isOpen:true,
    };
  }
    ,
  methods: {

    }
}

</script>


<style >
body {margin:0px;}
.topnav {
 margin-left: 0px;
    width: 100%;
  background-color: #333;
  /* overflow: auto; */
  opacity: 0.5;
  overflow: hidden;
  /* position: fixed; */
  bottom: 0;
}
.topnav a1 {
    float: left;
  padding: 12px;
  color: white;
  text-decoration: none;
  font-size: 17px;
}
.topnav a {
  float: left;
  padding: 12px;
  color: white;
  text-decoration: none;
  font-size: 17px;
  margin-left: 40rem
  /* display: flex; */
    /* align-items: center;
    justify-content: center; */
}
.topnav a2 {
  float: left;
  padding: 12px;
  color: white;
  text-decoration: none;
  font-size: 17px;
  margin-left: 10rem
  /* display: flex; */
    /* align-items: center;
    justify-content: center; */
}
.iconapp{
  float: right;
  /* position: absolute; */
    padding: 12px;
    height: 2.8em;
      /* top: 190px; */
}
.icon1{
     /* margin-left: 10rem; */
    height: 1em;
      /* top: 190px; */
}
.topnav a:hover ,.topnav a2:hover{
  background-color: #ddd;
  color: black;
}

</style>
