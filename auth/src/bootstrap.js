import React from 'react';
import ReactDom from 'react-dom'
// Mount function to start up the app
import {createMemoryHistory, createBrowserHistory} from 'history'
import App from './App'

const mount = (el, {onNavigate, defaultHistory, initialPath, onSignIn})=>{
    const history = defaultHistory || createMemoryHistory(
        {
            initialEntries: [initialPath]
        }
    )
    if(onNavigate){
        history.listen(onNavigate)

    }
    ReactDom.render(<App onSignIn={onSignIn} history={history} />,el)


    return {
        onParentNavigate({pathname: nextPathname}){
            const {pathname} = history.location
            console.log('auth noticed parent container navigation in Auth app', nextPathname, pathname)
            if(pathname !== nextPathname){
                history.push(nextPathname)
            }
        }
}

}

// if we are in development and in isolation
// call mount with devMarketingDiv
if(process.env.NODE_ENV === 'development'){
    const devMarketingDiv = document.querySelector('#_auth-dev-root')
    if(devMarketingDiv){
        mount(devMarketingDiv, {defaultHistory: createBrowserHistory()})
    }
}

// if we are running through container
// we should export the mount function

export {mount}