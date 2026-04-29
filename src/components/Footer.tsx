import { Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#F3CD00] py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-black">
          {/* Copyright - Left */}
          <p className="text-sm font-medium">
            &copy; 2026 Your Company Name. All rights reserved.
          </p>

          {/* Social Icons - Center */}
          <div className="flex space-x-6">
            <a href="#" className="text-black hover:scale-110 transition-transform duration-200">
              <Linkedin size={22} strokeWidth={2.5} />
            </a>
            <a href="#" className="text-black hover:scale-110 transition-transform duration-200">
              <Twitter size={22} strokeWidth={2.5} />
            </a>
          </div>

          {/* Developed By - Right */}
          <p className="text-sm font-medium">
            Developed by <span className="font-bold underline decoration-black/20">skeneticdigital</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
