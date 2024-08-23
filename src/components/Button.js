import React, { useState } from 'react';

const Button = () => {
  const [text, setText] = useState('Clique aqui');
  const [text2, setText2] = useState('Click here');
  const [inputText, setInputText] = useState('');

  const handleChange = (event) => {
    setInputText(event.target.value)
  }

  const handleClick = () => {
    setText('Você clicou!');
  };
  const handleClick2 = () => {
    setText2('Clicado!');
  };

  return( 
    <>   
      <button onClick={handleClick}>{text}</button>
      <button id='btn' onClick={handleClick2}>{text2}</button>
      <input type="text" value={inputText} onChange={handleChange} />

    </>
  );
};

export default Button;
