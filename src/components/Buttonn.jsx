/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
import React from 'react';

function Buttonn({ functionClick }) {
  return (
    <button data-testid="pruebaBtn" onClick={functionClick} type="button" tabIndex="0"> </button>
  );
}

export default Buttonn;
