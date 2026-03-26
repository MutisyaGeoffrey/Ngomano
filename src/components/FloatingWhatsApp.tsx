import { MessageCircle } from "lucide-react";

const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/254112787020"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl hover:scale-110 hover:shadow-[#25D366]/50 transition-all duration-300 group"
      aria-label="Chat with us on WhatsApp"
    >
      <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25"></div>
      <MessageCircle className="w-7 h-7 relative z-10" />
      <span className="absolute right-16 px-3 py-1.5 bg-white text-gray-800 text-xs font-bold font-body rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-border/50">
        Need help? Chat with us!
      </span>
    </a>
  );
};

export default FloatingWhatsApp;
