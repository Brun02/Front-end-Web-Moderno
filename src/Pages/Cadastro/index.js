import React, { useState } from 'react';
import '../CSS/Cadastro.css';
import'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import {useHistory} from 'react-router-dom';
import {useCallback} from 'react';

const Page= ()=> {
    const [value1, setValue1] = useState(null);
    const [value2, setValue2] = useState(null);
    const history = useHistory();
    const handleOnClick = useCallback(() => history.push('/Login'), [history]);
  return (
    <div className='cadastro'>
        <div className='cadastro-header'>
        <h1>Cadastro</h1>
        </div>
        <body className='cadastro-body'>
            <h3>Nome: <span className="p-input-icon-right">
                        <InputText id="in" />
                        <label htmlFor="in"></label>
                    </span>
            </h3>
            <h3>Endereço: <span className="p-input-icon-right">
                        <InputText id="in" />
                        <label htmlFor="in"></label>
                    </span>
            </h3>
            <h3>CPF: <span className="p-input-icon-right">
                        <InputText id="in" />
                        <label htmlFor="in"></label>
                    </span>
            </h3>
            <h3>Telefone: <span className="p-input-icon-right">
                        <InputText id="in" />
                        <label htmlFor="in"></label>
                    </span>
            </h3>
            <h3>Email: <span className="p-input-icon-right">
                        <InputText id="in" />
                        <label htmlFor="in"></label>
                    </span>
            </h3>
            <h3>Senha: 
            <Password value={value1} onChange={(e) => setValue1(e.target.value)} />
            </h3>
            <h3>Confirmar a senha: 
            <Password value={value2} onChange={(e) => setValue2(e.target.value)} />
            </h3>
            <div className="button">
            <span className="p-buttonset">
                        <Button label="Cadastrar" className="p-button-rounded p-button-success" icon="pi pi-arrow-circle-right" onClick={handleOnClick}/>
            </span>
            </div>
        </body>
    </div>
  );
}



export default Page;