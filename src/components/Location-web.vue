<template> 
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

<div class="row">

  <div class="column" >
 <div class="video">
<iframe width="100%" height="70%"
src="https://www.youtube.com/embed/QhUfEQUIC50?si=j07LfHi86uOz0Y75">
</iframe> 


    <div class="gallery">
      <!-- @click="$emit('close')" -->
  <img @click="imgpopimgweb(require('../assets/img/1pm.jpg'))" id="myImg" src="../assets/img/1pm.jpg" width="100%" height="100">
  
  <!-- <div id="myModal" class="modal">
  <span class="close">&times;</span>
  <img class="modal-content" id="img01">
  <div id="caption"></div>
</div> -->
</div>

<div class="gallery">
  
    <img @click="imgpopimgweb(require('../assets/img/2pm.jpg'))" id="myImg" src="../assets/img/2pm.jpg" width="100%" height="100">
</div>


<div class="gallery">
  
    <img @click="imgpopimgweb(require('../assets/img/3pm.jpg'))" id="myImg" src="../assets/img/3pm.jpg"  width="100%" height="100">
  </div>
  <div class="gallery">
       
      
         <img @click="imgpopimgweb(require('../assets/img/4pm.jpg'))" id="myImg" src="../assets/img/4pm.jpg" width="100%" height="100">
      
     </div>
     <div class="gallery">
       
       <div class="fixbg1">
         <img src="../assets/img/5pm.jpg" width="100%" height="100" ></div>
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
<RouterLink to="citynext">
  <div class="fixbuttomloacation">
  <div class="lineloacation"></div>

  <button class="buttomloacation">Read More >></button></div></RouterLink>
</div>



</div>
</template>
<script setup>
// Get the modal
// var modal = document.getElementById("myModal");

// // Get the image and insert it inside the modal - use its "alt" text as a caption
// var img = document.getElementById("myImg");
// var modalImg = document.getElementById("img01");
// var captionText = document.getElementById("caption");
// img.onclick = function(){
//   modal.style.display = "block";
//   modalImg.src = this.src;
//   captionText.innerHTML = this.alt;
// }

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() { 
//   modal.style.display = "none";
// }
</script>
<script>
// document,q

import StarRating from 'vue-star-rating'
// import { defineEmits } from 'vue';
export default {
  props:["ispop","popsrc"],
  data() {
    return {  
 
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
    
//   myFunction(){
    
//     // this.isOpen=true;
// console.log(this.ispop);
// // this.imgpop=src
// console.log(this.popsrc);
// }
imgpopimgweb(src){
  this.$emit('popupcityweb',src);
console.log("../assets/img/1pm.jpg");
},
},

}




// function myFunction() {
//   document.getElementById("demo").innerHTML = "Hello World";
// }


// defineEmits("myFunctionweb")

</script>
<style>
/* @media screen and (min-width: 601px) {
  p {
    font-size: 15px;
  }
} */



.text{
  text-align: left;
}
.popuppagelocation{
  width: 100%;
  height: 100%;
}
/* .test{
  max-width:600px ;
  width: 100%;
  height: 550px;
  background-color: aqua;
} */
.text h2,text p,text ul{
  text-align: left;
}
p{
  font-size:0.8345vw;
}
ul{
padding-left: 0%;
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
.lineloacation{
  
  width:80%;
  height: 1px;
  background-color: #777;
}
.fixbuttomloacation{
  display: flex;
    align-items: center;
  /* justify-content: center; */
  width: 100%;
  /* height:20px; */
 
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



.buttomloacation{
  /* display: flex; */
  width: 20%;
  font-size: 0.7vw;
 margin-left: 5%;
  float: right;
  text-align: center;
  background-color: #777;
  padding: 0.1%;
  /* bottom: 0; */
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
  object-fit: cover;
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
  text-align: center;
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
.buttomloacation{
 
  font-size: 2vw;



  /* bottom: 0; */
}
}

</style>