<template>
  <div class="grid-containersz">
    <div class="item1sz" style="border-bottom: 5px solid gray">
      <img src="../assets/icon/N1.png" />
      <h2 style="margin: 0px">ss</h2>
      <p style="margin: 0px; margin-bottom: 2%">ss</p>
    </div>
    <div class="item2sz" style="border-bottom: 5px solid gray">
      <div class="grid-itemnav">
        <img class="sizeimgnav" src="../assets/icon/S7-1.png" /> 1
      </div>
      <div class="grid-itemnav">
        <img class="sizeimgnav" src="../assets/icon/S7-1.png" />1
      </div>
      <div class="grid-itemnav">
        <img class="sizeimgnav" src="../assets/icon/S7-1.png" />1
      </div>
      <div class="grid-itemnav">
        <img class="sizeimgnav" src="../assets/icon/S7-1.png" />1
      </div>
      <div class="grid-itemnav">
        <img class="sizeimgnav" src="../assets/icon/S7-1.png" />1
      </div>
      <div class="grid-itemnav">
        <img class="sizeimgnav" src="../assets/icon/S7-1.png" />1
      </div>
      <div class="grid-itemnav">
        <img class="sizeimgnav" src="../assets/icon/S7-1.png" />1
      </div>
      <div class="grid-itemnav">
        <img class="sizeimgnav" src="../assets/icon/S7-1.png" />1
      </div>
    </div>
    <div class="item3sz">
      <div class="starandname" style="width: 100%; text-align: left; ">Diego F <StarRating :show-rating="false" :star-size="10" :rating="4" :read-only="true" style="float: right;" />
      <div style="float: left; margin-left: 20px;">This-div-contains-the-long-h2-lorem-text-demonstrated-in the </div>
     <div class="leftstar" style="float: right;"></div> </div>
        

      <div class="grid-itemnav"><p></p></div>
    </div>
    <div class="item4sz" style="border-bottom: 5px solid gray"> 
      <div class="starandname" style="width: 100%; text-align: left; ">Diego F <StarRating :show-rating="false" :star-size="10" :rating="4" :read-only="true" style="float: right;" />
      <div style="float: left; margin-left: 20px;">This-div-contains-the-long-h2-lorem-text-demonstrated-in the </div>
     <div class="leftstar" style="float: right;"></div> </div>
      <!-- <div class="wrap-it">
This-div-contains-the-long-h2-lorem-text-demonstrated-in the
        </div> -->
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
.wrap-it{
word-wrap: break-word;
}
.item3sz {
  max-width: 200px;
  max-height: 200px;
  word-wrap: break-word;
    width: auto;
  /* height: 50000000px; */
  /* max-height: 150px; */
  /* display: flex; */
  /* width: 100%; */
  /* max-width: 100%;
      max-height: 200%;
      min-width: none; */
  /* height: 100%; */
  /* grid-template-columns: auto ; */
  /* object-fit: cover; */
}
/* .sizeimgnav{
      max-width: 80px;
      min-width: auto;
    } */
.grid-containersz {
  display: grid;
  /* grid-template-columns: auto ; */
  grid-template-rows: auto auto auto auto;
  gap: 20px;
  /* background-color: #2196f3; */
  padding: 10px;
  width: 100%;
  max-width: 100%;
}

.grid-containersz > div {
  background-color: rgba(255, 255, 255, 0.8);
  text-align: center;
  max-width: 100%;
  /* height: 500px; */
  /* width: 100px; */
}

.item1sz {
  max-width: 100%;
  height: 100%;
}

.grid-containersz > div > img {
  max-width: 200px;
  width: 100%;
  min-width: 10px;
  object-fit: cover;
}

/* .item2 {
      float: left;
      width: 100%;
      height: 99%;
    
      
    }
    
    .item3 {
      float: left;
      width: 100%;
      height: 99%;
    
      
    } */
</style>
