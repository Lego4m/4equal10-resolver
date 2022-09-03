import { useState, useMemo } from 'react';

import { FiPlus, FiMinus, FiX, FiDivide } from 'react-icons/fi';

import { combinate } from './lib/solver';
import { calculate } from './lib/combinationsCalculator';

import './App.scss';

function App() {
  const [numberInput0, setNumberInput0] = useState('0');
  const [numberInput1, setNumberInput1] = useState('0');
  const [numberInput2, setNumberInput2] = useState('0');
  const [numberInput3, setNumberInput3] = useState('0');

  const [parenthesisSelected, setParenthesisSelected] = useState(true);
  const [plusSelected, setPlusSelected] = useState(true);
  const [minusSelected, setMinusSelected] = useState(true);
  const [xSelected, setXSelected] = useState(true);
  const [divideSelected, setDivideSelected] = useState(true);

  const [hasError, setHasError] = useState(false);

  const combinations = useMemo(() => {
    try {
      const comb = combinate({
        numbers: [numberInput0, numberInput1, numberInput2, numberInput3],
        operations: [plusSelected, minusSelected, xSelected, divideSelected],
        parenthesis: parenthesisSelected,
      });

      setHasError(false);
      return calculate(comb, 10);
    } catch (err) {
      setHasError(true);
    }

    return [];
  }, [
    numberInput0, numberInput1, numberInput2, numberInput3,
    plusSelected, minusSelected, xSelected, divideSelected,
    parenthesisSelected
  ]);

  return (
    <div className='container'>
      <header>
        <h1>
          <a 
            href='https://play.google.com/store/apps/details?id=app.fourequalsten.fourequalsten_app' 
            target="_blank" 
            rel="noreferrer"
          >
            4=10
          </a> 
          {' '} Solver
        </h1>
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

        <span>{combinations.length}</span>
      </section>

      <section className='combinations'>
        <h2>COMBINATIONS</h2>
        <ul>
          {combinations.map((combination) => 
            <li key={combination.join('')}>
              {combination.map((text, index) => {
                switch (text) {
                  case '+': return <FiPlus key={index} />
                  case '-': return <FiMinus key={index} />
                  case '*': return <FiX key={index} />
                  case '/': return <FiDivide key={index} />
                  default: return <span key={index}>{text}</span>;
                }
              })}
            </li>
          )}
        </ul>
      </section>
    </div>
  );
}

export default App;
