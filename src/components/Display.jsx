/* eslint-disable linebreak-style */
import React from 'react';
import './display.css';
import PropTypes from 'prop-types';

function Display({ showActual, PMstate }) {
  return (
    <div className="displayDiv">
      <p data-testid="screenDisp" className="textRes">{ (((showActual > 999999999) || (showActual < 0)) && !PMstate) ? 'ERROR' : String(showActual).slice(0, 9)}</p>
    </div>
  );
}

export default Display;

Display.propTypes = {
  showActual: PropTypes.string.isRequired,
  PMstate: PropTypes.bool.isRequired,
};
