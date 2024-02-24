<template>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

    
    <div class="rowcityw">
     
        <div class="centercolumncityw">
            <div class="cardcityw" > 
    <Menu></Menu>
        </div>
    </div>   
    <div class="topcityw">
    <div class="leftandringtcityw">
  <div class="leftcolumncityw">
    <div class="cardcityw">
      <Location></Location>
    </div>
  </div>
  <div class="rightcolumncityw">
    <div class="cardcityw" >
    <Review/>
    </div>
  </div> </div>
  <div class="leftandringtcityw">
  <div class="leftcolumncityw">
    <div class="cardcityw">
      <Location></Location>
    </div>
  </div>
  <div class="rightcolumncityw">
    <div class="cardcityw" >
    <Review/>
    </div>
  </div> </div></div>
    <!-- <div class="card">
      <Location></Location>
    </div> -->
 
  <!-- <div class="rightcolumn"> -->
    <!-- <div class="card" style="width: 90%;">
    <Review/>
    </div>
    <div class="card" style="width: 90%;">
    <Review/>
    </div> -->
    <!-- <div class="card">
      <h3>Popular Post</h3>
      <div class="fakeimg"><p>Image</p></div>
      <div class="fakeimg"><p>Image</p></div>
      <div class="fakeimg"><p>Image</p></div>
    </div>
    <div class="card">
      <h3>Follow Me</h3>
      <p>Some text..</p>
    </div> -->
  <!-- </div> -->
</div>
<div class="navbarcityw">
    <navbar></navbar></div>
    <div class="navbarfixcityw"><Navtop></Navtop></div>
<!-- <Menu></Menu> -->

</template>
<script>
  import navbar from '@/components/Navbar-web.vue';
import Menu from '@/components/Menu-map.vue';
import Location from '@/components/Location-web.vue';
import Review from '@/components/Review-web.vue';
import Navtop from '@/components/Nav-home.vue';
  export default {
    //const:isOpen,
    // var: isOpen,
    components: {
    Menu,
    Location,
    Review,
    navbar,
    Navtop
  }
}
</script>
<style>


* {
  box-sizing: border-box;
}

.navbarfixcityw{
  opacity: 0.9;
  overflow: hidden;
  background-color: #333;
  position: fixed;
  top: 0;
  width: 100%;
}
.navbarcityw{
top:10px}
body {
  font-family: Arial;

 background-image: url('../assets/img/BG1.png');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: 100% 100%;
}
.topcityw{
  padding-top: 80px;
}
.leftandringtcityw{
 
  padding-left:20%;
  float: left;
  /* background-color: aqua; */
  width: 100%;
}
.leftcolumncityw {   
  float: left;
  width: 70%;
  padding-left: 20px;

}

/* Right column */
.centercolumncityw {
  position: fixed;
  padding-top: 80px;
  float: left;
  width: 20%;
  /* min-width: 200px; */
  padding-left: 4%;
  height: auto;
}
.centercolumncityw .cardcityw{

 
 
  width: 100%;
  /* min-width: 200px; */
  padding-left: 4%;
  height: auto;
}
.rightcolumncityw {
   /* position: ; */
  float: left;
  width: 25%;
  /* background-color: #f1f1f1; */
  padding-left: 20px;
}

/* Fake image */
.fakeimg {
  background-color: #aaa;
  width: 100%;
  padding: 20px;
}

/* Add a card effect for articles */
.cardcityw {
  background-color: white;
  opacity: 0.7;
  padding: 20px;
  margin-top: 20px;
  height: 430px;
}

/* Clear floats after the columns */
.rowcityw::after {
  content: "";
  display: table;
 /* width: 100%; */
  clear: both;
  padding-left: 250%;
}

/* Footer */
.footer {
  padding: 20px;
  text-align: center;
  background: #ddd;
  margin-top: 20px;
}
@media only screen and (max-width: 600px) {
  /* .leftcolumn {   
  float: left;
  width: 50%;
  padding-left: 20px;

} */
.topcityw{
  padding-top:0px ;
}
.centercolumncityw {
  display: contents;
  width: 100%;
  padding-left: 0px;
  /* margin-top: 80px; */
  padding-top: 80px;
}
.centercolumncityw .cardcityw{
margin-top: 20px;
}

.cardcityw {
  background-color: white;
  opacity: 0.7;
  /* padding: 20px; */
 /* margin-top: 90px; */
height: auto;}
.leftcolumncityw {   
padding-top: 0px;
margin-top: 0px;
  width: 100%;
  padding-left: 0px;

}
.rightcolumncityw {
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
.leftandringtcityw{
  float: left;
  padding-left: 0px;
  height: 100%;
  /* background-color: aqua; */
  width: 100%;
  /* height: 20px; */
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
  
.cardcityw{
  height: 600px;
}

}
</style>