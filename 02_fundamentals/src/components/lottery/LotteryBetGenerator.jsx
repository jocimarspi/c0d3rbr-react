import React, { useState } from "react";
import { drawNumbers } from "./util";

import "./LotteryBetGenerator.css";

const LotteryBetGenerator = (props) => {
  const initialDrawnNumbers = drawNumbers({
    startNumber: props.startNumber,
    endNumber: props.endNumber,
    numbersPerTicket: props.numbersPerTicket,
  });
  const [drawnNumbers, setDrawnNumbers] = useState(initialDrawnNumbers);
  const [numbersPerTicket, setNumbersPerTicket] = useState(props.numbersPerTicket);

  const onDrawNumbers = () => {
    setDrawnNumbers(
      drawNumbers({
        startNumber: props.startNumber,
        endNumber: props.endNumber,
        numbersPerTicket: numbersPerTicket,
      })
    );
  };

  const compareNumbers = (a, b) => {
    return a - b;
  };

  const renderDrawnBalls = () => {
    if (!drawnNumbers) {
      return null;
    }

    return drawnNumbers.sort(compareNumbers).map((item, index) => (
      <div key={index} className="ball">
        {item.toLocaleString('pt-BR', {minimumIntegerDigits: 2})}
      </div>
    ));
  };

  return (
    <div className="lotterybetgenerator__container">
      <div className="lotterybetgenerator__top_panel">
        
        <label for="numbersperticket"> Numbers per ticket: </label>
        <input
          name="numbersperticket"
          type="number"
          value={numbersPerTicket}
          onChange={(e) => {
            setNumbersPerTicket(+e.target.value);
          }}
        />
        <button onClick={onDrawNumbers}>Generate new bet</button>
      </div>
      <div className="drawnball">{renderDrawnBalls()}</div>
    </div>
  );
};

export default LotteryBetGenerator;
