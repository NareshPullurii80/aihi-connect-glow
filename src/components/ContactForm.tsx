import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Facebook, Instagram, Linkedin, ArrowRight } from 'lucide-react';
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const {
    toast
  } = useToast();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting AIHI. We'll get back to you soon."
    });
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  return <section className="bg-dark-bg relative overflow-hidden py-[40px]">
      {/* Social Icons - Fixed Position */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4 z-10">
        <Button variant="social" size="lg" className="p-3 rounded-full bg-white/10 hover:bg-cyan/20 border-white/20" aria-label="Follow us on Facebook">
          <Facebook className="h-5 w-5 text-white" />
        </Button>
        
        <Button variant="social" size="lg" className="p-3 rounded-full bg-white/10 hover:bg-cyan/20 border-white/20" aria-label="Follow us on Instagram">
          <Instagram className="h-5 w-5 text-white" />
        </Button>
        
        <Button variant="social" size="lg" className="p-3 rounded-full bg-white/10 hover:bg-cyan/20 border-white/20" aria-label="Connect with us on LinkedIn">
          <Linkedin className="h-5 w-5 text-white" />
        </Button>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <p className="text-lg font-medium mb-4 text-sky-400">Get Started</p>
            <h2 className="text-5xl font-bold text-white mb-6 leading-tight">
              Get In Touch With Us.<br />
              We're Here To Assist You.
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-12">
            {/* Input Fields Grid */}
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="relative">
                <input id="name" name="name" value={formData.name} onChange={handleInputChange} required className="w-full bg-transparent border-0 border-b-2 border-white/30 text-white text-lg py-4 px-0 placeholder:text-white/50 focus:outline-none focus:border-cyan transition-colors" placeholder="Your Name" />
              </div>

              <div className="relative">
                <input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} required className="w-full bg-transparent border-0 border-b-2 border-white/30 text-white text-lg py-4 px-0 placeholder:text-white/50 focus:outline-none focus:border-cyan transition-colors" placeholder="Email Address" />
              </div>

              <div className="relative">
                <input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleInputChange} className="w-full bg-transparent border-0 border-b-2 border-white/30 text-white text-lg py-4 px-0 placeholder:text-white/50 focus:outline-none focus:border-cyan transition-colors" placeholder="Phone Number (optional)" />
              </div>
            </div>

            {/* Message Field */}
            <div className="relative">
              <textarea id="message" name="message" value={formData.message} onChange={handleInputChange} required rows={4} className="w-full bg-transparent border-0 border-b-2 border-white/30 text-white text-lg py-4 px-0 placeholder:text-white/50 focus:outline-none focus:border-cyan transition-colors resize-none" placeholder="Message" />
            </div>

            {/* Submit Button */}
            <div className="pt-8 py-0">
              <Button type="submit" className="text-dark-bg font-semibold text-lg px-12 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-glow-cyan py-[32px] bg-sky-500 hover:bg-sky-400 text-gray-800">
                Leave us a Message
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>;
};
export default ContactForm;