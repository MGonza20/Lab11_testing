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
import Buttonn from '../components/Buttonn';

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

  it('Testing Exist Button', () => {
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
});
