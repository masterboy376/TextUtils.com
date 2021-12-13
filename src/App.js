import './App.css';
import React, { Fragment, useState } from 'react';
import About from './componenets/About';
import Navbar from './componenets/Navbar';
import TextForm from './componenets/TextForm';
import Alert from './componenets/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'rgba(33,37,41,1)';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = '#f8f9fa';
    }
  }
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  return (
    <>
    <Router>
      <Fragment>
        <Navbar title="TextUtils" mode={mode} enableDarkMode={toggleMode} /> {/* these are the props */}
        <Alert alert={alert} />
        {/* <TextForm showAlert={showAlert} mode={mode} /> */}
        <Routes>
          <Route exact path='/' element={<TextForm showAlert={showAlert} heading="Try TextUtils - word counter, character counter, lowercase to uppercase, uppercase to lowercase, remove extra spaces" mode={mode} />} />
          <Route exact path='/about' element={<About mode={mode} />} />
        </Routes>
      </Fragment>
    </Router>
</>
  );
}

export default App;
