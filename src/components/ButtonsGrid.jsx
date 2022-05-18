import React from 'react';
import './buttonsGrid.css';
import PropTypes from 'prop-types';

function ButtonsGrid({
  setOp, setNum, deleteNum, clear, resultt, setPMstate,
}) {
  return (
    <div className="btnsDiv">
      <button type="button" onClick={clear} data-testid="div-test-id" tabIndex="0"> AC </button>
      <button type="button" onClick={setPMstate} onKeyPress tabIndex="0"> +/- </button>
      <button onClick={() => { setOp('%'); }} onKeyPress type="button" tabIndex="0"> % </button>
      <button onClick={() => { setOp('÷'); }} onKeyPress type="button" tabIndex="0"> ÷ </button>
      <button onClick={() => { setNum('1'); }} data-testid="btn1" onKeyPress type="button" tabIndex="0"> 1 </button>
      <button onClick={() => { setNum('2'); }} onKeyPress type="button" tabIndex="0"> 2 </button>
      <button onClick={() => { setNum('3'); }} onKeyPress type="button" tabIndex="0"> 3 </button>
      <button onClick={() => { setOp('x'); }} onKeyPress type="button" tabIndex="0"> x </button>
      <button onClick={() => { setNum('4'); }} onKeyPress type="button" tabIndex="0"> 4 </button>
      <button onClick={() => { setNum('5'); }} onKeyPress type="button" tabIndex="0"> 5 </button>
      <button onClick={() => { setNum('6'); }} onKeyPress type="button" tabIndex="0"> 6 </button>
      <button onClick={() => { setOp('-'); }} onKeyPress type="button" tabIndex="0"> - </button>
      <button onClick={() => { setNum('7'); }} onKeyPress type="button" tabIndex="0"> 7 </button>
      <button onClick={() => { setNum('8'); }} onKeyPress type="button" tabIndex="0"> 8 </button>
      <button onClick={() => { setNum('9'); }} onKeyPress type="button" tabIndex="0"> 9 </button>
      <button onClick={() => { setOp('+'); }} data-testid="btnSum" onKeyPress type="button" tabIndex="0"> + </button>
      <button onClick={() => { setNum('.'); }} onKeyPress type="button" tabIndex="0"> . </button>
      <button onClick={() => { setNum('0'); }} onKeyPress type="button" tabIndex="0"> 0 </button>
      <button onClick={resultt} data-testid="equals" onKeyPress type="button" tabIndex="0"> = </button>
      <button onClick={deleteNum} onKeyPress type="button" tabIndex="0"> DEL </button>
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
