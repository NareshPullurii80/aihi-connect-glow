import { Mail, Phone, MapPin } from 'lucide-react';
const ContactInfo = () => {
  return <section className="py-[40px]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-foreground mb-16">
            We Are Always Happy to Assist You
          </h2>
          
          <div className="grid md:grid-cols-3 gap-12 max-w-3xl mx-auto">
            {/* Email */}
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-medium text-muted-foreground mb-2">
                Email Address
              </h3>
              <p className="text-xl font-semibold text-foreground">
                help@aihicloud.com
              </p>
            </div>
            
            {/* Phone */}
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-medium text-muted-foreground mb-2">
                Contact Number
              </h3>
              <p className="text-xl font-semibold text-foreground">+91 9876543210</p>
            </div>
            
            {/* Address */}
            
          </div>
        </div>
      </div>
    </section>;
};
export default ContactInfo;