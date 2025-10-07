const c=document.getElementById('c'),ctx=c.getContext('2d');
let W, H, particles=[];
function resize(){W=c.width=innerWidth;H=c.height=innerHeight}
window.addEventListener('resize',resize);resize();
class P{constructor(i){
    this.r=1+Math.random()*2; this.a=Math.random()*Math.PI*2; this.rad=30+Math.random()*Math.min(W,H)/3;
    this.speed=0.002+Math.random()*0.01; this.h=(i%360); }
  update(t){ this.a += this.speed * (0.8+Math.sin(t*0.0005)); 
    const x = W/2 + Math.cos(this.a)*this.rad, y = H/2 + Math.sin(this.a)*this.rad;
    ctx.beginPath(); ctx.fillStyle = 'hsl('+((this.h + this.a*40)%360)+',100%,'+ (40+30*Math.sin(this.a)) +'%)';
    ctx.shadowColor=ctx.fillStyle; ctx.shadowBlur=12; ctx.arc(x,y,this.r,0,Math.PI*2); ctx.fill(); }
}
for(let i=0;i<600;i++) particles.push(new P(i));
let t=0;
function loop(){ ctx.fillStyle='rgba(0,0,0,0.12)'; ctx.fillRect(0,0,W,H); particles.forEach(p=>p.update(t)); t++; requestAnimationFrame(loop); }
loop();
