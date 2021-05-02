import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Main from "./Pages/Main";
import Login from "./Pages/Login";
import Error from "./Pages/Error";
// import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    ///////////////////////////////////////////////////////////////////////////////////////

    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Main</Link>
            </li>
            <li>
              <Link to="/Login">Login</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/Login/" component={Login} />
          <Route path="*" component={Error} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
