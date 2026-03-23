import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import svgPaths from '../../imports/svg-fh6v3b2ao';
import imgFeatured from 'figma:asset/fd9d75a7851afca77762f3ffd9361f0741c5e383.png';
import imgAuthorJulian from 'figma:asset/bf90ecd9a949d7c412b1e5b4ab89499529e09e1c.png';
import imgArticle1 from 'figma:asset/7314a6d5a47bb3b573971bcfbb730b72e30ad770.png';
import imgArticle2 from 'figma:asset/80360b8b46e10e4072d216fdda1eebde959b2332.png';
import imgArticle3 from 'figma:asset/15f1048ab6d37f98b1bf2aca67de601ccce41da4.png';
import imgArticle4 from 'figma:asset/a749cc9149ce9525948b0e541cc3489296d27da8.png';
import imgArticle5 from 'figma:asset/1edc6aedd46549ab8a4a0222f6d9133e71ee00dc.png';
import imgAuthorElena from 'figma:asset/3f6508aa93901cbf116ed0097516ec8ae5e7c165.png';
import imgAuthorMarcus from 'figma:asset/3317dc0dab5c47894ed0f198283af4273f828d83.png';
import imgAuthorSarah from 'figma:asset/6893de972c3822bce0cf2da745e0c38cdf9a9309.png';
import imgAuthorSarah2 from 'figma:asset/45d3adb62a7f49483549e4c2f63a22cb95587c0c.png';
import { SharedNav } from '../components/SharedNav';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

function AnimatedSection({ children, className = '', delay = 0, style }: { children: React.ReactNode; className?: string; delay?: number; style?: React.CSSProperties }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div ref={ref} initial="hidden" animate={isInView ? 'visible' : 'hidden'} variants={fadeInUp} transition={{ delay }} className={className} style={style}>
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

const categories = ['All Insights', 'Strategy', 'Digital Craft', 'Premium', 'Interviews'];

function HeroSection({ activeCategory, setActiveCategory }: { activeCategory: string; setActiveCategory: (c: string) => void }) {
  return (
    <div className="bg-[#fff8f2] pt-[120px] pb-[64px] px-[48px] max-w-[1440px] mx-auto w-full">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="flex flex-col items-center gap-[24px]"
      >
        <motion.div variants={fadeInUp} className="font-['Manrope:Regular',sans-serif] text-[#7f4025] text-[12px] tracking-[2.4px] uppercase text-center">
          The Digital Curator
        </motion.div>

        <motion.div variants={fadeInUp} className="font-['Newsreader:Extra_Light',sans-serif] text-[#1e1b17] text-[72px] tracking-[-3.6px] text-center max-w-[900px]">
          <p className="leading-[72px] mb-0">
            <span>Perspectives on the </span>
            <span className="font-['Newsreader:Extra_Light_Italic',sans-serif]">Modern</span>
          </p>
          <p className="leading-[72px]">
            <span className="font-['Newsreader:Extra_Light_Italic',sans-serif]">Workforce</span>
            <span>.</span>
          </p>
        </motion.div>

        <motion.div variants={fadeInUp} className="font-['Manrope:Regular',sans-serif] text-[#3e4947] text-[20px] leading-[32.5px] text-center max-w-[820px] opacity-90">
          <p className="mb-0">Exploring the intersection of technology, strategy, and premium editorial craftsmanship.</p>
          <p>Dedicated to those who curate experiences.</p>
        </motion.div>

        {/* Category filters */}
        <motion.div variants={fadeInUp} className="flex gap-[12px] items-center justify-center flex-wrap pt-[8px]">
          {categories.map((cat, i) => {
            const isActive = activeCategory === cat;
            return (
              <motion.button
                key={i}
                onClick={() => setActiveCategory(cat)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`flex flex-col items-center justify-center px-[24px] py-[8px] rounded-[12px] cursor-pointer border-none outline-none transition-all ${
                  isActive ? 'text-white' : 'bg-[#c5e6e1] text-[#4a6864]'
                }`}
                style={isActive ? { background: 'linear-gradient(135deg, #005c55 0%, #0f766e 100%)' } : {}}
              >
                <span className={`font-['Manrope:Bold',sans-serif] text-[14px] ${isActive ? 'text-white' : ''}`}>{cat}</span>
              </motion.button>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
}

function FeaturedStory() {
  return (
    <div className="px-[48px] max-w-[1440px] mx-auto w-full mb-[80px]">
      <AnimatedSection>
        <motion.div
          whileHover={{ boxShadow: '0 20px 40px rgba(30,27,23,0.08)', transition: { duration: 0.3 } }}
          className="bg-[#faf2eb] rounded-[8px] overflow-hidden"
        >
          <div className="gap-x-[48px] grid grid-cols-[repeat(12,minmax(0,1fr))] items-center px-[48px] pt-[32px] pb-[48px]">
            {/* Image */}
            <motion.div
              whileHover={{ scale: 1.01, transition: { duration: 0.4 } }}
              className="col-[1/span_7] aspect-video rounded-[4px] overflow-hidden relative"
            >
              <img
                alt=""
                className="absolute h-[177.79%] left-0 max-w-none top-[-38.89%] w-full object-cover"
                src={imgFeatured}
              />
            </motion.div>

            {/* Text */}
            <div className="col-[8/span_5] relative">
              <div className="flex gap-[12px] items-center mb-[24px]">
                <div className="px-[12px] py-[4px] rounded-[12px] flex gap-[4px] items-center" style={{ background: 'linear-gradient(135deg, #005c55 0%, #0f766e 100%)' }}>
                  <div className="size-[10px] relative">
                    <svg className="absolute block size-full" fill="none" viewBox="0 0 10 9.5">
                      <path d={svgPaths.p197ced20} fill="#fff" />
                    </svg>
                  </div>
                  <span className="font-['Manrope:Bold',sans-serif] text-white text-[10px] tracking-[1px] uppercase">Premium</span>
                </div>
                <span className="font-['Manrope:Regular',sans-serif] text-[rgba(62,73,71,0.6)] text-[12px] tracking-[1.2px] uppercase">12 Min Read</span>
              </div>

              <h2 className="font-['Newsreader:Extra_Light',sans-serif] text-[#1e1b17] text-[36px] leading-[45px] mb-[24px]">
                The Resurgence of Long-Form: Why Depth is the New Currency.
              </h2>

              <p className="font-['Manrope:Regular',sans-serif] text-[#3e4947] text-[18px] leading-[29.25px] mb-[32px]">
                In an era of fleeting content, readers are gravitating back toward substance. We analyze the metrics behind high-engagement editorial strategies.
              </p>

              <div className="flex gap-[16px] items-center">
                <div className="bg-[#e8e1db] rounded-[12px] size-[48px] overflow-hidden relative">
                  <img alt="" className="absolute left-0 max-w-none size-full top-0 object-cover" src={imgAuthorJulian} />
                </div>
                <div>
                  <div className="font-['Manrope:Bold',sans-serif] text-[#1e1b17] text-[14px]">Julian Sterling</div>
                  <div className="font-['Manrope:Regular',sans-serif] text-[rgba(62,73,71,0.7)] text-[12px]">April 14, 2024</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatedSection>
    </div>
  );
}

function ArticleGrid() {
  const articles = [
    {
      img: imgArticle1,
      category: 'Strategy',
      title: 'Semantic Systems in Modern UI Design',
      desc: 'How taxonomy and structure influence user trust in complex software environments.',
      author: 'Elena Vance',
      authorImg: imgAuthorElena,
      date: 'Mar 28',
    },
    {
      img: imgArticle2,
      category: 'Insights',
      title: 'The Art of the Digital Monograph',
      desc: 'Translating traditional publishing aesthetics into highly functional SaaS marketing engines.',
      author: 'Marcus Thorne',
      authorImg: imgAuthorMarcus,
      date: 'Mar 22',
    },
    {
      img: imgArticle3,
      category: 'Digital Craft',
      title: 'Typography as Interface',
      desc: 'Why the choice of serif versus sans-serif defines the subconscious authority of your brand.',
      author: 'Sarah Jenkins',
      authorImg: imgAuthorSarah,
      date: 'Mar 15',
    },
  ];

  return (
    <div className="px-[48px] max-w-[1440px] mx-auto w-full mb-[80px]">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={staggerContainer}
        className="grid grid-cols-[repeat(3,minmax(0,1fr))] gap-[40px]"
      >
        {articles.map((article, i) => (
          <motion.div
            key={i}
            variants={fadeInUp}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="relative cursor-pointer h-[502px]"
          >
            {/* Image */}
            <div className="absolute left-0 right-0 top-0 pb-[24px] rounded-[4px] overflow-hidden">
              <div className="aspect-[4/3] relative overflow-hidden rounded-[4px]">
                <motion.img
                  alt=""
                  className="absolute h-[133.34%] left-0 max-w-none top-[-16.67%] w-full object-cover"
                  src={article.img}
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.5 }}
                />
                {/* Category badge */}
                <div className="absolute left-[16px] top-[12px] backdrop-blur-[2px] bg-[rgba(255,248,242,0.9)] px-[12px] py-[3.5px] rounded-[12px]">
                  <span className="font-['Manrope:Bold',sans-serif] text-[#005c55] text-[10px] tracking-[1px] uppercase">{article.category}</span>
                </div>
              </div>
            </div>

            {/* Text content */}
            <div className="absolute left-0 right-0 top-[296px] flex flex-col gap-[14px]">
              <h3 className="font-['Newsreader:Extra_Light',sans-serif] text-[#1e1b17] text-[24px] leading-[32px]">{article.title}</h3>
              <p className="font-['Manrope:Regular',sans-serif] text-[#3e4947] text-[14px] leading-[22.75px]">{article.desc}</p>
            </div>

            {/* Author */}
            <div className="absolute left-0 right-0 top-[445px] flex items-center justify-between pt-[25px]"
              style={{ borderTop: '1px solid rgba(189,201,198,0.15)' }}>
              <div className="flex gap-[12px] items-center">
                <div className="bg-[#eee7e0] rounded-[12px] size-[32px] overflow-hidden relative">
                  <img alt="" className="absolute left-0 max-w-none size-full top-0 object-cover" src={article.authorImg} />
                </div>
                <span className="font-['Manrope:Bold',sans-serif] text-[#1e1b17] text-[12px]">{article.author}</span>
              </div>
              <span className="font-['Manrope:Regular',sans-serif] text-[rgba(62,73,71,0.6)] text-[10px] uppercase">{article.date}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

function NewsletterAndMore() {
  const moreArticles = [
    {
      img: imgArticle4,
      category: 'Analysis',
      title: 'The ROI of Editorial Design',
      desc: 'Measuring the intangible: How beauty and whitespace drive conversion in high-ticket software.',
      author: 'Julian Sterling',
      authorImg: imgAuthorJulian,
      date: 'Mar 10',
    },
    {
      img: imgArticle5,
      category: 'Interview',
      title: 'Collaborative Curation',
      desc: 'An interview with the founders of Source Meso on building lasting editorial magazines.',
      author: 'Sarah Jenkins',
      authorImg: imgAuthorSarah2,
      date: 'Mar 5',
    },
  ];

  return (
    <div className="px-[48px] max-w-[1440px] mx-auto w-full mb-[128px]">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={staggerContainer}
        className="grid grid-cols-[repeat(3,minmax(0,1fr))] gap-[40px]"
      >
        {/* Article 4 */}
        <motion.div
          variants={fadeInUp}
          whileHover={{ y: -8, transition: { duration: 0.3 } }}
          className="relative cursor-pointer h-[470px]"
        >
          <div className="absolute left-0 right-0 top-0 pb-[24px] rounded-[4px] overflow-hidden">
            <div className="aspect-[4/3] relative overflow-hidden rounded-[4px]">
              <motion.img
                alt=""
                className="absolute h-[133.34%] left-0 max-w-none top-[-16.67%] w-full object-cover"
                src={moreArticles[0].img}
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.5 }}
              />
              <div className="absolute left-[16px] top-[12px] backdrop-blur-[2px] bg-[rgba(255,248,242,0.9)] px-[12px] py-[3.5px] rounded-[12px]">
                <span className="font-['Manrope:Bold',sans-serif] text-[#005c55] text-[10px] tracking-[1px] uppercase">{moreArticles[0].category}</span>
              </div>
            </div>
          </div>
          <div className="absolute left-0 right-0 top-[264px] flex flex-col gap-[14px]">
            <h3 className="font-['Newsreader:Extra_Light',sans-serif] text-[#1e1b17] text-[24px] leading-[32px]">{moreArticles[0].title}</h3>
            <p className="font-['Manrope:Regular',sans-serif] text-[#3e4947] text-[14px] leading-[22.75px]">{moreArticles[0].desc}</p>
          </div>
          <div className="absolute left-0 right-0 top-[413px] flex items-center justify-between pt-[25px]"
            style={{ borderTop: '1px solid rgba(189,201,198,0.15)' }}>
            <div className="flex gap-[12px] items-center">
              <div className="bg-[#eee7e0] rounded-[12px] size-[32px] overflow-hidden relative">
                <img alt="" className="absolute left-0 max-w-none size-full top-0 object-cover" src={moreArticles[0].authorImg} />
              </div>
              <span className="font-['Manrope:Bold',sans-serif] text-[#1e1b17] text-[12px]">{moreArticles[0].author}</span>
            </div>
            <span className="font-['Manrope:Regular',sans-serif] text-[rgba(62,73,71,0.6)] text-[10px] uppercase">{moreArticles[0].date}</span>
          </div>
        </motion.div>

        {/* Newsletter CTA */}
        <AnimatedSection delay={0.15} className="relative overflow-hidden rounded-[8px]"
          style={{ background: 'linear-gradient(135deg, #005c55 0%, #0f766e 100%)' }}>
          <motion.div
            className="absolute inset-0 pointer-events-none"
            animate={{ x: ['-100%', '200%'] }}
            transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 6, ease: 'easeInOut' }}
            style={{ background: 'linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.07) 50%, transparent 70%)' }}
          />
          <div className="absolute right-[-61px] top-[-60px] opacity-10 pointer-events-none">
            <div className="text-[#a3faef] text-[240px] leading-[240px] font-thin select-none">✉</div>
          </div>
          <div className="relative z-10 p-[48px] flex flex-col justify-between h-full min-h-[400px]">
            <div>
              <div className="font-['Manrope:Regular',sans-serif] text-[#a3faef] text-[12px] tracking-[2.4px] uppercase opacity-80 mb-[16px]">Weekly Curator</div>
              <h3 className="font-['Newsreader:Extra_Light',sans-serif] text-[#a3faef] text-[36px] leading-[45px] mb-[24px]">
                Join 25,000+ digital architects.
              </h3>
              <p className="font-['Manrope:Regular',sans-serif] text-[rgba(255,255,255,0.7)] text-[16px] leading-[24px] mb-[32px]">
                The best of AHA Editorial, delivered to your inbox every Thursday morning. No noise, just signal.
              </p>
            </div>
            <div className="flex gap-[0px]">
              <div className="flex-1 bg-[rgba(255,255,255,0.12)] px-[16px] py-[12px] rounded-l-[4px]"
                style={{ border: '1px solid rgba(255,255,255,0.2)' }}>
                <span className="font-['Manrope:Regular',sans-serif] text-[rgba(255,255,255,0.5)] text-[14px]">Email address</span>
              </div>
              <motion.div
                whileHover={{ backgroundColor: 'rgba(255,255,255,0.2)' }}
                className="bg-[rgba(255,255,255,0.15)] px-[20px] py-[12px] rounded-r-[4px] cursor-pointer flex items-center"
                style={{ border: '1px solid rgba(255,255,255,0.2)', borderLeft: 'none' }}
              >
                <span className="font-['Manrope:Bold',sans-serif] text-white text-[14px]">Join</span>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>

        {/* Article 5 */}
        <motion.div
          variants={fadeInUp}
          whileHover={{ y: -8, transition: { duration: 0.3 } }}
          className="relative cursor-pointer h-[470px]"
        >
          <div className="absolute left-0 right-0 top-0 pb-[24px] rounded-[4px] overflow-hidden">
            <div className="aspect-[4/3] relative overflow-hidden rounded-[4px]">
              <motion.img
                alt=""
                className="absolute h-[133.34%] left-0 max-w-none top-[-16.67%] w-full object-cover"
                src={moreArticles[1].img}
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.5 }}
              />
              <div className="absolute left-[16px] top-[12px] backdrop-blur-[2px] bg-[rgba(255,248,242,0.9)] px-[12px] py-[3.5px] rounded-[12px]">
                <span className="font-['Manrope:Bold',sans-serif] text-[#005c55] text-[10px] tracking-[1px] uppercase">{moreArticles[1].category}</span>
              </div>
            </div>
          </div>
          <div className="absolute left-0 right-0 top-[264px] flex flex-col gap-[14px]">
            <h3 className="font-['Newsreader:Extra_Light',sans-serif] text-[#1e1b17] text-[24px] leading-[32px]">{moreArticles[1].title}</h3>
            <p className="font-['Manrope:Regular',sans-serif] text-[#3e4947] text-[14px] leading-[22.75px]">{moreArticles[1].desc}</p>
          </div>
          <div className="absolute left-0 right-0 top-[413px] flex items-center justify-between pt-[25px]"
            style={{ borderTop: '1px solid rgba(189,201,198,0.15)' }}>
            <div className="flex gap-[12px] items-center">
              <div className="bg-[#eee7e0] rounded-[12px] size-[32px] overflow-hidden relative">
                <img alt="" className="absolute left-0 max-w-none size-full top-0 object-cover" src={moreArticles[1].authorImg} />
              </div>
              <span className="font-['Manrope:Bold',sans-serif] text-[#1e1b17] text-[12px]">{moreArticles[1].author}</span>
            </div>
            <span className="font-['Manrope:Regular',sans-serif] text-[rgba(62,73,71,0.6)] text-[10px] uppercase">{moreArticles[1].date}</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Pagination */}
      <AnimatedSection className="flex items-center justify-between mt-[64px] pt-[32px]"
        style={{ borderTop: '1px solid rgba(209,201,192,0.3)' }}>
        <span className="font-['Manrope:Regular',sans-serif] text-[#3e4947] text-[12px] tracking-[1.2px] uppercase opacity-60">
          8 articles · 1 of 3 pages
        </span>
        <div className="flex gap-[8px] items-center">
          {[1, 2, 3].map(n => (
            <motion.div
              key={n}
              whileHover={{ scale: 1.1 }}
              className={`size-[32px] rounded-[4px] flex items-center justify-center cursor-pointer font-['Manrope:Bold',sans-serif] text-[14px] ${n === 1 ? 'text-white' : 'text-[#3e4947]'}`}
              style={n === 1 ? { background: 'linear-gradient(135deg, #005c55 0%, #0f766e 100%)' } : { border: '1px solid rgba(209,201,192,0.3)' }}
            >
              {n}
            </motion.div>
          ))}
          <motion.div whileHover={{ x: 4 }} className="ml-[8px] font-['Manrope:Regular',sans-serif] text-[#005c55] text-[14px] tracking-[1px] uppercase cursor-pointer">
            Next →
          </motion.div>
        </div>
      </AnimatedSection>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#f5ede4] border-t border-[rgba(209,201,192,0.3)]">
      <div className="max-w-[1440px] mx-auto px-[48px] py-[64px]">
        <div className="grid grid-cols-[repeat(4,minmax(0,1fr))] gap-[48px]">
          <div>
            <div className="font-['Newsreader:Extra_Light',sans-serif] text-[#1e1b17] text-[30px] leading-[36px] mb-[16px]">AHA</div>
            <p className="font-['Manrope:Regular',sans-serif] text-[rgba(30,27,23,0.6)] text-[14px] leading-[22.75px]">
              © 2024 AHA Editorial Software. Designed for the Digital Curator.
            </p>
          </div>
          {[
            { title: 'Platform', links: ['Sitemap', 'Newsletter'] },
            { title: 'Legal', links: ['Privacy Policy', 'Terms of Service'] },
            { title: 'Contact', links: ['Support', 'Press'] },
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
      </div>
    </div>
  );
}

export default function BlogListingPage() {
  const [activeCategory, setActiveCategory] = useState('All Insights');

  return (
    <div className="bg-[#fff8f2] relative min-h-screen">
      <SharedNav
        logo="AHA Editorial"
        links={navLinks}
        ctaLabel="Subscribe"
        ctaPath="/premium"
      />
      <div className="relative">
        <HeroSection activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
        <FeaturedStory />
        <ArticleGrid />
        <NewsletterAndMore />
        <Footer />
      </div>
    </div>
  );
}