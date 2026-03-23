import { motion, useScroll, useTransform } from 'motion/react';
import { Link, useLocation } from 'react-router';

interface NavLink { label: string; path: string; }

interface SharedNavProps {
  logo?: string;
  links?: NavLink[];
  ctaLabel?: string;
  ctaPath?: string;
}

const defaultLinks: NavLink[] = [
  { label: 'Services', path: '/' },
  { label: 'Insights', path: '/editorial' },
  { label: 'Events', path: '/events' },
  { label: 'Premium', path: '/premium' },
];

export function SharedNav({
  logo = 'AHA Software',
  links = defaultLinks,
  ctaLabel = 'Work Together',
  ctaPath = '/',
}: SharedNavProps) {
  const { scrollY } = useScroll();
  const location = useLocation();

  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(255, 248, 242, 0.72)', 'rgba(255, 248, 242, 0.85)']
  );
  const borderOpacity = useTransform(scrollY, [0, 80], [0, 1]);

  return (
    <motion.div
      style={{ backgroundColor }}
      className="fixed backdrop-blur-[20px] flex flex-col items-start left-0 pb-px top-0 w-full z-50"
    >
      <motion.div
        aria-hidden="true"
        style={{ borderColor: `rgba(209,201,192,${borderOpacity})` } as any}
        className="absolute border-b border-solid inset-0 pointer-events-none shadow-[0px_20px_40px_0px_rgba(30,27,23,0.05)]"
      />
      <div className="max-w-[1440px] relative shrink-0 w-full mx-auto">
        <div className="flex flex-row items-center w-full">
          <div className="flex items-center justify-between pl-[48px] pr-[48px] py-[24px] relative w-full">
            <Link to="/" className="flex flex-col font-['Newsreader:Extra_Light',sans-serif] h-[32px] justify-center leading-[0] not-italic relative shrink-0 text-[#1e1b17] text-[24px] tracking-[-1.2px] no-underline">
              <p className="leading-[32px]">{logo}</p>
            </Link>

            <div className="flex items-center gap-[40px] relative shrink-0">
              {links.map((link, index) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link key={index} to={link.path} className="no-underline">
                    <motion.div
                      whileHover={{ y: -2 }}
                      transition={{ duration: 0.2 }}
                      className={`flex flex-col items-start relative shrink-0 cursor-pointer ${isActive ? 'pb-[6px]' : 'pb-[4px]'}`}
                    >
                      {isActive && (
                        <div aria-hidden="true" className="absolute border-[#005c55] border-b-2 border-solid inset-0 pointer-events-none" />
                      )}
                      <div className={`flex flex-col font-['Newsreader:Extra_Light_Italic',sans-serif] h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[18px] tracking-[-0.45px] transition-opacity ${isActive ? 'text-[#005c55]' : 'text-[#1e1b17] opacity-80 hover:opacity-100'}`}>
                        <p className="leading-[28px]">{link.label}</p>
                      </div>
                    </motion.div>
                  </Link>
                );
              })}
            </div>

            <Link to={ctaPath} className="no-underline">
              <motion.div
                whileHover={{ scale: 1.05, boxShadow: '0 8px 24px rgba(0,92,85,0.35)' }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col items-center justify-center px-[32px] py-[10px] relative overflow-hidden shrink-0 cursor-pointer"
                style={{ background: 'linear-gradient(135deg, #005c55 0%, #0f766e 100%)' }}
              >
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  animate={{ x: ['-100%', '200%'] }}
                  transition={{ duration: 1.8, repeat: Infinity, repeatDelay: 4.5, ease: 'easeInOut' }}
                  style={{ background: 'linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.18) 50%, transparent 70%)' }}
                />
                <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white tracking-[0.35px]">
                  <p className="leading-[20px]">{ctaLabel}</p>
                </div>
              </motion.div>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
