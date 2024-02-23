<template>
    <div class="backimage">
      
        <div class="group">
          <div class="group1"><a :href="$router.resolve({name: 'selectmap'}).href"><img class="icon" src="../assets/img/ss1.png"></a></div>
          <div class="group1"><img class="icon" src="../assets/img/ss3.png"></div>
          <div class="group1"><img class="icon" src="../assets/img/ss2.png"></div>
          <div class="group1"><img class="icon" src="../assets/img/ss4.png"></div>
        <!-- 
    <img class="icon" src="../assets/img/boat.jpg">
     <img class="icon" src="../assets/img/boat.jpg">
      <img class="icon" src="../assets/img/boat.jpg"> -->
  </div>
    </div>
    <div class="navbar">
    <navbar></navbar></div>
  </template>
  <script>

  import navbar from '@/components/Navbar-web.vue';
  export default {
    components: {
    navbar,
  },
    data() {
        return {
            isOpen: false,
            active: 'register',
            
        };
    },
    methods: {
      
        }
    }
    


  </script>
  <style>
  body {
  background-image: url('../assets/img/BG1.png');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: 100% 100%;
}
.backimage{
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 80px;
}
  /* .btn_group{
    
  } */
  *{
    margin: 0;
    padding: 0;
    /* box-sizing: border-box; */
  }
  .icon{
    border-style: solid;
  border-color: white;
  border-width: 10px;
  /* border-color: white; */
  border-width: 10px;
    width: 94%;
  }
.group{
  display: grid;
  grid-template-columns: auto auto;
    width: 40%;
    /* background-color: white; */
    gap: 30px;      /* border-left: 5px solid gray; */
}
.grou1{
width: 100%;
}
@media only screen and (max-width: 600px) {
  .group{
  display: grid;
    width: 100%;
    grid-template-columns: 100%, 100% ;
    /* background-color: white; */
    gap: 20px;      /* border-left: 5px solid gray; */
    
}
.icon{
    border-style: solid;
  border-color: white;
  /* border-width: 10px; */
  /* border-color: white; */
  border-width: 2px;
    width: 100%;
  }
  .backimage{
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
}
}
/* .backimage{ */
  /* background-size: contain;
  background-repeat: no-repeat;
  width: 200px; */
  /* height: 96vh;
background-image:url(../assets/img/BG1.png) ;

  } */
 

  
ul {
  list-style-type: none;
  padding: 10px;
}
li {
  display: inline-block;
  margin: 0px 30px 0px 0px;
}


  </style>