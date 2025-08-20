import { Mail, Phone, MapPin } from 'lucide-react';
const ContactInfo = () => {
  return <section className="py-[24px]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-foreground mb-16">
            We Are Always Happy to Assist You
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-2xl mx-auto">
            {/* Email */}
            <div className="flex items-center justify-center">
              <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center mr-4">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <h3 className="text-lg font-medium text-muted-foreground mb-2">
                  Email Address
                </h3>
                <p className="text-xl font-semibold text-foreground">
                  help@aihicloud.com
                </p>
              </div>
            </div>
            
            {/* Phone */}
            <div className="flex items-center justify-center">
              <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center mr-4">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <h3 className="text-lg font-medium text-muted-foreground mb-2">
                  Contact Number
                </h3>
                <p className="text-xl font-semibold text-foreground">+91 9876543210</p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>;
};
export default ContactInfo;