import Image from 'next/image'
import Button from '@/components/ui/Button'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'

export default function HeroSection() {
  return (
    <header className="relative pt-16 pb-24 md:pt-32 md:pb-40 px-6 md:px-12 overflow-hidden">
      <div className="absolute inset-0 editorial-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <AnimateOnScroll className="lg:col-span-8" animation="fade-up">
          <span className="inline-block px-4 py-1.5 bg-surface-container-high text-primary text-[11px] uppercase tracking-[0.25em] font-extrabold mb-8 rounded-full">
            Strategic Alignment
          </span>
          <h1 className="font-headline text-6xl md:text-8xl lg:text-9xl font-medium text-on-background leading-[0.95] tracking-tighter mb-10">
            Radical Change for the{' '}
            <span className="italic font-light text-primary">Post-AI</span>{' '}
            Organization.
          </h1>
          <p className="font-body text-xl md:text-2xl text-on-background/70 max-w-2xl leading-relaxed mb-12">
            We empower developers and align teams&mdash;from product to
            DevOps&mdash;to eliminate costly rework using the GitHub Spec Kit
            methodology.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <Button variant="primary" size="lg" href="/contact">
              Start the Transformation
            </Button>
            <Button variant="outline" size="lg" href="#services">
              Our Methodology
            </Button>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll
          className="lg:col-span-4 relative hidden lg:block"
          animation="slide-left"
          delay={200}
        >
          <div className="aspect-[3/4] bg-surface-container overflow-hidden relative shadow-[-40px_40px_80px_rgba(0,0,0,0.1)]">
            <Image
              src="/assets/hero-abstract.png"
              alt="Technical precision abstract"
              fill
              className="object-cover grayscale opacity-90 contrast-110"
              priority
            />
          </div>
          <div className="absolute -bottom-10 -left-10 bg-background p-10 shadow-editorial max-w-xs border-l-[6px] border-primary">
            <p className="font-headline text-3xl italic text-primary leading-tight font-light">
              &ldquo;The architect must be the builder.&rdquo;
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </header>
  )
}
