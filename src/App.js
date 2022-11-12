import React, { useState } from "react";
import Userinput from "./Components/Userinput";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
function App() {

  const [roll, setRoll] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");
  const [login, setLogin] = useState(false);

  const handleSubmit = (e) => {
    // prevent the form from refreshing the whole page
    e.preventDefault();
    setLogin(true);
  };

  const renderForm = (
    <div className="form">
      <div className="title">Schedule Creator Portal </div>
      <form >
        <div className="input-container">
          <label>Email </label>
          <input type="text" name="roll" required />
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="password" required />
        </div>
        <div className="button-container">
          <input type="submit" value={"Log In"} onClick={(e) => handleSubmit(e)} />
          <input type="submit" value={"Sign Up"} />
        </div>
      </form>
    </div>
  );
  if (login) {
    return (
      <>
        <Userinput />
      </>
    );
  }
  else {
    return (
      <div className="app">
        <div className="login-form">
          {renderForm}
        </div>
      </div >
    );
  }
}

export default App;