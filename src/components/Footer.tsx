import { Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#F3CD00] py-8 md:py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-black text-center md:text-left">
          {/* Copyright - Left */}
          <p className="text-[12px] md:text-sm font-bold uppercase tracking-wider">
            &copy; 2026 X Pact Ventures. All rights reserved.
          </p>

          {/* Social Icons - Right */}
          <div className="flex space-x-8">
            <a href="#" className="text-black hover:scale-125 transition-transform duration-200">
              <Linkedin size={20} strokeWidth={2.5} />
            </a>
            <a href="#" className="text-black hover:scale-125 transition-transform duration-200">
              <Twitter size={20} strokeWidth={2.5} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
