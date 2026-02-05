export type OpenHours = {
  tz: string
  openHour: number
  openMinute: number
  closeHour: number
  closeMinute: number
}

function getZonedTimeParts(tz: string, date: Date) {
  const fmt = new Intl.DateTimeFormat('en-US', {
    timeZone: tz,
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
  })

  const parts = fmt.formatToParts(date)
  const hour = Number(parts.find((p) => p.type === 'hour')?.value ?? '0')
  const minute = Number(parts.find((p) => p.type === 'minute')?.value ?? '0')
  return { hour, minute }
}

export function getOpenNow(hours: OpenHours, now = new Date()) {
  const { hour, minute } = getZonedTimeParts(hours.tz, now)
  const mins = hour * 60 + minute
  const open = hours.openHour * 60 + hours.openMinute
  const close = hours.closeHour * 60 + hours.closeMinute

  // Assumes same-day open/close (true for 7am–6pm).
  const isOpen = mins >= open && mins < close

  return {
    isOpen,
    now: { hour, minute },
    open: { hour: hours.openHour, minute: hours.openMinute },
    close: { hour: hours.closeHour, minute: hours.closeMinute },
  }
}

