<template>
    <Navtop></Navtop>
    <div class="row">
        
        <div class="centercolumncitynext">
            <div class="cardcitynext"> 
           
    <Menu></Menu>
        </div>
    </div>
  <div class="leftcolumncitynext"> <div class="ardcitynextfix1">
    <div class="cardcitynext">
      <Cityimg @popupcityweb="popupwebz"></Cityimg>
    </div></div>
    <div class="ardcitynextfix">
    <div class="cardcitynext">
      <Citytext></Citytext>
    </div>
  </div>
    <div class="cardcitynext">
        <h2>Facilities</h2>
        <Cityimgfac @popupcityweb="popupwebz"></Cityimgfac>
    </div>
  </div>

</div>
<div class="navbar">
    <navbar></navbar></div>
<!-- <Menu></Menu> -->
<div id="myModal" class="modal1" v-if="isOpen">
  <span @click="closepop()" class="close">&times;</span>
  <img class="modal-content" v-bind:src="imgsrcpop" >
  <div id="caption"></div>
</div>
</template>
<script>
  import navbar from '@/components/Navbar-web.vue';
  import Menu from '@/citymain/Citynav-web.vue';
import Citytext from '@/citymain/Citytext-web.vue';
import Cityimg from '@/citymain/Cityimg-web.vue';
import Cityimgfac from '@/citymain/Cityimgfac-web.vue';
import Navtop from '@/components/Nav-home.vue';
  export default {
    //const:isOpen,
    // var: isOpen,
    data(){
      return {isOpen: false,
      };
    },
    components: {
        Menu,
    Citytext,
    Cityimg,
    Cityimgfac,
    navbar,
    Navtop
  },
  methods:{
    closepop(){
      this.isOpen= false;
    },
    popupwebz(src){
        this.imgsrcpop=src
      this.isOpen= true;
    }
  }
}
</script>
<style>


* {
  box-sizing: border-box;
}

body {
  font-family: Arial;

 background-image: url('../assets/img/BG1.png');
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

#myImg:hover {opacity: 0.7;}
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
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.9); /* Black w/ opacity */
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
.cardcitynext h2{
  padding-left: 3%;
  text-align: left;
}
.centercolumncitynext h2{
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
.ardcitynextfix1{
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
height:100%;
max-height: 800px;
}
.ardcitynextfix> .cardcitynext {   
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

.navbarfixcityw{
  display: none;
}
.navbarcityw{
display: none;}
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
  
.cardcitynext{
  height: 600px;
}

}
</style>