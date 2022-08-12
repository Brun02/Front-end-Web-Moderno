import React, {Component} from 'react';


class ApiConsumo extends Component {

  constructor(props) {
        super(props)   
        this.state = {
            alimentos: []
        } 
    }

  componentDidMount() {
        fetch('https://dieta-basica-sysfit-desenvolvimento-web-moderno.josecarlosdjesu.repl.co/food')
            .then(response => response.json())
            .then(alimentos => {
                this.setState({
                    alimentos: alimentos
                })
            })
            .catch(error => console.log(error))
    }

  //lista de alimentos
  renderListing() {
        let alimentosList = []
        this.state.alimentos.map(alimento => {
            return alimentosList.push(`<li key={alimento.id}>{alimento.description}</li>`)
        })
 
        return alimentosList;
    }

  render() {
        return (
           ` <ul>
                {this.renderListing()}
            </ul>`
        );
    }

}

export default ApiConsumo;