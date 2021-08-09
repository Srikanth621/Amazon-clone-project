import { auth } from "./firebase";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState("password");
  const [exist, setExist] = useState(true);
  const [disabled, setDisabled] = useState(false);

  let history = useHistory();

  const showAndHidePassword = (e) => {
    // e.preventDefault();
    if (exist) {
      setExist(false);
      setShowPassword("text");
    } else {
      setExist(true);
      setShowPassword("password");
    }
  };

  const handleChange = (event) => {
    
      event.target.value > 1 ? setDisabled(true) : setDisabled(false);
    

    setPassword(event.target.value);
  };

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>
      <div className="login__container">
        <h1>Sign-In</h1>
        <form>
          <h5>Email</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <span className="login__pwdInput">
            <input
              type={showPassword}
              value={password}
              onChange={handleChange}
            />
            {disabled && (
              <span
                className="login_showPassword"
                onClick={showAndHidePassword}
              >
                {exist ? <VisibilityIcon /> : <VisibilityOffIcon />}
              </span>
            )}
          </span>

          <button
            className="login__signInButton"
            type="submit"
            onClick={signIn}
          >
            Sign In
          </button>
        </form>
        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
        <button onClick={register} className="login__registerButton">
          Create Your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
