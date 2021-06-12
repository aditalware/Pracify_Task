import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage'
import {BrowserRouter} from 'react-router-dom'
import 'react-mdl/extra/material.css';   
import 'react-mdl/extra/material.js';
import './css/styles.css'

function App() {
  return (
    <BrowserRouter >
      <HomePage/>
    </BrowserRouter>
  );
}

export default App;
