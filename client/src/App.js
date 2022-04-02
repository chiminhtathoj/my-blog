import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Settings from "./Pages/Settings/Settings";
import Write from "./Pages/Write/Write";
import TopBar from "./components/Topbar/Topbar"
import Home from "./Pages/Home/Home";
import Single from "./Pages/Single/Single";


function App() {
  const user = false;
  return (
    <>
      <TopBar />
      <Routes>
        <Route path="login" element={user ? <Home /> : <Login />} />
        <Route path="/" element={<Home />} />
        <Route path="Register" element={user ? <Home /> : <Register />} />
        <Route path="Settings" element={user ? <Settings /> : <Login />} />
        <Route path="Write" element={user ? <Write /> : <Login />} />
        <Route path="Single" element={<Single />} />

      </Routes>
   
    </>
  );
}

export default App;
