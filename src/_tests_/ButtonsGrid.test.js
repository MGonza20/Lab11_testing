/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
/**
* @jest-enviroment jsdom
*/

import { render, screen } from '@testing-library/react';
import React from 'react';
import userEvent from '@testing-library/user-event';
import ButtonsGrid from '../components/ButtonsGrid';
import Main from '../components/Main';
import Shell from '../components/Shell';

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
    //const contentt = mount(<Main />)
    render(<Main />);
    const btn1 = screen.getByTestId('btn1');
    const btnSum = screen.getByTestId('btnSum');
    const eq = screen.getByTestId('equals');
    const screenDisplay = screen.getByTestId('screenDisp');
    /** btn1.simulate('click');
    btnSum.simulate('click');
    btn1.simulate('click');
    eq.simulate('click'); */
    userEvent.click(btn1);
    userEvent.click(btnSum);
    userEvent.click(btn1);
    userEvent.click(eq);
    expect(screenDisplay.text()).to.equal('2');
  });
});
