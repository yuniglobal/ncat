// Footer.tsx
import { PixelBackground } from './PixelBackground';
import { fullName } from '@/lib/constants';

// SVG Icons (unchanged)
const InstagramIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const TwitterIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.3 9 4-.4-4 4-7 9-3 1 0 1-1 1-1z"></path>
  </svg>
);

const GithubIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const LinkedinIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const Footer = () => {
  const year = new Date().getFullYear();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Work', href: '/work' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const socials = [
    { Icon: InstagramIcon, href: 'https://instagram.com/yourhandle', label: 'Instagram' },
    { Icon: TwitterIcon, href: 'https://twitter.com/yourhandle', label: 'Twitter' },
    { Icon: GithubIcon, href: 'https://github.com/yourhandle', label: 'GitHub' },
    { Icon: LinkedinIcon, href: 'https://linkedin.com/in/yourhandle', label: 'LinkedIn' },
  ];

  return (
    <PixelBackground
      colors={['#09090b', '#18181b', '#27272a']}
      gap={8}
      animated
      showUnsupportedWarning={false}
      className="min-h-[60vh] w-full flex items-end overflow-x-hidden"
    >
      <footer className="w-full max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="flex flex-col lg:flex-row lg:items-end gap-12 lg:gap-16">
          {/* LEFT SIDE: Massive NCAT – pushed far left */}
          <div className="lg:w-2/5">
            <h1 className="pixel-text text-left text-[15rem] md:text-[18rem] leading-[0.8] tracking-tight -ml-12 sm:-ml-20 lg:-ml-32 xl:-ml-40">
              NCAT
            </h1>
            <p className="text-white/60 text-sm font-myMainFont mt-4 max-w-xs">
              © {year} {fullName}. All rights reserved.
            </p>
          </div>

          {/* RIGHT SIDE: Info grid */}
          <div className="lg:w-3/5 grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-6">
            {/* Explore */}
            <div>
              <h3 className="text-white font-medium text-sm uppercase tracking-widest mb-5">
                Explore
              </h3>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-white/50 hover:text-white text-base transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-white font-medium text-sm uppercase tracking-widest mb-5">
                Contact
              </h3>
              <ul className="space-y-3 text-white/50">
                <li>
                  <a
                    href="mailto:hello@ncat.dev"
                    className="hover:text-white text-base transition-colors duration-200"
                  >
                    hello@ncat.dev
                  </a>
                </li>
                <li className="text-base">New York, NY</li>
              </ul>
            </div>

            {/* Follow */}
            <div>
              <h3 className="text-white font-medium text-sm uppercase tracking-widest mb-5">
                Follow
              </h3>
              <div className="flex gap-5">
                {socials.map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/50 hover:text-white transition-colors duration-200 transform hover:scale-110"
                    aria-label={label}
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom subtle line */}
        <div className="mt-16 pt-8 border-t border-white/5 text-left">
          <p className="text-white/30 text-xs font-mono">
            Designed & built with pixels — {fullName}
          </p>
        </div>
      </footer>
    </PixelBackground>
  );
};

export default Footer;