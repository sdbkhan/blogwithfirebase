import React from "react";
import { auth, provider } from "../firbase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const SignIn = ({ setIsAuth }) => {
  let navigate = useNavigate();
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/");
    });
  };
  return (
    <div className="signindiv">
      <p>Sign in with Google account</p>
      <button className="signinbtn" onClick={signInWithGoogle}>
        Sign in with Google
      </button>
    </div>
  );
};

export default SignIn;
