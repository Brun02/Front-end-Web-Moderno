import React, { useState } from 'react';
import '../CSS/Login.css';
import logo from './imagens/logo.jfif';
import'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
//bibliotecas necessarias para linkar botoes
import {useHistory} from 'react-router-dom';
import {useCallback} from 'react';
import { Password } from 'primereact/password';


const Page= ()=>{
    const [value1, setValue1] = useState(null);
   const history = useHistory();
    const handleOnClick = useCallback(() => history.push('/Cardapio'), [history]);
  return (
    <div className='login'>
            <body className='login-logo'>
                <img className='login-logo' src={logo}/>
                <div className='login-container'>
                    <h3>Email: <span className="p-float-label">
                        <InputText id="in" />
                        <label htmlFor="in"></label>
                    </span>
                    </h3>
                    <h3>Senha: 
                        <Password value={value1} onChange={(e) => setValue1(e.target.value)} feedback={false} />
                    </h3>
                    <span className="p-buttonset">
                        <Button label="Entrar" className="p-button-rounded p-button-success" icon="pi pi-arrow-circle-right" onClick={handleOnClick}/>
                    </span>
                    <p>
                    <a href="../Cadastro"
   title="Registrar agora!">Registre-se</a>.
                    </p>
                    <p>
                    <a href="../Recuperar"
   title="Recuperar a conta!">Esqueci a senha</a>.
                    </p>
                </div>
            </body>
    </div>
  );
}



export default Page;