import React, {Component} from 'react';


class teste extends Component {
    const cors = require('cors')
    const express = requere('express')
    const app = express()

    app.use(cors())

    async function getContent(){
        try{
            const response= await fetch('https://dieta-basica-sysfit-desenvolvimento-web-moderno.josecarlosdjesu.repl.co/food')
            const data = await response.json()
            console.log(data)
        }catch(error){
                    console.log("error")
        }
    }
    
    function show(alimentos){
       let output = ''
        for (let alimento of alimentos){
            output += `<li>${`
        }
}

export default ApiConsumo;
