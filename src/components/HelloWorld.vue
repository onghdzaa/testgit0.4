<template>
  <div class="hello">
    <div class="hello1">
    <!-- <h1>{{ msg }}</h1> -->
    <h3>Request for Specific info</h3>
    <ul>
     
 
      <!-- <li><button v-on:click="redirect_to_login"><img v-bind:src="imgmain" > </button></li> -->
      <!-- <li><img id ="img1" @click="counters()" @mouseover="setNewimg(imgmain)" @mouseout="setOldimg(imgmain)" src="../assets/icon/LM.png"></li> -->
      <li><img v-bind:src="imgmain" @click="counters()" @mouseover="setNewimg(imgmain)" @mouseout="setOldimg(imgmain)"></li> 
      <li><img v-bind:src="imgmain" @click="counters()" @mouseover="setNewimg(imgmain)" @mouseout="setOldimg(imgmain)"></li>
      <li><img v-bind:src="imgmain" @click="counters()" @mouseover="setNewimg(imgmain)"  @mouseout="setOldimg(imgmain)"></li>
     <!-- //<button @click="counters()">Add 1</button> -->
    

    </ul>
    <!-- <h3>Ecosystem</h3> -->
    <ul>
      <!-- <imgscipop/> -->
        <div class="root">
      <button @click="countersx()"
                        class="btn btn-info" 
                        style="background-color: #17A2BB; width: 500px; height: 100px; font-size: 4ch;  border-radius: 25px;
                        color : #fff ">CONFIRM
                        </button>
                       
                        <div class="modal" v-if="isOpen">
                          
                         <div class="hello">
                          <div class="hello1">
 <button @click="isOpen= false"
                          class="btn btn-info" 
                          style="background-color: #17A2BB; width: 500px; height: 125px; font-size: 4ch;  border-radius: 25px;
                           color : #fff ">Continue as a guest
                        </button> 
                          <ul>
                            <li>
                              <router-link to="/login"><button @click="isOpen= false"
                          class="btn btn-info" 
                          style="background-color: #17A2BB;  width: 500px; height: 125px; font-size: 4ch;  border-radius: 25px;
                           color : #fff ">Log In / Sign Up
                         </button></router-link>
                      </li>
                    </ul>
                      <ul>
                         
                       </ul>
                      </div>
                        </div>
                    </div> 
                        </div>
                        
    </ul>
    </div>
  </div>
</template>

<script>

// import imgscipop from '@/components/Scipop.vue'
export default {
  // components: {
  //   imgscipop
  // },

  // name: 'HelloWorld',
  //  props: {
  //   msg: String
  // },
  data() {
    return {  
    imgmain: require("../assets/icon/LM.png"),
    imgexit: require("../assets/icon/zz.png"),
    isOpen: false,
    tst:"string",
      //  list:[{
      //   pg:1,
      //   pgsrc: require("../assets/icon/LM.png")
      //  },
      //  {
      //   pg:2,
      //   pgsrc: require("../assets/icon/HL1.png")
      //  },
      //  {
      //   pg:3,
      //   pgsrc: require("../assets/icon/zz.png")
      //  }
      // ]
      
    //counter=0;

    };
  }
    ,
  methods: {
    countersx(){
      console.log("xxxxx");
      console.log(this.isOpen);
      this.isOpen=true;
      console.log(this.isOpen);
        },
        counters(){
      console.log("xxxx");
       this.imgmain =  require("../assets/icon/zz.png")
        },
        setNewimg(img){
          this.imgmain =  require("../assets/icon/HL1.png")
         console.log(img);
        //  if(isOpen==true){}
        //  if(img!=require("../assets/icon/zz.png")){
        //    //console.log(img);
        // // console.log("Xxx");
        //   this.imgmain =  require("../assets/icon/HL1.png")
        //  }else{
        //   console.log("zzzz");
        //  }
         
        // img.src = require("../assets/icon/HL1.png") ;
        }, setOldimg(img){
          if(img!=require("../assets/icon/zz.png")){
            this.imgmain =  require("../assets/icon/LM.png")
          }else{
            
            console.log(this.imgmain);
          }
         // console.log("XxxX");
         // img.src = '../assets/icon/HL1.png';
        }
           
       
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.root{
  position: relative;
}
.modal{
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.1);
   width: 100%;
   height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
// .modal > div{
//   background-color: white;
//   padding: 50px;
//   border-radius: 10px;
// }
.hello{

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
.imgLM{
  width: 10%;
 height: auto;
}
// img{
// width: 50%;
//  height: auto;
// }
button{
  padding: 0;
// border: none;
 // outline: none;
  border-radius: 5px;
  overflow: hidden;
  background-color: #2f3e5c;
}.helloq{
  width: 39cm;
   height: 18cm;
   border-radius: 25px;
  background-color: #2f3e5c;
  padding: 32px;
}
.hello1{
   width: 39cm;
   height: 18cm;
   border-radius: 25px;
  background-color: #2f3e5c;
  padding: 32px;
}
h3 {
  font-size: 5ch;
  margin: 40px 0 0;

}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
