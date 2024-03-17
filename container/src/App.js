
import React from 'react'
import MarketingApp from './components/marketingApp'
import Header from './components/Header'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import AuthApp from './components/AuthApp'
import { StylesProvider, createGenerateClassName } from '@material-ui/core'
const generateClassName = createGenerateClassName({ 
    productionPrefix: 'co'
  });
export default ()=>{
    return  <BrowserRouter>  
    <StylesProvider generateClassName={generateClassName}>
     <div>
       
        <Header/>

        <Switch>
            <Route path='/auth' component={AuthApp} />
            <Route path='/' component={MarketingApp} />
        </Switch>
        
    </div>
    </StylesProvider>
    </BrowserRouter>
}