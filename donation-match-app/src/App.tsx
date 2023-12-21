import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <h3>Donation Match Challenge</h3>
          <div>
            <nav>
              <ul className="nav-bar">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/signup">Signup</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <body className="App-body">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/about" element={<About />}></Route>
          </Routes>
        </body>
      </Router>
    </div>
  );
}

function Login() {
  return <h2>Login</h2>;
}
function Signup() {
  return <h2>Signup</h2>;
}

function About() {
  return <h2>About</h2>;
}

export default App;
