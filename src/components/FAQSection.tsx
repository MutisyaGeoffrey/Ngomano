import { HelpCircle, ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Why choose Ngomano?",
    answer:
      "Ngomano is a trusted source of health advice and agricultural care for every generation. We provide comprehensive services—Pharmacy, Clinic, Laboratory, and Agrovet—all under one roof, with highly trained professionals delivering exceptional, hassle-free care.",
  },
  {
    question: "Where is Ngomano located?",
    answer: "We are proudly located in Wote Town, Makueni County, Kenya. You can find our exact location on the map in our Contact section.",
  },
  {
    question: "What are your working hours?",
    answer: "We never close! Ngomano Care Hub is open 24 hours a day, 7 days a week, including all public holidays. We are always here when you need us.",
  },
  {
    question: "Do you have a laboratory on site?",
    answer: "Yes, our diagnostic services include over 20+ tests ranging from blood sugar, urinalysis, ANC profile, renal/liver function tests, to Salmonella and Hepatitis screenings.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden" id="faq">
      <div className="container mx-auto px-4 relative z-10">
        <div data-aos="fade-up" className="text-center mb-16">
          <div className="inline-block mb-4 px-3 py-1 bg-primary/10 text-primary font-body font-bold text-sm tracking-wider uppercase rounded-full">
            FAQ
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="font-body text-muted-foreground text-xl max-w-2xl mx-auto">
            Everything you need to know about our services and operations.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <details
              key={i}
              className="group bg-white border border-border/60 rounded-2xl overflow-hidden hover:border-primary/30 transition-colors shadow-sm open:shadow-md"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none font-display font-bold text-lg text-foreground group-open:text-primary transition-colors">
                <div className="flex items-center gap-3">
                  <HelpCircle className="w-5 h-5 text-primary/70" />
                  {faq.question}
                </div>
                <ChevronDown className="w-5 h-5 text-muted-foreground group-open:rotate-180 transition-transform duration-300" />
              </summary>
              <div className="px-6 pb-6 pt-2 font-body text-muted-foreground leading-relaxed border-t border-border/50 bg-slate-50/50">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
      
      {/* Decorative */}
      <div className="absolute top-40 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
};

export default FAQSection;
