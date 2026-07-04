const navToggle=document.querySelector('.nav-toggle');
const nav=document.querySelector('.global-nav');
navToggle?.addEventListener('click',()=>{const open=nav.classList.toggle('is-open');navToggle.setAttribute('aria-expanded',String(open));});
document.querySelectorAll('.global-nav a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('is-open');navToggle?.setAttribute('aria-expanded','false');}));
const io=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');io.unobserve(entry.target);}})},{threshold:.14});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
