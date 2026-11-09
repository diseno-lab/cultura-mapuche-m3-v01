/* M3 — precarga (QA 9-nov-2026: «el fondo se cambiaba a mitad de la locución», «no se cargaban los elementos»,
   «el avatar demoraba en cargar y en modular»).
   Descarga por adelantado, en segundo plano, el fondo, las imágenes, la locución y el avatar de las láminas siguientes
   (prioridad: la actual y las 2 siguientes; luego el resto del curso). Decodifica los fondos para que el cambio sea inmediato.
   Solo rendimiento: no cambia contenido ni reglas de avance. */
(()=>{'use strict';
const M=window.MotorMapuche;if(!M)return;
const D=M.getData(),A=window.MAPUCHE_AUDIO||{},AV=window.MAPUCHE_AVATARS||{};
const done=new Set(),decoded=new Map();let queue=[],busy=0;const MAX=3;
function assets(s){const out=[];if(!s)return out;
 if(s.background&&s.background!=='quiz-abstract')out.push({u:'mapuche-assets/'+s.background,bg:true});
 const walk=v=>{if(typeof v==='string'){if(/^m3\/.*\.(jpe?g|png|webp)$/i.test(v))out.push({u:'mapuche-assets/'+v,img:true})}else if(Array.isArray(v))v.forEach(walk);else if(v&&typeof v==='object')Object.values(v).forEach(walk)};
 walk(s.m2);(s.items||[]).forEach(i=>i.image&&out.push({u:'mapuche-assets/'+i.image,img:true}));
 const av=AV[s.id];if(av){if(av.poster)out.push({u:av.poster,img:true});if(av.src)out.push({u:av.src});if(av.voice)out.push({u:av.voice})}
 else if(A[s.id]?.src)out.push({u:A[s.id].src});
 return out}
function decode(u){if(decoded.has(u))return;const im=new Image();im.decoding='async';im.src=u;decoded.set(u,im);im.decode?.().catch(()=>{})}
function pump(){while(busy<MAX&&queue.length){const a=queue.shift();if(done.has(a.u)){if(a.bg||a.img)decode(a.u);continue}done.add(a.u);busy++;
 fetch(a.u,{cache:'force-cache'}).then(r=>r.ok?r.blob():null).catch(()=>null).finally(()=>{busy--;if(a.bg||a.img)decode(a.u);pump()})}}
function plan(){const p=M.getState().page||0,n=D.slides.length,order=[];
 for(let k=0;k<n;k++)order.push((p+k)%n);
 const near=order.slice(0,3).flatMap(i=>assets(D.slides[i])),far=order.slice(3).flatMap(i=>assets(D.slides[i]));
 queue=[...near,...far];pump()}
let last=-1;const check=()=>{const p=M.getState().page;if(p!==last){last=p;plan()}};
const stage=document.querySelector('#stage');if(stage)new MutationObserver(()=>requestAnimationFrame(check)).observe(stage,{childList:true});
document.addEventListener('motor-course-state',check);
(window.requestIdleCallback||setTimeout)(check,{timeout:800});
})();
