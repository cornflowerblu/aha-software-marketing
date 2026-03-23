// Re-exports the full homepage using the shared nav + all existing sections.
// The section components live here; App.tsx is now just the router.

import { motion, useScroll, useTransform, useInView } from 'motion/react';
import { useRef } from 'react';
import svgPaths from '../../imports/svg-rdjg2yvcmo';
import imgTechnicalPrecisionAbstract from 'figma:asset/f80e8635a2b3dc46e681c29fdc8d8ce271222f07.png';
import imgImage from 'figma:asset/f84ad6d75c01f5865641dba32416e817dee06ff5.png';
import imgCybersecurityHardware from 'figma:asset/71e5bd67bd95103e9904261d649c92eebead9597.png';
import imgServerRoom from 'figma:asset/7360735637200bb2b32bb427064850cad50ac3ff.png';
import imgCodeOnScreen from 'figma:asset/5c3547ffe220b4c7ff95726e5c96388cf719079a.png';
import { SharedNav } from '../components/SharedNav';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
};

function AnimatedSection({ children, className = '', delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  return (
    <motion.div ref={ref} initial="hidden" animate={isInView ? 'visible' : 'hidden'} variants={fadeInUp} transition={{ delay }} className={className}>
      {children}
    </motion.div>
  );
}

const homeNavLinks = [
  { label: 'Services', path: '/' },
  { label: 'Insights', path: '/editorial' },
  { label: 'Events', path: '/events' },
  { label: 'Contact', path: '/' },
];

function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <div ref={ref} className="absolute content-stretch flex flex-col items-start left-0 overflow-clip pb-[160px] pt-[224px] px-[48px] right-0 top-0" data-name="Header - Hero Section">
      <motion.div className="absolute inset-0 opacity-20" data-name="Gradient" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1280 1198.5\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(90.51 0 0 84.747 640 599.25)\\'><stop stop-color=\\'rgba(209,201,192,1)\\' offset=\\'0.011785\\'/><stop stop-color=\\'rgba(209,201,192,0)\\' offset=\\'0.011785\\'/></radialGradient></defs></svg>')", y, opacity }} />
      <div className="gap-x-[64px] gap-y-[64px] grid grid-cols-[repeat(12,minmax(0,1fr))] grid-rows-[_814.50px] max-w-[1280px] relative shrink-0 w-full" data-name="Container">
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="col-[1/span_8] content-stretch flex flex-col gap-[32px] items-start justify-self-stretch relative row-1 self-center shrink-0">
          <motion.div variants={fadeInUp} className="bg-[#ebe3da] content-stretch flex items-start px-[16px] py-[6px] relative rounded-[9999px] shrink-0">
            <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[17px] justify-center leading-[0] relative shrink-0 text-[#0f766e] text-[11px] tracking-[2.75px] uppercase w-[178.83px]">
              <p className="leading-[16.5px]">Strategic Alignment</p>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="content-stretch flex flex-col items-start relative shrink-0 w-full">
            <div className="flex flex-col font-['Newsreader:Extra_Light',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e1b17] text-[128px] tracking-[-6.4px] w-full">
              <p className="leading-[128px] mb-0">Radical</p>
              <p className="leading-[128px] mb-0">Change for</p>
              <p className="mb-0"><span className="leading-[128px]">{`the `}</span><span className="font-['Newsreader:Extra_Light_Italic',sans-serif] leading-[128px] not-italic text-[#0f766e]">Post-AI</span></p>
              <p className="leading-[128px]">Organization.</p>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="content-stretch flex flex-col items-start max-w-[672px] pt-[8px] relative shrink-0 w-[672px]">
            <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[96px] justify-center leading-[32px] relative shrink-0 text-[24px] text-[rgba(30,27,23,0.7)] w-[639.17px]">
              <p className="mb-0">We empower developers and align teams—from product to</p>
              <p className="mb-0">DevOps—to eliminate costly rework using the GitHub Spec</p>
              <p>Kit methodology.</p>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="content-stretch flex gap-[24px] items-start pt-[16px] relative shrink-0 w-full">
            <motion.div
              whileHover={{ scale: 1.02, boxShadow: '0 20px 40px rgba(15, 118, 110, 0.2)' }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              className="content-stretch flex flex-col items-center justify-center pb-[21.5px] pt-[20.5px] px-[40px] relative overflow-hidden shrink-0 cursor-pointer"
              style={{ background: 'linear-gradient(135deg, #005c55 0%, #0f766e 100%)' }}
            >
              <motion.div className="absolute inset-0 pointer-events-none" animate={{ x: ['-100%', '200%'] }} transition={{ duration: 1.8, repeat: Infinity, repeatDelay: 5, ease: 'easeInOut' }} style={{ background: 'linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.18) 50%, transparent 70%)' }} />
              <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] relative shrink-0 text-[12px] text-center text-white tracking-[2.4px] uppercase w-[231.97px]">
                <p className="leading-[16px]">Start the Transformation</p>
              </div>
            </motion.div>

            <motion.div whileHover={{ backgroundColor: 'rgba(15, 118, 110, 0.05)' }} transition={{ duration: 0.3 }} className="content-stretch flex flex-col items-center justify-center px-[41px] py-[21px] relative shrink-0 cursor-pointer">
              <div aria-hidden="true" className="absolute border border-[#d1c9c0] border-solid inset-0 pointer-events-none" />
              <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] relative shrink-0 text-[#1e1b17] text-[12px] text-center tracking-[2.4px] uppercase w-[154.48px]">
                <p className="leading-[16px]">Our Methodology</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }} className="col-[9/span_4] content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-center shrink-0">
          <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[2px] shadow-[-40px_40px_80px_0px_rgba(0,0,0,0.1)] shrink-0 w-full bg-[#f5ede4]">
            <div className="h-[469.33px] opacity-90 relative shrink-0 w-full">
              <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 overflow-hidden">
                  <img alt="" className="absolute h-full left-[-16.67%] max-w-none top-0 w-[133.33%]" src={imgTechnicalPrecisionAbstract} />
                </div>
                <div className="absolute bg-white inset-0 mix-blend-saturation" />
              </div>
            </div>
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }} className="absolute bg-[#fff8f2] bottom-[-40px] content-stretch flex flex-col items-start left-[-40px] max-w-[320px] pl-[46px] pr-[60.03px] py-[40px]">
            <div aria-hidden="true" className="absolute border-[#0f766e] border-l-6 border-solid inset-0 pointer-events-none" />
            <div className="absolute bg-[rgba(255,255,255,0)] inset-0 shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]" />
            <div className="flex flex-col font-['Newsreader:Extra_Light_Italic',sans-serif] h-[75px] justify-center leading-[37.5px] not-italic relative shrink-0 text-[#0f766e] text-[30px] w-[213.97px]">
              <p className="mb-0">{`"The architect must`}</p>
              <p>{`be the builder."`}</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

function PillarsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const pillars = [
    { icon: svgPaths.pf251c40, title: 'Software Consulting', description: 'Bespoke architecture, headless CMS ecosystems, and deep systems integration designed for extreme scale and technical durability.', items: ['Legacy Modernization', 'API-First Strategy', 'Enterprise JS/TS'] },
    { icon: svgPaths.p1cd6da20, title: 'DevOps Excellence', description: 'Eliminating rework through radical QA alignment and automated governance. We build pipelines that enforce quality by default.', items: ['CI/CD Hardening', 'Zero-Trust Infrastructure', 'SRE Governance'] },
    { icon: svgPaths.p2e551f40, title: 'Strategic Advisory', description: 'High-level alignment between technical roadmaps and business outcomes. We translate engineering debt into strategic opportunity.', items: ['CTO as a Service', 'AI Implementation Audit', 'Delivery Health Check'] }
  ];

  return (
    <div ref={ref} className="absolute bg-[#faf4ed] content-stretch flex flex-col items-start left-0 py-[128px] right-0 top-[1198.5px]">
      <div className="max-w-[1280px] relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[96px] items-start max-w-[inherit] px-[48px] relative w-full">
          <AnimatedSection className="content-stretch flex items-end justify-between pb-[49px] relative shrink-0 w-full">
            <div aria-hidden="true" className="absolute border-[#d1c9c0] border-b border-solid inset-0 pointer-events-none" />
            <div className="max-w-[768px] relative shrink-0 w-[757.84px]">
              <div className="content-stretch flex flex-col gap-[24px] items-start relative w-full">
                <div className="flex flex-col font-['Newsreader:Extra_Light',sans-serif] h-[120px] justify-center leading-[60px] not-italic relative shrink-0 text-[#1e1b17] text-[60px] tracking-[-1.5px] w-[665.64px]">
                  <p className="mb-0">The Pillars of Engineering</p>
                  <p>Rigor</p>
                </div>
                <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[56px] justify-center leading-[28px] relative shrink-0 text-[18px] text-[rgba(30,27,23,0.6)] w-[757.84px]">
                  <p className="mb-0">We move beyond generic digital transformation. We re-engineer organizational DNA through</p>
                  <p>precise structuralism.</p>
                </div>
              </div>
            </div>
            <div className="relative shrink-0">
              <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] relative shrink-0 text-[10px] text-[rgba(15,118,110,0.4)] tracking-[4px] uppercase w-[238.89px]">
                <p className="leading-[15px]">{`Section 01 // Capabilities`}</p>
              </div>
            </div>
          </AnimatedSection>

          <motion.div initial="hidden" animate={isInView ? 'visible' : 'hidden'} variants={staggerContainer} className="gap-x-[48px] gap-y-[48px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[_402px] relative shrink-0 w-full">
            {pillars.map((pillar, index) => (
              <motion.div key={index} variants={fadeInUp} whileHover={{ y: -8, transition: { duration: 0.3 } }} className="h-[402px] justify-self-stretch relative shrink-0">
                <div aria-hidden="true" className="absolute border-[#d1c9c0] border-solid border-t inset-0 pointer-events-none" />
                <motion.div initial={{ scale: 0 }} animate={isInView ? { scale: 1 } : { scale: 0 }} transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }} className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[41px]">
                  <div className="h-[27px] relative shrink-0 w-[30px]">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 28.5">
                      <path d={pillar.icon} fill="var(--fill-0, #0F766E)" />
                    </svg>
                  </div>
                </motion.div>
                <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[121px]">
                  <div className="flex flex-col font-['Newsreader:Extra_Light',sans-serif] h-[36px] justify-center leading-[0] not-italic relative shrink-0 text-[#1e1b17] text-[30px]">
                    <p className="leading-[36px]">{pillar.title}</p>
                  </div>
                </div>
                <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[181px]">
                  <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[26px] relative shrink-0 text-[16px] text-[rgba(30,27,23,0.7)]">
                    <p>{pillar.description}</p>
                  </div>
                </div>
                <motion.div initial="hidden" animate={isInView ? 'visible' : 'hidden'} variants={staggerContainer} className="absolute content-stretch flex flex-col gap-[15.5px] items-start left-0 right-0 top-[325px]">
                  {pillar.items.map((item, itemIndex) => (
                    <motion.div key={itemIndex} variants={fadeIn} className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
                      <motion.div initial={{ width: 16 }} whileHover={{ width: 32 }} transition={{ duration: 0.3 }} className="bg-[#0f766e] h-px shrink-0" />
                      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] relative shrink-0 text-[10px] text-[rgba(30,27,23,0.4)] tracking-[2px] uppercase">
                        <p className="leading-[15px]">{item}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function SpecKitSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['10%', '-10%']);

  return (
    <div ref={ref} className="absolute bg-[#0f766e] content-stretch flex flex-col items-start left-0 overflow-clip px-[48px] py-[128px] right-0 top-[2201.5px]">
      <motion.div className="absolute bg-size-[24px_22px] bg-top-left inset-0 opacity-10" style={{ backgroundImage: `url('${imgImage}')`, y }} />
      <div className="gap-x-[64px] gap-y-[64px] grid grid-cols-[repeat(12,minmax(0,1fr))] grid-rows-[_592.25px] relative shrink-0 w-full">
        <AnimatedSection className="col-[1/span_6] h-[470.5px] justify-self-stretch relative row-1 self-center shrink-0">
          <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-0">
            <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] relative shrink-0 text-[#ccfbf1] text-[10px] tracking-[3px] uppercase w-[215.44px]">
              <p className="leading-[15px]">Proprietary Methodology</p>
            </div>
          </div>
          <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[47px]">
            <div className="flex flex-col font-['Newsreader:Extra_Light',sans-serif] h-[144px] justify-center leading-[72px] not-italic relative shrink-0 text-[72px] text-white tracking-[-1.8px] w-[537.11px]">
              <p className="mb-0">Introducing Spec</p>
              <p>Kit.</p>
            </div>
          </div>
          <div className="absolute content-stretch flex flex-col items-start left-0 opacity-80 pb-[0.75px] right-0 top-[222.25px]">
            <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[130px] justify-center leading-[32.5px] relative shrink-0 text-[#ccfbf1] text-[20px] w-[544.28px]">
              <p className="mb-0">Software delivery fails when specs are detached from code.</p>
              <p className="mb-0">Our Spec Kit methodology turns documentation into</p>
              <p className="mb-0">executable requirements, ensuring that every line of code</p>
              <p>serves a business intent.</p>
            </div>
          </div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={staggerContainer} className="absolute content-stretch flex gap-[48px] items-center left-0 right-0 top-[401px]">
            {[{ value: '94%', label: 'Rework Reduction' }, { value: '3.2x', label: 'Velocity Increase' }].map((stat, index) => (
              <motion.div key={index} variants={fadeInUp} className="content-stretch flex flex-col gap-[7.5px] items-start pl-[25px] relative shrink-0">
                <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.2)] border-l border-solid inset-0 pointer-events-none" />
                <motion.div initial={{ scale: 0.5, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.2 }} className="flex flex-col font-['Newsreader:Extra_Light',sans-serif] h-[48px] justify-center leading-[0] not-italic relative shrink-0 text-[48px] text-white">
                  <p className="leading-[48px]">{stat.value}</p>
                </motion.div>
                <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[14px] justify-center leading-[0] relative shrink-0 text-[9px] text-[rgba(255,255,255,0.5)] tracking-[1.8px] uppercase">
                  <p className="leading-[13.5px]">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatedSection>

        <AnimatedSection delay={0.3} className="col-[7/span_6] gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[__321px_247.25px] justify-self-stretch relative row-1 self-center shrink-0">
          {[
            { icon: svgPaths.p3cba1c80, title: 'Automated QA\nMapping', description: 'Every spec automatically\ngenerates test suites,\nclosing the gap between\nintent and reality.' },
            { icon: svgPaths.p609b510, title: 'Branch Integrity', description: 'Structural guardrails that\nprevent configuration drift\nacross multi-repo\nenvironments.' }
          ].map((feature, index) => (
            <motion.div key={index} whileHover={{ scale: 1.02, backgroundColor: 'rgba(255, 255, 255, 0.08)' }} transition={{ duration: 0.3 }} className="backdrop-blur-[2px] bg-[rgba(255,255,255,0.05)] h-[321px] justify-self-stretch relative shrink-0">
              <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none" />
              <div className="absolute content-stretch flex flex-col items-start left-[41px] right-[41px] top-[41px]">
                <div className="h-[25px] relative shrink-0 w-[25px]">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
                    <path d={feature.icon} fill="var(--fill-0, white)" />
                  </svg>
                </div>
              </div>
              <div className="absolute content-stretch flex flex-col items-start left-[41px] right-[41px] top-[109px]">
                <div className="flex flex-col font-['Newsreader:Extra_Light',sans-serif] justify-center leading-[32px] not-italic relative shrink-0 text-[24px] text-white">
                  {feature.title.split('\n').map((line, i) => <p key={i} className={i === 0 ? 'mb-0' : ''}>{line}</p>)}
                </div>
              </div>
              <div className="absolute content-stretch flex flex-col items-start left-[41px] right-[41px] top-[188.13px]">
                <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[22.75px] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.6)]">
                  {feature.description.split('\n').map((line, i) => <p key={i} className={i < feature.description.split('\n').length - 1 ? 'mb-0' : ''}>{line}</p>)}
                </div>
              </div>
            </motion.div>
          ))}

          <motion.div whileHover={{ scale: 1.01 }} transition={{ duration: 0.3 }} className="col-[1/span_2] h-[247.25px] justify-self-stretch relative shrink-0" style={{ backgroundImage: 'linear-gradient(156.178deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 100%)' }}>
            <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex gap-[40px] items-center p-[41px] relative size-full">
                <div className="max-w-[560px] opacity-50 relative shrink-0 size-[128px]">
                  <div aria-hidden="true" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 pointer-events-none">
                    <div className="absolute inset-0 overflow-hidden">
                      <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgCybersecurityHardware} />
                    </div>
                    <div className="absolute bg-white inset-0 mix-blend-saturation" />
                  </div>
                </div>
                <div className="relative shrink-0">
                  <div className="content-stretch flex flex-col gap-[14.8px] items-start relative">
                    <div className="flex flex-col font-['Newsreader:Extra_Light',sans-serif] h-[32px] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-white w-[283.91px]">
                      <p className="leading-[32px]">Seamless GitHub Integration</p>
                    </div>
                    <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[69px] justify-center leading-[22.75px] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.6)] w-[302.83px]">
                      <p className="mb-0">Native integration into your existing CI/CD flow.</p>
                      <p className="mb-0">No new tools to learn—just better results from</p>
                      <p>tools you already have.</p>
                    </div>
                    <motion.div whileHover={{ x: 8 }} className="content-stretch flex gap-[12px] items-center pb-[5px] relative shrink-0 cursor-pointer">
                      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.3)] border-b border-solid inset-0 pointer-events-none" />
                      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] relative shrink-0 text-[10px] text-white tracking-[2px] uppercase w-[160.41px]">
                        <p className="leading-[15px]">Download Whitepaper</p>
                      </div>
                      <div className="relative shrink-0 size-[9.333px]">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33333 9.33333">
                          <path d={svgPaths.pce77c00} fill="var(--fill-0, white)" />
                        </svg>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatedSection>
      </div>
    </div>
  );
}

function InsightsSection() {
  const articles = [
    { image: imgServerRoom, category: 'Engineering', title: 'High-Quality Software Delivery:\nBeyond the Sprint.', description: 'Why traditional agile metrics are failing your engineering culture\nand how to shift towards structural quality metrics that drive\nrevenue.', readTime: '12 Min', date: 'May 2024' },
    { image: imgCodeOnScreen, category: 'DevOps', title: 'DevOps for Modern Teams: Radical\nAutomation.', description: 'Implementing zero-touch deployments in complex legacy\nenvironments. A guide to navigating the friction between speed\nand safety.', readTime: '09 Min', date: 'June 2024' }
  ];

  return (
    <div className="absolute bg-[#fff8f2] content-stretch flex flex-col items-start left-0 py-[128px] right-0 top-[3049.75px]">
      <div className="max-w-[1280px] relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[80px] items-start max-w-[inherit] px-[48px] relative w-full">
          <AnimatedSection className="content-stretch flex items-baseline justify-between pb-[33px] relative shrink-0 w-full">
            <div aria-hidden="true" className="absolute border-[rgba(209,201,192,0.5)] border-b border-solid inset-0 pointer-events-none" />
            <div className="flex flex-col font-['Newsreader:Extra_Light',sans-serif] h-[48px] justify-center leading-[0] not-italic relative shrink-0 text-[#1e1b17] text-[48px] tracking-[-1.2px] w-[358.94px]">
              <p className="leading-[48px]">Technical Insights</p>
            </div>
            <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] relative shrink-0 text-[#0f766e] text-[10px] tracking-[3px] uppercase w-[145.77px]">
              <p className="leading-[15px]">{`All Articles // 08`}</p>
            </div>
          </AnimatedSection>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={staggerContainer} className="gap-x-[80px] gap-y-[80px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[_599.25px] relative shrink-0 w-full">
            {articles.map((article, index) => (
              <motion.div key={index} variants={fadeInUp} whileHover={{ y: -12, transition: { duration: 0.3 } }} className="h-[599.25px] justify-self-stretch relative shrink-0 cursor-pointer group">
                <motion.div className="absolute aspect-video bg-[#f5ede4] content-stretch flex flex-col items-start justify-center left-0 overflow-clip right-0 top-0" whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
                  <div className="h-[310.5px] relative shrink-0 w-full">
                    <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
                      <div className="absolute inset-0 overflow-hidden">
                        <motion.img alt="" className="absolute h-[177.78%] left-0 max-w-none top-[-38.89%] w-full" src={article.image} whileHover={{ scale: 1.05 }} transition={{ duration: 0.6 }} />
                      </div>
                      <div className="absolute bg-white inset-0 mix-blend-saturation" />
                    </div>
                  </div>
                  <div className="absolute content-stretch flex flex-col items-start left-[24px] px-[12px] py-[6px] top-[24px]" style={{ background: 'linear-gradient(135deg, #005c55 0%, #0f766e 100%)' }}>
                    <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[14px] justify-center leading-[0] relative shrink-0 text-[9px] text-white tracking-[0.9px] uppercase">
                      <p className="leading-[13.5px]">{article.category}</p>
                    </div>
                  </div>
                </motion.div>
                <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[350.5px]">
                  <div className="flex flex-col font-['Newsreader:Extra_Light',sans-serif] justify-center leading-[45px] not-italic relative shrink-0 text-[#1e1b17] text-[36px]">
                    {article.title.split('\n').map((line, i) => <p key={i} className={i === 0 ? 'mb-0' : ''}>{line}</p>)}
                  </div>
                </div>
                <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[463.75px]">
                  <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[29.25px] relative shrink-0 text-[18px] text-[rgba(30,27,23,0.6)]">
                    {article.description.split('\n').map((line, i) => <p key={i} className={i < article.description.split('\n').length - 1 ? 'mb-0' : ''}>{line}</p>)}
                  </div>
                </div>
                <div className="absolute content-stretch flex gap-[24px] items-center left-0 right-0 top-[584.25px]">
                  <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] relative shrink-0 text-[#857f79] text-[10px] tracking-[2px] uppercase">
                    <p className="leading-[15px]">Read Time: {article.readTime}</p>
                  </div>
                  <div className="bg-[#d1c9c0] rounded-[9999px] shrink-0 size-[4px]" />
                  <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] relative shrink-0 text-[#857f79] text-[10px] tracking-[2px] uppercase">
                    <p className="leading-[15px]">{article.date}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function ContactSection() {
  return (
    <div className="absolute bg-[#f5ede4] content-stretch flex flex-col items-start left-0 py-[129px] right-0 top-[4066px]">
      <div aria-hidden="true" className="absolute border-[rgba(209,201,192,0.3)] border-b border-solid border-t inset-0 pointer-events-none" />
      <div className="max-w-[1280px] relative shrink-0 w-full">
        <div className="gap-x-[96px] gap-y-[96px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[_573.50px] max-w-[inherit] px-[48px] relative w-full">
          <AnimatedSection className="col-1 content-stretch flex flex-col gap-[39px] items-start justify-self-stretch pb-[52px] relative row-1 self-start shrink-0">
            <div className="flex flex-col font-['Newsreader:Extra_Light',sans-serif] justify-center leading-[72px] not-italic relative shrink-0 text-[#1e1b17] text-[72px] tracking-[-3.6px] w-full">
              <p className="mb-0">Ready for Radical</p>
              <p>Change?</p>
            </div>
            <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[32.5px] relative shrink-0 text-[20px] text-[rgba(30,27,23,0.6)] w-full">
              <p className="mb-0">Contact us to schedule a Strategic Alignment workshop.</p>
              <p className="mb-0">No sales pitches—just technical experts auditing your</p>
              <p>delivery pipeline.</p>
            </div>
            <div className="content-stretch flex flex-col gap-[48px] items-start pt-[25px] relative shrink-0 w-full">
              {[
                { icon: svgPaths.p682b940, label: 'Office Hub', value: '42 Engineering Plaza, London EC2A' },
                { icon: svgPaths.p2b19980, label: 'Direct Line', value: 'hello@ahasw.consulting' }
              ].map((contact, index) => (
                <motion.div key={index} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full">
                  <div className="bg-[#fff8f2] content-stretch flex items-center justify-center p-px relative shrink-0 size-[64px]">
                    <div aria-hidden="true" className="absolute border border-[#d1c9c0] border-solid inset-0 pointer-events-none" />
                    <div className="h-[25px] relative shrink-0 w-[20px]">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
                        <path d={contact.icon} fill="var(--fill-0, #0F766E)" />
                      </svg>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col gap-[8px] items-start relative self-stretch shrink-0">
                    <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] relative shrink-0 text-[#0f766e] text-[10px] tracking-[3px] uppercase">
                      <p className="leading-[15px]">{contact.label}</p>
                    </div>
                    <div className="flex flex-col font-['Newsreader:Extra_Light',sans-serif] h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#1e1b17] text-[18px]">
                      <p className="leading-[28px]">{contact.value}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="bg-[#fff8f2] col-2 justify-self-stretch relative row-1 self-start shrink-0">
            <div aria-hidden="true" className="absolute border border-[rgba(209,201,192,0.5)] border-solid inset-0 pointer-events-none" />
            <div className="content-stretch flex flex-col items-start pb-[65px] pt-[49px] px-[49px] relative w-full">
              <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_0_0.5px_0] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" />
              <div className="content-stretch flex flex-col gap-[40px] items-start relative w-full">
                <div className="gap-x-[40px] gap-y-[40px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[_73px] relative shrink-0 w-full">
                  {[{ label: 'Full Name', placeholder: 'John Doe' }, { label: 'Company', placeholder: 'Acme Engineering' }].map((field, index) => (
                    <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.1 }} className="content-stretch flex flex-col gap-[12px] items-start justify-self-stretch relative self-start shrink-0">
                      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[10px] text-[rgba(15,118,110,0.6)] tracking-[2px] uppercase w-full">
                        <p className="leading-[15px]">{field.label}</p>
                      </div>
                      <div className="relative shrink-0 w-full">
                        <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
                          <div className="content-stretch flex items-start justify-center pb-[15px] pt-[13px] px-[12px] relative w-full">
                            <div className="flex-[1_0_0] min-h-px min-w-px relative">
                              <div className="flex flex-col font-['Newsreader:Extra_Light',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[18px] w-full">
                                <p className="leading-[normal]">{field.placeholder}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div aria-hidden="true" className="absolute border-[#d1c9c0] border-b-2 border-solid inset-0 pointer-events-none" />
                      </div>
                    </motion.div>
                  ))}
                </div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} transition={{ duration: 0.2 }} className="content-stretch flex items-center justify-center py-[24px] relative overflow-hidden shrink-0 w-full cursor-pointer" style={{ background: 'linear-gradient(135deg, #005c55 0%, #0f766e 100%)' }}>
                  <motion.div className="absolute inset-0 pointer-events-none" animate={{ x: ['-100%', '200%'] }} transition={{ duration: 1.8, repeat: Infinity, repeatDelay: 6, ease: 'easeInOut' }} style={{ background: 'linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.18) 50%, transparent 70%)' }} />
                  <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[17px] justify-center leading-[0] relative shrink-0 text-[11px] text-center text-white tracking-[3.3px] uppercase">
                    <p className="leading-[16.5px]">Initiate Consultation</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute bg-[#f5ede4] content-stretch flex flex-col items-start left-0 pt-px right-0 top-[4897.5px]">
      <div aria-hidden="true" className="absolute border-[rgba(209,201,192,0.3)] border-solid border-t inset-0 pointer-events-none" />
      <div className="max-w-[1440px] relative shrink-0 w-full">
        <div className="gap-x-[48px] gap-y-[48px] grid grid-cols-[repeat(4,minmax(0,1fr))] grid-rows-[_159px] max-w-[inherit] px-[48px] py-[80px] relative w-full">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="col-1 content-stretch flex flex-col gap-[31.125px] items-start justify-self-stretch relative row-1 self-start shrink-0">
            <div className="flex flex-col font-['Newsreader:Extra_Light',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e1b17] text-[30px] w-full">
              <p className="leading-[36px]">AHA Software</p>
            </div>
            <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[22.75px] relative shrink-0 text-[14px] text-[rgba(30,27,23,0.6)] tracking-[0.35px] w-full max-w-[320px]">
              <p className="mb-0">Architectural alignment for the</p>
              <p className="mb-0">modern enterprise. We build the</p>
              <p className="mb-0">systems that build the future with</p>
              <p>precision structuralism.</p>
            </div>
          </motion.div>
          {[
            { title: 'Capabilities', links: ['Software Consulting', 'DevOps Architecture', 'Strategic Advisory'] },
            { title: 'Navigation', links: ['Editorial', 'Insights', 'Sitemap'] },
            { title: 'Connect', links: ['Newsletter', 'Privacy Policy', 'Security Architecture'] }
          ].map((section, sectionIndex) => (
            <motion.div key={sectionIndex} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: sectionIndex * 0.1 }} className={`col-${sectionIndex + 2} content-stretch flex flex-col gap-[24px] items-start justify-self-stretch pb-[23px] relative row-1 self-start shrink-0`}>
              <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#005c55] text-[14px] tracking-[0.35px] uppercase w-full">
                <p className="leading-[20px]">{section.title}</p>
              </div>
              <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
                {section.links.map((link, linkIndex) => (
                  <motion.div key={linkIndex} whileHover={{ x: 4 }} transition={{ duration: 0.2 }} className="content-stretch flex flex-col items-start opacity-60 relative shrink-0 w-full cursor-pointer">
                    <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1e1b17] text-[14px] tracking-[0.35px] uppercase w-full">
                      <p className="leading-[20px]">{link}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="relative shrink-0 w-full">
        <div aria-hidden="true" className="absolute border-[rgba(209,201,192,0.1)] border-solid border-t inset-0 pointer-events-none" />
        <div className="content-stretch flex flex-col items-start pb-[64px] pt-[41px] px-[48px] relative w-full">
          <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[10px] text-[rgba(30,27,23,0.4)] tracking-[2px] uppercase w-full">
            <p className="leading-[15px]">© 2024 AHA Editorial Software. Designed for the Digital Curator. Precision Structuralism in Digital Engineering.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="bg-[#fff8f2] relative min-h-screen">
      <SharedNav links={homeNavLinks} ctaLabel="Work Together" ctaPath="/" />
      <div className="relative">
        <HeroSection />
        <PillarsSection />
        <SpecKitSection />
        <InsightsSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
}
