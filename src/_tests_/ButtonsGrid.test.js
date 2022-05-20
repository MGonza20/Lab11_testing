/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
/**
* @jest-enviroment jsdom
*/

import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import ButtonsGrid from '../components/ButtonsGrid';
import Main from '../components/Main';
import Shell from '../components/Shell';

describe('Testing if whole main app renders correctly', () => {
  it('Testing main app', () => {
    render(<Main />);
  });

  it('Testing shell', () => {
    render(<Shell />);
  });

  it('Testing component ButtonsGrid', () => {
    render(
      <ButtonsGrid
        setNum={() => {}}
        setPrevNum={() => {}}
        setOp={() => {}}
        deleteNum={() => {}}
        clear={() => {}}
        resultt={() => {}}
        setPMstate={() => {}}
      />,
    );
    const testEl = screen.getByTestId('div-test-id');
    expect(testEl).toBeInTheDocument();
  });

  it('Testing Sum Function', () => {
    render(<Main />);
    const btn1 = screen.getByTestId('btn1');
    expect(btn1).toBeInTheDocument();
    const screenDisplay = screen.getByTestId('screenDisp');
    expect(screenDisplay).toBeInTheDocument();
    const btnSum = screen.getByTestId('btnSum');
    const eq = screen.getByTestId('equals');
    fireEvent.click(btn1);
    fireEvent.click(btnSum);
    fireEvent.click(btn1);
    fireEvent.click(eq);
    expect(screenDisplay.textContent).toBe('2');
  });

  it('Testing Rest Function', () => {
    render(<Main />);
    const btn1 = screen.getByTestId('btn1');
    expect(btn1).toBeInTheDocument();
    const screenDisplay = screen.getByTestId('screenDisp');
    expect(screenDisplay).toBeInTheDocument();
    const btnRest = screen.getByTestId('btnRest');
    const eq = screen.getByTestId('equals');
    fireEvent.click(btn1);
    fireEvent.click(btnRest);
    fireEvent.click(btn1);
    fireEvent.click(eq);
    expect(screenDisplay.textContent).toBe('0');
  });

  it('Testing Rest Error', () => {
    render(<Main />);
    const btn5 = screen.getByTestId('btn5');
    expect(btn5).toBeInTheDocument();
    const btn8 = screen.getByTestId('btn8');
    expect(btn8).toBeInTheDocument();
    const screenDisplay = screen.getByTestId('screenDisp');
    expect(screenDisplay).toBeInTheDocument();
    const btnRest = screen.getByTestId('btnRest');
    const eq = screen.getByTestId('equals');
    fireEvent.click(btn5);
    fireEvent.click(btnRest);
    fireEvent.click(btn8);
    fireEvent.click(eq);
    expect(screenDisplay.textContent).toBe('ERROR');
  });

  it('Testing Multiplication Function', () => {
    render(<Main />);
    const btn8 = screen.getByTestId('btn8');
    expect(btn8).toBeInTheDocument();
    const btn1 = screen.getByTestId('btn1');
    expect(btn1).toBeInTheDocument();
    const screenDisplay = screen.getByTestId('screenDisp');
    expect(screenDisplay).toBeInTheDocument();
    const btnMult = screen.getByTestId('btnMult');
    const eq = screen.getByTestId('equals');
    fireEvent.click(btn8);
    fireEvent.click(btn8);
    fireEvent.click(btnMult);
    fireEvent.click(btn1);
    fireEvent.click(btn1);
    fireEvent.click(eq);
    expect(screenDisplay.textContent).toBe('968');
  });

  it('Testing Operation Error when more than 9 digits', () => {
    render(<Main />);
    const btn8 = screen.getByTestId('btn8');
    expect(btn8).toBeInTheDocument();
    const btn1 = screen.getByTestId('btn1');
    expect(btn1).toBeInTheDocument();
    const screenDisplay = screen.getByTestId('screenDisp');
    expect(screenDisplay).toBeInTheDocument();
    const btnMult = screen.getByTestId('btnMult');
    const eq = screen.getByTestId('equals');
    fireEvent.click(btn8);
    fireEvent.click(btn8);
    fireEvent.click(btn8);
    fireEvent.click(btn8);
    fireEvent.click(btn8);
    fireEvent.click(btn8);
    fireEvent.click(btn8);
    fireEvent.click(btn8);
    fireEvent.click(btn8);
    fireEvent.click(btnMult);
    fireEvent.click(btn1);
    fireEvent.click(btn1);
    fireEvent.click(eq);
    expect(screenDisplay.textContent).toBe('ERROR');
  });

  it('Testing Module Operation', () => {
    render(<Main />);
    const btn8 = screen.getByTestId('btn8');
    expect(btn8).toBeInTheDocument();
    const btn5 = screen.getByTestId('btn5');
    expect(btn5).toBeInTheDocument();
    const screenDisplay = screen.getByTestId('screenDisp');
    expect(screenDisplay).toBeInTheDocument();
    const btnMod = screen.getByTestId('btnMod');
    const eq = screen.getByTestId('equals');
    fireEvent.click(btn8);
    fireEvent.click(btnMod);
    fireEvent.click(btn5);
    fireEvent.click(eq);
    expect(screenDisplay.textContent).toBe('3');
  });

  it('Testing Division Operation', () => {
    render(<Main />);
    const btn8 = screen.getByTestId('btn8');
    expect(btn8).toBeInTheDocument();
    const btn4 = screen.getByTestId('btn4');
    expect(btn4).toBeInTheDocument();
    const screenDisplay = screen.getByTestId('screenDisp');
    expect(screenDisplay).toBeInTheDocument();
    const btnDivi = screen.getByTestId('btnDivi');
    const eq = screen.getByTestId('equals');
    fireEvent.click(btn8);
    fireEvent.click(btnDivi);
    fireEvent.click(btn4);
    fireEvent.click(eq);
    expect(screenDisplay.textContent).toBe('2');
  });

  it('Testing Division Operation does not show more than 9 characters when continuos result -> 22/7', () => {
    render(<Main />);
    const btn2 = screen.getByTestId('btn2');
    expect(btn2).toBeInTheDocument();
    const btn7 = screen.getByTestId('btn7');
    expect(btn7).toBeInTheDocument();
    const screenDisplay = screen.getByTestId('screenDisp');
    expect(screenDisplay).toBeInTheDocument();
    const btnDivi = screen.getByTestId('btnDivi');
    const eq = screen.getByTestId('equals');
    fireEvent.click(btn2);
    fireEvent.click(btn2);
    fireEvent.click(btnDivi);
    fireEvent.click(btn7);
    fireEvent.click(eq);
    expect(screenDisplay.textContent).toBe('3.1428571');
  });

  it('Test to place just one dot in the number even if it is clicked many times', () => {
    render(<Main />);
    const btn2 = screen.getByTestId('btn2');
    expect(btn2).toBeInTheDocument();
    const btn7 = screen.getByTestId('btn7');
    expect(btn7).toBeInTheDocument();
    const btnDot = screen.getByTestId('btnDot');
    expect(btnDot).toBeInTheDocument();
    const screenDisplay = screen.getByTestId('screenDisp');
    expect(screenDisplay).toBeInTheDocument();
    const btnDivi = screen.getByTestId('btnDivi');
    const eq = screen.getByTestId('equals');
    fireEvent.click(btn2);
    fireEvent.click(btn2);
    fireEvent.click(btnDivi);
    fireEvent.click(btn7);
    fireEvent.click(btnDot);
    fireEvent.click(btnDot);
    fireEvent.click(btnDot);
    fireEvent.click(btn7);
    fireEvent.click(eq);
    expect(screenDisplay.textContent).toBe('2.8571428');
  });
});
