import React, { useState } from 'react';
import '../CSS/Cadastro.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';

const CardCadastro = (props) => {
  return (
    <>
      <h3 className='h1-style'>{props.title}</h3>
      <span className='p-buttonset'>
        <Button
          onClick={props.handleButtonAdd}
          icon='pi pi-plus-circle'
          className='p-button-rounded p-button-success'
          aria-label='Bookmark'
        />
        <span className='p-input-icon-right'>
          <InputText
            value={props.textValue}
            onChange={(e) => props.onChangeText(e.target.value)}
          />
        </span>
      </span>
    </>
  );
};

export default CardCadastro;
