import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'

import './App.css';
import HomePage from './pages/homePage/homepage.component.jsx';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component.jsx'

class App extends React.Component {

  constructor(){
    super()
  }

  
  render(){
    return (
      <div>
          <Header/>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/shop' component={ShopPage} /> 
          </Switch>
      </div>
    )
  }

}

export default App;