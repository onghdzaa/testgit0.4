<template>
  <div class="grid-containersz">
    <div class="item1sz" style="border-bottom: 5px solid gray">
      <img src="../assets/icon/N1.png" />
      <h2 style="margin: 0px">CITY & CULTURE</h2>
      <p style="margin: 0px; margin-bottom: 2%">NORTHEASTERN REGION</p>
    </div>
    <div class="item2sz" style="border-bottom: 5px solid gray">
      <div class="grid-itemnav">
        <img class="sizeimgnav" src="../assets/icon/S7-1.png" />Parking for prople with disabilities
      </div>
      <div class="grid-itemnav">
        <img class="sizeimgnav" src="../assets/icon/S7-1.png" />Step - free access to the building / property / site (possbly via elevator / ramps)
      </div>
      <div class="grid-itemnav">
        <img class="sizeimgnav" src="../assets/icon/S7-1.png" />All other rooms and facilities that van be used by the guest can be reached without steps or with a lift / ramp.
      </div>
      <div class="grid-itemnav">
        <img class="sizeimgnav" src="../assets/icon/S7-1.png" />Accessible Toilet by Wheelchair
      </div>
      <div class="grid-itemnav">
        <img class="sizeimgnav" src="../assets/icon/S7-1.png" />Requested Assistance is possible (request in advance)
      </div>
      <div class="grid-itemnav">
        <img class="sizeimgnav" src="../assets/icon/S7-1.png" />Request assistance is possible
      </div>
    </div>
    <div class="item3sz">
      
      <div class="starandname" style="width: 100%; text-align: left; "> <div class="startext"><div class="starandnametext">Diego F</div><StarRating :show-rating="false" :star-size="10" :rating="4" :read-only="true" /></div>
      <div class="textcitynav" style="float: left; margin-left: 20px;">This-div-contains-the-long-h2-lorem-text-demonstrated-in the </div>
     <div class="leftstar" style="float: right;"></div> </div>
     <div class="starandname" style="width: 100%; text-align: left; "> <div class="startext"><div class="starandnametext">Diego F</div><StarRating :show-rating="false" :star-size="10" :rating="4" :read-only="true" /></div>
      <div class="textcitynav" style="float: left; margin-left: 20px;">This-div-contains-the-long-h2-lorem-text-demonstrated-in the </div>
     <div class="leftstar" style="float: right;"></div> </div>

      <!-- <div class="grid-itemnav"></div> -->
    </div>
    <div class="item4sz" style="border-bottom: 5px solid gray"> 
      <!-- <div class="starandname" style="width: 100%; text-align: left; ">Diego F <StarRating :show-rating="false" :star-size="10" :rating="4" :read-only="true" style="float: right;" />
      <div style="float: left; margin-left: 20px;">This-div-contains-the-long-h2-lorem-text-demonstrated-in the </div>
     <div class="leftstar" style="float: right;"></div> 
    </div> -->
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
.GR
.item3sz {
  /* max-width: 200px;
  max-height: 200px; */
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
.starandnametext{
  white-space: nowrap;
  font-size: 1vw;
  padding-right: 65%;
}
.startext{
  width: 100%;
 
  /* justify-content: center; */
    display: flex;
    align-items: center;
}
.grid-itemnav{
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 2%;
  width: 100%;
  min-width: 20px;
  font-size: 0.6vw;
  text-align: left;
  text-align: left;
  display: flex;
    align-items: center;
}
.textcitynav{
  font-size: 1vw;
}
.sizeimgnav{
  padding-right: 2%;
      width: 15%;
      min-width: auto;
    }
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
.item2sz {
  display: grid;
  grid-template-rows: 15% 15% 15% 15% 15% 15%;
  max-height: 500px;
  height: 100%;
}

.grid-containersz > div > img {
  max-width: 200px;
  width: 100%;
  min-width: 10px;
  object-fit: cover;
}
@media only screen and (max-width: 1580px) {
  .starandnametext{
  /* font-size: 1vw; */
  padding-right: 55%;
}
}
@media only screen and (max-width: 1180px) {
  .starandnametext{
  /* font-size: 1vw; */
  padding-right: 35%;
}
    }
    @media only screen and (max-width: 1180px) {
  .starandnametext{
  /* font-size: 1vw; */
  padding-right: 20%;
}

    }
    @media only screen and (max-width: 600px) {
  .starandnametext{
  /* font-size: 1vw; */
  padding-right: 80%;
}
.starandnametext{
  white-space: nowrap;
  font-size: 5vw;
  padding-right: 65%;
}
.textcitynav{
  font-size: 5vw;
}
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
