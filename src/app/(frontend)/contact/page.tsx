import type { Metadata } from 'next'
import ContactSection from '@/components/home/ContactSection'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Schedule a Strategic Alignment workshop with AHA Software. No sales pitches — just technical experts auditing your delivery pipeline.',
}

export default function ContactPage() {
  return <ContactSection />
}
