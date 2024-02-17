<template>
    <div class="grid-containersz">
      <div class="item1sz">
        <img src="../assets/icon/N1.png">
        <h2 style="margin: 0px;">ss</h2>
        <p style="margin: 0px;">sss</p>
    </div>
      <div class="item2sz"></div>
      <div class="item3sz"></div>  
      <div class="item4sz"></div>
   
    
      
    
    </div>
    </template>
    <script>
    </script>
    <style>
    .grid-containersz {
        

      grid-template-columns: auto auto auto auto ;

      gap: 20px;
      /* background-color: #2196F3; */
      padding: 10px;
      width: 100%;
      
     
    }
    
    .grid-containersz > div {
      background-color: rgba(255, 255, 255, 0.8);
      text-align: center;
      
    }
    
    .item1sz {
 
     max-width: 100%;
 height: 50%;
      
    }
    .grid-containersz> div > img
    {
        width: 100%;
      
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
    