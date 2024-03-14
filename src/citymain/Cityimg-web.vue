<template>
<div class="grid-container">
  <div class="itemcityimg1">
    <iframe width="99%" height="99%" 
src="https://www.youtube.com/embed/QhUfEQUIC50?si=j07LfHi86uOz0Y75">
</iframe> 
</div>
  <div class="itemcityimg2"><img @click="imgpopimgweb(require('../assets/img/1pm.jpg'))" id="myImg" class="imgcityimg" src="../assets/img/1pm.jpg"></div>
  <div class="itemcityimg3"><img @click="imgpopimgweb(require('../assets/img/2pm.jpg'))" id="myImg" class="imgcityimg" src="../assets/img/2pm.jpg"></div>  
  <div class="itemcityimg4"><img @click="imgpopimgweb(require('../assets/img/3pm.jpg'))" id="myImg" class="imgcityimg" src="../assets/img/3pm.jpg"></div>
  <div class="itemcityimg5"><img @click="imgpopimgweb(require('../assets/img/4pm.jpg'))"  id="myImg" class="imgcityimg" src="../assets/img/4pm.jpg"></div>
  <div class="itemcityimg6"><img @click="imgpopimgweb(require('../assets/img/5pm.jpg'))" id="myImg" class="imgcityimg" src="../assets/img/5pm.jpg"></div>
  <div class="itemcityimg7">
    <img class="imgcityimg1" src="../assets/img/5pm.jpg" >
      <div class="centercityimg">See all</div>
  </div>


</div>
</template>
<script>
 export default {
  methods:{
    imgpopimgweb(src){
  this.$emit('popupcityweb',src);
console.log("../assets/img/1pm.jpg");
},
  },
}
</script>
<style>
.grid-container {
  display: grid;
  width: 99%;
  grid-template-columns:  auto 20% 20% 20% ;
  /* grid-template-rows: 200px; */
  gap: 10px;
  /* background-color: #2196F3; */
  padding: 10px;
  /* height: 300px; */
}

.grid-container > div {
  background-color: rgba(255, 255, 255, 0.8);
  text-align: center;
  font-size: 30px;
  /* width: 100%; */
/* height: 100%; */

}
  /* .grid-container> div > .imgcityimg
    {
      display: flex;
        width: 100%;
        height: 100%;
        object-fit: cover;
        
    } */
.itemcityimg1 {
grid-column-start: 1;
grid-column-end: 2;
grid-row-start: 1;
grid-row-end: 3;
 width: 100%;
height: 100%;
  
}
.itemcityimg7{
  position: relative;
  text-align: center;
  /* color: white; */
}
.centercityimg{
 /* width: 100%;
 height: 100%; */
 /* background-color: #2196F3; */
 position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
 /* position: absolute;
  bottom: 8px;
  right: 16px;
  transform: translate(-50%, -50%);
  font-size: 15px;
  color: aqua; */

}
.imgcityimg1{
opacity: 0.5;
width: 100%;
height: 100%;
}
.imgcityimg{

width: 100%;
height: 100%;
}

@media only screen and (max-width: 600px) {
      .grid-container {
      display: grid;
      width: 99%;
    grid-template-columns: auto auto   ; 
      /* grid-template-rows: auto auto;  */
      gap: 5px;
      /* background-color: #2196F3; */
      padding: 5px;
  
    }
    .itemcityimg1 {
grid-column-start: 1;
grid-column-end: 4;
grid-row-start: 1;
grid-row-end: 3;
 width: 100%;
height: 100%;
  
}
    }
</style>
