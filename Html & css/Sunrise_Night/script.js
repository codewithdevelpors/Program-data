const sun=document.getElementById('sun'), moon=document.getElementById('moon');
let t=0;
function anim(){ t+=0.0025; const W=innerWidth, H=innerHeight;
  const sx = W*(0.2+0.6*Math.cos(t*Math.PI*2)), sy=H*(0.6-0.45*Math.sin(t*Math.PI*2));
  sun.style.left = sx+'px'; sun.style.top=sy+'px';
  const mx = W*(0.8+0.6*Math.cos(t*Math.PI*2 + Math.PI)), my = H*(0.6-0.45*Math.sin(t*Math.PI*2 + Math.PI));
  moon.style.left=mx+'px'; moon.style.top=my+'px';
  // background shift
  const g1 = `linear-gradient(${Math.cos(t*Math.PI*2)*45+90}deg, rgba(255,180,80,${0.6+0.4*Math.sin(t*Math.PI*2)}) 0%, rgba(2,6,40,${0.4+0.6*Math.cos(t*Math.PI*2)}) 100%)`;
  document.body.style.background = g1;
  requestAnimationFrame(anim);
}
anim();
