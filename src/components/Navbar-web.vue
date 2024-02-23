<template>
    <div class="container">
    <div class="topnav">
        <a1 >copyright © 2023 All Rights Reserved</a1>
        
      <a2 href="#home"> <img class="icon1" src="../assets/img/google.png"> Home</a2>
      <a2 href="#contact"> <img class="icon1" src="../assets/img/google.png"> Contact</a2>
      <!-- <a href="#"><i class="../assets/img/twitter.png"></i> Search</a>  -->
      <div class="iconappringht">
      <img class="iconapp" src="../assets/img/google.png">
    </div>
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
/* .container{
  width: 100%;
  height: 900px;
  background-color: aqua;
} */
.topnav {
  text-decoration: none;
  text-align: center;
  /* justify-content: center; */
 margin-left: 0px;
    width: 100%;
  background-color: #333;
  /* overflow: auto; */
  opacity: 0.5;
  overflow: hidden;
  bottom: 0; 
  position: fixed;  
  display: flex;
    align-items: center;
    
    /* justify-content: center; */

}
.topnav a1 {
    /* float: left; */
  padding: 12px;
  color: white;
  font-size:0.8vw;
  white-space: nowrap;
  /* font-size: 17px; */
}

.topnav a2 {
  float: left;
  padding: 12px;
  color: white;
    /* font-size:2vw; */
  text-decoration: none;
  font-size:0.8vw;
  margin-left: 5%;

  /* display: flex; */
    /* align-items: center;
    justify-content: center; */
}
.topnav .iconapp{
  float: right;
  position: relative;
    padding-right: 0.6%;
height: 20px;      /* top: 190px; */
}
.iconappringht{
  /* background-color: aqua; */
  width: 65%;
  height: 20px;
  float: right;
  position: relative;
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
