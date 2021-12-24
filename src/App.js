//import logo from './logo.svg';
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import SignIn from "./pages/SignIn";
import CreatePost from "./pages/createPost";
import { useState } from "react";
import { signOut } from "firebase/auth";
//import {us} from "react-router-dom"
import { auth } from "./firbase";
function App() {
  //let navigate = useNavigate(false)
  const [isAuth, setIsAuth] = useState(false);
  const sigOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/signin";
      //navigate("/signin")
    });
  };
  return (
    <BrowserRouter>
      <nav className="navbar">
        <Link style={{ textDecoration: "none" }} to="/">
          Home
        </Link>

        {!isAuth ? (
          <Link style={{ textDecoration: "none",marginLeft:"10%" }} to="/signin">
            SignIn
          </Link>
        ) : (
          <>
            <Link
              style={{ textDecoration: "none", margin: "0 10%" }}
              to="/createpost"
            >
              CreatePost
            </Link>
            <button onClick={sigOut}>Logout</button>
          </>
        )}
      </nav>
      <div className="App-header">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            exact
            path="/signin"
            element={<SignIn setIsAuth={setIsAuth} />}
          />
          <Route exact path="/createpost" element={<CreatePost isAuth={isAuth}/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
