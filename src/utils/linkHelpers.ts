/**
 * Link validation and safe external routing
 */
export function isValidUrl(url?: string): boolean {
  if (!url || typeof url !== 'string') return false;
  const trimmed = url.trim();
  return trimmed.length > 0 && (trimmed.startsWith('http://') || trimmed.startsWith('https://') || trimmed.startsWith('/'));
}

export function openExternalLink(url?: string): void {
  if (isValidUrl(url)) {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
}

