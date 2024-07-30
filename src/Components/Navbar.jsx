
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import LogoImg from '../../public/images/logo.png';
import { SiConvertio } from "react-icons/si";
import { IoIosCalculator } from "react-icons/io";
import { FaHome, FaPlus } from "react-icons/fa";
import { ImListNumbered } from "react-icons/im";
import { MdDataArray } from "react-icons/md";
import { HiInformationCircle } from "react-icons/hi2";
import { RiCustomerService2Line } from "react-icons/ri";
// import { FaPlus } from "react-icons/fa6";




const Navbar = () => {
  return (
    <Nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Logo>
        <img src={LogoImg} alt="logo" />
      </Logo>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/"> <FaHome/> Home</Link>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <SiConvertio/> Converters
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link className="dropdown-item" to="/age-to-days">Age To Days</Link>
              <Link className="dropdown-item" to="/hours-to-seconds">Hours To Seconds</Link>
              <Link className="dropdown-item" to="/case-converter">lowercase to PascalCase</Link>
            </div>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/BMICalculator"> <IoIosCalculator/> BMI Calculator</Link>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
             <ImListNumbered/> Number Tools
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link className="dropdown-item" to="/next-number-array">Find Next Number <small>In Array</small></Link>
              <Link className="dropdown-item" to="/next-number-by-input">Find Next Number <small>By Input</small></Link>
            </div>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/array-picker"><MdDataArray/> Array Tools</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/addition-tool"><FaPlus/> Addition Tool</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about"><HiInformationCircle/> About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact"><RiCustomerService2Line/> Contact</Link>
          </li>
        </ul>
      </div>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10rem;
  justify-content: space-around;

  .navbar-nav {
    display: flex;
    flex-direction: row;
    gap: 2rem;
    align-items: center;
  }

  .navbar-nav .nav-item .nav-link {
    font-weight: bold;
    color: #25afaf !important;
    &:hover {
      color: #116f6fa2 !important;
    }
  }

  .nav-item.dropdown .dropdown-menu {
    background-color: white;
    border: 1px solid #ccc;
  }
  
  .dropdown-item {
    color: #333;
    &:hover {
      background-color: #f0f0f0;
    }
  }
`;

const Logo = styled.div`
  img {
    height: 13vh;
    width: 13vh;
  }
`;
