import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './Pages/CSS/Login.css'
import './Pages/CSS/Cadastro.css'
import './Pages/CSS/Cardapio.css'
import './Pages/CSS/Confirmar.css'
import './Pages/CSS/Home.css'
import './Pages/CSS/Recuperar.css'
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
