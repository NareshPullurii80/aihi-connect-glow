import { MapPin } from 'lucide-react';
import { Card } from '@/components/ui/card';
import officeMapHq from '@/assets/office-map-hq.jpg';
import officeMapBranch from '@/assets/office-map-branch.jpg';
const OfficeLocations = () => {
  return <section className="bg-secondary/30 py-[40px]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Office Locations */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Headquarters */}
            <Card className="p-8 shadow-elegant">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Visit Our Office – Headquarters
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Get expert guidance by visiting our office for personalized, face-to-face assistance with our consultants.
                </p>
              </div>

              <div className="flex items-start space-x-3 mb-6">
                <MapPin className="h-5 w-5 text-teal mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground mb-2">Our Address</p>
                  <p className="text-muted-foreground leading-relaxed">
                    4th Floor, Eashan Arcade, Plot no 3-164, Trendz Arcade, 
                    Kavuri Hills Road, Doctor's Colony, Hyderabad, Telangana 500033.
                  </p>
                </div>
              </div>

              <div className="rounded-lg overflow-hidden">
                <img src={officeMapHq} alt="AIHI Headquarters Location Map" className="w-full h-48 object-cover" />
              </div>
            </Card>

            {/* Branch Office */}
            <Card className="p-8 shadow-elegant">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Visit Our Office – Branch Office
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  For your convenience, connect with us at our additional location.
                </p>
              </div>

              <div className="flex items-start space-x-3 mb-6">
                <MapPin className="h-5 w-5 text-teal mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground mb-2">Our Address</p>
                  <p className="text-muted-foreground leading-relaxed">4th Floor, Sridevi Nilayam, Plot no 38, near JNTU Metro Station, Back side lane of Pista House, Kukatpally, Hyderabad, Telangana 500085.</p>
                </div>
              </div>

              <div className="rounded-lg overflow-hidden">
                <img src={officeMapBranch} alt="AIHI Branch Office Location Map" className="w-full h-48 object-cover" />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>;
};
export default OfficeLocations;