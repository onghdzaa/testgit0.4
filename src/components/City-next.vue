<template>
    <Navtop></Navtop>
    <div class="row">
        
        <div class="centercolumncitynext">
            <div class="cardcitynext"> 
           
    <Menu></Menu>
        </div>
    </div>
  <div class="leftcolumncitynext">
    <div class="cardcitynext">
      <Cityimg></Cityimg>
    </div>
    <div class="cardcitynext">
      <Citytext></Citytext>
    </div>
    <div class="cardcitynext">
        <h2>fac</h2>
        <Cityimgfac></Cityimgfac>
    </div>
  </div>

</div>
<div class="navbar">
    <navbar></navbar></div>
<!-- <Menu></Menu> -->

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
    components: {
        Menu,
    Citytext,
    Cityimg,
    Cityimgfac,
    navbar,
    Navtop
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

/* Right column */
.centercolumncitynext {
  float: left;
  width: 24%;
  padding-left: 80px;
  /* min-width: 300px; */
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
  
  /* padding: 20px; */
 /* margin-top: 90px; */
height: auto;}
.leftcolumncitynext {   
padding-top: 0px;
margin-top: 0px;
  width: 100%;
  padding-left: 0px;

}
.leftcolumncitynext .cardcitynext {   
padding: 0px;
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
@media only screen and (min-width: 2559px) {
  
.cardcitynext{
  height: 600px;
}

}
</style>