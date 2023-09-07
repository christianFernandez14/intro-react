import { Component } from "react";

class InputClass extends Component {
  render() {
    return (
      <input
        value={this.props.value}
        onChange={this.props.onChange}
      />

    )
  }
}



class AppClass2 extends Component {
  state = {
    nombre: "",
    apellido: ""
  }
  updateNombre = (evento) => {
    console.log(this);
    this.updateValues('nombre', evento.target.value)
  }

  updateValues = (prop, value) => {
    this.setState({ [prop]: value })
  }
  render() {
    return (
      <div>
        <p>
          Nombre Completo: {`${this.state.nombre} ${this.state.apellido}`}
        </p>

        <InputClass
          value={this.state.nombre}
          onChange={this.updateNombre}
        />
        <InputClass
          value={this.state.apellido}
          onChange={(event) => this.updateValues('apellido', event.target.value)}
        />

      </div>
    )
  }
}

export default AppClass2