import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vue3GoogleLogin from 'vue3-google-login'
// import FacebookLogin from "vue3-facebook-login"
// import VFacebookLogin from 'vue-facebook-login-component'
// import "bootstrap/dist/css/bootstrap.min.css"
// import "bootstrap"
// const app = createApp(App)
const app = createApp(App)
app.use(vue3GoogleLogin, {
  clientId: '185924172074-gohfu6ps2mtuhpq9qaach6dve00np6il.apps.googleusercontent.com'
})
// app.use(FacebookLogin, {
// })
// app.use(VFacebookLogin, {
//      id:'1069212137469617'
//   })
// app.mount('#app')
createApp(App).use(router).mount('#app')
