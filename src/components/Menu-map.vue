<template>
  <div class="mapmenumap">

    <img class="iconmapmenumap" src="../assets/icon/N1.png">
    <h2 style="text-align: center;">CITY & CULTURE</h2>
    <p style="text-align: center;">NORTHEASTERN REGION</p>
    <div class="laout1me">
      <select style="width: 50%; height: 34%;" name="subject" id="subject">
        <option value="" selected="selected">Select subject</option>
      </select>
      <div class="review">

      </div>
    </div>
    <div class="grid-containermenumap">
      <div class="grid-item1menumap">1
        <input type="range" min="1" max="100" value="50">
     
      <div id="testcolor" @click="chanecolor('testcolor')"  class="grid-itemmenumap"><img class="sizeimgmenumap"  v-bind:src="imgmain">Parking for prople with disabilities</div>
      <div id="testcolor1" @click="chanecolor1('testcolor1')"  class="grid-itemmenumap"><img class="sizeimgmenumap"  v-bind:src="imgmain1">Step - free access to the building / property / site (possbly via elevator / ramps)</div>
      <div id="testcolor2" @click="chanecolor2('testcolor2')"  class="grid-itemmenumap"><img class="sizeimgmenumap" v-bind:src="imgmain2">All other rooms and facilities that van be used by the guest can be reached without steps or with a lift / ramp.</div>
      <div id="testcolor3" @click="chanecolor3('testcolor3')"  class="grid-itemmenumap"><img class="sizeimgmenumap" v-bind:src="imgmain3">Accessible Toilet by Wheelchair</div>
      <div id="testcolor4" @click="chanecolor4('testcolor4')"  class="grid-itemmenumap"><img class="sizeimgmenumap"  v-bind:src="imgmain4">Requested Assistance is possible (request in advance)</div>
      <div id="testcolor5" @click="chanecolor5('testcolor5')"  class="grid-itemmenumap"><img class="sizeimgmenumap" v-bind:src="imgmain5">Request assistance is possible</div>

      <!-- <div  id="testcolor1" class="grid-itemmenumap"><img class="sizeimgmenumap" src="../assets/icon/S7-1.png">1</div>
      <div id="testcolor2" class="grid-itemmenumap"><img class="sizeimgmenumap" src="../assets/icon/S7-1.png">1</div>
      <div  id="testcolor3" class="grid-itemmenumap"><img class="sizeimgmenumap" src="../assets/icon/S7-1.png">1</div>
      <div id="testcolor4" class="grid-itemmenumap"><img class="sizeimgmenumap" src="../assets/icon/S7-1.png">1</div>
      <div id="testcolor5" class="grid-itemmenumap"><img class="sizeimgmenumap" src="../assets/icon/S7-1.png">1</div> -->
   
    </div>
   
  </div> 
  <button class="confirm" style="margin-top: 10%; margin-bottom: 2%;">Confirm</button>
  <!-- <div class="flex-container">
      <div><img src="../assets/icon/S7-1.png"></div>
      <div><img src="../assets/icon/S7-1.png"></div>
      <div><img src="../assets/icon/S7-1.png"></div>  
      <div><img src="../assets/icon/S7-2.png"></div>
      <div><img src="../assets/icon/S7-2.png"></div>
      <div><img src="../assets/icon/S7-1.png"></div>  
      <div><img src="../assets/icon/S7-1.png"></div>
      <div><img src="../assets/icon/S7-1.png"></div>
    </div>
    <div class="textstar"  >
        <div style="float: left; margin-left: 20px;">Diego F</div>
    <div class="starleft">
    <StarRating :show-rating="false" :star-size="20" :rating="4" :read-only="true"/></div>
    <p style="text-align: left; margin-left: 20px;">......................................
    ......................................................................................
    ......................................................................................
    </p>-->
    </div> 
</template>

<script>
export default {
  data() {
    return {  
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
    isOpen: false,
    tst:"string",

   
    };
  },
  methods: {
    chanecolor(id){
      if(this.countnum==0){
        // console.log(id);
        this.countnum=1;
    document.getElementById(id).style.backgroundColor = "#106404"; 
    this.imgmain=require("../assets/icon/S1-2.gif");
      }else{
        this.countnum=0;
        this.imgmain=require("../assets/icon/S1-1.gif");
        document.getElementById(id).style.backgroundColor = "rgba(255, 255, 255, 0.8)";
      }
    },
    chanecolor1(id){
      if(this.countnum1==0){
        // console.log(id);
        this.countnum1=1;
    document.getElementById(id).style.backgroundColor = "#106404"; 
    this.imgmain1=require("../assets/icon/S2-2.gif");
      }else{
        this.countnum1=0;
        this.imgmain1=require("../assets/icon/S2-1.gif");
        document.getElementById(id).style.backgroundColor = "rgba(255, 255, 255, 0.8)";
      }
    },
    chanecolor2(id){
      if(this.countnum2==0){
        // console.log(id);
        this.countnum2=1;
    document.getElementById(id).style.backgroundColor = "#106404"; 
    this.imgmain2=require("../assets/icon/S3-2.gif");
      }else{
        this.countnum2=0;
        this.imgmain2=require("../assets/icon/S3-1.gif");
        document.getElementById(id).style.backgroundColor = "rgba(255, 255, 255, 0.8)";
      }
    }
    ,    chanecolor3(id){
      if(this.countnum3==0){
        // console.log(id);
        this.countnum3=1;
    document.getElementById(id).style.backgroundColor = "#106404"; 
    this.imgmain3=require("../assets/icon/S4-2.gif");
      }else{
        this.countnum3=0;
        this.imgmain3=require("../assets/icon/S4-1.gif");
        document.getElementById(id).style.backgroundColor = "rgba(255, 255, 255, 0.8)";
      }
    }
    ,    chanecolor4(id){
      if(this.countnum4==0){
        // console.log(id);
        this.countnum4=1;
    document.getElementById(id).style.backgroundColor = "#106404"; 
    this.imgmain4=require("../assets/icon/S12-2.gif");
      }else{
        this.countnum4=0;
        this.imgmain4=require("../assets/icon/S12-1.gif");
        document.getElementById(id).style.backgroundColor = "rgba(255, 255, 255, 0.8)";
      }
    }
    ,    chanecolor5(id){
      if(this.countnum5==0){
        // console.log(id);
        this.countnum5=1;
    document.getElementById(id).style.backgroundColor = "#106404"; 
    this.imgmain5=require("../assets/icon/S10-2.gif");
      }else{
        this.countnum5=0;
        this.imgmain5=require("../assets/icon/S10-1.gif");
        document.getElementById(id).style.backgroundColor = "rgba(255, 255, 255, 0.8)";
      }
    }
       
    }
  //    name: 'HomeView',
}
</script>
<style>
.grid-item1menumap {
  height: auto;
  max-height: 300px;
  display: grid;
  grid-template-columns: 3;
  grid-template-rows: auto auto 15% 15% 15% 15% 15% ;
}

.grid-containermenumap {
  display: grid;
  /* height: auto; */
  grid-template-columns: 3;
  grid-template-rows: auto 20% auto;
 
}
input[type="range"] {
  width:100%;
  max-width: 200px;
}
.sizeimgmenumap {
  float: left;
  width: 15%;
  padding-right: 5%;
}
.buttonsizeimgmenumap{
  width: 100%;
  height: 100%;
}
.buttonsizeimgmenumap:active{
  width: 100%;
  height: 100%;
  background-color: black;
}
.grid-itemmenumap {
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 2%;
  width: 100%;
  min-width: 20px;
  font-size: 0.6vw;
  text-align: left;
  /* display: inline-block;
  display: flex;
  position: relative;
  justify-content: center;
  text-align: center;
  vertical-align: middle; */
  float: left;
  display: flex;
    align-items: center;

}
/* .grid-itemmenumap{
  opacity: 1;
  background-color: v-bind(clickcolor);
} */

/* .grid-itemmenumap::before{
  background-color: black;
} */
.review {
  border: 2px;
  width: 50%;
  height: 30%;
  background-color: white;
  margin: auto;
}

.laout1me {
  background-color: grey;
  height: 50px;
}

.iconmapmenumap {
  width: 100%;
  height: 200px;
  /* widows: 450px; */
}

.map {
  width: 100%;
  height: 100%;
}

p {
  margin-top: 0px;
}

h2 {
  margin-top:0px ;
  margin-bottom: 0px;
}

/* .textstar{
        margin-top: 20px;
        width: 560px;
        height: auto;
        border-bottom: 5px solid gray;
    }
    .starleft{
       margin-left: 100px;
    }
    .flex-container {
      display: flex;
      flex-wrap: nowrap;
      background-color: DodgerBlue;
      border-bottom: 5px solid gray;
      width: 560px;
    }
    img{
        width: 40px;
        height: 50px;
    }
    
    .flex-container > div {
      background-color: #f1f1f1;
      width: auto;
      height: 50px;
      margin: 15px;
      text-align: center;
      line-height: 75px;
      font-size: 30px;
    } */</style>