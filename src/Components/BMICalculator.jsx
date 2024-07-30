import { useState } from "react";
import styled from "styled-components";

const BMICalculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [heightUnit, setHeightUnit] = useState("cm");
  const [gender, setGender] = useState("male");
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState("");

  const calculateBMI = () => {
    let heightInMeters;
    if (heightUnit === "cm") {
      heightInMeters = height / 100;
    } else if (heightUnit === "ft") {
      const [feet, inches] = height.split("'");
      const heightInInches =
        parseInt(feet, 10) * 12 + parseInt(inches || "0", 10);
      heightInMeters = heightInInches * 0.0254;
    }

    if (weight > 0 && heightInMeters > 0) {
      const bmiValue = weight / (heightInMeters * heightInMeters);
      setBmi(bmiValue.toFixed(2));

      if (bmiValue < 18.5) {
        setCategory("Underweight");
      } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
        setCategory("Normal weight");
      } else if (bmiValue >= 25 && bmiValue < 29.9) {
        setCategory("Overweight");
      } else {
        setCategory("Obesity");
      }
    } else {
      setBmi(null);
      setCategory("");
    }
  };

  return (
    <CalculatorContainer>
      <CalculatorContent>
        <h2>BMI Calculator</h2>
        <Description>
          <p>
            <strong>What is BMI?</strong>
          </p>
          <p>
            BMI, or Body Mass Index, is a measure that uses your height and
            weight to work out if your weight is healthy. The BMI calculation
            divides an adults&apos; weight in kilograms by their height in metres
            squared.
          </p>
          <p>
            <strong>Why is BMI Important?</strong>
          </p>
          <p>
            BMI is a useful tool to quickly assess whether a person is
            underweight, normal weight, overweight, or obese. It is important
            because it helps in identifying potential health risks associated
            with being overweight or underweight, such as cardiovascular
            diseases, diabetes, and other health issues.
          </p>
        </Description>
        <InputContainer>
          <label htmlFor="gender">Gender:</label>
          <select
            id="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="form-control"
            required
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <label htmlFor="weight">Weight (kg):</label>
          <input
            type="number"
            id="weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Enter weight in kg"
            required
          />
          <label htmlFor="height">Height:</label>
          <div>
            <input
              type="text"
              id="height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder={
                heightUnit === "cm"
                  ? "Enter height in cm"
                  : "Enter height in ft'inches"
              }
              required
            />
            <select
              value={heightUnit}
              onChange={(e) => setHeightUnit(e.target.value)}
            >
              <option value="cm">cm</option>
              <option value="ft">ft&apos;inches</option>
            </select>
          </div>
          <button onClick={calculateBMI}>Calculate BMI</button>
        </InputContainer>
        {bmi !== null && (
          <Result>
            <p>Your BMI is:</p>
            <h3>{bmi}</h3>
            <p>Category: {category}</p>
          </Result>
        )}
      </CalculatorContent>
    </CalculatorContainer>
  );
};

export default BMICalculator;

const CalculatorContainer = styled.div`
  background: #f9f9f9;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 0 auto;
`;

const CalculatorContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  h2 {
    color: #25afaf;
    margin-bottom: 1rem;
  }
`;

const Description = styled.div`
  text-align: left;
  p {
    font-size: 1rem;
    color: #333;
    line-height: 1.5;
  }
  strong {
    font-size: 1.1rem;
    color: #25afaf;
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
    width: calc(100% - 2.5rem);
  }

  select {
    padding: 0.5rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 1rem;
    width: 100%;
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
    font-size: 2rem;
    color: #25afaf;
  }
`;
