/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
/**
* @jest-enviroment jsdom
*/

import { render, screen } from '@testing-library/react';
import React from 'react';
import { shallow } from 'enzyme';
import ButtonsGrid from '../components/ButtonsGrid';

describe('Testing component ButtonsGrid', () => {
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


