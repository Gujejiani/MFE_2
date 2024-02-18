import React from 'react';
import ReactDom from 'react-dom'
// Mount function to start up the app
import App from './App'

const mount = (el)=>{
    ReactDom.render(<App/>,el)

}

// if we are in development and in isolation
// call mount with devMarketingDiv
if(process.env.NODE_ENV === 'development'){
    const devMarketingDiv = document.querySelector('#_marketing-dev-root')
    if(devMarketingDiv){
        mount(devMarketingDiv)
    }
}

// if we are running through container
// we should export the mount function

export {mount}