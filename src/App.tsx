import { useState } from 'react';

import { FiPlus, FiMinus, FiX, FiDivide } from 'react-icons/fi';

import { combinate } from './lib/resolver';

import './App.scss';

function App() {
  const [numberInput0, setNumberInput0] = useState('');
  const [numberInput1, setNumberInput1] = useState('');
  const [numberInput2, setNumberInput2] = useState('');
  const [numberInput3, setNumberInput3] = useState('');

  const [parenthesisSelected, setParenthesisSelected] = useState(true);
  const [plusSelected, setPlusSelected] = useState(true);
  const [minusSelected, setMinusSelected] = useState(true);
  const [xSelected, setXSelected] = useState(true);
  const [divideSelected, setDivideSelected] = useState(true);

  const [hasError, setHasError] = useState(false);

  const combinations = combinate({
    numbers: [numberInput0, numberInput1, numberInput2, numberInput3],
    operations: [plusSelected, minusSelected, xSelected, divideSelected],
    parenthesis: parenthesisSelected,
  });

  return (
    <div className='container'>
      <header>
        <h1>4=10 Resolver</h1>
      </header>

      <section className='configs'>
        <div className='numbers'>
          <input 
            type='text'
            maxLength={1}
            value={numberInput0} 
            onChange={(e) => setNumberInput0(e.target.value)} 
            className={hasError ? 'error' : ''}
          />
          <input 
            type="text" 
            maxLength={1}
            value={numberInput1} 
            onChange={(e) => setNumberInput1(e.target.value)} 
            className={hasError ? 'error' : ''}
          />
          <input 
            type="text" 
            maxLength={1}
            value={numberInput2} 
            onChange={(e) => setNumberInput2(e.target.value)} 
            className={hasError ? 'error' : ''}
          />
          <input 
            type="text" 
            maxLength={1}
            value={numberInput3} 
            onChange={(e) => setNumberInput3(e.target.value)} 
            className={hasError ? 'error' : ''}
          />
        </div>

        <div className='options'>
          <button 
            className={parenthesisSelected ? '' : 'unselected'}
            onClick={() => setParenthesisSelected(!parenthesisSelected)}
          >
            (
          </button>
          
          <div>
            <button
              className={plusSelected ? '' : 'unselected'}
              onClick={() => setPlusSelected(!plusSelected)}
            >
              <FiPlus />
            </button>

            <button
              className={minusSelected ? '' : 'unselected'}
              onClick={() => setMinusSelected(!minusSelected)}
            >
              <FiMinus />
            </button>

            <button
              className={xSelected ? '' : 'unselected'}
              onClick={() => setXSelected(!xSelected)}
            >
              <FiX />
            </button>

            <button
              className={divideSelected ? '' : 'unselected'}
              onClick={() => setDivideSelected(!divideSelected)}
            >
              <FiDivide />
            </button>
          </div>
          
          <button
            className={parenthesisSelected ? '' : 'unselected'}
            onClick={() => setParenthesisSelected(!parenthesisSelected)}
          >
            )
          </button>
        </div>

        <span>36.864</span>
      </section>

      <section className='combinations'>
        <h2>COMBINATIONS</h2>
        <ul>
          <li>6 + 2 + 1 + 2</li>
          <li>6 + 2 + 1 + 2</li>
          <li>6 + 2 + 1 + 2</li>
          <li>6 + 2 + 1 + 2</li>
          <li>6 + 2 + 1 + 2</li>
          <li>6 + 2 + 1 + 2</li>
        </ul>
      </section>
    </div>
  );
}

export default App;
