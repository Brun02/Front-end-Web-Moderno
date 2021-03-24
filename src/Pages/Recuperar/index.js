import React, { useState } from 'react';
import '../CSS/Recuperar.css';
import'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import {useHistory} from 'react-router-dom';
import {useCallback} from 'react';


const Page= ()=>{
        const [value1, setValue1] = useState(null);
   const history = useHistory();
    const handleOnClick = useCallback(() => history.push('/Login'), [history]);
  return (
    <div className='login'>
            <body className='login-logo'>
                <div className='login-container'>
                    <h2 className='h2-style'> RECUPERAR SENHA</h2>
                    <h3>Email: <span className="p-float-label">
                        <InputText id="in" />
                        <label htmlFor="in"></label>
                    </span>
                    </h3>
                    <h3>Confirme o email: 
                        <span className="p-float-label">
                            <InputText id="in" />
                            <label htmlFor="in"></label>
                        </span>
                    </h3>
                    <span className="p-buttonset">
                        <Button label="Enviar" className="p-button-rounded" icon="pi pi-arrow-circle-right" onClick={handleOnClick}/>
                    </span>
                </div>
            </body>
    </div>
  );
}



export default Page;