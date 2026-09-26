/**
 * Envía a GA4 `demo_click` (Calendly) o `whatsapp_click` (wa.me) al pulsar esos enlaces.
 * Si gtag no está cargado (analítica desactivada o en desarrollo) no hace nada.
 */
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const trackClicks = (selector: string, eventName: string) => {
  document.querySelectorAll<HTMLAnchorElement>(selector).forEach((link) => {
    link.addEventListener('click', () => {
      window.gtag?.('event', eventName, { href: link.href });
    });
  });
};

trackClicks('a[href*="calendly.com"]', 'demo_click');
trackClicks('a[href*="wa.me"]', 'whatsapp_click');

// Convierte el archivo en módulo para que `declare global` sea válido.
export {};
