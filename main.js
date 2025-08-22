// Replace with your full WhatsApp number including country code, e.g. 919876543210
const WHATSAPP_NUMBER = '919760085110';

function updateWhatsAppLinks() {
  const links = document.querySelectorAll('#whatsappBtn, #whatsappBtn2');
  links.forEach(a => a.setAttribute('href', `https://wa.me/${WHATSAPP_NUMBER}`));
}

// Optional: simple click tracking (prints to console)
function trackClick(id){
  console.log('WhatsApp CTA clicked:', id, new Date().toISOString());
}

document.addEventListener('DOMContentLoaded', () => {
  updateWhatsAppLinks();
  document.getElementById('whatsappBtn')?.addEventListener('click', ()=>trackClick('whatsappBtn'));
  document.getElementById('whatsappBtn2')?.addEventListener('click', ()=>trackClick('whatsappBtn2'));
});
