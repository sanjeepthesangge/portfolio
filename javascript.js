/* CURSOR */
const cursor=document.getElementById('cursor'),ring=document.getElementById('cursorRing');
let mx=0,my=0,rx=0,ry=0;
document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;cursor.style.left=mx+'px';cursor.style.top=my+'px';});
(function anim(){rx+=(mx-rx)*.12;ry+=(my-ry)*.12;ring.style.left=rx+'px';ring.style.top=ry+'px';requestAnimationFrame(anim);})();
document.querySelectorAll('a,button,.skill-item,.project-card,.edu-card,.social-item').forEach(el=>{
  el.addEventListener('mouseenter',()=>{ring.style.transform='translate(-50%,-50%) scale(1.8)';cursor.style.opacity='0';});
  el.addEventListener('mouseleave',()=>{ring.style.transform='translate(-50%,-50%) scale(1)';cursor.style.opacity='1';});
});

/* THEME */
const html=document.documentElement,btn=document.getElementById('themeBtn');
const saved=localStorage.getItem('sl-theme');
if(saved)html.setAttribute('data-theme',saved);
btn.addEventListener('click',()=>{
  const next=html.getAttribute('data-theme')==='dark'?'light':'dark';
  html.setAttribute('data-theme',next);
  localStorage.setItem('sl-theme',next);
});

/* NAV */
const navbar=document.getElementById('navbar');
window.addEventListener('scroll',()=>navbar.classList.toggle('scrolled',window.scrollY>60));

/* HAMBURGER */
const hbg=document.getElementById('hamburger'),nl=document.getElementById('navLinks');
hbg.addEventListener('click',()=>{
  const o=nl.classList.toggle('open');
  const[s0,s1,s2]=hbg.querySelectorAll('span');
  if(o){s0.style.transform='rotate(45deg) translate(4px,4px)';s1.style.opacity='0';s2.style.transform='rotate(-45deg) translate(4px,-4px)';}
  else{[s0,s1,s2].forEach(s=>{s.style.transform='';s.style.opacity='';});}
});
nl.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nl.classList.remove('open');hbg.querySelectorAll('span').forEach(s=>{s.style.transform='';s.style.opacity='';});}));

/* SCROLL ANIMATIONS */
const obs=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting)setTimeout(()=>e.target.classList.add('visible'),60);});},{threshold:.1,rootMargin:'0px 0px -30px 0px'});
document.querySelectorAll('.fade-up,.timeline-item,.edu-card').forEach(el=>obs.observe(el));
document.querySelectorAll('.edu-card').forEach((c,i)=>c.style.transitionDelay=`${i*.07}s`);

/* PARALLAX */
const hbgEl=document.getElementById('heroBg');
window.addEventListener('scroll',()=>{if(hbgEl)hbgEl.style.transform=`translateY(${window.scrollY*.15}px)`;});
