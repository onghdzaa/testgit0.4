<template>
    <div class="container">
    <div class="topnavhome">
        <div class="iconleft">
      <a href="#home"> <img class="icon1" src="../assets/img/google.png"><div class="ul2"> Home </div></a>
      <a href="#contact"> <img class="icon1" src="../assets/img/google.png"><div class="ul2"> Contact</div></a></div>
      <!-- <a href="#"><i class="../assets/img/twitter.png"></i> Search</a>  -->
      <!-- <img class="iconapp" src="../assets/img/google.png"> -->
    
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
body {margin:0;}
.topnavhome {
    width: 100%;
  background-color: #333;
  /* overflow: auto; */
  opacity: 1;
  overflow: hidden;
  /* position: fixed; */
 /* float: bottom; */
}
.topnavhome a {
  float: right;
  padding: 12px;
  color: white;
  text-decoration: none;
  font-size: 17px;
  /* margin-left: rem */
  /* display: flex; */
    /* align-items: center;
    justify-content: center; */
}
.iconleft{
  float: right;
  /* position: absolute; */
    /* padding: 12px; */
   
      /* top: 190px; */
}
.icon1{
     /* margin-left: 10rem; */
    height: 1em;
      /* top: 190px; */
}
.topnavhome a:hover ,.topnavhome a2:hover{
  background-color: #ddd;
  color: black;
}
.ul2{
    /* list-style-type: none; */
  /* padding: 0px; */
}
</style>
