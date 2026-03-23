import { motion, useInView, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import svgPaths from '../../imports/svg-g4m6nvvd5w';
import imgStrategicVisual from 'figma:asset/f80e8635a2b3dc46e681c29fdc8d8ce271222f07.png';
import imgImplementingGitHubSpecKit from 'figma:asset/e75a62d4330ddbcbde10910639911f3f7734b696.png';
import imgRadicalChangeAtScale from 'figma:asset/cf77bcbd8892f136b0725ba770fbcdd4cd7034ec.png';
import imgEliminatingRework from 'figma:asset/5c3547ffe220b4c7ff95726e5c96388cf719079a.png';
import imgRecordingPreview from 'figma:asset/223aa092cbaf374775f88ecfa7cc564b35f3c5ea.png';
import { SharedNav } from '../components/SharedNav';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.13, delayChildren: 0.05 } },
};

function AnimatedSection({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div ref={ref} initial="hidden" animate={isInView ? 'visible' : 'hidden'} variants={fadeInUp} transition={{ delay }} className={className}>
      {children}
    </motion.div>
  );
}

const navLinks = [
  { label: 'Services', path: '/' },
  { label: 'Analytics', path: '/editorial' },
  { label: 'Events', path: '/events' },
  { label: 'Full Access', path: '/premium' },
];

// Shimmer CTA helper
function GradientCTA({ children, className = '', ...props }: any) {
  return (
    <motion.div
      className={`relative overflow-hidden cursor-pointer ${className}`}
      style={{ background: 'linear-gradient(135deg, #005c55 0%, #0f766e 100%)' }}
      {...props}
    >
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ x: ['-100%', '200%'] }}
        transition={{ duration: 1.8, repeat: Infinity, repeatDelay: 5, ease: 'easeInOut' }}
        style={{ background: 'linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.18) 50%, transparent 70%)' }}
      />
      {children}
    </motion.div>
  );
}

function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <div ref={ref} className="bg-[#fff8f2] pt-[120px] pb-[80px] px-[48px] max-w-[1440px] mx-auto w-full">
      <motion.div style={{ opacity }} className="gap-x-[48px] grid grid-cols-[repeat(12,minmax(0,1fr))] items-center">
        {/* Left: hero text */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="col-[1/span_7] flex flex-col gap-[0px]"
        >
          <motion.div variants={fadeInUp} className="font-['Manrope:Regular',sans-serif] text-[#7f4025] text-[12px] tracking-[2.4px] uppercase mb-[16px]">
            Strategic Alignment Hub
          </motion.div>

          <motion.div variants={fadeInUp} className="flex flex-col font-['Newsreader:Extra_Light_Italic',sans-serif] text-[#1e1b17] text-[96px] tracking-[-4.8px] not-italic mb-[16px]">
            <p className="leading-[96px] mb-0">
              <span>Master the Art </span>
              <span className="text-[#0f766e]">of</span>
            </p>
            <p className="leading-[96px] mb-0">Radical</p>
            <p className="leading-[96px] mb-0">Organizational</p>
            <p className="leading-[96px]">Change.</p>
          </motion.div>

          <motion.div variants={fadeInUp} className="font-['Manrope:Regular',sans-serif] text-[#3e4947] text-[20px] leading-[32.5px] max-w-[576px] mb-[24px] opacity-90">
            <p className="mb-0">Gain exclusive access to a library of instructional videos,</p>
            <p className="mb-0">event recordings, speaking engagements, and premium posts</p>
            <p>that deep-dive into the GitHub Spec Kit methodology.</p>
          </motion.div>

          <motion.div variants={fadeInUp} className="flex gap-[16px] items-center pt-[8px]">
            <GradientCTA
              className="flex flex-col items-center justify-center px-[40px] py-[20px] rounded-[6px]"
              whileHover={{ scale: 1.03, boxShadow: '0 8px 24px rgba(0,92,85,0.35)' }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
            >
              <span className="font-['Manrope:Bold',sans-serif] text-white text-[16px] relative z-10">View Full Access Plans</span>
            </GradientCTA>

            <motion.div
              whileHover={{ backgroundColor: '#e0d9d2' }}
              transition={{ duration: 0.2 }}
              className="bg-[#eee7e0] flex flex-col items-center justify-center px-[40px] py-[20px] rounded-[6px] cursor-pointer"
            >
              <span className="font-['Manrope:Regular',sans-serif] text-[#1e1b17] text-[16px]">Our Methodology</span>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right: strategic visual + pull quote */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="col-[8/span_5] relative self-center"
        >
          <div className="bg-[#faf2eb] overflow-clip rounded-[4px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] w-full">
            <div className="h-[480px] relative overflow-hidden mix-blend-multiply opacity-80">
              <img alt="" className="absolute h-full left-[-12.5%] max-w-none top-0 w-[125%] object-cover" src={imgStrategicVisual} />
              <div className="absolute bg-white inset-0 mix-blend-saturation" />
              <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(51.34deg, rgba(0,92,85,0.2) 0%, rgba(0,92,85,0) 100%)' }} />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="absolute bg-[#fff8f2] bottom-[-24px] left-[-24px] max-w-[320px] pl-[36px] pr-[50px] py-[32px]"
          >
            <div aria-hidden="true" className="absolute border-[#005c55] border-l-4 border-solid inset-0 pointer-events-none" />
            <div className="absolute bg-[rgba(255,255,255,0)] inset-0 shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]" />
            <div className="font-['Newsreader:Extra_Light_Italic',sans-serif] text-[#005c55] text-[24px] leading-[30px] not-italic mb-[12px]">
              <p className="mb-0">"The architect must be</p>
              <p>the builder."</p>
            </div>
            <div className="font-['Manrope:Regular',sans-serif] text-[rgba(30,27,23,0.6)] text-[12px] tracking-[1.2px] uppercase opacity-60">
              — Principal, AHA Software
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

function KnowledgeBaseSection() {
  const cards = [
    {
      img: imgImplementingGitHubSpecKit,
      category: 'Video Tutorial',
      title: 'Implementing the\nGitHub Spec Kit for\nProduct Teams',
      desc: 'A step-by-step guide to bridging the gap between product requirements…',
      cta: 'Watch Module',
      iconPath: svgPaths.p1cfdbb00,
    },
    {
      img: imgRadicalChangeAtScale,
      category: 'Event Recording',
      title: 'Radical Change at Scale\n- DevConf 2024',
      desc: 'Keynote presentation on transforming enterprise engineering culture throug…',
      cta: 'Full Session',
      iconPath: svgPaths.p102afcc0,
    },
    {
      img: imgEliminatingRework,
      category: 'Strategic Insight',
      title: 'Eliminating Rework:\nThe DevOps Perspective',
      desc: 'How automated governance in your CI/CD pipeline ensures architectural…',
      cta: 'Read Article',
      iconPath: svgPaths.p384d6400,
    },
  ];

  return (
    <div className="bg-[#faf2eb] py-[128px]">
      <div className="max-w-[1440px] mx-auto px-[48px]">
        <AnimatedSection className="flex items-end justify-between mb-[80px]">
          <div className="max-w-[630px]">
            <h2 className="font-['Newsreader:Extra_Light',sans-serif] text-[#1e1b17] text-[48px] tracking-[-1.2px] leading-[48px] mb-[24px]">
              The Knowledge Base
            </h2>
            <p className="font-['Manrope:Regular',sans-serif] text-[#3e4947] text-[18px] leading-[28px]">
              A glimpse into the deep-dive instructional content and strategic recordings shared exclusively with our community.
            </p>
          </div>
          <motion.div whileHover={{ x: 4 }} className="flex gap-[10px] items-center cursor-pointer">
            <span className="font-['Manrope:Regular',sans-serif] text-[#005c55] text-[14px] tracking-[1.4px] uppercase">Section 02 // Library</span>
            <div className="size-[16px] relative">
              <svg className="absolute block size-full" fill="none" viewBox="0 0 16 16">
                <path d={svgPaths.p1a406200} fill="#005C55" />
              </svg>
            </div>
          </motion.div>
        </AnimatedSection>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerContainer}
          className="grid grid-cols-[repeat(3,minmax(0,1fr))] gap-[32px]"
        >
          {cards.map((card, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-white rounded-[8px] overflow-hidden flex flex-col cursor-pointer"
            >
              {/* Thumbnail */}
              <div className="aspect-video bg-[#eee7e0] relative overflow-hidden">
                <img
                  alt=""
                  className="absolute top-[-47.78%] left-[-5%] w-[110%] max-w-none blur-[2px] opacity-60"
                  style={{ height: '195%' }}
                  src={card.img}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="size-[40px] relative">
                    <svg className="absolute block size-full" fill="none" viewBox="0 0 40 40">
                      <path d={card.iconPath} fill="#005C55" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-[40px] flex flex-col flex-1">
                <div className="font-['Manrope:Regular',sans-serif] text-[#7f4025] text-[12px] tracking-[1.2px] uppercase mb-[12px]">
                  {card.category}
                </div>
                <h3 className="font-['Newsreader:Extra_Light',sans-serif] text-[#1e1b17] text-[24px] leading-[32px] mb-[12px]">
                  {card.title.split('\n').map((line, j) => <span key={j}>{line}{j < card.title.split('\n').length - 1 && <br />}</span>)}
                </h3>
                <p className="font-['Manrope:Regular',sans-serif] text-[#3e4947] text-[16px] leading-[24px] mb-[12px] flex-1">
                  {card.desc}
                </p>
                <motion.div whileHover={{ x: 6 }} className="flex gap-[8px] items-center cursor-pointer">
                  <span className="font-['Manrope:Regular',sans-serif] text-[#005c55] text-[12px] tracking-[1.2px] uppercase">{card.cta}</span>
                  <div className="size-[9.33px] relative">
                    <svg className="absolute block size-full" fill="none" viewBox="0 0 9.33333 9.33333">
                      <path d={svgPaths.pce77c00} fill="#005C55" />
                    </svg>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

function PricingSection() {
  const communityFeatures = ['Monthly Strategy Newsletter', 'Public Case Studies & Frameworks', 'Community Discord Access'];
  const fullAccessFeatures = ['Instructional Video Library', 'All Speaking & Event Recordings', 'Premium Blog Technical Deep-Dives', 'Exclusive Q&A with Senior Consultants'];

  return (
    <div className="bg-[#fff8f2] py-[128px]">
      <div className="max-w-[1440px] mx-auto px-[48px]">
        <AnimatedSection className="text-center mb-[80px]">
          <h2 className="font-['Newsreader:Extra_Light_Italic',sans-serif] text-[#1e1b17] text-[48px] text-center tracking-[-1.2px] leading-[48px] mb-[24px] not-italic">
            Choose your level of access.
          </h2>
          <p className="font-['Manrope:Regular',sans-serif] text-[#3e4947] text-[16px] text-center">
            Master the methodologies that drive organizational engineering rigor.
          </p>
        </AnimatedSection>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerContainer}
          className="grid grid-cols-[repeat(2,minmax(0,1fr))] gap-[32px] max-w-[900px] mx-auto"
        >
          {/* Community tier */}
          <motion.div
            variants={fadeInUp}
            whileHover={{ y: -4, transition: { duration: 0.3 } }}
            className="bg-white rounded-[8px] p-[49px] relative"
            style={{ border: '1px solid rgba(189,201,198,0.2)' }}
          >
            <div className="font-['Manrope:Regular',sans-serif] text-[#6e7977] text-[12px] tracking-[1.2px] uppercase mb-[16px]">Standard</div>
            <h3 className="font-['Newsreader:Extra_Light',sans-serif] text-[#1e1b17] text-[36px] leading-[40px] mb-[8px]">Community</h3>
            <div className="flex items-baseline gap-[4px] mb-[40px]">
              <span className="font-['Newsreader:Extra_Light',sans-serif] text-[#1e1b17] text-[36px] leading-[40px]">$0</span>
              <span className="font-['Manrope:Regular',sans-serif] text-[#3e4947] text-[16px] opacity-60">/ forever</span>
            </div>
            <div className="flex flex-col gap-[16px] mb-[48px]">
              {communityFeatures.map((f, i) => (
                <div key={i} className="flex gap-[12px] items-center">
                  <div className="shrink-0" style={{ width: 13.58, height: 10.02 }}>
                    <svg className="block size-full" fill="none" viewBox="0 0 13.5833 10.0208">
                      <path d={svgPaths.p127da640} fill="#005C55" />
                    </svg>
                  </div>
                  <span className="font-['Manrope:Regular',sans-serif] text-[#3e4947] text-[16px]">{f}</span>
                </div>
              ))}
            </div>
            <motion.div
              whileHover={{ backgroundColor: 'rgba(0,92,85,0.06)' }}
              transition={{ duration: 0.2 }}
              className="relative rounded-[6px] py-[18px] px-[2px] text-center cursor-pointer"
              style={{ border: '2px solid #005c55' }}
            >
              <span className="font-['Manrope:Regular',sans-serif] text-[#005c55] text-[16px]">Join the Community</span>
            </motion.div>
          </motion.div>

          {/* Full Access tier */}
          <motion.div
            variants={fadeInUp}
            whileHover={{ y: -4, transition: { duration: 0.3 } }}
            className="rounded-[8px] p-[49px] relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #005c55 0%, #0f766e 100%)' }}
          >
            {/* Shimmer */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              animate={{ x: ['-100%', '200%'] }}
              transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 5, ease: 'easeInOut' }}
              style={{ background: 'linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.08) 50%, transparent 70%)' }}
            />

            <div className="absolute top-[20px] right-[20px] bg-[#7f4025] rounded-[12px] px-[12px] py-[4px]">
              <span className="font-['Manrope:Bold',sans-serif] text-white text-[10px] tracking-[1px] uppercase">Early Access</span>
            </div>

            <div className="font-['Manrope:Regular',sans-serif] text-[rgba(255,255,255,0.6)] text-[12px] tracking-[1.2px] uppercase mb-[16px]">Strategic Partnership</div>
            <h3 className="font-['Newsreader:Extra_Light',sans-serif] text-white text-[36px] leading-[40px] mb-[8px]">Full Access</h3>
            <div className="flex items-baseline gap-[4px] mb-[40px]">
              <span className="font-['Newsreader:Extra_Light',sans-serif] text-white text-[36px] leading-[40px]">$49</span>
              <span className="font-['Manrope:Regular',sans-serif] text-[rgba(255,255,255,0.6)] text-[16px]">/ month</span>
            </div>
            <div className="flex flex-col gap-[16px] mb-[48px]">
              {fullAccessFeatures.map((f, i) => (
                <div key={i} className="flex gap-[12px] items-center">
                  <div className="shrink-0" style={{ width: 18.33, height: 17.5 }}>
                    <svg className="block size-full" fill="none" viewBox="0 0 18.3333 17.5">
                      <path d={svgPaths.p16151b00} fill="#C5E6E1" />
                    </svg>
                  </div>
                  <span className="font-['Manrope:Regular',sans-serif] text-white text-[16px]">{f}</span>
                </div>
              ))}
            </div>
            <motion.div
              whileHover={{ scale: 1.02, boxShadow: '0 8px 24px rgba(0,0,0,0.25)' }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#7f4025] rounded-[6px] py-[18px] text-center cursor-pointer relative overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 pointer-events-none"
                animate={{ x: ['-100%', '200%'] }}
                transition={{ duration: 1.8, repeat: Infinity, repeatDelay: 6, ease: 'easeInOut' }}
                style={{ background: 'linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.15) 50%, transparent 70%)' }}
              />
              <span className="font-['Manrope:Bold',sans-serif] text-white text-[16px] relative z-10">Upgrade to Full Access</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

function ArchiveSection() {
  return (
    <div className="bg-[#faf4ed] py-[96px]">
      <div className="max-w-[1440px] mx-auto px-[48px]">
        <AnimatedSection className="mb-[64px]">
          <h2 className="font-['Newsreader:Extra_Light',sans-serif] text-[#1e1b17] text-[36px] leading-[44px]">From the Archive</h2>
        </AnimatedSection>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerContainer}
          className="grid grid-cols-[repeat(3,minmax(0,1fr))] gap-[32px]"
        >
          {[
            { label: 'Video', title: 'The Cursive Series', desc: 'An editorial series exploring…', img: imgImplementingGitHubSpecKit },
            { label: 'Free', title: 'Strategic Alignment Workshop 2025', date: 'Collected: Mar-Nov 2024', img: imgRadicalChangeAtScale },
            { label: 'Free', title: 'Masterclass: Spec-Driven Development', date: 'Collected: Jan-Jun 2024', img: imgRecordingPreview },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="relative rounded-[4px] overflow-hidden cursor-pointer"
            >
              <div className="aspect-video relative overflow-hidden">
                <img alt="" className="absolute inset-0 w-full h-full object-cover" src={item.img} />
                <div className="absolute bg-white inset-0 mix-blend-saturation opacity-60" />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(30,27,23,0.6)] to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-[24px]">
                <div
                  className="inline-block px-[10px] py-[3px] rounded-[4px] mb-[8px]"
                  style={{ background: 'linear-gradient(135deg, #005c55 0%, #0f766e 100%)' }}
                >
                  <span className="font-['Manrope:Bold',sans-serif] text-white text-[9px] tracking-[1px] uppercase">{item.label}</span>
                </div>
                <h4 className="font-['Newsreader:Extra_Light',sans-serif] text-white text-[18px] leading-[24px] mb-[4px]">{item.title}</h4>
                {item.date && <p className="font-['Manrope:Regular',sans-serif] text-[rgba(255,255,255,0.6)] text-[12px]">{item.date}</p>}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#f5ede4] border-t border-[rgba(209,201,192,0.3)]">
      <div className="max-w-[1440px] mx-auto px-[48px] py-[64px]">
        <div className="grid grid-cols-[repeat(4,minmax(0,1fr))] gap-[48px]">
          <div>
            <div className="font-['Newsreader:Extra_Light',sans-serif] text-[#1e1b17] text-[30px] leading-[36px] mb-[16px]">AHA Software</div>
            <p className="font-['Manrope:Regular',sans-serif] text-[rgba(30,27,23,0.6)] text-[14px] leading-[22.75px]">
              Architectural alignment for the modern enterprise. We build the systems that build the future.
            </p>
          </div>
          {[
            { title: 'Capabilities', links: ['Software Consulting', 'DevOps Architecture', 'Strategic Advisory'] },
            { title: 'Navigation', links: ['Editorial', 'Insights', 'Sitemap'] },
            { title: 'Connect', links: ['Newsletter', 'Privacy Policy', 'Security Architecture'] },
          ].map((col, i) => (
            <div key={i}>
              <div className="font-['Manrope:Bold',sans-serif] text-[#005c55] text-[14px] tracking-[0.35px] uppercase mb-[16px]">{col.title}</div>
              {col.links.map((link, j) => (
                <motion.div key={j} whileHover={{ x: 4 }} transition={{ duration: 0.2 }} className="font-['Manrope:Regular',sans-serif] text-[rgba(30,27,23,0.6)] text-[14px] tracking-[0.35px] uppercase leading-[28px] cursor-pointer">
                  {link}
                </motion.div>
              ))}
            </div>
          ))}
        </div>
        <div className="border-t border-[rgba(209,201,192,0.2)] mt-[48px] pt-[32px]">
          <p className="font-['Manrope:Regular',sans-serif] text-[rgba(30,27,23,0.4)] text-[10px] tracking-[2px] uppercase">
            © 2024 AHA Software Consulting. Designed for the Digital Curator. Precision Structuralism in Digital Engineering.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function PremiumHubPage() {
  return (
    <div className="bg-[#fff8f2] relative min-h-screen">
      <SharedNav
        logo="AHA Software"
        links={navLinks}
        ctaLabel="Work Together"
        ctaPath="/"
      />
      <div className="relative">
        <HeroSection />
        <KnowledgeBaseSection />
        <PricingSection />
        <ArchiveSection />
        <Footer />
      </div>
    </div>
  );
}
