

import AlertSection from './Section/AlertSection';
import FirstSection from './Section/FirstSection';
import SecondSection from './Section/SecondSection';
import ThirdSection from './Section/ThirdSection';
import FourthSection from './Section/FourthSection';
import FifthSection from './Section/FifthSection';
import SixthSection from './Section/SixthSection';
import YoutubeSuggestion from './YoutubeSuggestion/YoutubeSuggestion';


// eslint-disable-next-line no-unused-vars
import { Routes,Route } from 'react-router-dom';
// import AppleYoutube from './YoutubeApple/AppleYoutube';
function Home() {



  return (
    <>
      <AlertSection/>,
      <FirstSection/>,
      <SecondSection/>,
      <ThirdSection/>,
      <FourthSection/>,
      <FifthSection/>,
      <SixthSection/>,
      <YoutubeSuggestion/>
      {/* <AppleYoutube/> */}
    </>
  )
}







export default Home