import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import Login from "./Pages/Login";
import Main from "./Pages/Main";
import Error from "./Pages/Error";
import styling from "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <div className={styling.wrapper}>
        <Router>
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/Main/" component={Main} />
            <Route path="*" component={Error} />
          </Switch>
        </Router>
      </div>
      <Footer />
    </>
  );
}

export default App;
