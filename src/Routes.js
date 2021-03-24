import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Confirmar from './Pages/Confirmar';
import Recuperar from './Pages/Recuperar';
import Cadastro from './Pages/Cadastro';
import Cardapio from './Pages/Cardapio';

export default()=>{
   
   return(
      <Switch>
         <Route exact path="/">
           <Home />
         </Route>

         <Route exact path="/Login">
           <Login />
         </Route>

         <Route exact path="/Recuperar">
           <Recuperar />
         </Route>

         <Route exact path="/Confirmar">
           <Confirmar />
         </Route>

        <Route exact path="/Cadastro">
           <Cadastro />
        </Route> 

        <Route exact path="/Cardapio">
           <Cardapio />
        </Route>     
        
     </Switch>
   );
}