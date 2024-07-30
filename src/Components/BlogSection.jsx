import styled from "styled-components";

const BlogSection = () => {
  return (
    <Section>
      <Container>
        <Title>Our Key Features:</Title>
        <Features>
          <Feature>
            <h2>Converters</h2>
            <ul>
              <li>Age to Days Converter: Enter your age in years and instantly convert it to days.</li>
              <li>Hours to Seconds Converter: Quickly convert hours to seconds with ease.</li>
            </ul>
          </Feature>
          <Feature>
            <h2>Number Tools</h2>
            <ul>
              <li>Find Next Number:
                <ul>
                  <li>In Array: Find the number next to a specific number within an array.</li>
                  <li>By Input: Enter a number (integer or float) and find the next number based on the input.</li>
                </ul>
              </li>
            </ul>
          </Feature>
          <Feature>
            <h2>Array Picker</h2>
            <ul>
              <li>First & Last: Randomly generate an array and easily pick the first and last elements.</li>
            </ul>
          </Feature>
          <Feature>
            <h2>Calculators</h2>
            <ul>
              <li>BMI Calculator: Calculate your Body Mass Index by entering your weight and height.</li>
            </ul>
          </Feature>
        </Features>
        <CallToAction>
          <h2>Why Choose Utility Hub?</h2>
          <ul>
            <li><b>User-Friendly:</b> Our tools are designed to be intuitive and easy to use.</li>
            <li><b>Accurate Results:</b> Get precise conversions and calculations every time.</li>
            <li><b>Versatile Applications:</b> From personal health to everyday math, our tools cover a wide range of needs.</li>
            <li><b>Free to Use:</b> Enjoy all our features at no cost.</li>
          </ul>
          
        </CallToAction>
      </Container>
    </Section>
  );
};

export default BlogSection;

const Section = styled.section`
  padding: 2rem 1rem;
  background: linear-gradient(to bottom, #e0f7f7, #b2dfdb); /* Light gradient background */
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #116f6fa2;
`;

const Features = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Feature = styled.div`
  background: #ffffff;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  h2 {
    font-size: 2rem;
    color: #25afaf;
    margin-bottom: 1rem;
  }

  ul {
    list-style-type: disc;
    margin-left: 1.5rem;

    li {
      margin-bottom: 0.5rem;

      ul {
        list-style-type: circle;
        margin-left: 1.5rem;
      }
    }
  }
`;

const CallToAction = styled.div`
  margin-top: 2rem;
  
  h2 {
    font-size: 2rem;
    color: #116f6fa2;
    margin-bottom: 1rem;
    text-align: center;

  }

  ul {
    list-style-type: disc;
    margin-left: auto;
    margin-right: auto;
    max-width: 600px;

    li {
      margin-bottom: 0.5rem;
    }
  }

  p {
    margin-top: 1rem;
    font-size: 1.2rem;
  }
`;
