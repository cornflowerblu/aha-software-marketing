function toICalDate(iso: string): string {
  return new Date(iso).toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '')
}

export function generateICS(event: {
  title: string
  description?: string
  date: string
  endDate?: string
  location?: string
}): string {
  const lines: string[] = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//AHA Software//Events//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `DTSTART:${toICalDate(event.date)}`,
  ]

  if (event.endDate) {
    lines.push(`DTEND:${toICalDate(event.endDate)}`)
  } else {
    // Default: 2 hours after start
    const end = new Date(event.date)
    end.setHours(end.getHours() + 2)
    lines.push(`DTEND:${toICalDate(end.toISOString())}`)
  }

  lines.push(`SUMMARY:${event.title}`)

  if (event.description) {
    lines.push(`DESCRIPTION:${event.description}`)
  }

  if (event.location) {
    lines.push(`LOCATION:${event.location}`)
  }

  lines.push(`UID:${Date.now()}@ahasw.com`)
  lines.push('END:VEVENT')
  lines.push('END:VCALENDAR')

  return lines.join('\r\n')
}

export function generateGoogleCalendarLink(event: {
  title: string
  description?: string
  date: string
  endDate?: string
  location?: string
}): string {
  const startDate = toICalDate(event.date)
  let endDate: string
  if (event.endDate) {
    endDate = toICalDate(event.endDate)
  } else {
    const end = new Date(event.date)
    end.setHours(end.getHours() + 2)
    endDate = toICalDate(end.toISOString())
  }

  const params: string[] = [
    `action=TEMPLATE`,
    `text=${encodeURIComponent(event.title)}`,
    `dates=${encodeURIComponent(`${startDate}/${endDate}`)}`,
  ]

  if (event.description) params.push(`details=${encodeURIComponent(event.description)}`)
  if (event.location) params.push(`location=${encodeURIComponent(event.location)}`)

  return `https://calendar.google.com/calendar/render?${params.join('&')}`
}
