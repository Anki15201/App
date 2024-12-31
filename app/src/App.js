
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import React, {useState} from 'react';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { BrowserRouter, Routes, Route } from "react-router-dom";


// let name = "Aniket"; // we made a javascript (variable)

// this is JSX which is compile by babel
function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert =(message, type) => {
      setAlert({
        msg: message,
        type: type
      })

      setTimeout(() => {
          setAlert(null);
      }, 4000)
  }

   const toggleMode =() => {
      if(mode === 'light') {
        setMode('dark');
        document.body.style.backgroundColor = '#042743'
        document.body.style.color = 'white'
        showAlert("Dark mode has been enabled", "success");
        document.title = 'TextUtils - Dark Mode';
      } else{
        setMode('light');
        document.body.style.backgroundColor = 'white'
        document.body.style.color = 'black'
        showAlert("Light mode has been enabled", "success");
        document.title = 'TextUtils - Light Mode';
      }
    } 

  return (
    // eslint-disable-next-line react/jsx-no-undef
    <BrowserRouter >
     <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />
     <Alert alert={alert}/>
     <div className="container my-3">
      <Routes>
        <Route exact path="/about" element={<About mode={mode} />}/>
        <Route exact path='/textform' element={<TextForm showAlert={showAlert} heading="Enter Text to analyze " mode={mode}/> } />        
      </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
 




// {/* // /* <Navbar/>  */
// // /* <div className="blank">Lovely</div>
// //     <h1> Hello {name}</h1> we use that javascript (variable) using curly braces
    
// //     //passing title to the navbar in     {<Navbar title="TextUtils"/>} 
// //     // 
// //     // */ */}
/* <TextForm showAlert={showAlert} heading="Enter Text to analyze " mode={mode}/> */

// {/* <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} /> 
//       <Alert alert={alert}/>
//         
          
//           
//         </div> */}