/**
 * Envía el evento `demo_click` a GA4 al pulsar cualquier enlace a Calendly.
 * Si gtag no está cargado (analítica desactivada o en desarrollo) no hace nada.
 */
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

document.querySelectorAll<HTMLAnchorElement>('a[href*="calendly.com"]').forEach((link) => {
  link.addEventListener('click', () => {
    window.gtag?.('event', 'demo_click', { href: link.href });
  });
});

// Convierte el archivo en módulo para que `declare global` sea válido.
export {};
