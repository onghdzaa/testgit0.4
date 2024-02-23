<template> 
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

<div class="row">
  <div class="column" >
 <div class="video">
<iframe width="100%" height="70%"
src="https://www.youtube.com/embed/QhUfEQUIC50?si=j07LfHi86uOz0Y75">
</iframe> 


    <div class="gallery">
       
  <img @click="myFunction('../assets/img/BG1.png')" id="myImg" src="../assets/img/BG1.png" width="100%" height="100">
  
  <!-- <div id="myModal" class="modal">
  <span class="close">&times;</span>
  <img class="modal-content" id="img01">
  <div id="caption"></div>
</div> -->
</div>

<div class="gallery">
  
    <img onclick="" src="../assets/img/BG1.png" width="100%" height="100">
</div>

<div class="gallery">
  
    <img src="../assets/img/BG1.png" width="100%" height="100">
  </div>
  <div class="gallery">
       
      
         <img src="../assets/img/BG1.png" width="100%" height="100">
      
     </div>
     <div class="gallery">
       
       <div class="fixbg1">
         <img src="../assets/img/BG1.png" width="100%" height="100" ></div>
         <div class="center">See all</div>
       
    
</div>
 </div>

    
</div>
<div class="column middle">


<div class="text">
<h2>Wat Phra That Doi Suthep</h2>

<ul>
  <div class="iconfix">
  <img class="iconlocation" src="../assets/img/google.png"> <div class="fixtext" style="padding-left: 10px;"></div>  Home  </div> 

  <div class="starleft">
  <StarRating :show-rating="false" :star-size="15" :rating="4" :read-only="true"/>

</div>  <div class="re" style="float: right;">review</div>
</ul>
<p>
  Wat Phumin is a Buddhist temple located at the center of the city of Nan, 
  in the northern region of Thailand. The temple was built in 1596 and had 
  been through several restorations. The temple is an example of the 
  traditional Lanna style of architecture, which was known for its distinctive 
  style. The temple is home to a number of important religious artifacts 
  and a number of murals that depict religious stories and life of people at that time. 
  This includes the famous life-size mural painting, named ‘Pu Maan Ya Maan’, 
  which means Burmese man and woman. It is an example of mural with Tai Lue art in Nan, 
  which is considered as unique and different from paintings of other areas in the Northern 
  region of Thailand. In addition to its cultural and historical significance, Wat Phumin is 
  also a popular destination for photographers, due to its beautiful and photogenic setting.
</p>
</div>

</div>

</div>
<div class="modal" v-if="isOpen"><img src="../assets/img/google.png" alt="">
  </div>

</template>
<script>
// document,q
import StarRating from 'vue-star-rating'
export default {
  data() {
    return {  
      isOpen: false,
      imgpop:"",
    // modal: document.getElementById("myModal"),
    // modalImg : document.getElementById("img01"),
    // captionText : document.getElementById("caption")
      //  list:[{
      //   pg:1,
      //   pgsrc: require("../assets/icon/LM.png")
      //  },
      //  {
      //   pg:2,
      //   pgsrc: require("../assets/icon/HL1.png")
      //  },
      //  {
      //   pg:3,
      //   pgsrc: require("../assets/icon/zz.png")
      //  }
      // ]
      
    //counter=0;

    };
  },
  // Get the modal

  // name: 'HomeView',
  components: {
    StarRating
  },
  methods: {
    
  myFunction(src){
    
    this.isOpen=true;
console.log(this.isOpen);
this.imgpop=src
console.log(this.imgpop);
}
}
}




// function myFunction() {
//   document.getElementById("demo").innerHTML = "Hello World";
// }




</script>
<style>
/* @media screen and (min-width: 601px) {
  p {
    font-size: 15px;
  }
} */



* {
  box-sizing: border-box;
}
/* .test{
  max-width:600px ;
  width: 100%;
  height: 550px;
  background-color: aqua;
} */
h2,p,ul{
  text-align: left;
}
p{
  font-size:0.8345vw;
}
ul{

 padding-right: 25px;
 position: relative;
    display: flex;
    align-items: center;
}
.text h2{
  font-size: 1.5vw;
}
.re{
  float: right;
  border-radius: 25px;
  text-align: center;
  justify-content: center;
  width: 20%;
  font-size:  0.75vw;
  background-color: #777;
}
div.gallery {
    position: relative;
  /* border: 1px solid #ccc; */
  /* float: left; */
  width:20%;
  float: left;
 /* height: 100px; */
}
.starleft{
  padding-right: 2%;
  padding-left: 40%;
  float: right;
}
.video{
  
  width: 100%;
height: 100%;
 
float: left;
}
.iconfix{
  padding-left: 20px;
  float: left;
  position: relative;
 justify-content: center;
    display: flex;
    align-items: center;
    width: 25%;
    font-size:  0.75vw;}
.iconlocation{
  width: 20%;
  height: auto;
}
.modal{
  /* display: none; Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.9); /* Black w/ opacity */
}

.modal-content {
  margin: auto;
  display: block;
  width: 10%;
  max-width: 100px;
}
.center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 15px;
}
div.gallery:hover {
  border: 1px solid #777;
}

div.gallery img {
  /* height: auto; */
}
.fixbg1{
    opacity:0.5
}
.text{
  /* border: 9px solid gray; */
  padding: 8px;
 /* max-width: 400px; */
 width: 100%;
 /* height: 100%; */
 /* height: auto; */
}
.row::after {
  content: "";
  display: table;
  clear: both;
}
.column.middle {
  padding-left: 50px;
  float: left;
 
  max-width: 800px;
  min-width: 100px;
  /* min-width: none; */
  width: 60%;
  /* max-height: 500px;
  height: 100%; */
  /* padding-left:0px; */
}
.column{
 
  float: left;
  max-width: 500px;
  width: 40%;
  min-width: 100px;
  padding: 10px;
  max-height: 500px;
  height: 400px;
}

#caption {
  margin: auto;
  display: block;
  width: 80%;
  max-width: 700px;
  text-align: center;
  color: #ccc;
  padding: 10px 0;
  height: 150px;
}
@media only screen and (max-width: 600px) {
  
  .column.middle {
padding-left: 0px;
height: 100%;
/* float: left; */
/*  
max-width: 800px;
min-width: 100px; */
/* min-width: none; */
width: 100%;
/* max-height: 500px;
height: 100%; */
/* padding-left:0px; */
}
.column{
/* float: left; */
/* max-width: 500px; */
width: 100%;
/* min-width: 100px; */
/* padding: 10px; */
/* max-height: 500px; */
/* height: 400px; */
}
div.text h2 {
  font-size: 5vw;
}
div.text p {
  font-size:2vw;
}
.iconfix{
  font-size: 4vw;
}
.re{
  font-size: 4vw;
}
/* .text{
  font-size: 4vw;
} */

}

</style>