<template>
  <div class="grid-containersz">
    <div class="item1sz" style="border-bottom: 5px solid gray">
      <img src="../assets/icon/N1.png" />
      <h2 style="margin: 0px">CITY & CULTURE</h2>
      <p style="margin: 0px; margin-bottom: 2%">NORTHEASTERN REGION</p>
    </div>
    <div class="item2sz" style="border-bottom: 5px solid gray">
      <div id="testcolor" @click="chanecolor('testcolor')" class="grid-itemnav">
        <img class="sizeimgnav" v-bind:src="imgmain" />Parking for prople with disabilities
      </div>
      <div id="testcolor1" @click="chanecolor1('testcolor1')" class="grid-itemnav">
        <img class="sizeimgnav" v-bind:src="imgmain1" />Step - free access to the building / property / site (possbly via elevator / ramps)
      </div>
      <div id="testcolor2" @click="chanecolor2('testcolor2')" class="grid-itemnav">
        <img class="sizeimgnav" v-bind:src="imgmain2" />All other rooms and facilities that van be used by the guest can be reached without steps or with a lift / ramp.
      </div>
      <div id="testcolor3" @click="chanecolor3('testcolor3')" class="grid-itemnav">
        <img class="sizeimgnav" v-bind:src="imgmain3" />Accessible Toilet by Wheelchair
      </div>
      <div id="testcolor4" @click="chanecolor4('testcolor4')" class="grid-itemnav">
        <img class="sizeimgnav" v-bind:src="imgmain4" />Requested Assistance is possible (request in advance)
      </div>
      <div id="testcolor5" @click="chanecolor5('testcolor5')" class="grid-itemnav">
        <img class="sizeimgnav" v-bind:src="imgmain5" />Request assistance is possible
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
  data(){
    return{
    imgmain: require("../assets/icon/S1-1.gif"),
    imgmain1: require("../assets/icon/S2-1.gif"),
    imgmain2: require("../assets/icon/S3-1.gif"),
    imgmain3: require("../assets/icon/S4-1.gif"),
    imgmain4: require("../assets/icon/S12-1.gif"),
    imgmain5: require("../assets/icon/S10-1.gif"),
    countnum:0,
    countnum1:0,
    countnum2:0,
    countnum3:0,
    countnum4:0,
    countnum5:0,
    }
  },
  // name: 'HomeView',
  components: {
    StarRating
  },
  methods: {
    chanecolor(id){
      if(this.countnum==0){
        // console.log(id);
        this.countnum=1;
    document.getElementById(id).style.backgroundColor = "#106404"; 
    this.imgmain=require("../assets/icon/S1-2.gif");
    document.getElementById(id).style.color = "white";
      }else{
        this.countnum=0;
        this.imgmain=require("../assets/icon/S1-1.gif");
        document.getElementById(id).style.backgroundColor = "rgba(255, 255, 255, 0.8)";
        document.getElementById(id).style.color = "#2c3e50";
      }
    },
    chanecolor1(id){
      if(this.countnum1==0){
        // console.log(id);
        this.countnum1=1;
    document.getElementById(id).style.backgroundColor = "#106404"; 
    this.imgmain1=require("../assets/icon/S2-2.gif");
    document.getElementById(id).style.color = "white";
      }else{
        this.countnum1=0;
        this.imgmain1=require("../assets/icon/S2-1.gif");
        document.getElementById(id).style.backgroundColor = "rgba(255, 255, 255, 0.8)";
        document.getElementById(id).style.color = "#2c3e50";
      }
    },
    chanecolor2(id){
      if(this.countnum2==0){
        // console.log(id);
        this.countnum2=1;
    document.getElementById(id).style.backgroundColor = "#106404"; 
    this.imgmain2=require("../assets/icon/S3-2.gif");
    document.getElementById(id).style.color = "white";
      }else{
        this.countnum2=0;
        this.imgmain2=require("../assets/icon/S3-1.gif");
        document.getElementById(id).style.backgroundColor = "rgba(255, 255, 255, 0.8)";
        document.getElementById(id).style.color = "#2c3e50";
      }
    }
    ,    chanecolor3(id){
      if(this.countnum3==0){
        // console.log(id);
        this.countnum3=1;
    document.getElementById(id).style.backgroundColor = "#106404"; 
    this.imgmain3=require("../assets/icon/S4-2.gif");
    document.getElementById(id).style.color = "white";
      }else{
        this.countnum3=0;
        this.imgmain3=require("../assets/icon/S4-1.gif");
        document.getElementById(id).style.backgroundColor = "rgba(255, 255, 255, 0.8)";
        document.getElementById(id).style.color = "#2c3e50";
      }
    }
    ,    chanecolor4(id){
      if(this.countnum4==0){
        // console.log(id);
        this.countnum4=1;
    document.getElementById(id).style.backgroundColor = "#106404"; 
    this.imgmain4=require("../assets/icon/S12-2.gif");
    document.getElementById(id).style.color = "white";
      }else{
        this.countnum4=0;
        this.imgmain4=require("../assets/icon/S12-1.gif");
        document.getElementById(id).style.backgroundColor = "rgba(255, 255, 255, 0.8)";
        document.getElementById(id).style.color = "#2c3e50";
      }
    }
    ,    chanecolor5(id){
      if(this.countnum5==0){
        // console.log(id);
        this.countnum5=1;
    document.getElementById(id).style.backgroundColor = "#106404"; 
    this.imgmain5=require("../assets/icon/S10-2.gif");
    document.getElementById(id).style.color = "white";
      }else{
        this.countnum5=0;
        this.imgmain5=require("../assets/icon/S10-1.gif");
        document.getElementById(id).style.backgroundColor = "rgba(255, 255, 255, 0.8)";
        document.getElementById(id).style.color = "#2c3e50";
      }
    }
       
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
.grid-itemnav {
  font-size: 3vw;
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
