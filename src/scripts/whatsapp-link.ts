import { WHATSAPP_NUMBER_PARTS } from '@data/site.config';

/** Sustituye los enlaces `…#whatsapp` por el enlace real de WhatsApp. Ver `WHATSAPP_HREF`. */
const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER_PARTS.join('')}`;

document.querySelectorAll<HTMLAnchorElement>('a[href$="#whatsapp"]').forEach((link) => {
  link.href = whatsappUrl;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
});
