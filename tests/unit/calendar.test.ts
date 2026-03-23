import { test, expect, describe } from 'bun:test'
import { generateICS, generateGoogleCalendarLink } from '@/lib/calendar'

const mockEvent = {
  title: 'AHA Tech Talk: AI in Enterprise',
  description: 'Join us for an evening of insights into AI adoption.',
  date: '2026-06-20T18:00:00Z',
  endDate: '2026-06-20T20:00:00Z',
  location: '100 Congress Ave, Austin, TX 78701',
}

describe('Calendar utilities', () => {
  describe('generateICS', () => {
    test('returns valid iCalendar format', () => {
      const ics = generateICS(mockEvent)
      expect(ics).toContain('BEGIN:VCALENDAR')
      expect(ics).toContain('END:VCALENDAR')
      expect(ics).toContain('BEGIN:VEVENT')
      expect(ics).toContain('END:VEVENT')
    })

    test('includes event title as SUMMARY', () => {
      const ics = generateICS(mockEvent)
      expect(ics).toContain('SUMMARY:AHA Tech Talk: AI in Enterprise')
    })

    test('includes event description as DESCRIPTION', () => {
      const ics = generateICS(mockEvent)
      expect(ics).toContain('DESCRIPTION:')
    })

    test('includes DTSTART and DTEND in correct format', () => {
      const ics = generateICS(mockEvent)
      // iCal dates are formatted as YYYYMMDDTHHMMSSZ
      expect(ics).toMatch(/DTSTART:\d{8}T\d{6}Z/)
      expect(ics).toMatch(/DTEND:\d{8}T\d{6}Z/)
    })

    test('includes LOCATION', () => {
      const ics = generateICS(mockEvent)
      expect(ics).toContain('LOCATION:100 Congress Ave')
    })

    test('includes PRODID and VERSION headers', () => {
      const ics = generateICS(mockEvent)
      expect(ics).toContain('PRODID:')
      expect(ics).toContain('VERSION:2.0')
    })

    test('handles virtual events with URL location', () => {
      const virtualEvent = { ...mockEvent, location: 'Virtual' }
      const ics = generateICS(virtualEvent)
      expect(ics).toContain('BEGIN:VEVENT')
      // Virtual events might use LOCATION:Virtual or URL field
    })

    test('handles events without endDate', () => {
      const { endDate, ...noEnd } = mockEvent
      const ics = generateICS(noEnd)
      expect(ics).toContain('BEGIN:VEVENT')
      // Should either omit DTEND or use a default duration
    })
  })

  describe('generateGoogleCalendarLink', () => {
    test('returns a valid Google Calendar URL', () => {
      const link = generateGoogleCalendarLink(mockEvent)
      expect(link).toContain('https://calendar.google.com/calendar/render')
      expect(link).toContain('action=TEMPLATE')
    })

    test('includes event title as text parameter', () => {
      const link = generateGoogleCalendarLink(mockEvent)
      expect(link).toContain('text=')
      // URL-encoded title
      expect(link).toContain(encodeURIComponent('AHA Tech Talk: AI in Enterprise'))
    })

    test('includes dates parameter', () => {
      const link = generateGoogleCalendarLink(mockEvent)
      expect(link).toContain('dates=')
      // Google Calendar date format: YYYYMMDDTHHMMSSZ/YYYYMMDDTHHMMSSZ
      expect(link).toMatch(/dates=\d{8}T\d{6}Z%2F\d{8}T\d{6}Z/)
    })

    test('includes location parameter', () => {
      const link = generateGoogleCalendarLink(mockEvent)
      expect(link).toContain('location=')
    })

    test('includes details parameter with description', () => {
      const link = generateGoogleCalendarLink(mockEvent)
      expect(link).toContain('details=')
    })

    test('handles events without endDate (defaults to 2h)', () => {
      const { endDate, ...noEnd } = mockEvent
      const link = generateGoogleCalendarLink(noEnd)
      expect(link).toContain('dates=')
      expect(link).toMatch(/dates=\d{8}T\d{6}Z%2F\d{8}T\d{6}Z/)
    })

    test('omits details when no description', () => {
      const { description, ...noDesc } = mockEvent
      const link = generateGoogleCalendarLink(noDesc)
      expect(link).not.toContain('details=')
    })

    test('omits location when not provided', () => {
      const { location, ...noLoc } = mockEvent
      const link = generateGoogleCalendarLink(noLoc)
      expect(link).not.toContain('location=')
    })
  })
})
