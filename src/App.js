
import {  useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  // Link
} from "react-router-dom";


function App() {
 const [mode, setMode] = useState('light');
 const [alert, setAlert] = useState(null);

  let showAlert = (msg,type)=>{
    setAlert({
      msg : msg,
      type : type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2500);
  }

   let toggleMode = ()=>{
    if (mode === 'light')
      {setMode('dark')
        document.body.style.backgroundColor= '#0f172a';
        showAlert("DarkMode Enabled!","success");
    }else{
      setMode('light')
        document.body.style.backgroundColor = 'white';
         showAlert("LightMode Enabled!","success")
    }
   }
  return (<>
      <Router>
      <Navbar title="TextUtils" about="About" mode={mode} toggleMode={toggleMode}/>
        
   <div id="container my-3" >
    <Alert alert={alert}/>
     <Routes>
          <Route exact path="/about" element={<About mode={mode}  />}/>
          
          <Route exact path="/"
        element=  { <TextArea heading1="Enter text here to analyze..." 
          heading2="Your Text Summary" mode={mode} showAlert={showAlert}/>
          }/>
         
        </Routes>
     
   
   </div>
      </Router>
  
      </>
  );
    
}

export default App;
