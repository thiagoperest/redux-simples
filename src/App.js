import logo from "./logo.svg";
import "./App.css";

import Intervalo from "./components/intervalo/Intervalo";
import Media from "./components/media/Media";
import Soma from "./components/soma/Soma";
import Sorteio from "./components/sorteio/Sorteio";

function App() {
  return (
    <div className="App">
      <h1>Exercício React-Redux (Simples)</h1>
      <div className="linha">
        <Intervalo></Intervalo>
      </div>
      <div className="linha">
        <Media></Media>
        <Soma></Soma>
        <Sorteio></Sorteio>
      </div>
    </div>
  );
}

export default App;
