<template>
    <Navtop></Navtop>
    <div class="row">
        
        <div class="centercolumn">
            <div class="card"> 
           
    <Menu></Menu>
        </div>
    </div>
  <div class="leftcolumn">
    <div class="card">
      <Cityimg></Cityimg>
    </div>
    <div class="card">
      <Citytext></Citytext>
    </div>
    <div class="card">
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
.leftcolumn {   
  float: left;
  width: 70%;
  padding-left: 20px;
  grid-template-rows: auto auto;
}

/* Right column */
.centercolumn {
  float: left;
  width: 24%;
  padding-left: 80px;
}


/* Fake image */
.fakeimg {
  background-color: #aaa;
  width: 100%;
  padding: 20px;
}

/* Add a card effect for articles */
.card {
  background-color: white;
  padding: 20px;
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
.footer {
  padding: 20px;
  text-align: center;
  background: #ddd;
  margin-top: 20px;
}

/* Responsive layout - when the screen is less than 800px wide, make the two columns stack on top of each other instead of next to each other */
/* @media screen and (max-width: 800px) {
  .leftcolumn, .rightcolumn {   
    width: 100%;
    padding: 0;
  }
} */
</style>