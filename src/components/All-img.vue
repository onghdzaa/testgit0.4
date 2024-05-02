<template>
   <p>sss</p>
   <img v-for="x in manyImg" v-bind:key="x" v-bind:src="x">      {{manyImg}}
   <!-- <img v-for="x in manyFoods" v-bind:src="x"> -->

</template>
<script>
import  axios  from 'axios';
export default {
 
  data() {
    return {  
      manyImg: [],
    description :'',
     username:'suksri_1',
    email:'suksri@hotmail.com',
   
     img:'http://pm2.derive.co.th/tourism/',
    };
  },
  created(){
axios.get('http://pm2.derive.co.th/tourism/api/touristSites/1').then((response) =>{
 console.log(response.data[0].imagesOfTouristSite);
 let x=0
 for (let index = 0; index < response.data[0].imagesOfTouristSite.length; index++) {
    if(response.data[0].imagesOfTouristSite[index].fileType=='IMG'){
        this.manyImg[x++]=this.img.concat(response.data[0].imagesOfTouristSite[index].imagePath);
console.log("s");
console.log(this.manyImg[index]);
    }
    
}
//    this.manyImg=response.data[0].imagesOfTouristSite;
   console.log(this.manyImg);
}  )
      },
  components: {

  },
  methods: {

},

}

</script>
<style>



</style>