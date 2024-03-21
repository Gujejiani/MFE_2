import {createApp} from 'vue'
import Dashboard from './components/Dashboard.vue'

const mount = (el)=>{
    const app = createApp(Dashboard)
    app.mount(el)
   


  

}

// if we are in development and in isolation
// call mount with devMarketingDiv
if(process.env.NODE_ENV === 'development'){
    const devMarketingDiv = document.querySelector('#_dashboard-dev-root')
    if(devMarketingDiv){
        mount(devMarketingDiv)
    }
}

// if we are running through container
// we should export the mount function

export {mount}