import Header from "./components/Header";
import Hero from "./components/Hero";
import ListaVagas from "./components/ListaVagas";
import { useState } from "react";
import Footer from "./components/Footer";



function App() {
 const [busca, setBusca] = useState("");
  return (
    <>
      <Header/>
      <Hero busca={busca} setBusca={setBusca}/>
      <ListaVagas busca={busca}/>
      <Footer/>
    </>
  )
}

export default App
