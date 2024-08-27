import  './assets/css/bootstrap.css';
import  './assets/css/styles.css';

import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import AlertSection from './components/Section/AlertSection';
import FirstSection from './components/Section/FirstSection';
import SecondSection from './components/Section/SecondSection';
import ThirdSection from './components/Section/ThirdSection';
import FourthSection from './components/Section/FourthSection';
import FifthSection from './components/Section/FifthSection';
import SixthSection from './components/Section/SixthSection';
import YoutubeSuggestion from './components/YoutubeSuggestion/YoutubeSuggestion';

function App() {


  return (
    <>
      <Header />,
      <AlertSection/>,
      <FirstSection/>,
      <SecondSection/>,
      <ThirdSection/>,
      <FourthSection/>,
      <FifthSection/>,
      <SixthSection/>,
      <YoutubeSuggestion/>
      <Footer/>
    </>
  )
}

export default App
