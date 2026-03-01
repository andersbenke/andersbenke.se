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
  },
  {
    icon: '✉',
    href: ['https://www.linkedin.com/in/anders-benke-2765a0213/'].join('')].join(''),
    label: ['LinkedIn'].join('')
  }

  // 
];

const wrap = document.getElementById('contact-links');
contacts.forEach(({ icon, href, label }) => {
  const a = document.createElement('a');
  a.href = href;
  a.className = 'contact-link';
  a.innerHTML = `<span>${icon}</span> ${label}`;
  wrap.appendChild(a);
});
