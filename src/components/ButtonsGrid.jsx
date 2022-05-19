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
      <button onClick={() => { setOp('%'); }} type="button" tabIndex="0"> % </button>
      <button onClick={() => { setOp('÷'); }} type="button" tabIndex="0"> ÷ </button>
      <button onClick={() => { setNum('1'); }} data-testid="btn1" type="button" tabIndex="0"> 1 </button>
      <button onClick={() => { setNum('2'); }} type="button" tabIndex="0"> 2 </button>
      <button onClick={() => { setNum('3'); }} type="button" tabIndex="0"> 3 </button>
      <button onClick={() => { setOp('x'); }} type="button" tabIndex="0"> x </button>
      <button onClick={() => { setNum('4'); }} type="button" tabIndex="0"> 4 </button>
      <button onClick={() => { setNum('5'); }} type="button" tabIndex="0"> 5 </button>
      <button onClick={() => { setNum('6'); }} type="button" tabIndex="0"> 6 </button>
      <button onClick={() => { setOp('-'); }} type="button" tabIndex="0"> - </button>
      <button onClick={() => { setNum('7'); }} type="button" tabIndex="0"> 7 </button>
      <button onClick={() => { setNum('8'); }} type="button" tabIndex="0"> 8 </button>
      <button onClick={() => { setNum('9'); }} type="button" tabIndex="0"> 9 </button>
      <button onClick={() => { setOp('+'); }} data-testid="btnSum" type="button" tabIndex="0"> + </button>
      <button onClick={() => { setNum('.'); }} type="button" tabIndex="0"> . </button>
      <button onClick={() => { setNum('0'); }} type="button" tabIndex="0"> 0 </button>
      <button onClick={resultt} data-testid="equals" type="button" tabIndex="0"> = </button>
      <button onClick={deleteNum} type="button" tabIndex="0"> DEL </button>
    </div>
  );
}

// crear un componente que tenga render de boton y reciba de parametros una función, parecido a resultt

export default ButtonsGrid;

ButtonsGrid.propTypes = {
  setOp: PropTypes.func.isRequired,
  setNum: PropTypes.func.isRequired,
  deleteNum: PropTypes.func.isRequired,
  clear: PropTypes.func.isRequired,
  resultt: PropTypes.func.isRequired,
  setPMstate: PropTypes.func.isRequired,
};
