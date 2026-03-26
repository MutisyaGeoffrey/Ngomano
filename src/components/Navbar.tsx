import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageCircle, Mail, MapPin, Menu, X, CalendarCheck } from "lucide-react";
import BookingModal from "./BookingModal";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      {/* Top contact bar */}
      <div className="bg-primary">
        <div className="container mx-auto px-4 py-2 flex flex-wrap items-center justify-between text-primary-foreground text-sm font-body">
          <div className="flex items-center gap-4">
            <span className="font-semibold tracking-wide">Open 24/7 · Every Day</span>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+254112787020" className="flex items-center gap-1 hover:opacity-80 transition-opacity">
              <Phone className="w-3.5 h-3.5" /> 0112 787 020
            </a>
            <a href="https://wa.me/254112787020" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:opacity-80 transition-opacity">
              <MessageCircle className="w-3.5 h-3.5" /> WhatsApp
            </a>
            <a href="mailto:ngomanochemist@gmail.com" className="flex items-center gap-1 hover:opacity-80 transition-opacity">
              <Mail className="w-3.5 h-3.5" /> Email us
            </a>
            <a href="https://maps.app.goo.gl/qqvz3XBc8SSUx5yQ6" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:opacity-80 transition-opacity">
              <MapPin className="w-3.5 h-3.5" /> Find us
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#home" className="flex flex-col">
          <span className="font-display text-2xl font-bold text-foreground tracking-tight">NGOMANO</span>
          <span className="text-xs font-body font-semibold text-primary tracking-widest uppercase">We Value Health To All</span>
        </a>

        {/* Desktop nav & CTA */}
        <div className="hidden lg:flex items-center gap-6">
          <nav className="flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-body font-medium text-muted-foreground hover:text-primary transition-colors rounded-md hover:bg-teal-light"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <BookingModal>
            <Button className="font-bold shadow-md hover:scale-105 transition-transform bg-secondary text-secondary-foreground hover:bg-white hover:text-primary">
              <CalendarCheck className="w-4 h-4 mr-2" />
              Book Appointment
            </Button>
          </BookingModal>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden border-t border-border"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-3 text-sm font-body font-medium text-foreground hover:text-primary hover:bg-teal-light rounded-md transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex flex-col gap-3 pt-4 border-t border-border mt-2">
                <BookingModal>
                  <Button className="w-full font-bold text-md h-12 bg-secondary text-secondary-foreground">
                    <CalendarCheck className="w-4 h-4 mr-2" /> Book Appointment
                  </Button>
                </BookingModal>
                <div className="flex flex-col gap-2 pt-2">
                  <a href="tel:+254112787020" className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Phone className="w-4 h-4 text-primary" /> 0112 787 020
                  </a>
                  <a href="https://wa.me/254112787020" className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MessageCircle className="w-4 h-4 text-primary" /> WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
