const t=document.getElementById('t');const text=t.textContent; t.innerHTML='';
for(let i=0;i<text.length;i++){ const s=document.createElement('span'); s.textContent=text[i]; t.appendChild(s); }
let dir=1;
function anim(){ const spans=t.querySelectorAll('span'); spans.forEach((s,i)=>{
    const phase = Math.sin((Date.now()*0.003)+(i*0.5))*20;
    s.style.transform = `rotateX(${phase}deg) translateZ(${10*Math.sin(Date.now()*0.002+i)}px)`;
}); requestAnimationFrame(anim); }
anim();
