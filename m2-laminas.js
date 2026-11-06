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
const bullets=(list,icons)=>`<ul class="m2-bullets">${list.map((x,i)=>`<li class="m2-u">${symbol(icons?icons[i%icons.length]:'check')}<span>${esc(x)}</span></li>`).join('')}</ul>`;
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
case 3:return `<div class="v12-info m3-s03">${head}<div class="m2-cols">${revealAt(`<div class="m3-stack">${fig(c.img1)}${bullets(c.list,['leaf','people','eye','mountain'])}</div>`,pt(1))}${revealAt(fig(c.img2,c.c2),pt(2))}</div>${revealAt(iconRow(c.icon,c.p3),pt(3))}</div>`;
case 4:return `<div class="v12-interactive ceremony-modals m3-s04">${head}<div class="m2-cols m2-cols-4">${revealAt(fig(c.img1,c.c1),pt(1))}${revealAt(cards(),pt(2))}</div></div>`;
case 5:return `<div class="v12-info m3-s05">${head}<div class="m2-cols">${revealAt(callout(c.p1),pt(1))}${revealAt(fig(c.img1),pt(1))}</div></div>`;
case 6:return `<div class="v12-info m3-s06">${head}<div class="m2-cols">${revealAt(pair(c.imgs1),pt(1))}${revealAt(`${pair(c.imgs2)}${bullets(c.list2,['water','flow'])}`,pt(2))}</div>${revealAt(iconRow(c.icon,c.p3),pt(3))}</div>`;
case 7:return `<div class="v12-interactive ceremony-modals m3-s07">${head}<div class="m2-cols">${revealAt(pair(c.imgs1),pt(1))}${revealAt(bullets(c.list2,['shield','mountain']),pt(2))}</div>${revealAt(cards(),pt(3))}</div>`;
case 8:return `<div class="v12-info m3-s08">${head}<div class="m2-cols">${revealAt(fig(c.img1),pt(1))}${revealAt(fig(c.img2,c.c2),pt(2))}</div>${revealAt(`<div class="m3-duo">${capOnly(c.img3,c.c3)}${fig(c.img4,c.c4)}</div>`,pt(3))}</div>`;
case 11:return `<div class="v12-info m3-s11">${head}<div class="m2-cols">${revealAt(callout(c.p1),pt(1))}<div class="m3-stack">${revealAt(fig(c.img2,c.c2),pt(2))}${revealAt(capOnly(c.icon,c.c3),pt(3))}</div></div></div>`;
case 12:return `<div class="v12-interactive ceremony-modals m3-s12">${head}<div class="m2-cols">${revealAt(fig(c.img1),pt(1))}<div class="m3-stack">${revealAt(bullets(c.list2,['eye','shield','voice']),pt(2))}${revealAt(cards(),pt(3))}</div></div></div>`;
case 13:return `<div class="v12-info m3-s13">${head}<div class="m2-cols">${revealAt(`<div class="m2-law">${u(plain(c.img1,'m3-logo'),'m3-logo-wrap')}<div class="m2-u m2-result">${arrow}<p class="m2-key">${esc(c.p1)}</p></div></div>`,pt(1))}${revealAt(u(plain(c.img2,'m3-illus m3-anim'),'m3-illus-wrap'),pt(2))}</div></div>`;
case 14:return `<div class="v12-info m3-s14">${head}<div class="m2-cols">${revealAt(`<div class="m3-stack">${fig(c.img1)}${bullets(c.list1,['mountain','leaf','eye'])}</div>`,pt(1))}${revealAt(`<div class="m3-stack">${fig(c.img2)}${callout(c.p2)}</div>`,pt(2))}</div></div>`;
case 15:return `<div class="v12-interactive ceremony-modals m3-s15">${head}<div class="m2-cols m2-cols-4">${revealAt(`<div class="m3-stack">${c.imgs1.map(f=>u(pic(f))).join('')}</div>`,pt(1))}${revealAt(cards(),pt(2))}</div></div>`;
case 16:return `<div class="v12-info m3-s16">${head}<div class="m2-cols">${revealAt(fig(c.img1,c.p1),pt(1))}${revealAt(`<div class="m2-law"><h2 class="m2-u">${esc(c.h2)}</h2><div class="m2-u m2-result">${arrow}</div>${u(plain(c.img2,'m3-logo'),'m3-logo-wrap')}</div>`,pt(2))}</div></div>`;
case 17:return `<div class="v12-info m3-s17">${head}<div class="m2-cols">${revealAt(callout(c.p1),pt(1))}${revealAt(capOnly(c.icon,c.p2,'m3-big'),pt(2))}</div></div>`;
case 20:return `<div class="closing-view m2-closing m3-closing">${plain(c.icon,"m2-closing-icon")}${head}<p class="lead">${esc(s.lead)}</p><div class="closing-summary-grid">${s.summary.map(x=>revealAt(`<section class="closing-principle">${symbol(x.icon)}<div><h2>${esc(x.title)}</h2><p>${esc(x.text)}</p></div></section>`,0)).join('')}</div>${H.awardSummary()}</div>`;
}
return head};
