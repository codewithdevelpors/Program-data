const f=document.getElementById('flower');
const petals=12;
for(let i=0;i<petals;i++){ const p=document.createElement('div'); p.className='petal'; p.style.transform='rotate('+(i*(360/petals))+'deg) translateX(20px)'; f.appendChild(p); }
let t=0;
function bloom(){ t+=0.06; const nodes=document.querySelectorAll('.petal'); nodes.forEach((n,i)=>{ const ang= (Math.sin(t + i*0.4)+1)/2; n.style.opacity=ang; n.style.transform='rotate('+(i*(360/petals))+'deg) translateX('+(20+ang*60)+'px) scale('+(0.6+ang*0.6)+')'; }); requestAnimationFrame(bloom); }
bloom();
