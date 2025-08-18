import HeroSection from '@/components/HeroSection';
import ContactForm from '@/components/ContactForm';
import ContactInfo from '@/components/ContactInfo';
import SocialSection from '@/components/SocialSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ContactForm />
      <ContactInfo />
      <SocialSection />
      <Footer />
    </div>
  );
};

export default Index;
