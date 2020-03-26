import React from 'react';
import './descritivo.styles.scss';

const Descritivo = ({titulo, subtitulo}) => {

  return (
    <div className='descritivo'>
      <h1 className='title'>{titulo}</h1>
      <h3 className='subtitle'>{subtitulo}</h3>
    </div>
  )
}

export default Descritivo;
