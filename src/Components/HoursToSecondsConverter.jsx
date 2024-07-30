import  { useState } from 'react';
import styled from 'styled-components';

const HoursToSecondsConverter = () => {
  const [hours, setHours] = useState('');
  const [seconds, setSeconds] = useState(null);

  const handleChange = (e) => {
    setHours(e.target.value);
  };

  const handleConvert = () => {
    const hoursInSeconds = hours * 3600; // 1 hour = 3600 seconds
    setSeconds(hoursInSeconds);
  };

  return (
    <ConverterContainer>
      <ConverterContent>
        <h2>Hours to Seconds Converter</h2>
        <InputContainer>
          <label htmlFor="hours">Enter hours:</label>
          <input
            type="number"
            id="hours"
            value={hours}
            onChange={handleChange}
            placeholder="Enter hours"
          />
          <button onClick={handleConvert}>Convert</button>
        </InputContainer>
        {seconds !== null && (
          <Result>
            <p>Your time in seconds is:</p>
            <h3>{seconds} seconds</h3>
          </Result>
        )}
      </ConverterContent>
    </ConverterContainer>
  );
};

export default HoursToSecondsConverter;

const ConverterContainer = styled.div`
  background: #f0f8f8;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  margin: 0 auto;
`;

const ConverterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  h2 {
    color: #25afaf;
    margin-bottom: 1rem;
  }
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;

  label {
    font-size: 1rem;
    color: #333;
  }

  input {
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

const Result = styled.div`
  text-align: center;

  p {
    font-size: 1rem;
    color: #555;
  }

  h3 {
    font-size: 1.5rem;
    color: #25afaf;
  }
`;
