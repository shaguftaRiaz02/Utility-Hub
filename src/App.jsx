import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import AgeToDaysConverter from './Components/AgeToDaysConverter';
import HoursToSecondsConverter from './Components/HoursToSecondsConverter';
import Footer from './Components/Footer';
import styled from 'styled-components';
import BMICalculator from './Components/BMICalculator';
import FindNextNumberArray from './Components/FindNextNumberArray';
// import FindNextNumberByInput from './Components/FindNextNumberByInput';
import CaseConverter from './Components/CaseConverter';
import RandomArrayPicker from './Components/RandomArrayPicker';
import AboutSection from './Components/About';
import ContactSection from './Components/ContactSection';
import AdditionTool from './Components/AdditionTool';

const App = () => {
  return (
    <Router>
      <AppContainer>
        <Navbar />
        <MainContent>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/age-to-days" element={<AgeToDaysConverter />} />
            <Route path="/hours-to-seconds" element={<HoursToSecondsConverter />} />
            <Route path="/BMICalculator" element={<BMICalculator/>} />
            <Route path="/number-tools" element={<FindNextNumberArray/>}/>
            {/* <Route path="/next-number-array" element={<FindNextNumberArray/>}/> */}
            {/* <Route path="/next-number-by-input" element={<FindNextNumberByInput/>}/> */}
            <Route path='/case-converter' element={<CaseConverter/>}/>
            <Route path='/array-picker' element={<RandomArrayPicker/>}/>
            <Route path='/about' element={<AboutSection/>}/>
            <Route path='/contact' element={<ContactSection/>}/>
            <Route path='/addition-tool' element={<AdditionTool/>}/>
            {/* Add other routes as needed */}
          </Routes>
        </MainContent>
        <Footer />
      </AppContainer>
    </Router>
  );
};

export default App;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Ensure the container takes up the full viewport height */
`;

const MainContent = styled.main`
  padding: 2rem 1rem; /* Add padding around the main content */
`;
