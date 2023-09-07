import { Component } from "react";
import ButtonClass from "./ButtonClass";
import { lgamma } from "mathjs";




// COMPONETE PADRE ***************
class AppClass extends Component {
  constructor(props) {
    super(props)
    this.state = {
      estado: 'Estado inicial del padre'
    }
    console.log('Cargando props de AppClass', props);
  }

  componentDidMount() {
    console.log('Montaje del padre');
  }

  componentDidUpdate(prevProps, PrevState) {
    console.log('componente padre', { prevProps, PrevState });
  }

  componentWillUnmount() {
    console.log('Desmontadno el componente', this.props, this.state);
  }

  render() {
    console.log('Renderizado desde AppClass');

    return (
      <div>
        <ul className="class-ul">
          <li className="class-li"
          >
            React Intro desde "Component Class
          </li>
        </ul>
        {this.state.estado === 'Estado inicial del padre'
          ? <ButtonClass
            props={'Propiedad heredada del padre'}
            />
          : null}
        <button
          className={`${this.state.estado}`}
          onClick={() => this.setState({ estado: 'El estado del PADRE CAMBIO' })}
        >
          Enviar de AppClass
        </button>
      </div>
    )
  }
}

export default AppClass

// Porque se me renderiza el css del boton, sino tengo exportado ese archivo