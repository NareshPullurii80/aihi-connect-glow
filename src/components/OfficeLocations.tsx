import { MapPin } from 'lucide-react';

const OfficeLocations = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Headquarters Card */}
            <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Visit Our Office – Headquarters
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Get expert guidance by visiting our office for personalized, face-to-face assistance with our consultants.
              </p>
              
              <div className="mb-8">
                <div className="flex items-start gap-3 mb-3">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-xl">🇮🇳</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Our Address</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      4th Floor, Eashan Arcade, Plot no 3-164, Trendz Arcade, Kavuri Hills Road, Doctor's Colony, Hyderabad, Telangana 500033.
                    </p>
                  </div>
                </div>
              </div>

              {/* Building Illustration */}
              <div className="h-32 bg-gradient-to-br from-primary/20 to-primary/40 rounded-lg flex items-end justify-center overflow-hidden">
                <div className="w-full h-24 bg-gradient-to-t from-primary/30 to-transparent rounded-lg relative">
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                    <MapPin className="w-8 h-8 text-primary" />
                  </div>
                </div>
              </div>
            </div>

            {/* Branch Office Card */}
            <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Visit Our Office – Branch Office
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                For your convenience, connect with us at our additional location.
              </p>
              
              <div className="mb-8">
                <div className="flex items-start gap-3 mb-3">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-xl">🇺🇸</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Our Address</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      4th Floor, Sridevi Nilayam, Plot no 38, near JNTU Metro Station, Back side lane of Pista House, Sardar Patel Nagar, IDPL Staff Cooperative Housing Society, Kukatpally Housing Board Colony, Kukatpally, Hyderabad, Telangana 500085.
                    </p>
                  </div>
                </div>
              </div>

              {/* Building Illustration */}
              <div className="h-32 bg-gradient-to-br from-accent/20 to-accent/40 rounded-lg flex items-end justify-center overflow-hidden">
                <div className="w-full h-24 bg-gradient-to-t from-accent/30 to-transparent rounded-lg relative">
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center">
                    <MapPin className="w-8 h-8 text-accent" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default OfficeLocations;