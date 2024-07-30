import { useState } from 'react';
import styled from 'styled-components';

const CaseConverter = () => {
  const [name, setName] = useState('');
  const [formattedName, setFormattedName] = useState('');
  const [error, setError] = useState('');

  // Function to capitalize the first letter of the name
  const capitalizeName = (name) => {
    if (!name) {
      return '';
    }
    if (name !== name.toLowerCase()) {
      return 'Name must be in lowercase only.';
    }
    return name.charAt(0).toUpperCase() + name.slice(1);
  };

  const handleSubmit = () => {
    setError('');
    const result = capitalizeName(name);
    
    if (result.startsWith('Name must be in lowercase')) {
      setError(result);
      setFormattedName('');
    } else {
      setFormattedName(result);
    }
  };

  return (
    <Container>
      <h2>Capitalize Name</h2>
      <InputGroup>
        <label htmlFor="name">Enter your name (lowercase only):</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g. john"
        />
        <button onClick={handleSubmit}>Capitalize Name</button>
      </InputGroup>
      {error && <Error>{error}</Error>}
      {formattedName && <Result>Your capitalized name is: {formattedName}</Result>}
    </Container>
  );
};

export default CaseConverter;

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
