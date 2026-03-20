import { Clock, Phone, Mail, MapPin, ExternalLink } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-warm-pattern relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div
          data-aos="fade-down"
          className="text-center mb-20"
        >
          <div className="inline-block mb-4 px-3 py-1 bg-primary/10 text-primary font-body font-bold text-sm tracking-wider uppercase rounded-full">
            Contact
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Find Us
          </h2>
          <p className="font-body text-muted-foreground text-xl max-w-2xl mx-auto">
            Always here when you need us. Open 24 hours a day, every day.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {/* Hours */}
          <div
            data-aos="zoom-in-up"
            data-aos-delay="100"
            className="group bg-white/80 backdrop-blur-md rounded-2xl border border-border/50 p-8 text-center hover:shadow-2xl hover:scale-[1.03] transition-all duration-500"
          >
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-500">
              <Clock className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-500" />
            </div>
            <h3 className="font-display text-2xl font-bold text-foreground mb-4">Opening Hours</h3>
            <div className="space-y-3 font-body text-muted-foreground">
              <p>Every day<br /><strong className="text-primary text-lg">Open 24 Hours</strong></p>
              <div className="w-12 h-px bg-border mx-auto my-3" />
              <p>Public Holidays<br /><strong className="text-primary text-lg">Open 24 Hours</strong></p>
            </div>
          </div>

          {/* Phone */}
          <div
            data-aos="zoom-in-up"
            data-aos-delay="200"
            className="group bg-white/80 backdrop-blur-md rounded-2xl border border-border/50 p-8 text-center hover:shadow-2xl hover:scale-[1.03] transition-all duration-500"
          >
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-500">
              <Phone className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-500" />
            </div>
            <h3 className="font-display text-2xl font-bold text-foreground mb-4">Call Us</h3>
            <div className="space-y-4 font-body">
              <a href="tel:+254112787020" className="block text-muted-foreground hover:text-primary hover:font-bold transition-all p-2 rounded-lg hover:bg-primary/5">
                Pharmacy<br /><strong className="text-lg text-foreground group-hover:text-primary">0112 787 020</strong>
              </a>
              <div className="w-12 h-px bg-border mx-auto" />
              <a href="tel:+254732664399" className="block text-muted-foreground hover:text-primary hover:font-bold transition-all p-2 rounded-lg hover:bg-primary/5">
                Clinic<br /><strong className="text-lg text-foreground group-hover:text-primary">0732 664 399</strong>
              </a>
              <div className="w-12 h-px bg-border mx-auto" />
              <a href="tel:+254723583740" className="block text-muted-foreground hover:text-primary hover:font-bold transition-all p-2 rounded-lg hover:bg-primary/5">
                Agrovet<br /><strong className="text-lg text-foreground group-hover:text-primary">0723 583 740</strong>
              </a>
            </div>
          </div>

          {/* Email */}
          <div
            data-aos="zoom-in-up"
            data-aos-delay="300"
            className="group bg-white/80 backdrop-blur-md rounded-2xl border border-border/50 p-8 text-center hover:shadow-2xl hover:scale-[1.03] transition-all duration-500"
          >
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-500">
              <Mail className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-500" />
            </div>
            <h3 className="font-display text-2xl font-bold text-foreground mb-4">Email</h3>
            <div className="space-y-4 font-body">
              <a href="mailto:ngomanochemist@gmail.com" className="block text-muted-foreground hover:text-primary font-medium transition-colors break-all p-2 rounded-lg hover:bg-primary/5">
                ngomanochemist<br/>@gmail.com
              </a>
              <div className="w-12 h-px bg-border mx-auto my-3" />
              <a href="mailto:ngomanoagrovet@gmail.com" className="block text-muted-foreground hover:text-primary font-medium transition-colors break-all p-2 rounded-lg hover:bg-primary/5">
                ngomanoagrovet<br/>@gmail.com
              </a>
            </div>
          </div>

          {/* Location */}
          <div
            data-aos="zoom-in-up"
            data-aos-delay="400"
            className="group bg-white/80 backdrop-blur-md rounded-2xl border border-border/50 p-8 text-center hover:shadow-2xl hover:scale-[1.03] transition-all duration-500"
          >
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-500">
              <MapPin className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-500" />
            </div>
            <h3 className="font-display text-2xl font-bold text-foreground mb-4">Location</h3>
            <p className="font-body text-lg text-muted-foreground mb-6 leading-relaxed">
              Wote Town<br />Makueni County,<br />Kenya
            </p>
            <a
              href="https://maps.google.com/?q=Wote,Makueni,Kenya"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-body font-bold rounded-xl hover:bg-primary/90 hover:scale-[1.05] hover:shadow-lg transition-all w-full"
            >
              Get Directions <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Decorative blurred backgrounds */}
      <div className="absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
};

export default ContactSection;
