const c=document.getElementById('c'),ctx=c.getContext('2d');let W,H;function resize(){W=c.width=innerWidth;H=c.height=innerHeight}window.addEventListener('resize',resize);resize();
const particles=[];
function spawn(){ for(let i=0;i<6;i++){ particles.push({x:W/2+ (Math.random()-0.5)*40, y:H*0.78, vx:(Math.random()-0.5)*1.2, vy:-2- Math.random()*2, life:60+Math.random()*40, hue:30+Math.random()*40}); } }
setInterval(spawn,80);
function loop(){ ctx.clearRect(0,0,W,H); ctx.fillStyle='rgba(0,0,0,0.2)'; ctx.fillRect(0,0,W,H);
  particles.forEach((p,i)=>{ p.x+=p.vx; p.y+=p.vy; p.vy += 0.04; p.life--; const alpha=p.life/120;
    ctx.beginPath(); ctx.fillStyle='hsla('+p.hue+',100%,'+(40 + (1-alpha)*30)+'%,'+alpha+')'; ctx.shadowBlur=30; ctx.shadowColor='orange'; ctx.arc(p.x,p.y,6*(alpha+0.2),0,Math.PI*2); ctx.fill();
    if(p.life<=0) particles.splice(i,1);
  });
  // logs
  ctx.fillStyle='#462b1f'; ctx.fillRect(W/2-80,H*0.82,160,16); ctx.fillRect(W/2-110,H*0.84,220,14);
  requestAnimationFrame(loop);
}
loop();
