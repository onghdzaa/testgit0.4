<template>
    <div class="grid-containerx">
      <div class="item1">
        <img class="sizeimgct" src="../assets/img/BG4.png">
    </div>


      <div class="item2">
            <h2>Wat Phra That Doi Suthep</h2>

<ul>
  <div class="iconfixx">
  <img class="iconlocationx" src="../assets/img/google.png"> <div class="fixtextx" style="padding-left: 10%;"></div>  Home  </div> 

  <div class="starleftx">
  <StarRating :show-rating="false" :star-size="20" :rating="4" :read-only="true"/>

</div>  <div class="re" style="float: right;">review</div>
</ul>
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
  also a popular destination for photographers, due to its beautiful and photogenic setting.</div>
    
    
      
    
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
      width: 99%;
    grid-template-columns: 50% auto   ; 
      /* grid-template-rows: auto auto;  */
      /* gap: 10px; */
      /* background-color: #2196F3; */
      padding: 10px;
  
    }
    
    .grid-containerx > div {
      background-color: rgba(255, 255, 255, 0.8);
      /* text-align: center; */
       height: 100%;
    /* height: 100%; */
    }
    
    .item1 {
     width: 100%;
   
    }
    .item2 {
      padding-left: 10%;
text-align: left;
  width: 100%;

   
 }
 .item2 ul{

padding-right: 25px;
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
  padding-left: 10%;
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
    

    .sizeimgct{
      object-fit: cover;
      max-width: 99%;
    /* width: 99%; */
    height: 99%;
    }
    @media only screen and (max-width: 600px) {
      .grid-containerx {
      display: grid;
      width: 99%;
    grid-template-columns: 100%    ; 
      /* grid-template-rows: auto auto;  */
      /* gap: 10px; */
      /* background-color: #2196F3; */
      padding: 10px;
  
    }
    .item2 ul{

padding-right: 0px;
position: relative;
   display: flex;
   align-items: center;
}
.item2 {
      padding-left: 0px;
text-align: center;
  width: 100%;

   
 }
}
    </style>
    