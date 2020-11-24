import React from 'react';
import './App.css';


//import LinksForm from './componentes/LinksForm';
import Links from './componentes/Links';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  return (
    <div className="container p-2">
      
      <h1><Links/></h1>
      

      <ToastContainer/>
      
    </div>
    
  );
}

export default App;
