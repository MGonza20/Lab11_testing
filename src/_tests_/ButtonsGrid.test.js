/**
* @jest-enviroment jsdom
*/

import { render, screen } from '@testing-library/react';
import React from 'react';
import ButtonsGrid from '../components/ButtonsGrid';

describe('Testing component ButtonsGrid', () => {
  it('Testing component ButtonsGrid', () => {
    render(<ButtonsGrid />);
    const testEl = screen.getByTestId('div-test-id');
    expect(testEl).toBeInTheDocument();
  });
});
