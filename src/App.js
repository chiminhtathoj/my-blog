import React from "react";
import TopBar from "./components/Topbar/Topbar"
import Home from "./Pages/Home/Home";
import Settings from "./Pages/Settings/Settings";
import Write from "./Pages/Write/Write";
function App() {
  return (
    <>
      <TopBar />
      <Settings/>
    </>
  );
}

export default App;
