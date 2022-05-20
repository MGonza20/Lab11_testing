/* eslint-disable linebreak-style */
import React from 'react';
import './buttonsGrid.css';
import PropTypes from 'prop-types';

function ButtonsGrid({
  setOp, setNum, deleteNum, clear, resultt, setPMstate,
}) {
  return (
    <div className="btnsDiv">
      <button type="button" onClick={clear} data-testid="div-test-id" tabIndex="0"> AC </button>
      <button type="button" onClick={setPMstate} tabIndex="0"> +/- </button>
      <button onClick={() => { setOp('%'); }} data-testid="btnMod" type="button" tabIndex="0"> % </button>
      <button onClick={() => { setOp('÷'); }} type="button" tabIndex="0"> ÷ </button>
      <button onClick={() => { setNum('1'); }} data-testid="btn1" type="button" tabIndex="0"> 1 </button>
      <button onClick={() => { setNum('2'); }} data-testid="btn2" type="button" tabIndex="0"> 2 </button>
      <button onClick={() => { setNum('3'); }} data-testid="btn3" type="button" tabIndex="0"> 3 </button>
      <button onClick={() => { setOp('x'); }} data-testid="btnMult" type="button" tabIndex="0"> x </button>
      <button onClick={() => { setNum('4'); }} data-testid="btn4" type="button" tabIndex="0"> 4 </button>
      <button onClick={() => { setNum('5'); }} data-testid="btn5" type="button" tabIndex="0"> 5 </button>
      <button onClick={() => { setNum('6'); }} data-testid="btn6" type="button" tabIndex="0"> 6 </button>
      <button onClick={() => { setOp('-'); }} data-testid="btnRest" type="button" tabIndex="0"> - </button>
      <button onClick={() => { setNum('7'); }} data-testid="btn7" type="button" tabIndex="0"> 7 </button>
      <button onClick={() => { setNum('8'); }} data-testid="btn8" type="button" tabIndex="0"> 8 </button>
      <button onClick={() => { setNum('9'); }} data-testid="btn9" type="button" tabIndex="0"> 9 </button>
      <button onClick={() => { setOp('+'); }} data-testid="btnSum" type="button" tabIndex="0"> + </button>
      <button onClick={() => { setNum('.'); }} type="button" tabIndex="0"> . </button>
      <button onClick={() => { setNum('0'); }} type="button" tabIndex="0"> 0 </button>
      <button onClick={resultt} data-testid="equals" type="button" tabIndex="0"> = </button>
      <button onClick={deleteNum} type="button" tabIndex="0"> DEL </button>
    </div>
  );
}

export default ButtonsGrid;

ButtonsGrid.propTypes = {
  setOp: PropTypes.func.isRequired,
  setNum: PropTypes.func.isRequired,
  deleteNum: PropTypes.func.isRequired,
  clear: PropTypes.func.isRequired,
  resultt: PropTypes.func.isRequired,
  setPMstate: PropTypes.func.isRequired,
};
