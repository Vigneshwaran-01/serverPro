import React, { useState } from 'react';
import './index.css'
import Header from './components/Header';
import PricingPlan from './components/PricingPlan';
import ContactForm from './components/ContactForm';
import PopupForm from './components/PopupForm';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import ServiceSection from './components/ServiceSection';
import Title from './components/Title';
import { landingPageData } from './constants/Data';

const App: React.FC = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const togglePopup = () => {
    setPopupOpen(!isPopupOpen);
  };

  return (
    <div className="bg-gray-900 text-white">
      <Header   />
      <HeroSection herodata={landingPageData.hero} onClose={togglePopup} />

      <ServiceSection  featuresData={landingPageData.features}/>

      <Title titleName="Pricing Plans" />

      <PricingPlan planData={landingPageData.pricingPlans} />

      <Title titleName="Contact Us" />
      <ContactForm />
      {isPopupOpen && <PopupForm onClose={togglePopup} />}
      <Footer />
    </div>
  );
};

export default App;

