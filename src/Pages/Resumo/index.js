import React, {useState} from 'react';
import '../CSS/Home.css';
import'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { Button } from 'primereact/button';
import {useHistory} from 'react-router-dom';
import{useCallback} from 'react'
import { Password } from 'primereact/password';
import ButtonAppBar from './appBar.js';
import { Calendar } from 'primereact/calendar';
import DataTableContextMenuDemo from './DataMenu.js';



const Page= ()=> {
    const [value1, setValue1] = useState(null);
    const history = useHistory();
    const handleOnClick = useCallback(() => history.push('/Login'), [history]);
    var [date, setDate] = useState(null); 
  
  return (
    <div className="Home" >
      <body className="Home-header">
       <ButtonAppBar/>
          <h1 className="h1-style">Resumo Diário</h1>
      <div className="home-button">
         <span className="p-buttonset">
                        <Calendar dateFormat="dd/mm/yy" value={date} onChange={(e) => setDate(e.value)}></Calendar>
            </span>
      </div>
    <div className="home-button">
              <span className="p-buttonset">
                        <DataTableContextMenuDemo/>
            </span>
    </div>
    
      </body>
    </div>
    
  );
}

//ainda n tem dados da tabela porque não fizemos a integração com o back

export default Page;

