import "./App.css";
import Alert from "./Components/Alert";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
// import About from "./Components/About";
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
//   Link,
// } from "react-router-dom";
import React, { useState } from "react";
function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      setMode("dark");
      showAlert("Dark mode has been enabled", "success");
    } else {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      setMode("light");
      showAlert("Light mode has been enabled", "success");
    }
  };
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  return (
    <>
      {/* <Router> */}
        <Navbar
          title="TextUtilites"
          aboutText="About us"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-3">
        {/* <Routes> */}
          {/* <Route exact path="/about" mode = {mode} toggleMode ={toggleMode} element = {<About/>}/> */}
          {/* <Route exact path="/" element = { */}
            <TextForm
              showAlert={showAlert}
              heading="Enter the text to analyze" />
              {/* }/>
        </Routes> */}
        </div>
      {/* </Router> */}
    </>
  );
}
export default App;
