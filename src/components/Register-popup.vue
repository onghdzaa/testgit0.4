<template>
      <div class="hellopop">
    <div class="hello1pop">
     <div class="regisheadpop"><img class="imgpopregis" src="../assets/icon/s123.png" ><img class="imgpopregis1" src="../assets/icon/s124.png" >Pepple with walking disabilities and wheelchair users</div>
  <div class="regispop">
<input type="checkbox" id="parking" name="accessibility" value="Parking"><p>Parking for people with disabilities</p></div>

<div class="regispop">
<input type="checkbox" id="stepFreeAccess" name="accessibility" value="StepFreeAccess"><p>Step-free access to the building/property/site</p></div>

<div class="regispop">
<input :class="sssss" type="checkbox" id="accessibleRooms" name="accessibility" value="AccessibleRooms"><p>All other rooms and facilities that can be used by the guest can be reached without steps or with a lift/ramp</p></div>

<div class="regispop">

<input type="checkbox" id="accessibleToilet" name="accessibility" value="AccessibleToilet"><p>Accessible Toilet by Wheelchair</p></div>

<div class="regispop">

<input type="checkbox" id="requestedAssistance" name="accessibility" value="RequestedAssistance"><p>Requested Assistance is possible (request in advance)</p></div>
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
 #parkinginput[type="checkbox"] {
  appearance: none;
  width: 20px;
  height: 20px;
  border: 2px solid #ccc;
  border-radius: 3px;
  margin-right: 5px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}
.hellopop{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
bottom: 0;
z-index: 99;
background-color: rgba(0, 0, 0, 0.2);
display: flex;
align-items: center;
justify-content: center;

}
.hello1pop{
  width: 100%;
  max-width: 800px;
   height: 60%;
  //  gap: 20px;
   border-radius: 25px;
  background-color: #2f3e5c;
  padding: 32px;
  display: grid;
  grid-template-columns: 100%;
  justify-content: center;
  align-items: center;
}
// #parking[type="checkbox"]:checked {
//   background-color: #4caf50;
// }

label {
  display: block;
  margin-bottom: 5px;
  float: left;
}
.regispop{
  display: flex;
  align-items: center;
  // justify-content: center;
  
  color: white;
}
.regisheadpop{
  display: flex;
  align-items: center;
  color: white;
}
.imgpopregis1{
  padding-right: 2%;
  border-right: 2px solid white;
  margin-right: 2%;
}
.imgpopregis{
  padding-right: 2%;

}
.regispop p{
  padding-left: 2%;
  font-size: 0.7vw;
}
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
  