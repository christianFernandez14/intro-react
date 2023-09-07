import { Component } from "react";

// COMPONETE HIJO ***************
class ButtonClass extends Component {
  state = {
    estado: 'Estado inicial del hijo'
  }
  constructor(props) {
    super(props)
    console.log('Cargando props del Botón', props);
  }

  componentDidMount() {
    console.log('Montaje del hijo');
  }

  componentDidUpdate(prevProps, PrevState) {
    console.log('Component Hijo', {prevProps, PrevState});
  }
  

  render() {
    console.log('Renderizado desde ButtonClass')
    return (
      <div>
        <h1>Lo recibido desde AppClass: {this.props.props}</h1>
        <button
        className={`${this.state.estado}`}
          onClick={() => this.setState({  estado: 'El estado del HIJO CAMBIO' })}>
          Enviar de ButtonClass
        </button>
      </div>
    )
  }
}

export default ButtonClass
