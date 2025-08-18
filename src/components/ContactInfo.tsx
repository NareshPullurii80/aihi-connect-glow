const ContactInfo = () => {
  return <section className="bg-background py-[40px]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-muted-foreground text-lg font-medium mb-6">Contact Info</p>
          
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* Main Heading */}
            <div className="lg:col-span-1">
              <h2 className="text-4xl font-bold text-foreground leading-tight">
                We Are Always Happy To Assist You
              </h2>
            </div>

            {/* Contact Details */}
            <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
              <div className="px-[16px]">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Email Address
                </h3>
                <p className="text-lg text-foreground">
                  help@aihicloud.com
                </p>
              </div>
              
              <div className="px-[16px]">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Contact Number
                </h3>
                <p className="text-lg text-foreground">
                  +91 9876543210
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ContactInfo;