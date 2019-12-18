import React, { Component } from "react";
import "../App.css";
import { Button } from "../components/Calculator/Button";
import { CalcInput } from "../components/Calculator/CalcInput";
import { ClearButton } from "../components/Calculator/ClearButton";
import * as math from "mathjs";



class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      calcInput: ""
    };
  }

  addToInput = val => {
    this.setState({calcInput: this.state.calcInput + val})
  };

  handleEqual = () => {
    this.setState({calcInput: math.evaluate(this.state.calcInput)})
  }

  render() {
    return <div className="calc">
      <div className="calc-wrapper">
        <CalcInput calcInput={this.state.calcInput}> </CalcInput>
        <div className="calc-row">
          <Button handleClick={this.addToInput}>7</Button>
          <Button handleClick={this.addToInput}>8</Button>
          <Button handleClick={this.addToInput}>9</Button>
          <Button handleClick={this.addToInput}>/</Button>
        </div>
        <div className="calc-row">
          <Button handleClick={this.addToInput}>4</Button>
          <Button handleClick={this.addToInput}>5</Button>
          <Button handleClick={this.addToInput}>6</Button>
          <Button handleClick={this.addToInput}>*</Button>
        </div>
        <div className="calc-row">
          <Button handleClick={this.addToInput}>1</Button>
          <Button handleClick={this.addToInput}>2</Button>
          <Button handleClick={this.addToInput}>3</Button>
          <Button handleClick={this.addToInput}>+</Button>
        </div>
        <div className="calc-row">
          <Button handleClick={this.addToInput}>.</Button>
          <Button handleClick={this.addToInput}>0</Button>
          <Button handleClick={() => this.handleEqual()}>=</Button>
          <Button handleClick={this.addToInput}>-</Button>
        </div>
        <div className="calc-row">
          <ClearButton handleClear={() => this.setState({ calcInput: "" })}>Clear</ClearButton>
        </div>
      </div>
    </div>
  }
}

export default Calculator;





