const Footer = () => {
  return (
    <footer className="bg-dark-bg text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Company Logo and Info */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-teal mb-2">AIHI</h3>
                <p className="text-white/70 text-sm">
                  IT Consulting & Solutions
                </p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-white/70 hover:text-cyan transition-colors">About Company</a></li>
                <li><a href="#" className="text-white/70 hover:text-cyan transition-colors">Team</a></li>
                <li><a href="#" className="text-white/70 hover:text-cyan transition-colors">Careers</a></li>
                <li><a href="#" className="text-white/70 hover:text-cyan transition-colors">Services</a></li>
                <li><a href="#" className="text-white/70 hover:text-cyan transition-colors">Industries</a></li>
                <li><a href="#" className="text-white/70 hover:text-cyan transition-colors">Contact Us</a></li>
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Support</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-white/70 hover:text-cyan transition-colors">Terms & Conditions</a></li>
                <li><a href="#" className="text-white/70 hover:text-cyan transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-white/70 hover:text-cyan transition-colors">Cookie Policy</a></li>
                <li><a href="#" className="text-white/70 hover:text-cyan transition-colors">Responsible Disclosure</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Contact Info</h4>
              <div className="space-y-2 text-sm">
                <p className="text-white/70">
                  <span className="text-cyan">Email:</span> help@aihicloud.com
                </p>
                <p className="text-white/70">
                  <span className="text-cyan">Phone:</span> +91 9876543210
                </p>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-white/10 mt-8 pt-8 text-center">
            <p className="text-white/60 text-sm">
              © AIHI. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;