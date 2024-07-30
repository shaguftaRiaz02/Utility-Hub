import styled from "styled-components";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <h2>Utility Hub</h2>
          <p>Your go-to place for converters, calculators, and more.</p>
        </FooterSection>
        <FooterSection>
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#about">About</a></li>
          </ul>
        </FooterSection>
        <FooterSection>
          <h3>Contact Us</h3>
          <p>Email: <a href="mailto:info@utilityhub.com">info@utilityhub.com</a></p>
          <p>Phone: <a href="tel:+1234567890">+123 456 7890</a></p>
        </FooterSection>
        <FooterSection>
          <h3>Follow Us</h3>
          <SocialMediaIcons>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebookF /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FaTwitter /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
          </SocialMediaIcons>
        </FooterSection>
      </FooterContent>
      <FooterBottom>
        <p>&copy; {new Date().getFullYear()} Utility Hub. All rights reserved.</p>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  background: #116f6fa2;
  color: white;
  padding: 2rem 1rem;
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 6rem;
  justify-content: space-around;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
  border-bottom: 1px solid #ffffff4d;
`;

const FooterSection = styled.div`
  h2, h3 {
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }

  p {
    margin: 0.5rem 0;
  }

  a {
    color: white;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  ul {
    list-style-type: none;
    padding: 0;

    li {
      margin: 0.5rem 0;

      a {
        color: white;
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;

const SocialMediaIcons = styled.div`
  display: flex;
  gap: 1rem;

  a {
    color: white;
    font-size: 1.5rem;
    transition: color 0.3s;

    &:hover {
      color: #25afaf;
    }
  }
`;

const FooterBottom = styled.div`
  text-align: center;
  padding: 1rem 0;
  font-size: 0.875rem;
`;
