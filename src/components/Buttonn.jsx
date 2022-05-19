/* eslint-disable linebreak-style */
import React from 'react';

function Buttonn({ functionClick }) {
  return (
    <button data-testid="pruebaBtn" onClick={functionClick} type="button" tabIndex="0"> </button>
  );
}

export default Buttonn;
