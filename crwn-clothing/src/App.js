import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'

import './App.css';
import HomePage from './pages/homePage/homepage.component.jsx';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component.jsx'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth,createUserProfileDocument } from './firebase/firebase.utils'


class App extends React.Component {

  constructor(){
    super()

    this.state = {
      currentUser : null
    }

  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {

      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapShot => {
             this.setState({
               currentUser : {
                 id : snapShot.id,
                 ...snapShot.data()
               }
             })
        })
        

        console.log(this.state)

      }

      this.setState({currentUser : userAuth})

    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  
  render(){
    return (
      <div> 
          <Header currentUser={this.state.currentUser}/>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/shop' component={ShopPage} /> 
            <Route exact path='/signin' component={SignInAndSignUpPage} /> 
          </Switch>
      </div>
    )
  }

}

export default App;