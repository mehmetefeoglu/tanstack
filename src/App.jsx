import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Router, Switch } from 'react-router-dom'
import Profile from './components/Profile'
import ProductList from './components/ProductList'
import React from "react";

function App() {
  
  return (
    
      <Switch>
        <Route exact path = "/" component ={Profile}/>
        <Route path = "/product" component ={ProductList}/>
        
      </Switch>
     
   
  )
}

export default App
