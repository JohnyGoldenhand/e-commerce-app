
import './App.css';
import HomePage from './pages/homepage/HomePage';
import {Route, Switch} from 'react-router-dom';
import ShopPage from './pages/ShopPage/ShopPage';
import Header from './components/header/header'
import SignInPage from './pages/SignInPage/SignInPage'

function App() {
  return (
    <div>
    <Header/>
    <Switch>
      <Route  exact path='/' component={HomePage}/>
      <Route  path='/shop' component={ShopPage}/>
      <Route  path='/signin' component={SignInPage}/>
    </Switch>

    </div>
  );
}

export default App;
