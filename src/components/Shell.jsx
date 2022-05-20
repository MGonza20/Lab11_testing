/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Display from './Display';
import ButtonsGrid from './ButtonsGrid';
import './shell.css';

function Shell() {
  const [prevNum, setPrevNum] = useState('');
  const [actualNum, setActualNum] = useState('');
  const [operator, setOperator] = useState('');
  const [result, setResult] = useState(0);
  const [bandera, setBandera] = useState(false);
  const [PMstate, setPMstate] = useState(false);
  const setNum = (inputNum) => {
    if (bandera) {
      setActualNum(inputNum);
      setBandera(false);
      return;
    }
    if (actualNum.includes('.') && inputNum === '.') {
      return;
    }
    if (actualNum.length >= 9) {
      return;
    }
    setActualNum(actualNum + inputNum);
  };

  const resultOp = () => {
    switch (operator) {
      case '+':
        setResult(parseFloat(prevNum) + parseFloat(actualNum));
        setActualNum(parseFloat(prevNum) + parseFloat(actualNum));
        break;
      case '-':
        setResult(parseFloat(prevNum) - parseFloat(actualNum));
        setActualNum(parseFloat(prevNum) - parseFloat(actualNum));
        break;
      case 'x':
        setResult(parseFloat(prevNum) * parseFloat(actualNum));
        setActualNum(parseFloat(prevNum) * parseFloat(actualNum));
        break;
      case '÷':
        setResult((parseFloat(prevNum) / parseFloat(actualNum)));
        setActualNum(parseFloat(prevNum) / parseFloat(actualNum));
        break;
      case '%':
        setResult(parseFloat(prevNum) % parseFloat(actualNum));
        setActualNum(parseFloat(prevNum) % parseFloat(actualNum));
        break;
      default:
    }
  };

  const setOp = (inputOp) => {
    if (prevNum !== '') {
      setPrevNum(result);
    } else {
      setPrevNum(actualNum);
    }
    if (setOp !== '') {
      setBandera(true);
    }
    setOperator(inputOp);
  };

  const ac = () => {
    setOp('');
    setActualNum('');
    setPrevNum('');
    setPMstate(false);
  };

  const deleteNum = () => {
    setActualNum(actualNum.slice(0, -1));
  };

  const resultt = () => {
    resultOp();
    setPrevNum('');
    setOp('');
  };

  const plusMinus = () => {
    if (actualNum.includes('-')) {
      return;
    }
    setPMstate(!PMstate);
    setActualNum(`-${actualNum}`);
  };

  return (
    <motion.div
      className="shell"
      animate={{
        y: -100,
        transition: {
          duration: 1.6,
        },
      }}
    >
      <Display
        showPrev={prevNum}
        showOp={operator}
        showActual={actualNum}
        PMstate={PMstate}
      />
      <ButtonsGrid
        setNum={setNum}
        setPrevNum={prevNum}
        setOp={setOp}
        deleteNum={deleteNum}
        clear={ac}
        resultt={resultt}
        setPMstate={plusMinus}
      />
    </motion.div>
  );
}

export default Shell;
