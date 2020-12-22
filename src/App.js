import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, HashRouter, Switch, Route} from "react-router-dom";
import Page1 from './Component/Page1';
import Page2 from './Component/Page2';
import menubar from './Component/menubar'

function App() {
  return (
  <Router>
    <HashRouter>
      <Switch>
        <Route path="/" exact component={menubar}/>
        <Route path="/Page1" component={Page1}/>
        <Route path="/Page2" component={Page2}/>
      </Switch>
    </HashRouter>
  </Router>
  );
}

export default App;
