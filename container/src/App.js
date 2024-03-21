
import React, {lazy, Suspense, useEffect} from 'react'
// import MarketingApp from './components/marketingApp'
// import AuthApp from './components/AuthApp'
import Header from './components/Header'
import {BrowserRouter, Route, Switch, Router, Redirect} from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { StylesProvider, createGenerateClassName } from '@material-ui/core'
import Progress from './components/Progres'
const generateClassName = createGenerateClassName({ 
    productionPrefix: 'co'
  });
  const MarketingLazy = lazy(()=> import('./components/marketingApp'))
  const AuthLazy = lazy(()=> import('./components/AuthApp'))
  const LazyDashboard = lazy(()=> import('./components/DashboardApp'))
  const history = createBrowserHistory()

export default ()=>{

    const [isSignedIn, setIsSignedIn] = React.useState(false)
    useEffect(()=>{
        if(isSignedIn){
            history.push('/dashboard')
        }
    },[isSignedIn])
    return  <Router history={history}>  
    <StylesProvider generateClassName={generateClassName}>
     <div>
       
        <Header onSignOut={()=> setIsSignedIn(false)} isSignedIn={isSignedIn} />
        <Suspense fallback={<Progress/>}>
        <Switch>
            <Route path='/auth' >
                <AuthLazy onSignIn={()=>setIsSignedIn(true)} />
            </Route>
            <Route path='/dashboard' >
                {
                    !isSignedIn && <Redirect to='/' />
                
                }
                <LazyDashboard />
            </Route>
            <Route path='/' >
                <MarketingLazy />
            </Route>
        </Switch>
        </Suspense>
       
        
    </div>
    </StylesProvider>
    </Router>
}