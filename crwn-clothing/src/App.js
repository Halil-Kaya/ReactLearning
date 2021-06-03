import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'

import './App.css';
import HomePage from './pages/homePage/homepage.component.jsx';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
)


class App extends React.Component {

  constructor(){
    super()
  }

  
  render(){
    return (
      <div>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/hats' component={HatsPage} />
          </Switch>
      </div>
    )
  }

}

export default App;