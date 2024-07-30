import { useState } from 'react';
import styled from 'styled-components';

const AdditionTool = () => {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [sum, setSum] = useState('');

  const handleValue1Change = (e) => {
    const val1 = e.target.value;
    setValue1(val1);
    updateSum(val1, value2);
  };

  const handleValue2Change = (e) => {
    const val2 = e.target.value;
    setValue2(val2);
    updateSum(value1, val2);
  };

  const updateSum = (val1, val2) => {
    const num1 = parseInt(val1, 10);
    const num2 = parseInt(val2, 10);
    if (isNaN(num1) || isNaN(num2)) {
      setSum('NaN');
    } else {
      setSum(num1 + num2);
    }
  };

  return (
    <AdditionToolContainer>
      <h2>Addition Tool</h2>
      <InputContainer>
        <label htmlFor="value1">First Number:</label>
        <input
          type="text"
          id="value1"
          value={value1}
          onChange={handleValue1Change}
          placeholder="Enter first number"
        />
      </InputContainer>
      <InputContainer>
        <label htmlFor="value2">Second Number:</label>
        <input
          type="text"
          id="value2"
          value={value2}
          onChange={handleValue2Change}
          placeholder="Enter second number"
        />
      </InputContainer>
      <InputContainer>
        <label htmlFor="sum">Sum:</label>
        <input
          type="text"
          id="sum"
          value={sum}
          readOnly
          placeholder="Sum will be displayed here"
        />
      </InputContainer>
    </AdditionToolContainer>
  );
};

export default AdditionTool;

const AdditionToolContainer = styled.div`
  background: #f9f9f9;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  margin: 0 auto;
  text-align: center;

  h2 {
    color: #25afaf;
    margin-bottom: 1rem;
  }
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1rem;

  label {
    font-size: 1rem;
    color: #333;
  }

  input {
    padding: 0.5rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 1rem;
    width: calc(100% - 1rem);
    margin: 0 auto;
  }
`;
