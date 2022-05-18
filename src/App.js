import logo from "./logo.svg";
import "./App.css";

import Intervalo from "./components/intervalo/Intervalo";
import Card from "./components/card/Card";

function App() {
  return (
    <div className="App">
      <h1>Exercício React-Redux (Simples)</h1>
      <div className="linha">
        <Intervalo></Intervalo>
      </div>
      <div className="linha">
        <Card title="Card 2" green>
          2
        </Card>
        <Card title="Card 3" blue>
          3
        </Card>
        <Card title="Card 4" purple>
          4
        </Card>
      </div>
    </div>
  );
}

export default App;
