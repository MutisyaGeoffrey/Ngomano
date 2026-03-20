import { CheckCircle2 } from "lucide-react";

const services = [
  "Drug Dispensing (Pharmacy)",
  "Medicine Packs",
  "OPD Consultation Services",
  "IMNCI Services",
  "First Aid & Emergencies",
  "ENT · Eye · OBS/GYN · Skin · Dental",
  "DM / HTN Management & Nutrition",
  "Laboratory Diagnostic Services (20+ tests)",
  "Agrochemical Dispensing",
  "Livestock Care & Veterinary Products",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-warm-pattern relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div
          data-aos="fade-up"
          className="max-w-4xl mx-auto"
        >
          <div className="inline-block mb-4 px-3 py-1 bg-primary/10 text-primary font-body font-bold text-sm tracking-wider uppercase rounded-full" data-aos="fade-down">
            About Us
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-gradient-primary mb-6" data-aos="fade-right" data-aos-delay="100">
            Welcome to Ngomano
          </h2>
          <p className="text-xl font-body font-semibold text-foreground mb-8 leading-relaxed" data-aos="fade-up" data-aos-delay="200">
            Our approach is simple: <span className="text-primary">exceptional service</span> delivered in a hassle-free way.
          </p>
          <div className="space-y-6 text-muted-foreground font-body text-lg leading-relaxed mb-12" data-aos="fade-up" data-aos-delay="300">
            <p>
              Locally owned and operated, Ngomano is a trusted source of health advice and agricultural care for every generation. From little ones to the elderly, and from smallholder farmers to large-scale livestock keepers, we proudly serve all who walk through our doors.
            </p>
            <p className="p-6 bg-white/60 backdrop-blur-sm rounded-xl border-l-4 border-primary shadow-sm text-foreground/90">
              We are open <strong className="text-primary font-bold">24 hours a day, 7 days a week</strong>. Always here when you need us most. You can always speak directly with a qualified pharmacist or clinician at Ngomano.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {services.map((service, i) => (
              <div
                key={service}
                data-aos="fade-up"
                data-aos-delay={200 + (i % 5) * 50}
                className="flex items-center gap-4 p-4 rounded-xl bg-white/80 backdrop-blur-sm border border-border/50 shadow-sm hover:shadow-md hover:scale-[1.02] hover:bg-white transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <CheckCircle2 className="w-5 h-5 text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <span className="font-body font-medium text-foreground">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Decorative blurred circles for Wow factor */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
};

export default AboutSection;
