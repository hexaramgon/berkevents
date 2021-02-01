import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Landing from './pages/Landing';
import Error from './pages/Error';
import Rates from './pages/Rates';
import Contact from './pages/Contact';
import Berklogo from './IMG_7742.png'
import PastEvents from './pages/PastEvents';


function App() {
  return (
    <div className="App">
        <Router>
          <div>
            {/* <nav>
              <ul>
                <li>
                  <Link to="/">Landing</Link>
                </li>
                <li>
                  <Link to="/about">Contact</Link>
                </li>
                <li>
                  <Link to="/users">Rates</Link>
                </li>
              </ul>
            </nav> */}

          <div className = "temp">
              <Link to="/">
              <img src={Berklogo} className="logofix"></img>
              </Link>
              <div className="threewords">
                  <Link to="/PastEvents">
                  <a>Past Events</a>
                  </Link>
                  <Link to ="/Rates">
                  <a className="fromCenter">Rates</a>
                  </Link>
                  <Link to ="/ContactUs">
                  <a>Contact Us</a>
                  </Link>
                </div>
              </div>


            <Switch>
              <Route path="/" exact>
                <Landing />
              </Route>
              <Route path="/PastEvents">
                <PastEvents />
              </Route>
              <Route path="/Rates">
                <Rates />
              </Route>
              <Route path="/ContactUs">
                <Contact />
              </Route>
              <Route path="*">
                <Error/>
              </Route>
            </Switch>
          </div>
        </Router>
    </div>
  );
}

export default App;
