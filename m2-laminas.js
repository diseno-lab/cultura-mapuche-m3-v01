/* M3 · Protección de Valores Culturales — composición de láminas.
   (Se conserva el nombre de archivo y de función del motor M2: window.M2_MARKUP.)
   Todos los textos visibles provienen de mapuche-data.js (literal del guion c3). Este archivo solo
   compone y ordena; no contiene contenido pedagógico propio. */
window.M2_MARKUP=function(s,H){'use strict';
const {esc,revealAt,sourcePicture,symbol,icon,speechAt,reviews,state}=H;
const n=s.origin_slide,c=s.m2||{},pt=k=>k<=1?0:speechAt(s.points[k-1]||'',0);
const head=`<div class="v12-heading"><h1 tabindex="-1">${esc(s.intro)}</h1></div>`;
const u=(html,cls='')=>`<div class="m2-u ${cls}">${html}</div>`;
const pic=(f,cls='')=>sourcePicture(f,cls);
const plain=(f,cls='')=>`<img class="source-picture m2-plain ${cls}" src="mapuche-assets/${esc(f)}" alt="" decoding="async">`;

/* Íconos propios del M3 (QA 9-nov: que el ícono corresponda al título). Trazo lineal, mismo estilo que el motor. */
const SV=d=>`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
const M3I={
 corazon:SV('<path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"/><path d="M12 9.5v4M10 11.5h4"/>'),
 kultrun:SV('<circle cx="12" cy="12" r="8"/><path d="M12 4v16M4 12h16"/><circle cx="8" cy="8" r=".9"/><circle cx="16" cy="8" r=".9"/><circle cx="8" cy="16" r=".9"/><circle cx="16" cy="16" r=".9"/>'),
 lucero:SV('<path d="M12 3v18M3 12h18M6 6l12 12M18 6 6 18"/><circle cx="12" cy="12" r="2.4"/>'),
 lawen:SV('<path d="M5 19c0-8 5-13 14-14-1 9-6 14-14 14z"/><path d="M5 19l8-8"/>'),
 humedal:SV('<path d="M12 3c2.6 3.2 4 5.4 4 7.2a4 4 0 0 1-8 0C8 8.4 9.4 6.2 12 3z"/><path d="M3 18c1.5-1 3-1 4.5 0s3 1 4.5 0 3-1 4.5 0 3 1 4.5 0M6 21c1-.6 2-.6 3 0"/>'),
 cascada:SV('<path d="M4 4h16"/><path d="M8 4v11M12 4v13M16 4v11"/><path d="M4 19c1.6 1.3 3.4 1.3 5 0s3.4-1.3 5 0 3.4 1.3 5 0"/>'),
 exclusion:SV('<circle cx="12" cy="12" r="8.5"/><path d="M6 6l12 12"/>'),
 perimetro:SV('<circle cx="12" cy="12" r="2.5"/><circle cx="12" cy="12" r="5.5" stroke-dasharray="2 2"/><circle cx="12" cy="12" r="9" stroke-dasharray="2.5 2.5"/>'),
 ubicacion:SV('<path d="M12 21s6-5.6 6-11a6 6 0 0 0-12 0c0 5.4 6 11 6 11z"/><circle cx="12" cy="10" r="2.2"/>'),
 escudo:SV('<path d="M12 3l7 3v5c0 4.6-3 8.3-7 10-4-1.7-7-5.4-7-10V6l7-3z"/><path d="M9 12l2 2 4-4"/>'),
 dialogo:SV('<path d="M4 5h11v7H9l-3 3v-3H4z"/><path d="M15 9h5v7h-2v3l-3-3h-4v-2"/>'),
 vasija:SV('<path d="M9 3h6M10 3v3c-3 1.2-5 3.8-5 7 0 4 3 8 7 8s7-4 7-8c0-3.2-2-5.8-5-7V3"/><path d="M6 12h12"/>'),
 molienda:SV('<path d="M3 15c0 3 4 5 9 5s9-2 9-5H3z"/><path d="M14 13l5-8"/><circle cx="19.5" cy="4.5" r="1.3"/>'),
 hueso:SV('<path d="M8.5 8.5l7 7"/><path d="M8.5 8.5a2.2 2.2 0 1 0-3.1-.1 2.2 2.2 0 1 0 3.1.1zM15.5 15.5a2.2 2.2 0 1 0 3.1.1 2.2 2.2 0 1 0-3.1-.1z"/>'),
 arbol:SV('<path d="M12 21v-6"/><path d="M12 15c-4 0-7-2.3-7-5.4C5 6.5 8 4 12 3c4 1 7 3.5 7 6.6 0 3.1-3 5.4-7 5.4z"/><path d="M8 21h8"/>'),
 manos:SV('<path d="M3 12l4-4 4 3 3-2 7 5"/><path d="M7 8l-4 4 6 6 2-1"/><path d="M14 9l-3 3a1.5 1.5 0 0 0 2 2l2-1.5 3 3"/>'),
 mapa:SV('<path d="M3 6l6-2 6 2 6-2v14l-6 2-6-2-6 2z"/><path d="M9 4v14M15 6v14"/>'),
 gota:SV('<path d="M12 3c3.4 4.2 6 7.4 6 10.5a6 6 0 0 1-12 0C6 10.4 8.6 7.2 12 3z"/><path d="M9.5 14.5a2.6 2.6 0 0 0 2.5 2.5"/>'),
 alto:SV('<path d="M7 12V6.5a1.5 1.5 0 0 1 3 0V11V4.5a1.5 1.5 0 0 1 3 0V11V5.5a1.5 1.5 0 0 1 3 0V12V8.5a1.5 1.5 0 0 1 3 0V14c0 4-2.7 7-6.5 7h-.5c-2 0-3.5-1-4.6-2.6L4.6 14a1.5 1.5 0 0 1 2.4-1.8z"/>')};
const sym=k=>M3I[k]?`<span class="v11-symbol m3-sym">${M3I[k]}</span>`:symbol(k);
const bullets=(list,icons)=>`<ul class="m2-bullets">${list.map((x,i)=>`<li class="m2-u">${sym(icons?icons[i%icons.length]:'check')}<span>${esc(x)}</span></li>`).join('')}</ul>`;
const arrow='<span class="m2-arrow" aria-hidden="true"></span>';
const callout=t=>`<div class="m2-callout m2-u"><p>${esc(t)}</p></div>`;
const fig=(f,cap)=>`<figure class="m2-figure m2-u">${pic(f)}${cap?`<figcaption>${esc(cap)}</figcaption>`:''}</figure>`;
const capOnly=(f,cap,cls='')=>`<figure class="m3-iconfig m2-u ${cls}">${plain(f,'m2-icon m3-anim')}<figcaption class="m2-key">${esc(cap)}</figcaption></figure>`;
const iconRow=(f,t)=>`<div class="m3-row">${u(plain(f,'m2-icon m3-anim'),'m2-iconbox')}${callout(t)}</div>`;
const pair=list=>`<div class="m2-pair">${list.map(f=>u(pic(f))).join('')}</div>`;
const instr=()=>`<p class="v12-instruction">${esc(s.instruction)}</p>${reviews()}`;
const cards=()=>`<div class="ceremony-buttons m3-cards m3-n${s.items.length}">${s.items.map(p=>`<button class="ceremony-button ${state.reviews.includes(p.id)?'checked':''}" data-info="${p.id}" data-key="${p.id}">${plain(p.image,'m2-card-img')}<h2>${esc(p.title)}</h2>${state.reviews.includes(p.id)?icon('check'):icon('next')}</button>`).join('')}</div>${instr()}`;
switch(n){
case 1:return `<div class="cover">${head}<p class="program">${esc(c.program)}</p><button class="primary" id="cover-start">Comenzar ${icon('next')}</button></div>`;
case 2:return `<div class="approved-intro m2-intro m3-intro">${head}${callout(c.p1)}</div>`;
case 3:return `<div class="v12-info m3-s03">${head}<div class="m2-cols">${revealAt(`<div class="m3-stack">${fig(c.img1)}${bullets(c.list,['corazon','kultrun','lucero','lawen'])}</div>`,pt(1))}${revealAt(fig(c.img2,c.c2),pt(2))}</div>${revealAt(iconRow(c.icon,c.p3),pt(3),)}</div>`;
case 4:return `<div class="v12-interactive ceremony-modals m3-s04">${head}<div class="m2-cols m2-cols-4">${revealAt(fig(c.img1,c.c1),pt(1))}${revealAt(cards(),pt(2))}</div></div>`;
case 5:return `<div class="v12-info m3-s05">${head}<div class="m2-cols">${revealAt(callout(c.p1),pt(1))}${revealAt(fig(c.img1),pt(1))}</div></div>`;
case 6:return `<div class="v12-info m3-s06">${head}<div class="m2-cols">${revealAt(pair(c.imgs1),pt(1))}${revealAt(`${pair(c.imgs2)}${bullets(c.list2,['humedal','cascada'])}`,pt(2))}</div>${revealAt(iconRow(c.icon,c.p3),pt(3),)}</div>`;
case 7:return `<div class="v12-interactive ceremony-modals m3-s07">${head}<div class="m2-cols">${revealAt(pair(c.imgs1),pt(1))}${revealAt(bullets(c.list2,['exclusion','perimetro']),pt(2))}</div>${revealAt(cards(),pt(3))}</div>`;
case 8:return `<div class="v12-info m3-s08">${head}<div class="m2-cols">${revealAt(fig(c.img1),pt(1))}${revealAt(fig(c.img2,c.c2),pt(2))}</div>${revealAt(`<div class="m3-duo">${capOnly(c.img3,c.c3)}${fig(c.img4,c.c4)}</div>`,pt(3))}</div>`;
case 11:return `<div class="v12-info m3-s11">${head}<div class="m2-cols">${revealAt(callout(c.p1),pt(1))}<div class="m3-stack">${revealAt(fig(c.img2,c.c2),pt(2))}${revealAt(capOnly(c.icon,c.c3),pt(3))}</div></div></div>`;
case 12:return `<div class="v12-interactive ceremony-modals m3-s12">${head}<div class="m2-cols">${revealAt(fig(c.img1),pt(1))}<div class="m3-stack">${revealAt(bullets(c.list2,['ubicacion','escudo','dialogo']),pt(2))}${revealAt(cards(),pt(3))}</div></div></div>`;
case 13:return `<div class="v12-info m3-s13">${head}<div class="m2-cols">${revealAt(`<div class="m2-law">${u(plain(c.img1,'m3-logo'),'m3-logo-wrap')}<div class="m2-u m2-result">${arrow}<p class="m2-key">${esc(c.p1)}</p></div></div>`,pt(1))}${revealAt(u(plain(c.img2,'m3-illus m3-anim'),'m3-illus-wrap'),pt(2))}</div></div>`;
case 14:return `<div class="v12-info m3-s14">${head}<div class="m2-cols">${revealAt(`<div class="m3-stack">${fig(c.img1)}${bullets(c.list1,['vasija','molienda','hueso'])}</div>`,pt(1))}${revealAt(`<div class="m3-stack">${fig(c.img2)}${callout(c.p2)}</div>`,pt(2))}</div></div>`;
case 15:return `<div class="v12-interactive ceremony-modals m3-s15">${head}<div class="m2-cols m2-cols-4">${revealAt(`<div class="m3-stack">${c.imgs1.map(f=>u(pic(f))).join('')}</div>`,pt(1))}${revealAt(cards(),pt(2))}</div></div>`;
case 16:return `<div class="v12-info m3-s16">${head}<div class="m2-cols">${revealAt(fig(c.img1,c.p1),pt(1))}${revealAt(`<div class="m2-law m3-center"><h2 class="m2-u">${esc(c.h2)}</h2><div class="m2-u m2-result">${arrow}</div>${u(plain(c.img2,'m3-logo'),'m3-logo-wrap')}</div>`,pt(2))}</div></div>`;
case 17:return `<div class="v12-info m3-s17">${head}<div class="m2-cols">${revealAt(callout(c.p1),pt(1))}${revealAt(capOnly(c.icon,c.p2,'m3-big'),pt(2))}</div></div>`;
case 20:return `<div class="closing-view m2-closing m3-closing">${plain(c.icon,"m2-closing-icon")}${head}<p class="lead">${esc(s.lead)}</p><div class="closing-summary-grid">${s.summary.map(x=>revealAt(`<section class="closing-principle">${sym(x.icon)}<div><h2>${esc(x.title)}</h2><p>${esc(x.text)}</p></div></section>`,0)).join('')}</div>${H.awardSummary()}</div>`;
}
return head};
