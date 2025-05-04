import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';
import Header from './Order/Header.jsx';
import Order from './Order/order.jsx';
import Main from './Order/Main.jsx';
import Success from './Order/success.jsx';

function App() {
  return (
    <div className="app-container">
      <Switch>
        <Route path="/" exact>
          <Main />
        </Route>
        
        <Route path="/order">
          <Header />
          <Order />
        </Route>
        
        <Route path="/success">
          <Success />
        </Route>
      </Switch>
    </div>
  );
}

export default App;