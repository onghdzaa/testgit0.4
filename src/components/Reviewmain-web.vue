<template>
  <Navtop></Navtop>
  <div class="row">
    <div class="centercolumncitynext">
      <div class="cardcitynext">
        <Menu></Menu>
      </div>
    </div>
    <div class="leftcolumncitynext">
      <div class="ardcitynextfix1">
        <div class="cardcitynext"> 
          <div class="contentcityreview">
            <div class="contentcityreview1">
          <h1>Wat Phra That Doi Suthep</h1>
          <div class="iconfixxz">
            <img class="iconlocationx" src="../assets/img/google.png" />
            <div class="fixtextxx" style="padding-left: 10%"></div>
            Home
            <StarRating
              :show-rating="false"
              :star-size="15"
              :rating="4"
              :read-only="true"
            />
            </div>
          </div>
          <div class="contentcityreview2">
            <div class="flex-containerz">
  <div><img class="imgre" src="../assets/icon/S7-1.png"></div>
  <div><img class="imgre" src="../assets/icon/S7-1.png"></div>
  <div><img class="imgre" src="../assets/icon/S7-1.png"></div>  
  <div><img class="imgre" src="../assets/icon/S7-2.png"></div>
  <div><img class="imgre" src="../assets/icon/S7-2.png"></div>
  <div><img class="imgre" src="../assets/icon/S7-1.png"></div>  
  <div><img class="imgre" src="../assets/icon/S7-1.png"></div>
  <div><img class="imgre" src="../assets/icon/S7-1.png"></div>
</div>
          </div></div>
        </div>
      </div>
      <div class="ardcitynextfix">
        <div class="cardcitynext">
          <div class="fixtextxx" style="padding-left: 10%">
            Home
            <StarRating
              :show-rating="false"
              :star-size="15"
              :rating="4"
              :read-only="true"
            /><p>"ssssssss" </p></div>
          
          <p>ssssssss</p>
          <p>ssssssss</p>
        </div>
      </div>
      <div class="cardcitynext">
        <h2>Facilities</h2>
        <Cityimgfac @popupcityweb="popupwebz"></Cityimgfac>
      </div>
    </div>
  </div>
  <div class="navbar">
    <navbar></navbar>
  </div>
  <!-- <Menu></Menu> -->
  <div id="myModal" class="modal1" v-if="isOpen">
    <span @click="closepop()" class="close">&times;</span>
    <img class="modal-content" v-bind:src="imgsrcpop" />
    <div id="caption"></div>
  </div>
</template>
<script>
import StarRating from "vue-star-rating";

import navbar from "@/components/Navbar-web.vue";
import Menu from "@/citymain/Citynav-web.vue";
import Cityimgfac from "@/citymain/Cityimgfac-web.vue";
import Navtop from "@/components/Nav-home.vue";
export default {
  //const:isOpen,
  // var: isOpen,
  data() {
    return { isOpen: false };
  },
  components: {
    Menu,
    Cityimgfac,
    navbar,
    Navtop,
    StarRating,
  },
  methods: {
    closepop() {
      this.isOpen = false;
    },
    popupwebz(src) {
      this.imgsrcpop = src;
      this.isOpen = true;
    },
  },
};
</script>
<style>
* {
  box-sizing: border-box;
}

body {
  font-family: Arial;

  background-image: url("../assets/img/BG1.png");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: 100% 100%;
}
.leftcolumncitynext {
  float: left;
  width: 70%;
  padding-left: 20px;
  grid-template-rows: auto auto;
}
#myImg {
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;
  /* width: 2000px;
  background-color: aqua; */
}
.fixtextxx{
  padding: 2%;
  display: flex;
  align-items: center;
  text-align: left;
}
.fixtextxx p{
margin: 0px;
}
.ardcitynextfix .cardcitynext{
  display: grid;
}
#myImg:hover {
  opacity: 0.7;
}
* {
  box-sizing: border-box;
}
.modal1 {
  /* display: none;     */
  align-items: center;
  justify-content: center;
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.9); /* Black w/ opacity */
}
.contentcityreview2{
  width: 100%;
  background-color: blanchedalmond;  
  display: flex;
  align-items: center;
  /* position: relative;

  justify-content: center; */
}
.iconlocationx{
  width: 20%;
  height: auto;
}
.iconfixxz{
  padding-top: 2%;
  padding-left: 20px;
  padding-bottom: 2%;
  float: left;
  position: relative;
 justify-content: center;
    display: flex;
    align-items: center;
    width: 25%;
    font-size:  0.75vw;}
.contentcityreview1{
  width: 100%;
  background-color: blanchedalmond;
}
.flex-containerz {
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  background-color: DodgerBlue;
  border-bottom: 5px solid gray;
  width: 100%;
}
.flex-containerz > div {
  background-color: #f1f1f1;
  width: 30px;
  /* max-height: 30px; */
  float: right;
  margin: 2%;
  text-align: center;
  /* line-height: 75px; */
  /* font-size: 30px; */
}
.contentcityreview{
  display: grid;
  grid-template-columns: auto auto;
  /* grid-template-rows: auto 20px; */
  /* grid-column-start: 1;
grid-column-end: 2;
grid-row-start: 1;
grid-row-end: 3; */
  background-color: aqua;
  /* width: 100%; */
}
.modal-content {
  margin: auto;
  display: block;
  width: 80%;
  max-width: 700px;
}
.close {
  position: absolute;
  top: 15px;
  right: 35px;
  color: #f1f1f1;
  font-size: 40px;
  font-weight: bold;
  transition: 0.3s;
}

.close:hover,
.close:focus {
  color: #bbb;
  text-decoration: none;
  cursor: pointer;
}

#caption {
  margin: auto;
  display: block;
  width: 80%;
  max-width: 700px;
  text-align: center;
  color: #ccc;
  padding: 10px 0;
  height: 150px;
}
/* Right column */
.centercolumncitynext {
  float: left;
  width: 24%;
  padding-left: 80px;
  /* min-width: 300px; */
}
.cardcitynext h2 {
  padding-left: 3%;
  text-align: left;
}
.centercolumncitynext h2 {
  padding: 0%;
  text-align: center;
}
/* Fake image */

/* Add a card effect for articles */
.cardcitynext {
  background-color: white;
  padding: 20px;
  opacity: 0.7;
  margin-top: 20px;
  height: 350%;
}

/* Clear floats after the columns */
.row::after {
  content: "";
  display: table;
  clear: both;
}

/* Footer */

@media only screen and (max-width: 600px) {
  /* .leftcolumn {   
  float: left;
  width: 50%;
  padding-left: 20px;

} */
  /* .topcityw{
  padding-top:0px ;
} */
  .ardcitynextfix1 {
    height: 100%;
    background-color: black;
  }
  .centercolumncitynext {
    display: contents;
    width: 100%;
    padding-left: 0px;
    /* margin-top: 80px; */
    padding-top: 80px;
  }
  /* .centercolumncityw .cardcityw{
margin-top: 20px;
} */

  .cardcitynext {
    background-color: white;
    /* max-height: 900px; */
    height: auto;
  }
  /* .ardcitynextfix .cardcitynext {
  background-color: white;
height: 900px;
  height: auto;
  
} */
  .leftcolumncitynext {
    padding-top: 0px;
    margin-top: 0px;
    width: 100%;
    padding-left: 0px;
  }
  .ardcitynextfix {
    /* display: flex; */
    width: 100%;
    height: 100%;
    max-height: 800px;
  }
  .ardcitynextfix > .cardcitynext {
    /* background-color: aqua; */
    height: 100%;
  }
  .rightcolumncitynext {
    /* float: left; */
    padding-top: 0px;
    padding-left: 0px;
    width: 100%;
    /* height: 200px; */
    /* background-color: #f1f1f1; */
    /* padding-left: 20px; */
    /* display: flex; */
    align-items: center;
    justify-content: center;
    /* justify-content: center; */
  }

  .navbarfixcityw {
    display: none;
  }
  .navbarcityw {
    display: none;
  }
  /* .card {
  background-color: white;
  opacity: 0.7;
  padding: 20px;
  margin-top: 20px;
  height: 450px;
} */
}
/* Responsive layout - when the screen is less than 800px wide, make the two columns stack on top of each other instead of next to each other */
/* @media screen and (max-width: 800px) {
  .leftcolumn, .rightcolumn {   
    width: 100%;
    padding: 0;
  }
} */
@media only screen and (max-width: 900px) {
  .centercolumncitynext {
    float: left;
    width: 24%;
    padding-left: 20px;
    /* min-width: 300px; */
  }
}
@media only screen and (min-width: 2559px) {
  .cardcitynext {
    height: 600px;
  }
}
</style>
