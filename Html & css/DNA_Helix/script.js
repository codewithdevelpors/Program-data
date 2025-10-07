const wrap=document.getElementById('wrap'); const count=36;
for(let i=0;i<count;i++){ const d=document.createElement('div'); d.className='dot'; wrap.appendChild(d); }
const dots=document.querySelectorAll('.dot'); let t=0;
function anim(){ t += 0.06; const W=innerWidth, H=innerHeight;
  dots.forEach((el,i)=>{
    const frac = i/count; const y = H*(frac*1.2 - 0.1);
    const amp = 160; const x1 = W/2 + Math.sin(t+frac*6.28)*amp*Math.cos(frac*2.5);
    const x2 = W/2 + Math.sin(t+frac*6.28+Math.PI)*amp*Math.cos(frac*2.5);
    if(i%2==0){ el.style.left = x1+'px'; } else { el.style.left = x2+'px'; }
    el.style.top = y+'px'; el.style.background = 'hsl('+(i*10%360)+',90%,60%)';
  });
  requestAnimationFrame(anim);
}
anim();
