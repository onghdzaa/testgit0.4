<template>
 
    <div class="grid-containerxxz">
      <div class="item1">
        <div class="navmapcss">
          <div class="navmapcsss"><div class="imgmapselectweb" style="padding-left: 2%;padding-right: 1%;  display: flex;  width: 7%;"><img
              src="../assets/icon/location.gif"
              style="width: 70%;"
            /></div>
            
            <div
              class="bordertext"
              style="
                border-left: 5px solid #6b615c;
                padding-left: 2%;
                height: 80%;
                align-items: center;
                display: flex;
              "
            >
              <p style="margin: 0px; font-size:1vw;">CHOOSE BY LOCATION</p>
            </div></div>
        </div>
        <img src="../assets/img/N1.gif" usemap="#image-map" class="iconmapselectweb" />

        <!-- <map name="image-map">
          <area
            target="_self"
            alt="northern of thailand"
            title="northern of thailand"
            href="north.html"
            coords="19,117,35,112,30,94,37,77,48,49,70,55,87,47,101,30,122,30,118,17,134,18,151,21,162,16,173,33,165,52,185,65,197,58,207,60,205,73,212,89,208,110,200,122,206,140,192,161,191,175,199,184,197,201,205,191,222,195,233,210,211,242,214,267,212,285,184,276,169,297,149,278,150,286,132,285,134,297,128,300,112,295,99,298,78,270,83,242,91,229,81,233,68,208,69,195,62,194,49,181,45,170,34,160,33,147,27,128,19,125"
            shape="poly"
          />
          <area
            target="_self"
            alt="southern of thailand"
            title="southern of thailand"
            href="south.html"
            coords="163,659,168,684,187,709,199,716,210,712,223,715,232,730,248,744,248,756,241,767,231,770,222,761,204,774,196,768,201,750,189,742,182,734,130,731,107,732,98,678,60,671,39,584,83,522,102,504,118,506,148,565"
            shape="poly"
          />
          <area
            target="_self"
            alt="eastern of thailand"
            title="eastern of thailand"
            href="eastern.html"
            coords="193,166,203,173,250,132,280,149,311,119,346,124,382,169,388,178,394,231,416,248,428,266,423,286,427,303,421,323,402,340,293,342,273,348,251,343,232,334,216,330,207,325,208,312,216,298,210,299,212,282,214,251,212,239,232,210,229,196,215,191,205,190,199,196,199,184,192,176"
            shape="poly"
          />
          <area
            target="_self"
            alt="center of thailand"
            title="center of thailand"
            href="center.html"
            coords="74,266,94,295,110,302,114,296,126,303,136,294,132,284,148,285,152,277,161,289,162,298,170,295,186,276,203,278,211,284,211,299,217,306,210,313,207,323,217,329,227,329,233,334,244,332,251,341,269,346,280,342,293,341,282,366,275,374,262,376,263,392,270,404,272,415,285,432,294,470,276,478,233,416,219,424,193,425,189,409,192,385,175,375,152,382,145,389,152,401,149,444,137,467,124,498,120,508,108,507,104,498,118,470,122,456,114,426,106,416,101,402,104,392,107,373,101,363,94,353,85,345,73,333,59,314,55,296"
            shape="poly"
          />
        </map> -->
      </div>
      <div class="item2">
        <div class="navmapcss">
          <div class="navmapcsss"><div class="imgmap" style="padding-left: 2%; display: flex; float: left; width: 7%;"><img
              src="../assets/icon/find.gif"
              style="width: 70%;"
            /></div>
            
            <div
              class="bordertext"
              style="
                padding-left: 2%;
                border-left: 5px solid #6b615c;
                height: 80%;
                align-items: center;
                display: flex;
              "
            >
            <p style="margin: 0px; font-size:1vw;">CHOOSE BY ACTIVTIES</p>
            </div></div>
        </div>
        <div class="con">
          <div class="item1zzzz">
            <router-link to="/city"> 
            <img class="iconselectweb" src="../assets/img/s1.png" />
            </router-link>
          </div>
          <div class="item1zzzz">
            <img class="iconselectweb" src="../assets/img/s2.png" />
          </div>
          <div class="item1zzzz">
            <img class="iconselectweb" src="../assets/img/s3.png" />
          </div>
          <div class="item1zzzz">
            <img class="iconselectweb" src="../assets/img/s4.png" />
          </div>
        </div>
      </div>
    </div>

  <div class="navbar">
    <navbar></navbar>
  </div>
</template>
<script>
import navbar from "@/components/Navbar-web.vue";
export default {
  components: {
    navbar,
  },
  data() {
    return {
      isOpen: false,
      active: "register",
    };
  },
  methods: {},
};
</script>
<style>
body {
  background-image: url("../assets/img/BG1.png");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: 100% 100%;
}


.grid-containerxxz {
  padding-top: 20px;
  display: grid;
  justify-content: center;
  align-content: center;
  /* width: 100%; */
  grid-template-columns: 30% 30%;
  /* grid-template-rows: auto 2000px;  */
  gap: 100px;
  /* background-color: #2196F3; */
  padding: 80px;

  /* justify-content: center; */
}
.navmapcss {
  width: 100%;
  /* background-color: whitesmoke; */
  justify-content: center;
  display: flex;
  height: 6%;
}
.navmapcsss {
  width: 100%;
  /* position: relative; */
  /* border-left: 5px solid gray; */
  /* justify-content: center; */
  display: flex;
  align-items: center;
  background-color: white;
  /* padding-bottom: 10%; */
}
.con {
  grid-template-columns: auto auto;
  display: grid;
  padding-top: 2%;

  gap: 5%;
}
.grid-containerxxz > div {
  /* background-color: rgba(255, 255, 255, 0.8); */
  /* text-align: center; */
  width: 99%;
height: 100%;
  /* justify-content: center; */
  /* height: 50px; */
  /* height: 100%; */
  /* height: 100%; */
}
.item1 {
  width: 50%;
}
.item2 {
  /* padding-left: 10%; */
  /* float: left; */
  width: 50%;
}
.iconmapselectweb {
  width: 50%;
  padding-top: 2%;
  /* max-width: 400px; */
  /* min-width: 200px; */
  /* height: 100%; */
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.iconselectweb {
  border-style: solid;
  border-color: white;
  border-width: 10px;
  width: 100%;
}
@media only screen and (max-width: 600px) {
.grid-containerxxz{
  display: grid;
    width: 100%;
    grid-template-columns: auto ;
    /* background-color: white; */
    gap: 20px;      /* border-left: 5px solid gray; */
    padding: 50px;
}
/* .grid-containerxxz {
  padding-top: 20px;
  display: grid;
  justify-content: center;
  align-content: center;

  grid-template-columns: 30% 30%;
  
  gap: 100px;
 
  padding: 80px;


} */
/* .icon{
    border-style: solid;
  border-color: white; */
  /* border-width: 10px; */
  /* border-color: white; */
  /* border-width: 2px;
    width: 100%;
  }
  .backimage{
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
} */
}
</style>
