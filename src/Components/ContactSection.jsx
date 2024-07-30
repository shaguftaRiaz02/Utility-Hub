import  { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';

const ContactSection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert('Thank you for your message!');
  };

  return (
    <Container>
      <h2>Contact Us</h2>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-control"
            placeholder="Enter your name"
            required
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            placeholder="Enter your email"
            required
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="form-control"
            rows="5"
            placeholder="Enter your message"
            required
          />
        </FormGroup>
        <Button type="submit">Send Message</Button>
      </Form>
    </Container>
  );
};

export default ContactSection;

const Container = styled.div`
  background: #f9f9f9;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 2rem auto;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  label {
    font-size: 1rem;
    color: #333;
  }

  input,
  textarea {
    padding: 0.5rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 1rem;
  }
`;

const Button = styled.button`
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
`;
