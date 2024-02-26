<template>
    <div class="grid-containerx">
      <div class="item1citytext">
        <img class="sizeimgct" src="../assets/img/1pm.jpg">
    </div>


      <div class="item2citytext">
            <h2>Wat Phra That Doi Suthep</h2>

<ul>
  <div class="iconfixx">
  <img class="iconlocationx" src="../assets/img/google.png"> <div class="fixtextx" style="padding-left: 10%;"></div>  Home  </div> 

  <div class="starleftx">
  <StarRating :show-rating="false" :star-size="15" :rating="4" :read-only="true"/>

</div>  <div class="recitynext" style="float: right;">review</div>
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
  also a popular destination for photographers, due to its beautiful and photogenic setting.</p></div>
    
    
      
    
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
    .grid-containerx {
      display: grid;
      /* width: 99%; */
    grid-template-columns: 50% 50%   ; 
      grid-template-rows: 100% ; 
      max-height: 350px;
      /* gap: 10px; */
      /* background-color: #2196F3; */
      padding: 10px;
  /* object-fit: cover; */
    }
    
    
    .item1citytext {
     width: 100%;
   
    }
    .item2citytext {
      padding-left: 10%;
text-align: left;
  width: 100%;
  height: auto;
   
 }
 .recitynext{
  width: 15%;
text-align: center;
  background-color: #777;
  font-size: 1vw;
  border-radius: 25px;
  /* background-color: ; */
 }
 .item2citytext ul{
margin: 0px;
/* padding: 0px; */
padding-left: 0px;
position: relative;
   display: flex;
   align-items: center;
}
 .starleftx{
  padding-right: 1%;
  padding-left: 30%;
  float: right;
}
 .iconfixx{
  font-size: 1vw;
  padding-left: 2%;
  float: left;
  position: relative;
 justify-content: center;
    display: flex;
    align-items: center;
    width: 25%;
}
.iconlocationx{
  width: 20%;
  height: auto;
}
.item2citytext h2 {
  padding-bottom: 10px ;
font-size: 1.5vw;
}
.item2citytext p {
  padding-top: 10px ;

font-size: 0.8vw;
}

    .sizeimgct{
      /* object-fit: cover; */
      /* max-width: 99%; */
    width: 99%;
    height: 99%;
    }
    @media only screen and (max-width: 600px) {
      .grid-containerx {
      display: grid;
      width: 99%;
      height: 100%;
      max-height: 850px;
    grid-template-columns: 100% ; 
    grid-template-rows: auto auto; 
      /* grid-template-rows: auto auto;  */
      
      /* gap: 10px; */
      /* background-color: #2196F3; */
      padding: 10px;
  
    }
    .iconfixx{
font-size: 2.5vw;
}
.recitynext{

  font-size: 2.5vw;

  /* background-color: ; */
 }
    .item2citytext ul{

padding-right: 0px;
position: relative;
   display: flex;
   align-items: center;
}
.item2citytext {
      padding-left: 0px;
text-align: center;
  width: 100%;
height: 100%;
max-height: 900px;
   
 }
 .item2citytext h2 {
font-size: 5vw;
}
.item2citytext p {
font-size: 2.5vw;
}
}
    </style>
    