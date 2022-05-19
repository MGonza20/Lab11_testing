/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
/**
* @jest-enviroment jsdom
*/

import { render, screen } from '@testing-library/react';
import React from 'react';
import fireEvent from '@testing-library/user-event';
import ButtonsGrid from '../components/ButtonsGrid';
import Main from '../components/Main';
import Shell from '../components/Shell';
import Buttonn from '../components/Buttonn';

describe('Testing if whole main app renders correctly', () => {
  it('Testing main app', () => {
    render(<Main />);
  });
});

describe('Testing if shell renders correctly', () => {
  it('Testing shell', () => {
    render(<Shell />);
  });
});

describe('Testing if component ButtonsGrid renders correctly', () => {
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
});

describe('Testing operations', () => {
  it('Testing sum', () => {
    const funcionMock = jest.fn();
    render(<Buttonn functionClick={funcionMock} />);
    const btn1 = screen.getByTestId('pruebaBtn');
    /* const btnSum = screen.getByTestId('btnSum');
    const eq = screen.getByTestId('equals'); */
    /** btn1.simulate('click');
    btnSum.simulate('click');
    btn1.simulate('click');
    eq.simulate('click'); */
    // expect(btn1).toBeDefined();
    fireEvent.click(btn1);
    expect(funcionMock).toHaveBeenCalled();
    // const screenDisplay = screen.getByTestId('screenDisp');
    // console.log(screenDisplay.innerHTML);
    // console.log(screenDisplay.innerText);
    // expect(screenDisplay.textContent).toEqual('1');
    // console.log(screenD)
    /** fireEvent.click(btnSum);
    fireEvent.click(btn1);
    fireEvent.click(eq);
    console.log(screenDisplay);
    expect(screenDisplay.innerHtml).toHaveTextContent('2'); */
  });
});
