<template> 
<div class="row">
  <div class="column" >
 <div class="video">
<iframe width="400" height="250"
src="https://www.youtube.com/embed/QhUfEQUIC50?si=j07LfHi86uOz0Y75">
</iframe> 


<div class="newspaper">
    <div class="gallery">
       
  <img src="../assets/img/BG1.png" width="80" height="100">
</div>

<div class="gallery">
  
    <img src="../assets/img/BG1.png" width="80" height="100">
</div>

<div class="gallery">
  
    <img src="../assets/img/BG1.png" width="80" height="100">
  </div>
  <div class="gallery">
       
      
         <img src="../assets/img/BG1.png" width="80" height="100">
      
     </div>
     <div class="gallery">
       
       <div class="fixbg1">
         <img src="../assets/img/BG1.png" width="80" height="100" ></div>
         <div class="center">See all</div>
       
     </div>
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
  <StarRating :show-rating="false" :star-size="20" :rating="4" :read-only="true"/>

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
  

</template>
<script>
import StarRating from 'vue-star-rating'
export default {
  // name: 'HomeView',
  components: {
    StarRating
  }
}

</script>
<style>
* {
  box-sizing: border-box;
}
h2,p,ul{
  text-align: left;
}
ul{

 padding-right: 25px;
 position: relative;
    display: flex;
    align-items: center;
}
.re{
  float: right;
  border-radius: 25px;
  text-align: center;
  justify-content: center;
  width: 60px;
  background-color: #777;
}
div.gallery {
    position: relative;
  /* border: 1px solid #ccc; */
  /* float: left; */
  float: left;
 height: 100px;
}
.starleft{
  padding-right: 2px;
  padding-left: 230px;
  float: right;
}
.video{
  padding-top: 25px;
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
}
.iconlocation{
  width: 20px;
  height: auto;
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
 width: 500px;
 height: auto;
}
.row{
  content: "";
  display: table;
  clear: both;
}
.column.middle {
  width: 5%;
  padding-left:0px;
}
.column{
  float: left;
  width: 430px;
  padding: 10px;
  height: 400px;
}

</style>