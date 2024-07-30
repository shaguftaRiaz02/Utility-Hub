import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';

const AboutSection = () => {
  return (
    <Container>
      <h2>About Utility Hub</h2>
      <StyledCarousel>
        <Carousel.Item>
          <ImageContainer>
            <img
              className="d-block w-100"
              src="../../public/images/change-948018_1280.jpg"
              alt="Tool 1"
            />
          </ImageContainer>
          <GradientCaption>
            <CaptionText>Comprehensive Tools: From age conversion to BMI calculation, our tools cover a wide range of practical needs.</CaptionText>
          </GradientCaption>
        </Carousel.Item>
        <Carousel.Item>
          <ImageContainer>
            <img
              className="d-block w-100"
              src="../../public/images/web-design-3411373_1280.jpg"
              alt="Tool 2"
            />
          </ImageContainer>
          <GradientCaption>
            <CaptionText>User-Friendly Interface: We prioritize ease of use, ensuring that our tools are accessible to everyone.</CaptionText>
          </GradientCaption>
        </Carousel.Item>
        <Carousel.Item>
          <ImageContainer>
            <img
              className="d-block w-100"
              src="../../public/images/quality-control-1257235_1280.jpg"
              alt="Tool 3"
            />
          </ImageContainer>
          <GradientCaption>
            <CaptionText>Commitment to Quality: We focus on delivering precise and reliable results with every tool we offer.</CaptionText>
          </GradientCaption>
        </Carousel.Item>
      </StyledCarousel>
      <Content>
        <p><strong>Welcome to Utility Hub: Converters & Calculators!</strong></p>
        <p>At Utility Hub, we are passionate about creating practical and efficient tools to simplify everyday tasks. Our goal is to provide a central platform where you can find reliable converters and calculators that address various needs, from unit conversions to numerical calculations.</p>
        <p><strong>Who We Are</strong></p>
        <p>Utility Hub is a team of enthusiasts dedicated to developing high-quality, easy-to-use tools that cater to a range of practical applications. We understand the importance of accuracy and simplicity, and we strive to deliver solutions that meet these criteria. Our website was built to offer a user-friendly experience with a focus on providing valuable functionalities in one place.</p>
        <p><strong>Our Mission</strong></p>
        <p>Our mission is to empower users by offering tools that streamline and enhance their daily tasks. Whether you need to convert age to days, calculate your BMI, or analyze numerical data, we aim to make these processes as straightforward as possible. By combining intuitive design with powerful features, we hope to make your life a little bit easier.</p>
        <p><strong>What Sets Us Apart</strong></p>
        <ul>
          <li>Comprehensive Tools: From age conversion to BMI calculation, our tools cover a wide range of practical needs.</li>
          <li>User-Friendly Interface: We prioritize ease of use, ensuring that our tools are accessible to everyone.</li>
          <li>Commitment to Quality: We focus on delivering precise and reliable results with every tool we offer.</li>
          <li>Continuous Improvement: We are dedicated to evolving and expanding our offerings based on user feedback and technological advancements.</li>
        </ul>
        <p><strong>Our Vision</strong></p>
        <p>Our vision is to be the leading resource for practical conversion and calculation tools. We aim to be a trusted partner in your daily tasks by providing solutions that are both effective and user-friendly. We are committed to innovation and continuous improvement, always seeking ways to enhance our website and the tools we provide.</p>
        <p><strong>Connect with Us</strong></p>
        <p>We value your feedback and are always eager to hear from our users. If you have any questions, suggestions, or comments, please visit our Contact page to get in touch.</p>
        <p>Thank you for choosing Utility Hub. We are excited to help you with your conversion and calculation needs!</p>
      </Content>
    </Container>
  );
};

export default AboutSection;

const Container = styled.div`
  background: #f9f9f9;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  margin: 0 auto;
`;

const StyledCarousel = styled(Carousel)`
  .carousel-item {
    height: 400px;
  }

  img {
    height: 100%;
    object-fit: cover;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 400px;
  overflow: hidden;
`;

const GradientCaption = styled(Carousel.Caption)`
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0));
  padding: 1rem;
  border-radius: 8px;
`;

const CaptionText = styled.p`
  font-size: 1.25rem;
  color: #fff;
`;

const Content = styled.div`
  margin-top: 1.5rem;

  p {
    font-size: 1rem;
    color: #333;
    line-height: 1.5;
  }

  ul {
    margin-top: 1rem;
    padding-left: 1.5rem;
    list-style-type: disc;
  }

  li {
    font-size: 1rem;
    color: #333;
    margin-bottom: 0.5rem;
  }
`;
