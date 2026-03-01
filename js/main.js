// Scroll reveal
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.12 });
reveals.forEach(el => observer.observe(el));

// Obfuscated contact info — assembled at runtime to avoid plaintext scraping
const contacts = [
  {
    icon: '✆',
    href: ['tel', ':', ['07030', '90357'].join('')].join(''),
    label: ['070 30', ' 90 357'].join('')
  },
  {
    icon: '✉',
    href: ['mail', 'to', ':', ['anders.benke', '@', 'gmail.com'].join('')].join(''),
    label: ['anders', '.benke@', 'gmail.com'].join('')
  }
];

const wrap = document.getElementById('contact-links');
contacts.forEach(({ icon, href, label }) => {
  const a = document.createElement('a');
  a.href = href;
  a.className = 'contact-link';
  a.innerHTML = `<span>${icon}</span> ${label}`;
  wrap.appendChild(a);
});
