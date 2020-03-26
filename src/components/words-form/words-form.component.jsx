import React from 'react';
import './words-form.styles.scss';
import WordInput from '../word-input/word-input.component';

class WordsForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      words:''
    }
  }
  render(){
    return (
      <div className='words-form'>
        <WordInput placeholder='palavra'/>
        <WordInput placeholder='palavra'/>
        <WordInput placeholder='palavra'/>
        <WordInput placeholder='palavra'/>
        <WordInput placeholder='palavra'/>
      </div>
    );
  }
}

export default WordsForm;
