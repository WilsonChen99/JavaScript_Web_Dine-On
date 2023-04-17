import React, { useState } from "react";
import "./LoginPage.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import LoginBanner from "../components/LoginBanner";
import Profile from "./Profile";
import Home from "./home";
import EVKRegistered from "./EVKRegistered";
import ParksideRegistered from "./ParksideRegistered";
import VillageRegistered from "./VillageRegistered";
import { UserContext } from "../components/UserContext";
import { useContext } from "react";

function LoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [invalidLogin, setInvalidLogin] = useState(false);
  const { setEmail } = useContext(UserContext);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    if (username === "username" && password === "password") {
      setEmail(username);
      navigate("/homer");
    } else {
      console.log("Wrong login");
      setInvalidLogin(true);
    }
  };

  return (
    <>
      <LoginBanner />
      <form onSubmit={handleLogin} className="login-box">
        <label className="login-label">
          USC EMAIL
          <input type="text" value={username} onChange={handleUsernameChange} />
        </label>
        <br />
        <label className="login-label">
          PASSWORD
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
        <br />
        <button type="submit" className="login-page-button">
          Login
        </button>
        {invalidLogin && <p>Invalid login credentials.</p>}
        <button className="login-page-button">
          <Link to="/registration">Sign Up</Link>
        </button>
        <button className="">
          <Link to="/homeu">Continue as Guest</Link>
        </button>
      </form>
    </>
  );
}

export default LoginPage;