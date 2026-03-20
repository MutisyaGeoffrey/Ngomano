import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <span className="font-display text-xl font-bold text-primary-foreground">NGOMANO</span>
            <p className="text-sm font-body text-primary-foreground/60 mt-1">
              We Value Health To All
            </p>
          </div>
          <p className="text-sm font-body text-primary-foreground/50 flex items-center gap-1">
            Made with <Heart className="w-3.5 h-3.5 text-accent fill-accent" /> for the Ngomano community
          </p>
          <p className="text-xs font-body text-primary-foreground/40">
            © {new Date().getFullYear()} Ngomano. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
