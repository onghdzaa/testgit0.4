<template>
      <div class="hello">
    <div class="hello1">
    <h1>ssssssssss</h1>
    <button  @click="$emit('close')">ssssssssxxxxxxxxs</button>
    <!-- <button  @click="ohpop()">szzzzzzzzzzz</button> -->
      </div>
    </div>
  </template>
  
  <script>
// import { ref } from 'vue';
import { defineEmits } from 'vue';
  
  
  export default {
    props:["ohpop"],
    setup(props){
        console.log(props)
    },
    // setup(){
    //   const popTrigger = ref({
    //     bottomTrigger :false,
    //   })
    //   const togglePopup = (triger)
    // },
//     created(props){
// console.log(props.ohpop);
//     },
    data() {
      return {  
         isOpen:true,
      };
    }
      ,
    methods: {
  // closebtm(propss) {
  //   console.log("close");
  //   // console.log(this.$props);
  //           console.log(this.isOpen);
  //           console.log(propss);
  //           console.log(this.props);
  //           // props=false;
  //           // console.log(props);
  //           // this.props.ohpop = this.isOpen;
  //       //  console.log(this.$props.ohpop);
  //       },
      }
  }
  defineEmits("close")
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style lang="scss">
 
  // .modal > div{
  //   background-color: white;
  //   padding: 50px;
  //   border-radius: 10px;
  // }
//   .hello{
  
//     position: fixed;
//     top: 0;
//     left: 0;
//     right: 0;
//   bottom: 0;
//   z-index: 99;
//   background-color: rgba(0, 0, 0, 0.2);
//   display: flex;
//   align-items: center;
//   justify-content: center;
  
//   }
//   .hello1{
//      width: 39cm;
//      height: 18cm;
//      border-radius: 25px;
//     background-color: #2f3e5c;
//     padding: 32px;
//   }
//   h3 {
//     font-size: 5ch;
//     margin: 40px 0 0;
  
//   }
//   ul {
//     list-style-type: none;
//     padding: 0;
//   }
//   li {
//     display: inline-block;
//     margin: 0 10px;
//   }
//   a {
//     color: #42b983;
//   }
  </style>
  