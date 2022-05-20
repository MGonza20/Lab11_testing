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
});
