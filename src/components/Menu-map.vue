<template>
  <div class="mapmenumap">

    <img class="iconmapmenumap" src="../assets/icon/N1.png">
    <h2 style="text-align: center;">cut</h2>
    <p style="text-align: center;">ss</p>
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
      </div>
      <div class="grid-itemmenumap"><img class="sizeimgmenumap"  src="../assets/icon/S7-1.png"> 1</div>
      <div class="grid-itemmenumap"><img class="sizeimgmenumap" src="../assets/icon/S7-1.png">1</div>
      <div class="grid-itemmenumap"><img class="sizeimgmenumap" src="../assets/icon/S7-1.png">1</div>
      <div class="grid-itemmenumap"><img class="sizeimgmenumap" src="../assets/icon/S7-1.png">1</div>
      <div class="grid-itemmenumap"><img class="sizeimgmenumap" src="../assets/icon/S7-1.png">1</div>
      <div class="grid-itemmenumap"><img class="sizeimgmenumap" src="../assets/icon/S7-1.png">1</div>
      <div class="grid-itemmenumap"><img class="sizeimgmenumap" src="../assets/icon/S7-1.png">1</div>
      <div class="grid-itemmenumap"><img class="sizeimgmenumap" src="../assets/icon/S7-1.png">1</div>
    </div>
    <button>xssssss</button>
  </div>
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
    </p>
    </div> -->
</template>
<script>
export default {
  //    name: 'HomeView',
}
</script>
<style>
.grid-item1menumap {
  height: 50px;
}

.grid-containermenumap {
  display: grid;
  grid-template-columns: 3;
 
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

.grid-itemmenumap {
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 2%;
  width: 100%;
  min-width: 20px;
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