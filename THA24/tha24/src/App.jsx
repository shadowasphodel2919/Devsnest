import { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import './App.css';

function App() {
  const [logIn, setLogIn] = useState(false);
  const [text, setText] = useState("Login");
  return (
    <div className="App">
      <Router>
        <div>
          <NavBar />

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/profile">
            {logIn?<Profile />:<Redirect to="/" />}
            </Route>
            <Route path="/dashboard">
              {logIn?<Dashboard />:<Redirect to="/" />}
            </Route>
            <Route path="/">
              <Home 
              logIn={logIn}
              setLogIn={setLogIn}
              text={text}
              setText={setText}
              />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;

function NavBar() {
  return (
    <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
            </ul>
          </nav>
  );
}

function Home({logIn, setLogIn, text, setText}) {
  
  return (
    <div className="home">
      <h2>Home</h2>
      This is the homepage.
      <div>
        <button onClick={(e)=>{
          logIn?setLogIn(false):setLogIn(true);
          console.log(logIn);
          logIn?setText("LogIn"):setText("LogOut");
        }}>{text}</button>
      </div>
    </div>
  );
}

function About() {
  return (<h2>About</h2>);
}

function Profile() {
  return <h2>Profile</h2>;
}

function Dashboard() {
  return (
    <div className="dashboard">
      <h2>Dashboard: Private Route</h2>
    </div>
  );
}
