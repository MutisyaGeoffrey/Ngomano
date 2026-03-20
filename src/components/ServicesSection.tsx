import { Phone, MessageCircle, Mail } from "lucide-react";
import pharmacyImg from "@/assets/pharmacy-service.jpg";
import clinicImg from "@/assets/clinic-service.jpg";
import labImg from "@/assets/lab-service.jpg";
import agrovetImg from "@/assets/agrovet-service.jpg";

const departments = [
  {
    tag: "Professional Dispensing",
    title: "Ngomano Pharmacy",
    image: pharmacyImg,
    items: ["Drug Dispensing", "Medicine Packs"],
    phone: "+254112787020",
    phoneDisplay: "0112 787 020",
    whatsapp: "254112787020",
    email: "ngomanochemist@gmail.com",
    delay: 100
  },
  {
    tag: "OPD & Consultations",
    title: "Ngomannex Healthcare",
    image: clinicImg,
    items: [
      "OPD Consultation Services",
      "IMNCI Services",
      "First Aid & Emergencies",
      "ENT · Eye · OBS/GYN",
      "Skin (Dermatology)",
      "DM / HTN Management",
      "Nutrition · Dental",
    ],
    phone: "+254732664399",
    phoneDisplay: "0732 664 399",
    whatsapp: "254732664399",
    email: "ngomanochemist@gmail.com",
    delay: 200
  },
  {
    tag: "Diagnostic Services",
    title: "Ngomano Laboratory",
    image: labImg,
    items: [
      "Blood Sugar (RBS / FBS)",
      "HbA1c · Pregnancy Test",
      "Urinalysis · ANC Profile",
      "Renal & Liver Function Tests",
      "Thyroid Function Tests",
      "Lipid Profile · CRP · PSA",
      "Hepatitis B & C · Malaria",
      "H. Pylori · Salmonella Ag",
      "Coagulation Profile",
    ],
    phone: "+254732664399",
    phoneDisplay: "0732 664 399",
    whatsapp: "254732664399",
    email: "ngomanochemist@gmail.com",
    delay: 300
  },
  {
    tag: "Farming & Livestock",
    title: "Ngomano Agrovet",
    image: agrovetImg,
    items: [
      "Agrochemical Dispensing",
      "Livestock Care & Vet Products",
      "Agricultural Inputs Supply",
      "Farming Advisory & Consultancy",
    ],
    phone: "+254723583740",
    phoneDisplay: "0723 583 740",
    whatsapp: "254723583740",
    email: "ngomanoagrovet@gmail.com",
    delay: 400
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 lg:py-32 bg-white relative">
      <div className="container mx-auto px-4 relative z-10">
        <div
          data-aos="fade-down"
          className="text-center mb-20"
        >
          <div className="inline-block mb-4 px-3 py-1 bg-primary/10 text-primary font-body font-bold text-sm tracking-wider uppercase rounded-full">
            Departments
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="font-body text-muted-foreground text-xl max-w-2xl mx-auto">
            Four specialized departments operating under one trusted brand to provide comprehensive care.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {departments.map((dept) => (
            <div
              key={dept.title}
              data-aos="fade-up"
              data-aos-delay={dept.delay}
              className="group bg-white rounded-2xl border border-border/60 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={dept.image}
                  alt={dept.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block px-4 py-1.5 text-xs font-body font-bold uppercase tracking-wider bg-white/20 backdrop-blur-md border border-white/30 text-white rounded-full mb-2">
                    {dept.tag}
                  </span>
                  <h3 className="font-display text-2xl font-bold text-white drop-shadow-md">
                    {dept.title}
                  </h3>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <ul className="space-y-3 mb-8 flex-grow">
                  {dept.items.map((item) => (
                    <li key={item} className="text-sm font-body text-muted-foreground flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-2 flex-shrink-0" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col gap-3 pt-6 border-t border-border/50">
                  <a
                    href={`tel:${dept.phone}`}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-body font-bold bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 hover:scale-[1.02] hover:shadow-lg transition-all"
                  >
                    <Phone className="w-4 h-4" /> {dept.phoneDisplay}
                  </a>
                  <div className="grid grid-cols-2 gap-3">
                    <a
                      href={`https://wa.me/${dept.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-body font-bold bg-[#25D366]/10 text-[#25D366] rounded-xl hover:bg-[#25D366] hover:text-white transition-all"
                    >
                      <MessageCircle className="w-4 h-4" /> WhatsApp
                    </a>
                    <a
                      href={`mailto:${dept.email}`}
                      className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-body font-bold bg-secondary text-secondary-foreground rounded-xl hover:bg-secondary/80 transition-colors"
                    >
                      <Mail className="w-4 h-4" /> Email
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Decorative background element */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
};

export default ServicesSection;
