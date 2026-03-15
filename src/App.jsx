import Header from "./components/Header";
import Hero from "./components/Hero";
import ListaVagas from "./components/ListaVagas";
import { useState } from "react";



function App() {
 const [busca, setBusca] = useState("");
  return (
    <>
      <Header/>
      <Hero busca={busca} setBusca={setBusca}/>
      <ListaVagas busca={busca}/>
      
    </>
  )
}

export default App
