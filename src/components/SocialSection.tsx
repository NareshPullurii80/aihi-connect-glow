import { Facebook, Instagram, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SocialSection = () => {
  return (
    <section className="bg-dark-surface py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Stay Connected With Us
          </h2>
          <p className="text-white/80 mb-8 text-lg">
            Follow AIHI for updates, insights, and announcements
          </p>
          
          <div className="flex justify-center space-x-6">
            <Button 
              variant="social" 
              size="lg"
              className="p-4 rounded-full"
              aria-label="Follow us on Facebook"
            >
              <Facebook className="h-6 w-6" />
            </Button>
            
            <Button 
              variant="social" 
              size="lg"
              className="p-4 rounded-full"
              aria-label="Follow us on Instagram"
            >
              <Instagram className="h-6 w-6" />
            </Button>
            
            <Button 
              variant="social" 
              size="lg"
              className="p-4 rounded-full"
              aria-label="Connect with us on LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialSection;