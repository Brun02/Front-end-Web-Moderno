import React, { useState } from 'react';
import '../CSS/Cardapio.css';
import'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import {useHistory} from 'react-router-dom';
import {useCallback} from 'react';

const Page= ()=> {
    const [value1, setValue1] = useState(null);
   const history = useHistory();
    const handleOnClick = useCallback(() => history.push('/Confirmar'), [history]);
  return (
    <div className="cardapio">
        <div className="cardapio-container">
        <h1>Cardápio</h1>
        </div>
        <div className="cardapio-itens">
        <h2>Tradicional - 39,99</h2>
        <h3 className="font-color">Portuguesa</h3>
        <h4>presunto, calabresa, tomate, ovos, pimentão, cebola e azeitona</h4>
        <h3 className="font-color">Muçarela</h3>
        <h4>muçarela em dobro e azeitona</h4>
        <h3 className="font-color">Calabresa</h3>
        <h4>calabresa e cebola</h4>
        <h3 className="font-color">Texana</h3>
        <h4>calabresa, ovos e cheddar</h4>
        </div><div className="cardapio-itens">
        <h2>Especial - 44,99</h2>
        <h3 className="font-color">Frango Especial</h3>
        <h4>frango especial desfiado, bacon, catupiry e azeitona</h4>
        <h3 className="font-color">Peito de Peru</h3>
        <h4>peito de peru, abacaxi em cubos e azeitona</h4>
        <h3 className="font-color">Lombo</h3>
        <h4>lombo, cebola e azeitona</h4>
        <h3 className="font-color">Atum</h3>
        <h4>atum, cebola e azeitona</h4>
        </div>
        <Button label="Carrinho" className="p-button-rounded p-button-success" icon="pi pi-shopping-cart" onClick={handleOnClick}/>
    </div>
  );
}



export default Page;