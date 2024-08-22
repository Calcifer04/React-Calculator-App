import React from 'react';
import { useState } from 'react';
import '../styles/Buttons.css';

const isOperator = (symbol) => ["×", "÷", "+", "−", "=", "%"].includes(symbol);

const Button = ({ symbol, onClick }) => {
  let className;
  if (symbol === "Clear") {
    className = "clear";
  } else if (isOperator(symbol)) {
    className = "operator";
  } else {
    className = "grid-item";
  }
  return (
    <button 
      className={className}
      onClick={() => onClick(symbol)}
    >
      {symbol}
    </button>
  );
};

const Buttons = ({ setScreenDisplay }) => {
  const [currentInput, setCurrentInput] = useState("");
  const buttonArray = [
    "7", "8", "9", "×", "÷",
    "4", "5", "6", "+", "−",
    "1", "2", "3", "=", "%",
    "0", "00", ".", "Clear"
  ];

  const handleClick = (symbol) => {
    if (symbol === "Clear") {
      setCurrentInput("");
      setScreenDisplay("0");
    } else if (symbol === "=") {
      try {
        const result = eval(currentInput
          .replace("×", "*")
          .replace("÷", "/")
          .replace("−", "-")
          .replace("%", "*0.01")
        );
        if (result === Infinity || result === -Infinity || isNaN(result)) {
          setCurrentInput("Error");
          setScreenDisplay("Error");
        } else {
          setCurrentInput(result.toString());
          setScreenDisplay(result.toString());
        }
      } catch {
        setCurrentInput("Error");
        setScreenDisplay("Error");
      }
    } else {
      const newInput = currentInput + symbol;
      setCurrentInput(newInput);
      setScreenDisplay(newInput);
    }
  };

  return (
    <div className='buttons-container'>
      {buttonArray.map((symbol, index) => (
        <Button key={index} symbol={symbol} onClick={handleClick} />
      ))}
    </div>
  );
};

export default Buttons;