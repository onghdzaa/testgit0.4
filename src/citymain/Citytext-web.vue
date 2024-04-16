<template>
    <div class="grid-containerx">
      <div class="item1citytext">
        <img class="sizeimgct" v-bind:src="img">
    </div>


      <div class="item2citytext">
            <h2>{{ name }}</h2>

<ul>
  <div class="iconfixx">
  <img class="iconlocationx" src="../assets/img/google.png"> <div class="fixtextx" style="padding-left: 10%;"></div>  Home  </div> 

  <div class="starleftx">
  <StarRating :show-rating="false" :star-size="15" :rating="4" :read-only="true"/>

</div>  <div class="recitynext" style="float: right;">review</div>
</ul>
<p>
{{description}}</p></div>
    
    
      
    
    </div>
    </template>
    <script>
    import StarRating from 'vue-star-rating'
    import  axios  from 'axios';
// import { response } from 'express';
    export default {
      data() {
    return {
    name :'xxxx',
    description :'',
     username:'suksri_1',
    email:'suksri@hotmail.com',
   
    address:'11/22 เชียงราก 1 หอพัก city จังหวัด ปทุมธานี',
    model:'honda',
    numcar:'กข123',
    img:'http://pm2.derive.co.th/tourism/'

    };
  },
      created(){
axios.get('http://pm2.derive.co.th/tourism/api/touristSites/1').then(response =>{
  console.log(response)
  console.log(response.data[0].engName);
  this.name=response.data[0].engName;
  this.description=response.data[0].description;
  this.img=this.img.concat(response.data[0].imageName);
  // console.log(this.img);
}  )
// 
      },
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
    