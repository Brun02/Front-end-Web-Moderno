import React, {useState} from 'react';
import '../CSS/Cadastro.css';
import'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { Button } from 'primereact/button';
import {useHistory} from 'react-router-dom';
import{useCallback} from 'react'
import { Password } from 'primereact/password';
import ButtonAppBar from './appBar.js';
import { InputText } from 'primereact/inputtext';
import ApiConsumo from './ConsumoApiAlimentos.js';



const Page= ()=> {

 

 
   const [value1, setValue1] = useState('');
   const [value2, setValue2] = useState('');
   const [value3, setValue3] = useState('');
   const history = useHistory();
   const [value, setValue] = useState('');
 
  
  return (
    <div className="Home" >
      <body className="Home-header">
       <ButtonAppBar/>
      <div className="home-button">
       
      
        
        <h3 className="h1-style">Café da Manhã</h3>
         <span className="p-buttonset">
                <Button icon="pi pi-plus-circle" className="p-button-rounded p-button-success" aria-label="Bookmark" />      
                    <span className="p-input-icon-right">  
                     <InputText value={value} onChange={(e) => setValue(e.target.value)} />
                    </span>
            </span>
<h3 className="h1-style">Almoço</h3>
        <span className="p-buttonset">
                <Button icon="pi pi-plus-circle" className="p-button-rounded p-button-success" aria-label="Bookmark" />      
                    <span className="p-input-icon-right">   
                     <InputText value={value1} onChange={(e) => setValue1(e.target.value)} />
                    </span>
            </span><h3 className="h1-style">Jantar</h3>     
<span className="p-buttonset">
                <Button icon="pi pi-plus-circle" className="p-button-rounded p-button-success" aria-label="Bookmark" />      
                    <span className="p-input-icon-right">
                        
                     <InputText value={value2} onChange={(e) => setValue2(e.target.value)} />
                    </span>
            </span>
<h3 className="h1-style">Lanches/Outros</h3>        
<span className="p-buttonset">
                <Button icon="pi pi-plus-circle" className="p-button-rounded p-button-success" aria-label="Bookmark" />      
                    <span className="p-input-icon-right">
                        
                     <InputText value={value3} onChange={(e) => setValue3(e.target.value)} />
                    </span>
            </span>
      </div>
    <div className="home-button">
              <span className="p-buttonset">
                        <Button label="Salvar" className="p-button-rounded p-button-success" icon="pi pi-arrow-circle-right"/>
            </span>
    </div>
      </body>
    
    </div>
  );
}

export default Page;

//linha 24 <Routes />