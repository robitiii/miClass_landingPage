import HomeLanding from './components/HomeLanding';
import SchoolPartnership from './components/SchoolPartnership';
import ImpactSection from './components/ImpactSection';
import Services from './components/Services';
import UserBenefits from './components/UserBenefits';
import Testimonials from './components/Testimonials';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <HomeLanding />
      <SchoolPartnership />
      <ImpactSection />
      <Services />
      <UserBenefits />
      <Testimonials />
      <ContactCTA />
      <Footer />
    </div>
  );
}

export default App;
