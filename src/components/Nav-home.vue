<template>
    <div class="container">
    <div class="topnavhome">
        <div class="iconleft">    
          <a href="#contact" style="padding: 5px;"> <div class="profileImagez"><div id="profileImage">{{ initials }}</div>{{firstName}} {{ lastName }}</div> </a> 
          
      <a @click="openTran()"> <img  class="icon1" src="../assets/icon/lg1.png"><div class="ul2"> LANGUAGE</div></a> 
      
      <a href="#contact"> <img class="icon1" src="../assets/icon/sound1.png"><div class="ul2"> AUDIO</div></a>
      <a href="#contact"> <img class="icon1" src="../assets/icon/size1.png"><div class="ul2"> FONT SIZE</div></a>
      <a href="/select"> <img class="icon1" src="../assets/icon/home1.png"><div class="ul2"> HOME </div></a>
     <div v-show="tran"  >
      <div id="google_translate_element"></div>
      xxxxxssssssxxxxxxxxxx</div>
    </div> 

      <!-- <a href="#"><i class="../assets/img/twitter.png"></i> Search</a>  -->
      <!-- <img class="iconapp" src="../assets/img/google.png"> -->
    
    </div>
  </div>


</template>


<script>

// $(document).ready(function(){
//   var firstName = $('#firstName').text();
//   var lastName = $('#lastName').text();
//   var intials = firstName.charAt(0) + lastName.charAt(0);
//   var profileImage = $('#profileImage').text(intials);
// });
// import call from 'public/index.html'
// import { defineEmits } from 'vue';
export default {
  data() {
    return {  
      firstName: 'John',
      lastName: 'Doe',
       isOpen:true,
       tran:false,
    };
  },
  computed:{
    initials() {
      return this.firstName.charAt(0).toUpperCase() + this.lastName.charAt(0).toUpperCase();
    }
  },
  methods: {
 openTran(){
  // window.googleTranslateElementInit()
  
      
        window.google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
        console.log("xxxs");
      
    
  console.log("xxx");
  console.log(this.tran);
  if(this.tran==true){
    this.tran=false;
  }else{
    this.tran=true;
    // window.googleTranslateElementInit()
    // defineEmits("googleTranslateElementInit")
//  window.google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
    // call.googleTranslateElementInit()
    // openTran(googleTranslateElementInit);
  }

console.log(this.tran);

 }
    }
    //   new google.translate.TranslateElement({
    //     pageLanguage: 'en', // Set page default language
    //     layout: google.translate.TranslateElement.InlineLayout.SIMPLE
    //   }, 'google_translate_element');
    // }
    // }
    
}


</script>


<style >
body {margin:0;}
.iconleft .ul2{
  font-size: 10px;
}
.topnavhome {
    width: 100%;
  background-color: #333;
  /* overflow: auto; */
  opacity: 1;
  overflow: hidden;
  /* position: fixed; */
 /* float: bottom; */
}
.topnavhome a {
  float: right;
  padding: 12px;
  color: white;
  text-decoration: none;
  font-size: 17px;
  /* margin-left: rem */
  /* display: flex; */
    /* align-items: center;
    justify-content: center; */
}
.profileImagez{
  /* width: 200px;
  height: 20px; */
  display: flex;
  align-items: center;
  text-align: left;
  justify-content: space-between;
}
.iconleft{
  float: right;
  /* position: absolute; */
    /* padding: 12px; */
   
      /* top: 190px; */
}
.icon1{
     /* margin-left: 10rem; */
    height: 1.2em;
      /* top: 190px; */
}
.topnavhome a:hover ,.topnavhome a2:hover{
  background-color: #ddd;
  color: black;
}

#profileImage {
  float: right;
  margin-right: 20px;
  width: 50px;
  height: 40.39px;
  /* padding-right: 50px; */
  border-radius: 50%;
  background: #ff8400;
  font-size: 15px;
  color: #fff;
  text-align: center;
  line-height: 150px;
  margin: 5px 10px  ;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
