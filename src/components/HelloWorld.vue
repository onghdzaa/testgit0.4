<template>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <div class="hello">
    <div class="hello1">
    <!-- <h1>{{ msg }}</h1> -->
    <!-- <div style="width: 100%; height: 10%;"> </div> -->
    <h3 style="font-size:4vw;">Request for Specific info</h3>
    <ul>
     
 
      <!-- <li><button v-on:click="redirect_to_login"><img v-bind:src="imgmain" > </button></li> -->
      <!-- <li><img id ="img1" @click="counters()" @mouseover="setNewimg(imgmain)" @mouseout="setOldimg(imgmain)" src="../assets/icon/LM.png"></li> -->
      <li><img v-bind:src="imgmain" style="width: 100%;" @click="counters()" @mouseover="setNewimg(imgmain)" @mouseout="setOldimg(imgmain)"></li> 
      <li><img v-bind:src="imgmain" style="width: 100%;" @click="counters()" @mouseover="setNewimg(imgmain)" @mouseout="setOldimg(imgmain)"></li>
      <li><img v-bind:src="imgmain" style="width: 100%;" @click="counters()" @mouseover="setNewimg(imgmain)"  @mouseout="setOldimg(imgmain)"></li>
     <!-- //<button @click="counters()">Add 1</button> -->
    

    </ul>
    <!-- <h3>Ecosystem</h3> -->
    <ul>
      <!-- <imgscipop/> -->
        <div class="root">
      <button @click="countersx()"
                        class="btn btn-info" 
                        style="background-color: #525495; width: 30%; height: 50px;  border-radius: 8px ; border-color: #fff;
                        color : #fff  "> <p style="margin: 0px; font-size:1vw;">CONFIRM</p>
                        </button>
                       
                        <div class="modal" v-if="isOpen">
                          
                         <div class="hello2">
                          <div class="hello12">
                            <!-- <img src="../assets/img/x-mark.png" style="width: 5%; float: right;" alt=""> -->
                            <div class="box">
                        <div class="itm1" >
                         <router-link to="/select">   <button 
                          class="btn btn-info" 
                          style="background-color: #17A2BB; width: 100%; height: 50px;   border-radius: 25px;
                           color : #fff "><p style="margin: 0px; font-size:2vw;">Continue as a guest</p>
                        </button> </router-link>
                         </div>
                         <div class="itm1">
                              <router-link to="/login"><button @click="isOpen= false"
                          class="btn btn-info" 
                          style="background-color: #17A2BB;  width: 100%; height: 50px;  border-radius: 25px;
                           color : #fff "><p style="margin: 0px; font-size:2vw;">Log In / Sign Up</p>
                         </button></router-link>
                        </div>
                 
                     </div>
                      </div>
                        </div>
                    </div> 
                        </div>
                        
    </ul>
    </div>
  </div>
</template>

<script>
// import select from '../components/Select-web.vue'
// import imgscipop from '@/components/'
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
    // select
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
.box{
  width: 100%;
  height: 50%;
}
.hello2{
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
}
.hello1{
  max-width: 50%;
   height: 60%;
   border-radius: 25px;
  background-color: #2f3e5c;
  padding: 32px;
  display: grid;
  justify-content: center;
  align-items: center;
}
.hello12{
  // display: flex;
  // align-items: center;
  // justify-content: center;
  display: grid;
  grid-template-columns: auto auto;
   width: 50%;
   height: 60%;
   border-radius: 25px;
  background-color: #2f3e5c;
  padding: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.itm1{
 padding-left: 25%;
  align-items: center;
  justify-content: center;
  height: 50%;
  width: 50%;
}
h3 {
  font-size: 5ch;
  margin: 40px 0 0;
color: white;}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
  width: 20%;
}
a {
  color: #42b983;
}
</style>
