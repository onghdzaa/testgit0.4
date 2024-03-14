<template>
<div class="flex-container">
  <div><img class="imgre" src="../assets/icon/S7-1.png"></div>
  <div><img class="imgre" src="../assets/icon/S7-1.png"></div>
  <div><img class="imgre" src="../assets/icon/S7-1.png"></div>  
  <div><img class="imgre" src="../assets/icon/S7-2.png"></div>
  <div><img class="imgre" src="../assets/icon/S7-2.png"></div>
  <div><img class="imgre" src="../assets/icon/S7-1.png"></div>  
  <div><img class="imgre" src="../assets/icon/S7-1.png"></div>
  <div><img class="imgre" src="../assets/icon/S7-1.png"></div>
</div>
<div class="textstar"  >
    <div style="width: 100%; margin-left: 20px; text-align: left;">Diego F<div class="starleftre">
<StarRating :show-rating="false" :star-size="15" :rating="4" :read-only="true"/></div></div>

<p style="text-align: left; margin-left: 20px;">.................................. .............. ............. ...............
......................... .....................................s..................
</p>
</div>
<div class="textstar"  >
    <div style="width: 100%; margin-left: 20px; text-align: left;">Diego F<div class="starleftre">
<StarRating :show-rating="false" :star-size="15" :rating="4" :read-only="true"/></div></div>

<p style="text-align: left; margin-left: 20px;">.................................. .............. ............. ...............
......................... .......................................................
</p>
</div>





  <div class="fixbuttomloacationz">
  <div class="lineloacationz"></div>
  <RouterLink to="citynextreview"><button class="buttomloacationzz">Read More >></button></RouterLink>
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
.textstar{
    margin-top: 20px;
    width: 100%;
    height: auto;
    border-bottom: 5px solid gray;
}

.starleftre{
float: right;
/* margin-left: ; */
}
.flex-container {
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  background-color: DodgerBlue;
  border-bottom: 5px solid gray;
  width: 100%;
}
.imgre{
    width: 100%;
    height: 100%;
}


.flex-container > div {
  background-color: #f1f1f1;
  width: 30px;
  /* max-height: 30px; */
  float: right;
  margin: 2%;
  text-align: center;
  /* line-height: 75px; */
  /* font-size: 30px; */
}
.fixbuttomloacationz{
  display: flex;
    align-items: center;
    padding-top: 27%;
    /* justify-content: center; */
    width: 100%;
     /* height: 20px; */
}
.buttomloacationzz{
/* display: flex;  */
  width: 100%;
    font-size: 0.7vw;
    /* margin-left: 5%; */
    float: right;
    text-align: center;
    background-color: #777;
    /* padding: 0.1%; */
  
}
.lineloacationz{
  
  width:67%;
  /* height: 30px; */
  background-color: #777;
}
/* .totalcitynextz{
  width: 100%;
  height: auto;
} */
@media only screen and (max-width: 600px) {
  
  .fixbuttomloacationz{
  display: flex;
    align-items: center;
    padding-top:5%;
    padding-left: 38%;
    /* justify-content: center; */
    width: 100%;
     /* height: 20px; */
}
.buttomloacationzz{
 
 font-size: 2vw;



 /* bottom: 0; */
}
}
</style>