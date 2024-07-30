import { useState } from 'react';
import styled from 'styled-components';

const FindNextNumber = () => {
  const [inputValue, setInputValue] = useState('');
  const [nextNumber, setNextNumber] = useState(null);
  const [error, setError] = useState('');

  // Function to find the next number
  const findNextNumber = (value) => {
    // Check if the input is an integer or a float
    const number = parseFloat(value);
    if (isNaN(number)) {
      return 'Input is not a valid number';
    }
    return number + 1;
  };

  const handleCalculate = () => {
    setError('');
    
    const result = findNextNumber(inputValue);
    
    if (typeof result === 'string' && result.startsWith('Input is not a valid number')) {
      setError(result);
      setNextNumber(null);
    } else {
      setNextNumber(result);
    }
  };

  return (
    <Container>
      <h2>Find Next Number</h2>
      <InputGroup>
        <label htmlFor="number">Enter a number:</label>
        <input
          type="text"
          id="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="e.g. 5 or 5.5"
        />
        <button onClick={handleCalculate}>Find Next Number</button>
      </InputGroup>
      {error && <Error>{error}</Error>}
      {nextNumber !== null && <Result>Your next number is: {nextNumber}</Result>}
    </Container>
  );
};

export default FindNextNumber;

const Container = styled.div`
  background: #f9f9f9;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 400px;
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

  input[type='text'] {
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
