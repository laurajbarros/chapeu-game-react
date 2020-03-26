import React from 'react';
import './homepage.styles.scss';
import Descritivo from '../../components/descritivo/descritivo.component';
import WordsForm from '../../components/words-form/words-form.component';

class HomePage extends React.Component {

  render(){
    return (
      <div className='homepage'>
        <Descritivo
          titulo='Chapeu'
          subtitulo='Insira suas palavras aqui, uma em cada linha'
          />
        <WordsForm/>
      </div>
    )
  };
};

export default HomePage;
