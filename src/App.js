import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Sports from './components/Sports/Sports';
import SportDetails from './components/SportDetails/SportDetails';
import Header from './Header/Header';
import { useContext } from 'react';

function App() {
  return (
    
    <div className="App">
      
   <Router>
      <div style={{background:"pink"}}>
      
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
            <Route path="/sport/:id">
            <SportDetails></SportDetails>
          </Route>
            
          <Route path="/sport">
            <Sports></Sports>
          </Route>
      
          <Route path="*">
            <NotFound></NotFound>

          </Route>
        </Switch>
      </div>
    </Router>
   
    </div>
  );
}

export default App;
