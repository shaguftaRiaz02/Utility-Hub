import styled from "styled-components";

const Hero = () => {
  return (
    <div>
      <HomeContainer>
        <Banner>
          <h1>Utility Hub</h1>
          <p>
            <br />
            Utility Hub is a collection of tools that can help you in your
            day-to-day life.
          </p>
          <p>It includes tools like converters, calculators, and much more.</p>
          <button>Get Started</button>
        </Banner>
      </HomeContainer>
    </div>
  );
};

export default Hero;

const HomeContainer = styled.div`

  background-image: url('/images/bells-flower-658751_1280.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 3;
  height: 70vh; /* Ensures the gradient covers the full viewport height */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Banner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  
  text-align: center;

  h1 {
    font-size: 8cap; /* Adjusted font size for better readability */
    font-weight: bolder;
    color: white;
  }

  p {
    font-size: 2cap; /* Adjusted font size for better readability */
    font-weight: 500;
    color: white;
  }

  button {
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
