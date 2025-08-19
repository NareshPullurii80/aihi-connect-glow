import heroHeadset from '@/assets/hero-headset.jpg';

const HeroSection = () => {
  return (
    <section className="bg-gradient-hero min-h-[60vh] flex items-center">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Contact Us
              </h1>
              <p className="text-xl text-white/80 leading-relaxed">
                Get in touch with AIHI's expert team for personalized IT consulting and solutions tailored to your business needs.
              </p>
            </div>

            {/* Hero Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <img 
                  src="/lovable-uploads/3de3ade9-80c2-4c22-83f4-638fe3fdeceb.png" 
                  alt="3D Communication Technology Headset" 
                  className="w-[180px] h-[180px] object-contain drop-shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-cyan/20 to-teal/20 rounded-lg -z-10 blur-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;