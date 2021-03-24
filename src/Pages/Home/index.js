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



const Page= ()=> {
    const [value1, setValue1] = useState(null);
    const history = useHistory();
    const handleOnClick = useCallback(() => history.push('/Login'), [history]);
  return (
    <div className="Home" >
      <body className="Home-header">
      <div className="home-button">
         <span className="p-buttonset">
                        <Button label="Entrar" className="p-button-rounded p-button-success" icon="pi pi-arrow-circle-right" onClick={handleOnClick}/>
            </span>
      </div>
      </body>
    </div>
  );
}

export default Page;

//linha 24 <Routes />