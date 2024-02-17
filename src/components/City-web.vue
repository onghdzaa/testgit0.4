<template>
    <Navtop></Navtop>
    <div class="row">
        
        <div class="centercolumn">
            <div class="card" style="height: 970px;"> 
    <Menu></Menu>
        </div>
    </div>
  <div class="leftcolumn">
    <div class="card">
      <Location></Location>
    </div>
    <div class="card">
      <Location></Location>
    </div>
  </div>
  <div class="rightcolumn">
    <div class="card" style="width: 90%;">
    <Review/>
    </div>
    <div class="card" style="width: 90%;">
    <Review/>
    </div>
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
  </div>
</div>
<div class="navbar">
    <navbar></navbar></div>
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

body {
  font-family: Arial;

 background-image: url('../assets/img/BG1.png');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: 100% 100%;
}
.leftcolumn {   
  float: left;
  width: 54%;
  padding-left: 20px;

}

/* Right column */
.centercolumn {
  float: left;
  width: 25%;
  padding-left: 80px;
}
.rightcolumn {
  float: left;
  width: 28%;
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
.card {
  background-color: white;
  padding: 20px;
  margin-top: 20px;
  height: 450px;
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