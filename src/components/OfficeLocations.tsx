import officeMapHq from '@/assets/office-map-hq.jpg';
import officeMapBranch from '@/assets/office-map-branch.jpg';
const OfficeLocations = () => {
  return <section className="bg-secondary/30 py-[40px]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Headquarters */}
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="rounded-lg overflow-hidden">
              <img src={officeMapHq} alt="AIHI Headquarters Location Map" className="w-full h-64 object-cover" />
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Visit Our Office:
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Get the best support visit our office for a face-to-face assistance with our experienced representatives!
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-foreground mb-3">Our Address - Head Quarters</h4>
                <p className="text-muted-foreground leading-relaxed">
                  4th Floor, Eashan Arcade, Plot no 3-164, Trendz Arcade, Kavuri Hills Road, Doctor's Colony, Hyderabad, Telangana, 500033.
                </p>
              </div>
            </div>
          </div>

          {/* Branch Office */}
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="rounded-lg overflow-hidden">
              <img src={officeMapBranch} alt="AIHI Branch Office Location Map" className="w-full h-64 object-cover" />
            </div>
            <div className="space-y-6">
              
              <div>
                <h4 className="text-xl font-semibold text-foreground mb-3">Our Address - Branch Office</h4>
                <p className="text-muted-foreground leading-relaxed">
                  4th Floor, Sridevi Nilayam, plot no 38, near Jntu Metro Station, back side lane of Pista house, Sardar Patel Nagar, IDPL Staff Cooperative Housing Society, Kukatpally Housing Board Colony, Kukatpally, Hyderabad, Telangana 500085
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default OfficeLocations;