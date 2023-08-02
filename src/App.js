import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import React, { useState } from "react";
// import Example from "./components/Example"
import About from "./components/About";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// import Calculator from "./components/Calculator";
function App() {
  const [Mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const [color, setColor] = useState("white");

  const handleColor = (colors) => {
    setColor(colors);
    document.body.style.backgroundColor = colors;
    document.body.style.color = "white";
    ShowAlert(`${colors} color applied`, "success");
  };

  const ShowAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2500);
  };

  const toggleMode = () => {
    if (Mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#343a40";
      document.body.style.color = "#fff";
      ShowAlert("Darkmode enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#fff";
      document.body.style.color = "#343a40";
      ShowAlert("Ligthmode enabled", "success");
    }
  };

  return (
    <>
      <Navbar
        title="TextUtils"
        about="about us"
        Mode={Mode}
        toggleMode={toggleMode}
        handleColor={handleColor}
        color={color}
      />
      <Alert alert={alert} />
      <div className="container my-4">
      <Router>
        <Routes>
        <Route
            path="/"
            element={
              <TextForm
                heading="Enter your text to analyze"
                Mode={Mode}
                alert={alert}
                ShowAlert={ShowAlert}
                color={color}
              />
            }
          ></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </Router>

        {/* <Example/> */}
      </div>
    </>
  );
}

export default App;
