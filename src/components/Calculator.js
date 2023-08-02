import React, { useState } from 'react';

export default function Calculator() {
  const [text, setText] = useState('');

  const display = (value) => {
    setText((prevText) => prevText + value);
  };

  const calculate = () => {
    try {
      setText(eval(text).toString());
    } catch (error) {
      setText('Error');
    }
  };

  const clear = () => {
    setText('');
  };

  return (
    <>
      <div className="mx-5 my-5">Display: </div>
      <div style={{border:'1px solid gray'}}>{text}</div>
      <div className="numbers">
        <button className="btn btn-primary" onClick={() => display('1')}>
          1
        </button>
        <button className="btn btn-primary" onClick={() => display('2')}>
          2
        </button>
        <button className="btn btn-primary" onClick={() => display('3')}>
          3
        </button><br />
        <button className="btn btn-primary" onClick={() => display('4')}>
          4
        </button>
        <button className="btn btn-primary" onClick={() => display('5')}>
          5
        </button>
        <button className="btn btn-primary" onClick={() => display('6')}>
          6
        </button><br /> 
        <button className="btn btn-primary" onClick={() => display('7')}>
          7
        </button>
        <button className="btn btn-primary" onClick={() => display('8')}>
          8
        </button>
        <button className="btn btn-primary" onClick={() => display('9')}>
          9
        </button><br />
        <button className="btn btn-primary" onClick={() => display('0')}>
          0
        </button>
      </div>

      <div className="operators mx-5 my-5">
        <button className="btn btn-danger mx-2" onClick={() => display('+')}>
          +
        </button>
        <button className="btn btn-danger mx-2" onClick={() => display('-')}>
          -
        </button>
        <button
          className="btn btn-danger mx-2"
          onClick={() => display('*')}
        >
          *
        </button>
        <button
          className="btn btn-danger mx-2"
          onClick={() => display('/')}
        >
          /
        </button><br />
        <button className="btn btn-success" onClick={calculate}>
          =
        </button>
        <button className="btn btn-success" onClick={clear}>
          All clear
        </button>
      </div>
    </>
  );
}
