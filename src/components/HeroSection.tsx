import { Clock, CalendarCheck } from "lucide-react";
import heroImg from "@/assets/hero-pharmacy.jpg";
import BookingModal from "./BookingModal";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroImg} alt="Ngomano pharmacy professional" className="w-full h-full object-cover object-center scale-105" loading="lazy" />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div
          data-aos="fade-right"
          className="max-w-2xl"
        >
          <div className="flex items-center gap-2 mb-6" data-aos="fade-down" data-aos-delay="200">
            {["Pharmacy", "Clinic", "Agrovet"].map((tag) => (
              <span key={tag} className="px-3 py-1 text-xs font-body font-bold tracking-widest uppercase bg-white/20 text-white border border-white/30 rounded-full shadow-lg backdrop-blur-md">
                {tag}
              </span>
            ))}
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6 drop-shadow-lg" data-aos="fade-up" data-aos-delay="300">
            Comprehensive health and agricultural care for{" "}
            <span className="text-secondary drop-shadow-md">ALL.</span>
          </h1>

          <p className="text-lg text-white/90 font-body mb-10 max-w-xl leading-relaxed drop-shadow" data-aos="fade-up" data-aos-delay="400">
            Ngomano — professional pharmacy, clinical OPD, lab services, and full agrovet care. Serving everyone, every day.
          </p>

          <div className="flex flex-wrap gap-4" data-aos="fade-up" data-aos-delay="500">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground font-body font-bold rounded-xl hover:bg-white hover:text-primary hover:scale-105 hover:shadow-xl transition-all duration-300"
            >
              <Clock className="w-5 h-5" /> View Hours
            </a>
            
            <BookingModal>
              <Button className="h-full px-8 py-4 bg-white/10 text-white font-body font-bold text-base rounded-xl border border-white/30 backdrop-blur-md hover:bg-white/20 hover:scale-105 hover:shadow-xl transition-all duration-300">
                <CalendarCheck className="w-5 h-5 mr-2" /> Book a Visit
              </Button>
            </BookingModal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
