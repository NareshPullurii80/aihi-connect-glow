import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting AIHI. We'll get back to you soon.",
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="bg-gradient-section py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">
              Get Started – Get In Touch With Us
            </h2>
            <p className="text-xl text-white/80">
              We're Here to Assist You.
            </p>
          </div>

          <Card className="bg-card-dark border-cyan/20 p-8 shadow-elegant">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-card-dark-foreground font-medium">
                    Your Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="bg-dark-surface border-cyan/30 text-white placeholder:text-white/50 focus:border-cyan focus:ring-cyan/50"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-card-dark-foreground font-medium">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="bg-dark-surface border-cyan/30 text-white placeholder:text-white/50 focus:border-cyan focus:ring-cyan/50"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-card-dark-foreground font-medium">
                  Phone Number (optional)
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="bg-dark-surface border-cyan/30 text-white placeholder:text-white/50 focus:border-cyan focus:ring-cyan/50"
                  placeholder="Enter your phone number"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-card-dark-foreground font-medium">
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="bg-dark-surface border-cyan/30 text-white placeholder:text-white/50 focus:border-cyan focus:ring-cyan/50 resize-none"
                  placeholder="Tell us about your project or how we can help you..."
                />
              </div>

              <div className="flex justify-center pt-4">
                <Button 
                  type="submit" 
                  variant="cta" 
                  size="lg"
                  className="px-8 py-4 text-lg"
                >
                  👉 Leave Us a Message
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;