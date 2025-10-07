const t=document.getElementById('tunnel');
const W=innerWidth, H=innerHeight;
for(let i=0;i<40;i++){ const r=document.createElement('div'); r.className='ring'; r.style.width=(i*80+200)+'px'; r.style.height=(i*80+200)+'px'; r.style.left=((W-(i*80+200))/2)+'px'; r.style.top=((H-(i*80+200))/2)+'px'; r.style.borderColor='hsl('+(i*9)%360+',80%,60%)'; r.style.zIndex=100-i; t.appendChild(r); }
let offset=0;
function anim(){ offset+=3; document.querySelectorAll('.ring').forEach((r,i)=>{ const s = 1+Math.sin((offset+i*6)*0.01)*0.12; r.style.transform='scale('+s+') rotate('+(offset*0.2+i)+'deg)'; }); requestAnimationFrame(anim); }
anim();
