import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    showAlert(`Dark mode ${!darkMode ? 'enabled' : 'disabled'}!`, "success");
  };

  const appStyles = {
    backgroundColor: darkMode ? "#333" : "white",
    color: darkMode ? "white" : "black",
    minHeight: "100vh",
  };

  return (
    <Router>
      <div style={appStyles}>
        <Navbar title="Text Utility" toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        <Alert alert={alert} />
        <div className='container my-3'>
          <Routes>
            <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" darkMode={darkMode} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
