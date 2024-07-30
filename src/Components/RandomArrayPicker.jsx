import { useState } from 'react';
import styled from 'styled-components';

const RandomArrayPicker = () => {
  const [array, setArray] = useState([]);
  const [firstElement, setFirstElement] = useState(null);
  const [lastElement, setLastElement] = useState(null);
  
  // Function to generate a random array of integers
  const generateRandomArray = () => {
    const length = Math.floor(Math.random() * 10) + 5; // Random length between 5 and 14
    const randomArray = Array.from({ length }, () => Math.floor(Math.random() * 100)); // Random integers between 0 and 99
    return randomArray;
  };

  // Function to pick first and last element of an array
  const pickFirstAndLast = (arr) => {
    if (arr.length === 0) return { first: null, last: null };
    return { first: arr[0], last: arr[arr.length - 1] };
  };

  const handleGenerateArray = () => {
    const newArray = generateRandomArray();
    setArray(newArray);
    const { first, last } = pickFirstAndLast(newArray);
    setFirstElement(first);
    setLastElement(last);
  };

  return (
    <Container>
      <h2>Random Array Picker</h2>
      <button onClick={handleGenerateArray}>Generate Random Array</button>
      {array.length > 0 && (
        <>
          <ArrayDisplay>Generated Array: {array.join(', ')}</ArrayDisplay>
          <Result>
            <b>First Element:</b> {firstElement} <br />
            <b>Last Element:</b> {lastElement}
          </Result>
        </>
      )}
    </Container>
  );
};

export default RandomArrayPicker;

const Container = styled.div`
  background: #f9f9f9;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 0 auto;
  button{
    margin-top: 1rem;
    margin-bottom: 1rem;
    padding: 10px 30px;
    border: none;
    border-radius: 20px;
    background-color: #25afaf;
    color: white;
    cursor: pointer; /* Changes cursor to pointer on hover */
    &:hover {
      background-color: #116f6fa2;
  }
}
`;

const ArrayDisplay = styled.div`
  font-size: 1.25rem;
  color: #333;
  margin-top: 1rem;
`;

const Result = styled.div`
  font-size: 1.25rem;
  color: #333;
  margin-top: 1rem;
  b{
    color: #25afaf;
  }
`;
