'use strict';
// Links and both guide panels are present in HTML. JavaScript only enhances interaction.
const menu=document.querySelector('.menu-toggle'),nav=document.getElementById('nav');
function closeMenu(){nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.textContent='메뉴 열기';}
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));menu.textContent=open?'메뉴 닫기':'메뉴 열기';nav.classList.toggle('open',open);});
nav.addEventListener('click',e=>{if(e.target.closest('a'))closeMenu();});document.addEventListener('keydown',e=>{if(e.key==='Escape'&&nav.classList.contains('open')){closeMenu();menu.focus();}});
const tablist=document.querySelector('.audience'),tabs=[...document.querySelectorAll('[data-audience]')];
function activate(tab){tabs.forEach(b=>{const active=b===tab;const panel=document.getElementById(b.getAttribute('aria-controls'));b.setAttribute('aria-selected',String(active));b.tabIndex=active?0:-1;panel.hidden=!active;panel.setAttribute('role','tabpanel');panel.setAttribute('aria-labelledby',b.id);});}
tabs.forEach((tab,i)=>{tab.addEventListener('click',()=>activate(tab));tab.addEventListener('keydown',e=>{let n;if(e.key==='ArrowRight')n=tabs[(i+1)%tabs.length];if(e.key==='ArrowLeft')n=tabs[(i+tabs.length-1)%tabs.length];if(e.key==='Home')n=tabs[0];if(e.key==='End')n=tabs[tabs.length-1];if(n){e.preventDefault();n.focus();activate(n);}});});tablist.hidden=false;activate(tabs[0]);
