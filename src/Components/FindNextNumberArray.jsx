import { useState } from 'react';
import styled from 'styled-components';

const FindNextNumber = () => {
  const [inputValue, setInputValue] = useState('');
  const [arrayInput, setArrayInput] = useState('');
  const [target, setTarget] = useState('');
  const [nextNumber, setNextNumber] = useState(null);
  const [error, setError] = useState('');
  const [showTargetInput, setShowTargetInput] = useState(false);

  // Function to find the next number in an array
  const findNextNumberInArray = (array, target) => {
    const index = array.indexOf(target);
    if (index === -1) {
      return 'Number not found in the array';
    }
    if (index + 1 < array.length) {
      return `Next number is ${array[index + 1]}`;
    } else {
      return 'No next number found (target is the last element)';
    }
  };

  // Function to find the next number
  const findNextNumber = (value) => {
    const number = parseFloat(value);
    if (isNaN(number)) {
      return 'Input is not a valid number';
    }
    return `Next number is ${number + 1}`;
  };

  const handleCalculate = () => {
    setError('');
    if (arrayInput) {
      const array = arrayInput.split(',').map(Number);
      const targetNumber = Number(target);

      if (isNaN(targetNumber)) {
        setError('Target number must be a valid number.');
        return;
      }

      if (array.some(isNaN)) {
        setError('Array must contain valid numbers.');
        return;
      }

      const result = findNextNumberInArray(array, targetNumber);
      setNextNumber(result);
    } else {
      const result = findNextNumber(inputValue);
      if (result.startsWith('Input is not a valid number')) {
        setError(result);
        setNextNumber(null);
      } else {
        setNextNumber(result);
      }
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    setShowTargetInput(value.includes(','));
  };

  const handleArrayInputChange = (e) => {
    setArrayInput(e.target.value);
    // Reset target input and results when array input changes
    setTarget('');
    setNextNumber(null);
  };

  return (
    <Container>
      <h2>Find Next Number</h2>
      {!showTargetInput ? (
        <InputGroup>
          <label htmlFor="number">Enter a number or an array (comma-separated):</label>
          <input
            type="text"
            id="number"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="e.g. 5 or 1,2,3,4,5"
          />
          <button onClick={handleCalculate}>Find Next Number</button>
        </InputGroup>
      ) : (
        <InputGroup>
          <label htmlFor="array">Array (comma-separated):</label>
          <input
            type="text"
            id="array"
            value={arrayInput}
            onChange={handleArrayInputChange}
            placeholder="e.g. 1,2,3,4,5"
          />
          <label htmlFor="target">Target Number:</label>
          <input
            type="number"
            id="target"
            value={target}
            onChange={(e) => setTarget(e.target.value)}
            placeholder="e.g. 3"
          />
          <button onClick={handleCalculate}>Find Next Number</button>
        </InputGroup>
      )}
      {error && <Error>{error}</Error>}
      {nextNumber !== null && <Result>{nextNumber}</Result>}
    </Container>
  );
};

export default FindNextNumber;

const Container = styled.div`
  background: #f9f9f9;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 0 auto;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  label {
    font-size: 1rem;
    color: #333;
  }

  input[type='text'],
  input[type='number'] {
    padding: 0.5rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 1rem;
  }

  button {
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 4px;
    background-color: #25afaf;
    color: white;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #116f6fa2;
    }
  }
`;

const Error = styled.div`
  color: red;
  font-size: 1rem;
  margin-top: 1rem;
`;

const Result = styled.div`
  font-size: 1.25rem;
  color: #333;
  margin-top: 1rem;
`;
