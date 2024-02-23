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
......................... .......................................................
</p>
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
  margin: 2%;
  text-align: center;
  /* line-height: 75px; */
  /* font-size: 30px; */
}
</style>