function isIOS() {
  // iPadOS can report as Mac; this is a pragmatic check for Safari/iOS devices.
  const ua = navigator.userAgent
  return /iPad|iPhone|iPod/.test(ua)
}

export function getDirectionsUrl(destination: string): string {
  const encoded = encodeURIComponent(destination)
  if (isIOS()) {
    // Apple Maps directions to destination.
    return `https://maps.apple.com/?daddr=${encoded}`
  }
  // Google Maps directions to destination.
  return `https://www.google.com/maps/dir/?api=1&destination=${encoded}`
}

export function getGoogleEmbedUrl(query: string): string {
  // Keyless embed (query-based). If you later need a pinned/place embed, replace with the official embed URL.
  const encoded = encodeURIComponent(query)
  return `https://www.google.com/maps?q=${encoded}&output=embed`
}

