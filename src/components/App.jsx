import Button from "./Button"
import Usuario from "./Usuario"

const App = () => {
  const miVariable = true
  const usuario = 'Christian'

  const array = [
    'Dato 1',
    'Dato 2',
    'Dato 3'
  ]

  if (miVariable) {
    return (
      <div>
        <Usuario>Hola, {usuario}</Usuario>
        {array.map(elemento => <p key={elemento} onClick={(event) => console.log(event)}>{elemento}</p>)}
      </div>
    )
  }
  return (
    <div>
      <h1 onClick={(event) => console.log('clickiando Ando', event)}>Desde mi App</h1>

      <Button
        onClick={() => console.log('Presionando Botón')}
      >
        Enviar
      </Button>

    </div>
  )
}
export default App