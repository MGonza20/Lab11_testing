/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import './buttonsGrid.css';
import PropTypes from 'prop-types';

function divsGrid({
  setOp, setNum, deleteNum, clear, resultt, setPMstate,
}) {
  return (
    <div className="btnsDiv">
      <div type="div" onClick={clear} data-testid="div-test-id"> AC </div>
      <div type="div" data-testid="btnChangeNum" onClick={setPMstate}> +/- </div>
      <div onClick={() => { setOp('%'); }} data-testid="btnMod" type="div"> % </div>
      <div onClick={() => { setOp('÷'); }} data-testid="btnDivi" type="div"> ÷ </div>
      <div onClick={() => { setNum('1'); }} data-testid="btn1" type="div"> 1 </div>
      <div onClick={() => { setNum('2'); }} data-testid="btn2" type="div"> 2 </div>
      <div onClick={() => { setNum('3'); }} data-testid="btn3" type="div"> 3 </div>
      <div onClick={() => { setOp('x'); }} data-testid="btnMult" type="div"> x </div>
      <div onClick={() => { setNum('4'); }} data-testid="btn4" type="div"> 4 </div>
      <div onClick={() => { setNum('5'); }} data-testid="btn5" type="div"> 5 </div>
      <div onClick={() => { setNum('6'); }} data-testid="btn6" type="div"> 6 </div>
      <div onClick={() => { setOp('-'); }} data-testid="btnRest" type="div"> - </div>
      <div onClick={() => { setNum('7'); }} data-testid="btn7" type="div"> 7 </div>
      <div onClick={() => { setNum('8'); }} data-testid="btn8" type="div"> 8 </div>
      <div onClick={() => { setNum('9'); }} data-testid="btn9" type="div"> 9 </div>
      <div onClick={() => { setOp('+'); }} data-testid="btnSum" type="div"> + </div>
      <div onClick={() => { setNum('.'); }} data-testid="btnDot" type="div"> . </div>
      <div onClick={() => { setNum('0'); }} type="div"> 0 </div>
      <div onClick={resultt} data-testid="equals" type="div"> = </div>
      <div onClick={deleteNum} data-testid="btnDel" type="div"> DEL </div>
    </div>
  );
}

export default divsGrid;

divsGrid.propTypes = {
  setOp: PropTypes.func.isRequired,
  setNum: PropTypes.func.isRequired,
  deleteNum: PropTypes.func.isRequired,
  clear: PropTypes.func.isRequired,
  resultt: PropTypes.func.isRequired,
  setPMstate: PropTypes.func.isRequired,
};
