
import './App.css';
import HomePage from './pages/homepage/HomePage';
import {Route, Switch} from 'react-router-dom';
import ShopPage from './pages/ShopPage/ShopPage';
import Header from './components/header/header'
import SignInPage from './pages/SignInPage/SignInPage'
import {auth} from './firebase/firebase.utils';
import React from 'react';

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user});

      console.log(user);
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }


  render(){
    return (
      <div>
      <Header currentUser={this.state.currentUser}></Header>
      <Switch>
        <Route  exact path='/' component={HomePage}/>
        <Route  path='/shop' component={ShopPage}/>
        <Route  path='/signin' component={SignInPage}/>
      </Switch>
  
      </div>
    );
  }
}

export default App;
