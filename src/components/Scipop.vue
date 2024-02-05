<template>
    <div class="popup">
        <div class="popup-inner">
       <slot></slot>
            <button class="popup-close">button
            </button> 
        </div>
    </div>
    
    
</template>
   <script>
  export default {
  name: 'Scipop',
  props: {
    msg: String
  }
}
   </script>
   <style >
  
   </style>
   