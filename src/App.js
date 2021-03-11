import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NotFound from './components/NotFound/NotFound';
import LeagueDetail from './components/LeagueDetail/LeagueDetail';

function App() {

  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/league/:leagueId">
          <LeagueDetail></LeagueDetail>
        </Route>
        <Route path="*">
            <NotFound></NotFound>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
