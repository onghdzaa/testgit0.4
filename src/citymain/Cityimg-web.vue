<template>
<div class="grid-container">
  <div class="item1">
    <iframe width="99%" height="99%" 
src="https://www.youtube.com/embed/QhUfEQUIC50?si=j07LfHi86uOz0Y75">
</iframe> 
</div>
  <div class="item2">1</div>
  <div class="item3">1</div>  
  <div class="item4">1</div>
  <div class="item5">1</div>
  <div class="item6">1</div>
  <div class="item7">1</div>

  

</div>
</template>
<script>
</script>
<style>
.grid-container {
  display: grid;
  width: 99%;
  grid-template-columns: auto auto auto auto ;
  gap: 10px;
  background-color: #2196F3;
  padding: 10px;
  height: 300px;
}

.grid-container > div {
  background-color: rgba(255, 255, 255, 0.8);
  text-align: center;
  font-size: 30px;
height: 100%;
}

.item1 {
grid-column-start: 1;
grid-column-end: 2;
grid-row-start: 1;
grid-row-end: 3;
 width: 100%;
height: 100%;
  
}


/* .item2 {
  float: left;
  width: 100%;
  height: 99%;

  
}

.item3 {
  float: left;
  width: 100%;
  height: 99%;

  
} */
.imgcity{
width: 100%;
height: 100%;
}

</style>
