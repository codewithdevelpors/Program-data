const c=document.getElementById('c'),ctx=c.getContext('2d');let W,H;function resize(){W=c.width=innerWidth;H=c.height=innerHeight}window.addEventListener('resize',resize);resize();
const drops=[]; for(let i=0;i<600;i++) drops.push({x:Math.random()*W,y:Math.random()*H,v:4+Math.random()*6});
let flash=0;
function strike(){ flash=1.2; setTimeout(()=>flash=0,120); }
setInterval(()=>{ if(Math.random()<0.06) strike(); },500);
function loop(){ ctx.fillStyle='rgba(4,6,12,'+(0.5+flash*0.2)+')'; ctx.fillRect(0,0,W,H);
  // rain
  ctx.strokeStyle='rgba(180,200,255,0.07)'; ctx.lineWidth=1;
  for(let i=0;i<drops.length;i++){ let d=drops[i]; d.x += -2; d.y += d.v; if(d.y>H) d.y=-10; if(d.x<-10) d.x=W+10;
    ctx.beginPath(); ctx.moveTo(d.x,d.y); ctx.lineTo(d.x+3,d.y+10); ctx.stroke();
  }
  // occasional lightning bolt
  if(flash>0.5){ ctx.globalCompositeOperation='lighter'; ctx.fillStyle='rgba(255,255,255,'+Math.min(0.7,flash)+')'; ctx.fillRect(0,0,W,H*0.6); ctx.globalCompositeOperation='source-over'; }
  requestAnimationFrame(loop);
}
loop();
