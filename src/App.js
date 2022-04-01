import React from "react";
import TopBar from "./components/Topbar/Topbar"
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Settings from "./Pages/Settings/Settings";
import Write from "./Pages/Write/Write";
function App() {
  return (
    <>
      <TopBar />
      <Register/>
    </>
  );
}

export default App;
