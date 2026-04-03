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
    <section className="max-w-[1280px] mx-auto px-6 md:px-12 mb-24">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={fadeInUp}
        className="mb-12"
      >
        <p className="ea-label mb-3 text-primary">Archive</p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.02em] text-on-surface">
          From the Archive
        </h2>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={staggerContainer}
        className="grid grid-cols-1 lg:grid-cols-12 gap-8"
      >
        <motion.div variants={fadeInUp} className="lg:col-span-4">
          <div className="rounded-2xl bg-surface-low p-8 h-full flex flex-col">
            <h3 className="text-2xl font-bold mb-4 text-on-surface">
              The Curator Series
            </h3>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
              Access our legacy of symposiums and unedited workshop sessions
              focused on the architecture of modern enterprise software.
            </p>
            <div className="flex items-center gap-3 mt-auto">
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-lg border-2 border-surface bg-secondary-container flex items-center justify-center"
                  >
                    <span className="material-symbols-outlined text-on-secondary-container text-sm">
                      person
                    </span>
                  </div>
                ))}
              </div>
              <span className="ea-label text-tertiary">
                25+ Expert Sessions
              </span>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="lg:col-span-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {recordings.map((rec) => (
              <motion.div
                key={rec.title}
                variants={fadeInUp}
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
                className="group cursor-pointer"
              >
                <div className="aspect-video bg-surface-high relative mb-4 overflow-hidden rounded-2xl">
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
                    <div className="w-full h-full bg-surface-high" />
                  )}

                  <div className="absolute inset-0 bg-primary/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="material-symbols-outlined text-surface-lowest text-5xl">
                      play_circle
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 rounded-lg bg-surface-lowest px-3 py-1 ea-label text-on-surface">
                    {rec.duration}
                  </div>
                </div>

                <h4 className="text-lg font-bold group-hover:text-primary transition-colors text-on-surface">
                  {rec.title}
                </h4>
                <p className="text-sm text-on-surface-variant mt-1">
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
