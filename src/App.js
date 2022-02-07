
import './App.css';
import HomePage from './pages/homepage/HomePage';
import {Route, Switch} from 'react-router-dom';


const HatsPage = () => (
  <h1>Hats Page</h1>
)

function App() {
  return (
    <div>
    <Switch>
      <Route  path='/' component={HomePage}/>
      <Route  path='/hats' component={HatsPage}/>
    </Switch>

    </div>
  );
}

export default App;
