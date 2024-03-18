
import React, {lazy, Suspense} from 'react'
// import MarketingApp from './components/marketingApp'
// import AuthApp from './components/AuthApp'
import Header from './components/Header'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import { StylesProvider, createGenerateClassName } from '@material-ui/core'
import Progress from './components/Progres'

const generateClassName = createGenerateClassName({ 
    productionPrefix: 'co'
  });
  const MarketingLazy = lazy(()=> import('./components/marketingApp'))
  const AuthLazy = lazy(()=> import('./components/AuthApp'))
export default ()=>{

    const [isSignedIn, setIsSignedIn] = React.useState(false)

    return  <BrowserRouter>  
    <StylesProvider generateClassName={generateClassName}>
     <div>
       
        <Header onSignOut={()=> setIsSignedIn(false)} isSignedIn={isSignedIn} />
        <Suspense fallback={<Progress/>}>
        <Switch>
            <Route path='/auth' >
                <AuthLazy onSignIn={()=>setIsSignedIn(true)} />
            </Route>
            <Route path='/' >
                <MarketingLazy />
            </Route>
        </Switch>
        </Suspense>
       
        
    </div>
    </StylesProvider>
    </BrowserRouter>
}