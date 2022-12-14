import React, {useState} from 'react';
import '../CSS/Home.css';
import logo from './TelaPrincipal.png';
import'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { Button } from 'primereact/button';
import {useHistory} from 'react-router-dom';
import{useCallback} from 'react'
import { Password } from 'primereact/password';
import ButtonAppBar from './appBar.js';



const Page= ()=> {
    const [value1, setValue1] = useState(null);
    const history = useHistory();
  const irParaCadastro = useCallback(() => history.push('/Cadastro'), [history]);
    const irParaResumo = useCallback(() => history.push('/Resumo'), [history]);
  return (
    <div className="Home" >
      <body className="Home-header">
       <ButtonAppBar/>
          <h1 className="h1-style">Módulo 2</h1>
      <div className="home-button">
         <span className="p-buttonset">
                        <Button label="Cadastrar" className="p-button-rounded p-button-success" icon="pi pi-arrow-circle-right" onClick={irParaCadastro}/>
            </span>
      </div>
    <div className="home-button">
              <span className="p-buttonset">
                        <Button label="Resumo" className="p-button-rounded p-button-success" icon="pi pi-arrow-circle-right" onClick={irParaResumo}/>
            </span>
        <div className="footer"></div>
    </div>
    
      </body>
    </div>
    
  );
}

export default Page;

//linha 24 <Routes />