<template>
    <div class="backimage">
      <ul>
        
        <li><img class="icon" src="../assets/img/boat.jpg"></li>
      <li><img class="icon" src="../assets/img/boat.jpg"></li>
      </ul>
      <ul>
      <li><img class="icon" src="../assets/img/boat.jpg"></li>
      <li><img class="icon" src="../assets/img/boat.jpg"></li>
    </ul>
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
  /* .btn_group{
    
  } */
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .icon{
    border-style: solid;
    border-width: 20px;
    width: 400px;
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