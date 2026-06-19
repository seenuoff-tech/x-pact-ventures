import { Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#F3CD00] py-8 md:py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col justify-center items-center gap-4 md:gap-6 text-black text-center">
          {/* Copyright - Centered */}
          <p className="text-[12px] md:text-sm font-bold uppercase tracking-wider">
            &copy; 2026 X Pact Ventures. All rights reserved.
          </p>

          {/* Social Icons - Centered below the text */}
          <div className="flex space-x-8 items-center">
            <a href="https://www.linkedin.com/company/x-pact-ventures-private-limited/" target="_blank" rel="noopener noreferrer" className="text-black hover:scale-125 transition-transform duration-200">
              <Linkedin size={20} strokeWidth={2.5} />
            </a>
            <a href="#" className="text-black hover:scale-125 transition-transform duration-200 font-black text-xl leading-none">
              X
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
