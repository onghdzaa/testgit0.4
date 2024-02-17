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
    <div style="float: left; margin-left: 20px;">Diego F</div>
<div class="starleftre">
<StarRating :show-rating="false" :star-size="20" :rating="4" :read-only="true"/></div>
<p style="text-align: left; margin-left: 20px;">......................................
......................................................................................
......................................................................................
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
    width: 490px;
    height: auto;
    border-bottom: 5px solid gray;
}

.starleftre{
   margin-left: 350px;
}
.flex-container {
  display: flex;
  flex-wrap: nowrap;
  background-color: DodgerBlue;
  border-bottom: 5px solid gray;
  width: 490px;
}
.imgre{
    width: 30px;
    height: 30px;
}

.flex-container > div {
  background-color: #f1f1f1;
  width: auto;
  height: 30px;
  margin: 15px;
  text-align: center;
  /* line-height: 75px; */
  font-size: 30px;
}
</style>