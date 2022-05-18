import React from "react";
import { connect } from "react-redux";

import Card from "../card/Card";

function Soma(props) {
  const { min, max } = props;
  return (
    <Card title="Soma dos Números" blue>
      <div>
        <span>
          <span>Resultado:</span>
          <strong>{max + min}</strong>
        </span>
      </div>
    </Card>
  );
}

function mapStateProp(state) {
  return {
    min: state.numeros.min,
    max: state.numeros.max,
  };
}

export default connect(mapStateProp)(Soma);
