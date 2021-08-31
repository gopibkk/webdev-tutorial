import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import Home from './pages/Home';
import MyNavbar from './components/MyNavbar';
import NotFound from './pages/NotFound';
import Register from './pages/Register';
import Login from './pages/Login';
import Deposit from './pages/Deposit';
import Data from './pages/Data';

function App() {
  return (
    <Router>
      <div className="container">
        <MyNavbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/deposit">
            <Deposit />
          </Route>
          <Route exact path="/data">
            <Data />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
