import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'
import AppClass from './components/AppClass.jsx'
import './styles/index.css'
import AppClass2 from './components/AppClass2.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <AppClass /> */}
    <AppClass2 />

  </React.StrictMode>
  
  // <X /> Componente creado mas abajo
)

// const Li = ({ children, estado }) => <li>{children}, estado: {estado}</li>

// const X = () =>
//   <ul>
//     <Li
//       estado={`N1 vengo de componente 'X'`}
//     >
//       Numero 1
//     </Li>
//     <Li estado={`N2 vengo de componente 'X'`}>Numero 2</Li>
//     <Li estado={`N3 vengo de componente 'X'`}>Numero 3</Li>
//   </ul>

