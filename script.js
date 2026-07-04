const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.site-nav');
if(toggle&&nav){toggle.addEventListener('click',()=>nav.classList.toggle('open'));}
const io=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show');});},{threshold:.12});
document.querySelectorAll('.section-reveal').forEach(el=>io.observe(el));
