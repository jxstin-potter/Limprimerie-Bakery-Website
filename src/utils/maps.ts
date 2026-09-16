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

