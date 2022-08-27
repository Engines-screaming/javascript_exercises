import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter, NavLink } from 'react-router-dom';
import VendingMachine from './VendingMachine';
import Soda from './Soda';
import Candy from './Candy';
import Chips from './Chips';

function App() {
  return (
    <div className="App">
      <h1>VENDING MACHINE:</h1>
      <BrowserRouter>
        <Route exact to="/">
          <VendingMachine />
        </Route>
        <Route exact path="/soda">
            <Soda />
        </Route>
        <Route exact path="/chips">
            <Chips />
        </Route>
        <Route exact path="/candy">
            <Candy />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
