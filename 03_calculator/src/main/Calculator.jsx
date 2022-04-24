import React, { Component } from "react";

import Button from "../components/Button";
import Display from "../components/Display";

import "./Calculator.css";

const initialState = {
  displayValue: "0",
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0,
};

export default class Calculator extends Component {
  state = { ...initialState };

  constructor(props) {
    super(props);

    this.clearMemory = this.clearMemory.bind(this);
    this.setOperation = this.setOperation.bind(this);
    this.addDigit = this.addDigit.bind(this);
  }

  clearMemory() {
    this.setState(initialState);
  }

  calculate() {
    const values = [...this.state.values];

    switch (this.state.operation) {
      case "+": return values[0] + values[1]
      case "-": return values[0] - values[1]
      case "*": return values[0] * values[1]
      case "/": return values[0] / values[1]
      default : return 0
    }
  }

  setOperation(operation) {
    if (this.state.current === 0) {
      this.setState({ operation, current: 1, clearDisplay: true });
    } else {
      const equals = operation === "=";
      const values = [...this.state.values];

      values[0] = this.calculate();
      values[1] = 0;

      this.setState({
        displayValue: values[0],
        operation: equals ? null : operation,
        current: equals ? 0 : 1,
        clearDisplay: !equals,
        values
      });
    }
  }

  addDigit(n) {
    if (n === "." && this.state.displayValue.includes(".")) {
      return;
    }

    const clearDisplay =
      this.state.displayValue === "0" || this.state.clearDisplay;
    const currentValue = clearDisplay ? "" : this.state.displayValue;
    const displayValue = currentValue + n;

    this.setState({ displayValue, clearDisplay: false });

    if (n !== ".") {
      const i = this.state.current;
      const newValue = parseFloat(displayValue);
      const values = [...this.state.values];
      values[i] = newValue;
      this.setState({ values });

      console.log(values);
    }
  }

  render() {
    return (
      <div className="calculator">
        <Display value={this.state.displayValue} />
        <Button label="AC" onClick={this.clearMemory} triple />
        <Button label="/" onClick={this.setOperation} operation />
        <Button label="7" onClick={this.addDigit} />
        <Button label="8" onClick={this.addDigit} />
        <Button label="9" onClick={this.addDigit} />
        <Button label="*" onClick={this.setOperation} operation />
        <Button label="4" onClick={this.addDigit} />
        <Button label="5" onClick={this.addDigit} />
        <Button label="6" onClick={this.addDigit} />
        <Button label="-" onClick={this.setOperation} operation />
        <Button label="1" onClick={this.addDigit} />
        <Button label="2" onClick={this.addDigit} />
        <Button label="3" onClick={this.addDigit} />
        <Button label="+" onClick={this.setOperation} operation />
        <Button label="0" onClick={this.addDigit} double />
        <Button label="." onClick={this.addDigit} />
        <Button label="=" onClick={this.setOperation} operation />
      </div>
    );
  }
}
