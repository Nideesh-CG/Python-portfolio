/**
 * Helpers for resolving asset paths and download triggers
 */
export function getAssetUrl(path: string): string {
  if (!path) return '';
  return path.startsWith('/') ? path : `/${path}`;
}

export function triggerDownload(url: string, filename?: string): void {
  const link = document.createElement('a');
  link.href = url;
  if (filename) {
    link.download = filename;
  } else {
    const parts = url.split('/');
    link.download = parts[parts.length - 1] || 'download';
  }
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

