import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
//import router from './router'
import VueGoogleMaps from '@fawmi/vue-google-maps'

const app = createApp(App)
app.use(VueGoogleMaps,{
    load:{
        key:'AIzaSyBnHYFLe-0JVKOSTX5_LYQg1UMFP-rlwhQ'
    }
})
//app.use(router)

app.mount('#app')
