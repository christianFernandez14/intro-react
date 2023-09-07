import '../styles/main.css'

// Estilos como un objeto
const estilo3 = {
  boxShadow: '0 5px 3px rgba(0, 0, 0, .5)',
}

const estilo = {
  backgroundColor: '#456',
  color: '#fff',
  padding: '10px 15px',
  margin: '10px 15px'

}

// Estilos como funcion
const estilo2 = ()=> ({
  backgroundColor: '#750',
  color: '#fff',
  padding: '10px 15px',
  margin: '10px 15px'

})


const Li = ({ children, componet }) => {
  // console.log();
  return (
    <li
      // Apicamos style en lina con los obejtos
      // style={{ ...estilo, ...estilo3 }} 
      className="class-li"
    >
      {`${children} "Componente ${componet}"`}
    </li>
  )
}

const App = () => {
  return (
    <ul 
    // style={estilo2()}
    className="class-ul">
      <Li
        componet='Funtional'
      >
        {`React Intro desde`}</Li>
    </ul>
  )
}

export default App
