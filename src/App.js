import React from 'react';
import './App.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import {BrowserRouter} from 'react-router-dom';
import Routes from './Routes';
import './Pages/CSS/Cadastro.css'
import './Pages/CSS/Cardapio.css'
import './Pages/CSS/Confirmar.css'
import './Pages/CSS/Home.css'
import './Pages/CSS/Recuperar.css'
import './Pages/CSS/Login.css'

function App() {
  return (
  <BrowserRouter> 
    <div className="App" >
      <header className="App-header">
          <Routes />

      </header>
    </div>
  </BrowserRouter> 
  );
}

export default App;