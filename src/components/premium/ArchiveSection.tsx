'use client'

import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import Image from 'next/image'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.13, delayChildren: 0.05 },
  },
}

interface ArchiveRecording {
  title: string
  duration: string
  date: string
  image?: string
}

export default function ArchiveSection({
  recordings,
}: {
  recordings: ArchiveRecording[]
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="max-w-[1440px] mx-auto px-6 md:px-12 mb-32">
      {/* Heading with decorative lines */}
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={fadeInUp}
        className="flex items-center gap-4 mb-12"
      >
        <div className="h-px bg-outline-variant/30 flex-grow" />
        <h2 className="font-headline text-3xl italic px-4 tracking-tighter text-on-background">
          From the Archive
        </h2>
        <div className="h-px bg-outline-variant/30 flex-grow" />
      </motion.div>

      {/* 4/8 asymmetric grid */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={staggerContainer}
        className="grid grid-cols-1 lg:grid-cols-12 gap-12"
      >
        {/* Left: Curator Series info card */}
        <motion.div variants={fadeInUp} className="lg:col-span-4">
          <div className="bg-surface-container-low p-10 rounded-lg h-full flex flex-col">
            <h3 className="font-headline text-3xl mb-6 text-on-background tracking-tighter">
              The Curator Series
            </h3>
            <p className="text-on-surface-variant font-body leading-relaxed mb-8">
              Access our legacy of symposiums and unedited workshop sessions
              focused on the architecture of modern enterprise software.
            </p>
            <div className="flex items-center gap-4 mt-auto">
              <div className="flex -space-x-4">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-12 h-12 rounded-xl border-2 border-background bg-secondary-container flex items-center justify-center"
                  >
                    <span className="material-symbols-outlined text-on-secondary-container text-lg">
                      person
                    </span>
                  </div>
                ))}
              </div>
              <span className="text-xs font-label uppercase tracking-[0.1em] text-outline">
                25+ Expert Sessions
              </span>
            </div>
          </div>
        </motion.div>

        {/* Right: 2-column recording grid */}
        <motion.div
          variants={fadeInUp}
          className="lg:col-span-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {recordings.map((rec, i) => (
              <motion.div
                key={rec.title}
                variants={fadeInUp}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="group cursor-pointer"
              >
                {/* Grayscale image with hover color transition */}
                <div className="aspect-video bg-surface-container relative mb-4 overflow-hidden rounded">
                  {rec.image ? (
                    <>
                      <Image
                        src={rec.image}
                        alt={rec.title}
                        fill
                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                      />
                      <div className="absolute inset-0 bg-white mix-blend-saturation group-hover:opacity-0 transition-opacity duration-500" />
                    </>
                  ) : (
                    <div className="w-full h-full bg-surface-container" />
                  )}

                  {/* Play icon overlay on hover */}
                  <div className="absolute inset-0 bg-primary/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="material-symbols-outlined text-background text-6xl">
                      play_circle
                    </span>
                  </div>

                  {/* Duration badge */}
                  <div className="absolute bottom-4 left-4 bg-background px-3 py-1 text-[10px] font-bold uppercase tracking-wider font-label text-on-background">
                    {rec.duration}
                  </div>
                </div>

                <h4 className="font-headline text-xl group-hover:text-primary transition-colors text-on-background">
                  {rec.title}
                </h4>
                <p className="text-sm text-on-surface-variant mt-1 italic font-body">
                  Full Access Archive &bull; {rec.date}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
