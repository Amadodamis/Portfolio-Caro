import "./app.css"

import Prueba from "../prueba/prueba"
import Banner from "../Banner/Banner"
import Home from "../Home/Home"
import FormacionAcademica from "../formacion/FormacionAcademica"
import ArrowDown from "./arrowDown"



function App() {

  return (
    <div>
      <ArrowDown />
      <Prueba />
      <Banner />
      <Home />
      <FormacionAcademica />
      <Home />
    </div>
  )
}

export default App
