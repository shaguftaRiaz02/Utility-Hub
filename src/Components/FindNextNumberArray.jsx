import  { useState } from 'react';
import styled from 'styled-components';

const FindNextNumberArray = () => {
  const [arrayInput, setArrayInput] = useState('');
  const [target, setTarget] = useState('');
  const [nextNumber, setNextNumber] = useState(null);
  const [isCircular, setIsCircular] = useState(false);
  const [error, setError] = useState('');

  // Function to find the next number in a non-circular array
  const findNextNumber = (array, target) => {
    const index = array.indexOf(target);
    if (index === -1) {
      return 'Number not found in the array';
    }
    if (index + 1 < array.length) {
      return array[index + 1];
    } else {
      return 'No next number found (target is the last element)';
    }
  };

  // Function to find the next number in a circular array
  const findNextNumberCircular = (array, target) => {
    const index = array.indexOf(target);
    if (index === -1) {
      return 'Number not found in the array';
    }
    // Calculate next index, wrapping around if needed
    const nextIndex = (index + 1) % array.length;
    return array[nextIndex];
  };

  const handleCalculate = () => {
    setError('');
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

    const result = isCircular
      ? findNextNumberCircular(array, targetNumber)
      : findNextNumber(array, targetNumber);

    setNextNumber(result);
  };

  return (
    <Container>
      <h2>Find Next Number</h2>
      <InputGroup>
        <label htmlFor="array">Array (comma-separated):</label>
        <input
          type="text"
          id="array"
          value={arrayInput}
          onChange={(e) => setArrayInput(e.target.value)}
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
        <label>
          <input
            type="checkbox"
            checked={isCircular}
            onChange={() => setIsCircular(!isCircular)}
          />
          Circular Array
        </label>
        <button onClick={handleCalculate}>Find Next Number</button>
      </InputGroup>
      {error && <Error>{error}</Error>}
      {nextNumber !== null && <Result>Your next number is: {nextNumber}</Result>}
    </Container>
  );
};

export default FindNextNumberArray;

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

  input[type='checkbox'] {
    margin-right: 0.5rem;
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
