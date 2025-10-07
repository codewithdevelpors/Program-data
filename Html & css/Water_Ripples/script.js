const c=document.getElementById('c'),ctx=c.getContext('2d');let W,H;function resize(){W=c.width=innerWidth;H=c.height=innerHeight}window.addEventListener('resize',resize);resize();
const ripples=[];
function addRipple(x,y){ ripples.push({x,y,r:0,alpha:1}); }
c.addEventListener('pointerdown',e=>addRipple(e.clientX,e.clientY));
function draw(){ ctx.fillStyle='rgba(1,10,20,0.3)'; ctx.fillRect(0,0,W,H);
  // subtle background noise
  for(let i=0;i<10;i++){ ctx.fillStyle='rgba(255,255,255,0.02)'; ctx.fillRect(Math.random()*W,Math.random()*H,2,2); }
  for(let i=ripples.length-1;i>=0;i--){ let r=ripples[i]; r.r+=3; r.alpha-=0.01;
    ctx.beginPath(); ctx.strokeStyle='rgba(180,220,255,'+r.alpha+')'; ctx.lineWidth=2; ctx.arc(r.x,r.y,r.r,0,Math.PI*2); ctx.stroke();
    // reflection effect
    ctx.beginPath(); ctx.strokeStyle='rgba(200,255,200,'+(r.alpha*0.08)+')'; ctx.lineWidth=1; ctx.arc(r.x,r.y+r.r*0.15,r.r*0.7,0,Math.PI*2); ctx.stroke();
    if(r.alpha<=0) ripples.splice(i,1);
  } requestAnimationFrame(draw);
}
// initial ripples
for(let i=0;i<6;i++) addRipple(Math.random()*innerWidth,Math.random()*innerHeight);
draw();
