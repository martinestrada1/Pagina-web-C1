import React from 'react';
import CustomCarousel from '../components/atoms/CarruselComponent';
import Header from '../components/atoms/Header';
import InfoWithImage from '../components/organismes/CategoriesSection';
import RelevantProducts from '../components/organismes/RelevantProducts';
import VideoSection from '../components/atoms/VideoSection';

function App() {
  return (
    <div className="App">
      <Header />
      <VideoSection />
      <InfoWithImage />
      <categoriesSection/>
      <CustomCarousel/>
      <RelevantProducts />
    </div>
  );
}

export default App;
