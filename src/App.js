import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextArea from "./components/TextArea";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  let showAlert = (msg, type) => {
    setAlert({
      msg: msg,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2500);
  };
  let toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#0f172a";
      showAlert("🌙 Dark mode enabled.", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("☀️ Light mode enabled.", "success");
    }
  };
  return (
    <>
      <Navbar
        title="TextUtils"
        about="About"
        mode={mode}
        toggleMode={toggleMode}
      />

      <div id="container my-3">
        <Alert alert={alert} />
        <TextArea
          heading1="✍️ Enter or paste your text below to analyze"
          heading2="📊 Text Summary"
          mode={mode}
          showAlert={showAlert}
        />
        <About mode={mode} />
      </div>
      <footer className={`container my-4 text-${mode === 'dark'?'light':'dark'}`}>
       © 2025 TextUtils | Built by Shubham Sankhwar
      </footer>
    </>
  );
}

export default App;
