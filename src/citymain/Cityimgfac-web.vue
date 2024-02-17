<template>
    <div class="grid-containers">
      <div class="item1s">
        <img src="..\assets\img\tree.jpg">
    </div>
      <div class="item2s"><img src="..\assets\img\tree.jpg"></div>
      <div class="item3s"><img src="..\assets\img\tree.jpg"></div>  
      <div class="item4s"><img src="..\assets\img\tree.jpg"></div>
   
    
      
    
    </div>
    </template>
    <script>
    </script>
    <style>
    .grid-containers {
      display: grid;
     grid-auto-rows: 200px;
     grid-auto-flow: dense;
      grid-template-columns: auto auto auto auto ;
      grid-template-rows: 200px;
      gap: 20px;
      background-color: #2196F3;
      padding: 10px;
     
    }
    
    .grid-containers > div {
      background-color: rgba(255, 255, 255, 0.8);
      text-align: center;
      font-size: 30px;
    }
    
    .item1s {
 
     max-width: 100%;
    height: auto;
      
    }
    .grid-containers> div > img
    {
        width: 100%;
        height: 100%;
        object-fit: cover;
        
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
  
    
    </style>
    