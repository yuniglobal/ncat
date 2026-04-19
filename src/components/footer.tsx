// Footer.tsx
import { PixelBackground } from './PixelBackground';
import { fullName } from '@/lib/constants';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <PixelBackground
      colors={['#09090b', '#18181b', '#27272a']}
      gap={8}
      animated
      showUnsupportedWarning={false}
      className="min-h-[50vh] w-full flex flex-col items-center justify-center gap-6"
    >
      <h2 className="pixel-text">NCAT</h2>
      <p className="text-white/70 text-sm font-myMainFont">
        © {year} {fullName}
      </p>
    </PixelBackground>
  );
};

export default Footer;