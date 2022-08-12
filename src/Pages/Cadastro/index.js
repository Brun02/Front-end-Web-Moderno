import React, { useState } from 'react';
import '../CSS/Cadastro.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { Button } from 'primereact/button';
import ButtonAppBar from './appBar.js';
import CardCadastro from './cardCadastro';
import salvaCadastro from './CadastroService';
import axios from 'axios';

const Page = () => {
  const [cafeDaManhaText, setCafeDaManhaText] = useState('');
  const [almocoText, setAlmocoText] = useState('');
  const [jantarText, setJantarText] = useState('');
  const [lancheOuOutrosText, setLancheOuOutrosText] = useState('');

  const handleAddCafeDaManha = () => {
    alert('add café da manhã => ' + cafeDaManhaText);
  };
  const handleAddAlmoco = () => {
    alert('add almoço => ' + almocoText);
  }
  const handleAddJantar = () => {
    alert('add jantar => ' + jantarText);
  }
  const handleAddLancheOuOutros = () => {
    alert('add lanche ou outros => ' + lancheOuOutrosText);
  }
  const handleClickSalvar = () => {

    axios.post('localhost:3000',{
      cafeDaManha: cafeDaManhaText,
      almoco: almocoText,
      jantar: jantarText,
      lancheOuOutros: lancheOuOutrosText,
    })
  }

  return (
    <div className='Home'>
      <body className='Home-header'>
        <ButtonAppBar />
        <div className='home-button'>
          <CardCadastro
            handleButtonAdd={handleAddCafeDaManha}
            title='Café da manhã'
            textValue={cafeDaManhaText}
            onChangeText={setCafeDaManhaText}
          />
          <CardCadastro
            handleButtonAdd={handleAddAlmoco}
            title='Almoço'
            textValue={almocoText}
            onChangeText={setAlmocoText}
          />
          <CardCadastro
            handleButtonAdd={handleAddJantar}
            title='Jantar'
            textValue={jantarText}
            onChangeText={setJantarText}
          />
          <CardCadastro
            handleButtonAdd={handleAddLancheOuOutros}
            title='Lanche ou outros'
            textValue={lancheOuOutrosText}
            onChangeText={setLancheOuOutrosText}
          />
        </div>
        <div className='home-button'>
          <span className='p-buttonset'>
            <Button
              onClick={handleClickSalvar}
              label='Salvar'
              className='p-button-rounded p-button-success'
              icon='pi pi-arrow-circle-right'
            />
          </span>
        </div>
      </body>
    </div>
  );
};

export default Page;

//linha 24 <Routes />
