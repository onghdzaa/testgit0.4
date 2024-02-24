<template>
<div class="grid-container">
  <div class="itemcityimg1">
    <iframe width="99%" height="99%" 
src="https://www.youtube.com/embed/QhUfEQUIC50?si=j07LfHi86uOz0Y75">
</iframe> 
</div>
  <div class="itemcityimg2">1</div>
  <div class="itemcityimg3">1</div>  
  <div class="itemcityimg4">1</div>
  <div class="itemcityimg5">1</div>
  <div class="itemcityimg6">1</div>
  <div class="itemcityimg7">1</div>

  

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

.itemcityimg1 {
grid-column-start: 1;
grid-column-end: 2;
grid-row-start: 1;
grid-row-end: 3;
 width: 100%;
height: 100%;
  
}

.imgcity{
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
