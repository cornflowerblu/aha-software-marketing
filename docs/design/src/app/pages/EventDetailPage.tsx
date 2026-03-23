import { motion, useInView, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import svgPaths from '../../imports/svg-7uly5n56qu';
import imgEventHero from 'figma:asset/faca54b832d7a7b2faf08b8eaaddaebf02e6a71a.png';
import imgSpeaker from 'figma:asset/efe91c42dbf2404d687a663b39ff772889154044.png';
import { SharedNav } from '../components/SharedNav';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
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
  { label: 'Editorial', path: '/editorial' },
  { label: 'Events', path: '/events' },
  { label: 'Premium', path: '/premium' },
];

function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  return (
    <div ref={ref} className="pt-[120px] pb-[80px] px-[48px] max-w-[1440px] mx-auto w-full relative overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 opacity-8 pointer-events-none" style={{ backgroundImage: 'radial-gradient(ellipse at 50% 50%, rgba(15,118,110,0.08) 0%, transparent 70%)' }} />

      <div className="gap-x-[64px] gap-y-[48px] grid grid-cols-[repeat(12,minmax(0,1fr))] relative w-full">
        {/* Left: headline + meta */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="col-[1/span_7] flex flex-col gap-[16px] items-start self-end"
        >
          <motion.div variants={fadeInUp}>
            <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal text-[#7f4025] text-[12px] tracking-[2.4px] uppercase leading-[16px]">
              Exclusive Workshop
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="flex flex-col font-['Newsreader:Extra_Light',sans-serif] text-[#1e1b17] text-[72px] tracking-[-3.6px]">
            <p className="leading-[72px] mb-0">The Future</p>
            <p className="mb-0">
              <span className="leading-[72px]">is </span>
              <span className="font-['Newsreader:Extra_Light_Italic',sans-serif] text-[#005c55]">Yesterday,</span>
              <span className="leading-[72px]"> Teams</span>
            </p>
            <p className="leading-[72px] mb-0">Who Adapt will</p>
            <p className="leading-[72px]">Thrive.</p>
          </motion.div>

          <motion.div variants={fadeInUp} className="flex gap-[32px] items-center pt-[16px] flex-wrap">
            {[
              { icon: svgPaths.p2a946800, text: 'October 24, 2024', viewBox: '0 0 18 20', w: 18, h: 20 },
              { icon: svgPaths.p256e1340, text: '2:00 PM — 4:30 PM EST', viewBox: '0 0 20 20', w: 20, h: 20 },
              { icon: svgPaths.p33083280, text: 'Virtual Gallery Studio', viewBox: '0 0 14 20', w: 14, h: 20 },
            ].map((item, i) => (
              <div key={i} className="flex gap-[12px] items-center">
                <div style={{ width: item.w, height: item.h }} className="shrink-0 relative">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox={item.viewBox}>
                    <path d={item.icon} fill="#005C55" />
                  </svg>
                </div>
                <span className="font-['Manrope:Regular',sans-serif] text-[#3e4947] text-[16px]">{item.text}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right: capacity card */}
        <AnimatedSection delay={0.2} className="col-[8/span_5] self-end">
          <div className="bg-[#faf2eb] rounded-[8px] p-[33px] relative" style={{ border: '1px solid rgba(189,201,198,0.15)' }}>
            <div className="flex items-center justify-between mb-[24px]">
              <div>
                <div className="font-['Manrope:Regular',sans-serif] text-[#6e7977] text-[12px] tracking-[1.2px] uppercase mb-[4px]">Capacity</div>
                <div className="font-['Newsreader:Extra_Light',sans-serif] text-[#1e1b17] text-[20px]">Limited to 500 Curators</div>
              </div>
              <div className="text-right">
                <div className="font-['Manrope:Regular',sans-serif] text-[#6e7977] text-[12px] tracking-[1.2px] uppercase mb-[4px]">Remaining</div>
                <div className="font-['Newsreader:Extra_Light',sans-serif] text-[#7f4025] text-[20px]">142 Seats</div>
              </div>
            </div>
            <div className="bg-[#e8e1db] h-[4px] rounded-[12px] overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '72%' }}
                transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="bg-[#005c55] h-full rounded-[12px]"
              />
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}

function FeaturedImage() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

  return (
    <div ref={ref} className="px-[48px] max-w-[1440px] mx-auto w-full mb-[80px]">
      <AnimatedSection>
        <div className="rounded-[8px] overflow-hidden relative h-[460px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.15)]">
          <motion.img
            alt="Event hero"
            className="absolute w-full h-[133%] object-cover top-[-16.67%] left-0 max-w-none"
            src={imgEventHero}
            style={{ y: imgY }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(30,27,23,0.35)] to-transparent" />
        </div>
      </AnimatedSection>
    </div>
  );
}

function ContentSection() {
  return (
    <div className="px-[48px] max-w-[1440px] mx-auto w-full pb-[128px]">
      <div className="gap-x-[80px] grid grid-cols-[repeat(12,minmax(0,1fr))]">

        {/* Left: description */}
        <div className="col-[1/span_7] flex flex-col gap-[0px]">
          <AnimatedSection>
            <h2 className="font-['Newsreader:Extra_Light_Italic',sans-serif] text-[#1e1b17] text-[30px] leading-[36px] mb-[32px] not-italic">
              About the Session
            </h2>

            <div className="font-['Manrope:Regular',sans-serif] text-[#3e4947] text-[18px] leading-[32.4px] mb-[24px]">
              <p className="mb-0">As digital landscapes become increasingly saturated, the role of the editor has</p>
              <p className="mb-0">evolved from simple gatekeeping to sophisticated curation. This workshop</p>
              <p className="mb-0">explores how AHA Editorial's new suite of neural tools empowers human</p>
              <p>creators to maintain their voice while scaling their output.</p>
            </div>

            <div className="font-['Manrope:Regular',sans-serif] text-[#3e4947] text-[18px] leading-[32.4px] mb-[32px]">
              <p className="mb-0">We will dive deep into the philosophy of "Informed Automation"—a framework</p>
              <p className="mb-0">where technology serves the intent of the curator, rather than replacing it.</p>
              <p className="mb-0">Participants will gain first-hand insights into our upcoming 'Lexical Flow' engine</p>
              <p>and its implications for long-form narrative structure.</p>
            </div>

            <div className="pl-[35px] relative mb-[32px]">
              <div aria-hidden="true" className="absolute border-[#005c55] border-l-[3px] border-solid inset-0 pointer-events-none" />
              <div className="font-['Manrope:Regular',sans-serif] text-[#005c55] text-[16px] leading-[24px]">
                <p className="mb-0">"The next decade of media won't be won by those who produce the most content,</p>
                <p>but by those who curate the most meaning."</p>
              </div>
            </div>

            <div className="font-['Manrope:Regular',sans-serif] text-[#3e4947] text-[18px] leading-[32.4px] mb-[48px]">
              <p className="mb-0">Attendees will receive early access to the AHA Q4 Beta release and a</p>
              <p>comprehensive workbook on digital-first editorial standards.</p>
            </div>
          </AnimatedSection>

          {/* Coming soon recording */}
          <AnimatedSection delay={0.1}>
            <div className="bg-[#faf2eb] rounded-[8px] p-[40px]">
              <h3 className="font-['Newsreader:Extra_Light',sans-serif] text-[#1e1b17] text-[24px] leading-[32px] mb-[24px]">
                Coming Soon: Post-Event Recording
              </h3>
              <div className="bg-[#e0d9d2] rounded-[4px] flex items-center justify-center py-[80px] relative"
                style={{ border: '1px dashed #6e7977' }}>
                <div className="flex flex-col items-center gap-[16px]">
                  <div className="h-[33px] w-[28.5px] relative opacity-60">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28.5 33">
                      <path d={svgPaths.p4cca00} fill="#6E7977" />
                    </svg>
                  </div>
                  <div className="font-['Manrope:Regular',sans-serif] text-[#6e7977] text-[14px] tracking-[1.4px] uppercase text-center">
                    Available 24h after live stream
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Right: registration sidebar */}
        <div className="col-[8/span_5] flex flex-col gap-[32px] self-start">
          <AnimatedSection delay={0.2}>
            {/* Registration form */}
            <div className="bg-white rounded-[8px] p-[41px] shadow-[0px_20px_40px_0px_rgba(30,27,23,0.05)]"
              style={{ border: '1px solid rgba(189,201,198,0.15)' }}>
              <h3 className="font-['Newsreader:Extra_Light',sans-serif] text-[#1e1b17] text-[24px] leading-[32px] mb-[8px]">
                Secure Your Space
              </h3>
              <p className="font-['Manrope:Regular',sans-serif] text-[#3e4947] text-[16px] leading-[24px] mb-[24px]">
                Registration closes on October 20th, 2024.
              </p>

              <div className="flex flex-col gap-[24px]">
                {[
                  { label: 'Full Name', placeholder: 'Julianne Smith' },
                  { label: 'Professional Email', placeholder: 'j.smith@editorial.com' },
                  { label: 'Organization', placeholder: 'Global Media Group' },
                ].map((field, i) => (
                  <div key={i}>
                    <div className="font-['Manrope:Regular',sans-serif] text-[#6e7977] text-[12px] tracking-[1.2px] uppercase mb-[8px]">
                      {field.label}
                    </div>
                    <div className="relative bg-[#f4ede6] px-[17px] pt-[14px] pb-[15px]" style={{ borderBottom: '2px solid #d1c9c0' }}>
                      <span className="font-['Newsreader:Extra_Light',sans-serif] text-[#6b7280] text-[16px]">
                        {field.placeholder}
                      </span>
                    </div>
                  </div>
                ))}

                {/* Register CTA */}
                <motion.div
                  whileHover={{ scale: 1.02, boxShadow: '0 8px 24px rgba(0,92,85,0.35)' }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="flex gap-[8px] items-center justify-center py-[16px] rounded-[6px] relative overflow-hidden cursor-pointer"
                  style={{ background: 'linear-gradient(135deg, #005c55 0%, #0f766e 100%)' }}
                >
                  <motion.div
                    className="absolute inset-0 pointer-events-none"
                    animate={{ x: ['-100%', '200%'] }}
                    transition={{ duration: 1.8, repeat: Infinity, repeatDelay: 5, ease: 'easeInOut' }}
                    style={{ background: 'linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.18) 50%, transparent 70%)' }}
                  />
                  <span className="font-['Manrope:Bold',sans-serif] text-white text-[16px] tracking-[0.4px]">Register Now</span>
                  <div className="relative shrink-0 size-[12px]">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                      <path d={svgPaths.p304eaa0} fill="white" />
                    </svg>
                  </div>
                </motion.div>

                {/* Add to Calendar */}
                <motion.div
                  whileHover={{ backgroundColor: '#e0d9d2' }}
                  transition={{ duration: 0.2 }}
                  className="bg-[#eee7e0] flex gap-[8px] items-center justify-center py-[16px] rounded-[6px] cursor-pointer"
                >
                  <div className="relative shrink-0" style={{ width: 14.25, height: 15 }}>
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.25 15">
                      <path d={svgPaths.p3b0b6080} fill="#1E1B17" />
                    </svg>
                  </div>
                  <span className="font-['Manrope:Bold',sans-serif] text-[#1e1b17] text-[16px] tracking-[0.4px]">Add to Calendar</span>
                </motion.div>

                <p className="font-['Manrope:Regular',sans-serif] text-[#6e7977] text-[12px] text-center leading-[19.5px]">
                  By registering, you agree to AHA's{' '}
                  <span className="underline">Privacy Policy</span>
                  {' '}and will receive event-related communications.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Speaker card */}
          <AnimatedSection delay={0.3}>
            <div className="bg-[#faf2eb] rounded-[8px] p-[32px]">
              <div className="font-['Manrope:Regular',sans-serif] text-[#6e7977] text-[12px] tracking-[1.2px] uppercase mb-[24px]">
                Hosted By
              </div>
              <div className="flex gap-[16px] items-center">
                <div className="rounded-[12px] overflow-hidden size-[64px] bg-white relative shrink-0">
                  <div className="absolute inset-0 overflow-hidden">
                    <img alt="Elena Vance" className="absolute left-0 max-w-none size-full top-0 object-cover" src={imgSpeaker} />
                  </div>
                  <div className="absolute bg-white inset-0 mix-blend-saturation" />
                </div>
                <div>
                  <div className="font-['Newsreader:Extra_Light',sans-serif] text-[#1e1b17] text-[18px] leading-[28px]">Elena Vance</div>
                  <div className="font-['Manrope:Regular',sans-serif] text-[#3e4947] text-[14px] leading-[20px]">Chief Content Officer, AHA</div>
                </div>
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
    <div className="bg-[#f5ede4] border-t border-[rgba(209,201,192,0.3)]">
      <div className="max-w-[1440px] mx-auto px-[48px] py-[64px]">
        <div className="grid grid-cols-[repeat(4,minmax(0,1fr))] gap-[48px]">
          <div>
            <div className="font-['Newsreader:Extra_Light',sans-serif] text-[#1e1b17] text-[24px] leading-[32px] mb-[16px]">AHA</div>
            <p className="font-['Manrope:Regular',sans-serif] text-[rgba(30,27,23,0.6)] text-[14px] leading-[22.75px]">
              Empowering the next generation of digital curators with intentional tools and editorial precision.
            </p>
          </div>
          {[
            { title: 'Resources', links: ['Sitemap', 'Privacy Policy', 'Terms of Service'] },
            { title: 'Connect', links: ['Newsletter', 'Contact'] },
            { title: 'Newsletter', links: ['Your Email →'] },
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
            © 2024 AHA Editorial Software. Designed for the Digital Curator. Precision Structuralism in Digital Engineering.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function EventDetailPage() {
  return (
    <div className="bg-[#fff8f2] relative min-h-screen">
      <SharedNav
        logo="AHA Editorial"
        links={navLinks}
        ctaLabel="Subscribe"
        ctaPath="/premium"
      />
      <div className="relative pt-0">
        <HeroSection />
        <FeaturedImage />
        <ContentSection />
        <Footer />
      </div>
    </div>
  );
}
