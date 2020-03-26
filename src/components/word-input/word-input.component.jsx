import React from 'react';
import './word-input.styles.scss';

const WordInput = ({placeholder}) => {
  return (
    <input
        className='word_input'
        placeholder={placeholder}
    />
  )
};

export default WordInput;
