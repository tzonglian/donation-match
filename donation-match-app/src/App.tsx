import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import ExampleChallengePage from "./example-pages/ExampleChallengePage";
import ExampleUserPage from "./example-pages/ExampleUserPage";

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
                  <Link to="/example/challenge">Example</Link>
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
            <Route
              path="/example/challenge"
              element={<ExampleChallengePage />}
            ></Route>
            <Route path="/example/user" element={<ExampleUserPage />}></Route>
            <Route path="*" element={<h1>Not Found</h1>}></Route>
          </Routes>
        </body>
      </Router>
    </div>
  );
}

function Login() {
  return <h2>Login TODO</h2>;
}
function Signup() {
  return <h2>Signup TODO</h2>;
}

function About() {
  return <h2>About TODO</h2>;
}

export default App;
