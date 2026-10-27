'use strict';
const vehicles = [
  {name:'Scooter',type:'bike',cargo:1,speed:30,price:0,handling:'Agile',color:'#f6bc51',desc:'Small, nimble, and ready for your first shift. Your starter ride turns tight city corners into opportunities.'},
  {name:'Cargo E-Bike',type:'bike',cargo:3,speed:27,price:10000,handling:'Agile',color:'#a8c29a',desc:'Three cargo slots with a narrow footprint. A practical upgrade for couriers who know their way around the alleys.'},
  {name:'Van',type:'cargo',cargo:6,speed:32,price:20000,handling:'Heavy',color:'#e1d5b9',desc:'Trade a little agility for a lot more room. Six cargo slots make this a dependable partner for longer routes.'},
  {name:'Delivery Quad',type:'offroad',cargo:3,speed:36,price:12000,handling:'All-terrain',color:'#d98b5b',desc:'Compact cargo capacity with off-road confidence. Built for the courier who takes the less obvious route.'},
  {name:'Motorcycle',type:'bike',cargo:2,speed:38,price:3000,handling:'Agile',color:'#c96847',desc:'Two slots, quick handling, and the freedom to slip through narrow streets. Make light work of your next run.'},
  {name:'Electric Scooter',type:'bike',cargo:2,speed:42,price:4000,handling:'Agile',color:'#8fbab1',desc:'A quick little city runner. Carry two parcels and keep the pace up through the neighborhood.'},
  {name:'Freight Van',type:'cargo',cargo:10,speed:44,price:65000,handling:'Heavy',color:'#a1b8a0',desc:'Ten cargo slots mean serious delivery potential. Plan your turns and make every trip to Dispatch count.'},
  {name:'Beach Buggy',type:'offroad',cargo:3,speed:46,price:16000,handling:'All-terrain',color:'#e8b466',desc:'A lively all-terrain ride with room for three cargo slots. Curbs and rough roads are part of the adventure.'},
  {name:'Touring Bike',type:'bike',cargo:2,speed:49,price:6500,handling:'Agile',color:'#b3b8c6',desc:'Fast, narrow, and made for covering ground. A two-slot bike for couriers with a longer route in mind.'},
  {name:'Parcel Pickup',type:'cargo',cargo:14,speed:53,price:120000,handling:'Heavy',color:'#d7a754',desc:'The fleet’s biggest cargo capacity. Fourteen slots reward good planning with more parcels per run.'},
  {name:'Royal GT Coupe',type:'premium',cargo:2,speed:64,price:null,pass:2057788339,handling:'Balanced',color:'#91b2a5',desc:'A premium two-slot coupe for your express-delivery era. A distinctive ride with plenty of pace.'},
  {name:'Comet Supercar',type:'premium',cargo:2,speed:76,price:null,pass:2058472349,handling:'Balanced',color:'#d88255',desc:'The fastest base ride in the fleet. Two cargo slots, a low profile, and a very memorable arrival.'}
];
const districts=[
  {name:'Old Town',description:'Brick facades, familiar corners, and the neighborhood where a courier learns the rhythm of the city.',tip:'Courier note: learn the side streets early.'},
  {name:'Harbor',description:'A working waterfront of loading areas, crates, and roads that connect the city to its busiest docks.',tip:'Courier note: leave room to line up your approach.'},
  {name:'Market',description:'Restaurant lights and busy storefronts. There is always another pickup around the next corner.',tip:'Courier note: a narrow ride has its advantages here.'},
  {name:'Gardens',description:'Leafy residential blocks and quieter courtyards bring a change of pace between city-center runs.',tip:'Courier note: shortcuts reward a little local knowledge.'},
  {name:'University',description:'Campus streets, workshops, and a steady stream of parcels heading between the city’s curious minds.',tip:'Courier note: check the destination before taking the turn.'},
  {name:'Heights',description:'High-rise streets and the city skyline. A fitting backdrop for a courier building a bigger reputation.',tip:'Courier note: a clean arrival is worth the extra care.'}
];
const $=s=>document.querySelector(s);
let filter='all', selected=0;
function vehicleSvg(v){
  const bike=v.type==='bike', car=v.type==='premium',quad=v.type==='offroad';
  const body=bike?'<path d="M111 154 170 117l68 16 56 49-44 21-71-47-30 19Z" fill="COLOR"/><path d="m162 149 26-57 29 5 40 79m-69-84-10-21 33 1" fill="none" stroke="#d8dfc6" stroke-width="9"/><path d="m181 97 39 2" stroke="#132c25" stroke-width="14"/><path d="m125 123 22-39 51 14-14 39Z" fill="#e8ba65"/><path d="m147 84 20 31 31-17m-31 17-8 22" stroke="#8e6d3d" stroke-width="3" fill="none"/>':car?'<path d="m62 157 63-39 45-47 95 16 63 45 50 18-15 58-216 3-85-28Z" fill="COLOR"/><path d="m155 118 30-35 71 13 45 36Z" fill="#203c32"/><path d="m222 90 6 37" stroke="COLOR" stroke-width="7"/><path d="m72 163 42-11 29 18-43 13Zm258-12 35 13-2 10-35-8Z" fill="#f7e5ba"/><path d="m112 192 159 11 69-22" stroke="#18382e" stroke-width="7" fill="none"/>':quad?'<path d="m75 152 56-37 105-12 76 38 35 42-76 27-134-12-67-20Z" fill="COLOR"/><path d="m145 132 29-58 66 7 37 70" fill="none" stroke="#c8d4bc" stroke-width="10"/><path d="m181 143 54 7" stroke="#17382b" stroke-width="18"/><path d="m83 155 36-15m187 22 28 10" stroke="#f5dfb0" stroke-width="8"/>':'<path d="m56 97 149-52 91 58 62 27 12 66-151 53-153-93Z" fill="COLOR"/><path d="m56 97 149-52 86 57-145 51Z" fill="#f5dfaf" opacity=".5"/><path d="m146 153 145-51 59 31-136 51Z" fill="#193a31"/><path d="m146 153 68 31 5 65-153-93-10-59Z" fill="#18382e" opacity=".17"/><path d="m247 127 44-15 46 24-88 32Z" fill="#9db5a0"/><path d="m229 178 117-41m-81-19 1 46" stroke="COLOR" stroke-width="6"/><path d="m86 133 27-9 22 14-28 11Z" fill="#193a31"/><path d="m86 133 21 16v29l-21-15m21-14 28-11v29l-28 11" stroke="#193a31" stroke-width="3" fill="none"/><path d="m332 175 23-8v11l-23 8Z" fill="#f8e6ae"/>';
  const wheels=bike?[[135,185],[276,195]]:car?[[131,201],[312,207]]:[[120,199],[307,210]];
  return '<svg viewBox="0 0 430 300" xmlns="http://www.w3.org/2000/svg"><ellipse cx="216" cy="238" rx="164" ry="25" fill="#10291c" opacity=".22"/>'+body.replaceAll('COLOR',v.color)+wheels.map(([x,y])=>`<g transform="translate(${x} ${y}) rotate(-13)"><ellipse rx="${quad?27:22}" ry="${quad?34:30}" fill="#142b24"/><ellipse rx="12" ry="18" fill="#a3b79c"/><ellipse rx="5" ry="9" fill="#4e6852"/></g>`).join('')+'</svg>';
}
function filtered(){return vehicles.map((v,i)=>({v,i})).filter(({v})=>filter==='all'||v.type===filter)}
function render(){
  const v=vehicles[selected],list=filtered(),position=list.findIndex(x=>x.i===selected);
  $('#vehicle-art').innerHTML=vehicleSvg(v);$('#vehicle-name').textContent=v.name;
  $('#vehicle-description').textContent=v.desc;$('#vehicle-cargo').textContent=v.cargo;
  $('#vehicle-speed').textContent=v.speed;$('#vehicle-handling').textContent=v.handling;
  $('#vehicle-class').textContent=(v.price===0?'STARTER / ':'')+({bike:'BIKE',cargo:'CARGO',offroad:'OFF-ROAD',premium:'PREMIUM'}[v.type]);
  $('#vehicle-price-label').textContent=v.price===0?'YOUR FIRST RIDE':v.price===null?'ROBLOX GAME PASS':'BASE IN-GAME CASH';
  $('#vehicle-price').textContent=v.price===0?'Starter vehicle':v.price===null?'Robux unlock':'$'+v.price.toLocaleString('en-US');
  $('#vehicle-index').textContent=String(position+1).padStart(2,'0')+' / '+String(list.length).padStart(2,'0');
  $('#vehicle-count').textContent=list.length+' rides in the garage';
  $('#vehicle-list').replaceChildren(...list.map(({v,i})=>{const b=document.createElement('button');b.textContent=v.name;b.setAttribute('aria-pressed',i===selected);b.addEventListener('click',()=>{selected=i;render()});return b}));
  const previous=$('#compare-select').value;
  $('#compare-select').replaceChildren(...vehicles.flatMap((v,i)=>{if(i===selected)return [];const o=document.createElement('option');o.value=i;o.textContent=v.name;return[o]}));
  if(previous!==''&&Number(previous)!==selected)$('#compare-select').value=previous;
  else $('#compare-select').value=selected===9?'0':'9';
  compare();
}
function compare(){const a=vehicles[selected],b=vehicles[Number($('#compare-select').value)];$('#compare-result').replaceChildren(...[['Cargo',a.cargo,b.cargo],['Speed',a.speed,b.speed]].map(([label,x,y])=>{const span=document.createElement('span');span.textContent=label+': ';const bold=document.createElement('b');bold.textContent=x+' vs '+y;span.append(bold);return span}));}
document.querySelectorAll('[data-filter]').forEach(b=>b.addEventListener('click',()=>{filter=b.dataset.filter;document.querySelectorAll('[data-filter]').forEach(x=>{x.classList.toggle('active',x===b);x.setAttribute('aria-pressed',x===b)});const list=filtered();if(!list.some(x=>x.i===selected))selected=list[0].i;render()}));
function step(n){const list=filtered(),i=list.findIndex(x=>x.i===selected);selected=list[(i+n+list.length)%list.length].i;render()}
$('#prev-vehicle').addEventListener('click',()=>step(-1));$('#next-vehicle').addEventListener('click',()=>step(1));$('#compare-select').addEventListener('change',compare);
const map=$('#district-map');for(let i=0;i<36;i++){const block=document.createElement('span');block.className='map-block';block.dataset.district=Math.floor(i/6/2)*2+Math.floor(i%6/3);if(i%6===5)block.classList.add('water');map.append(block)}
function setDistrict(i){const d=districts[i];$('#district-number').textContent='DISTRICT '+String(i+1).padStart(2,'0');$('#district-name').textContent=d.name;$('#district-description').textContent=d.description;$('#district-tip').textContent=d.tip;document.querySelectorAll('.district-tabs button').forEach((b,n)=>b.setAttribute('aria-pressed',n===i));document.querySelectorAll('.map-block').forEach(b=>b.classList.toggle('current',Number(b.dataset.district)===i))}
districts.forEach((d,i)=>{const b=document.createElement('button');b.textContent=d.name;b.addEventListener('click',()=>setDistrict(i));$('.district-tabs').append(b)});
const menu=$('.menu-toggle');function closeMenu(){menu.setAttribute('aria-expanded','false');$('#nav').classList.remove('open')}
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));$('#nav').classList.toggle('open',open)});
$('#nav').addEventListener('click',e=>{if(e.target.closest('a'))closeMenu()});document.addEventListener('keydown',e=>{if(e.key==='Escape'&&menu.getAttribute('aria-expanded')==='true'){closeMenu();menu.focus()}});
let toastTimer;$('#copy-link').addEventListener('click',async()=>{try{await navigator.clipboard.writeText('https://www.roblox.com/games/130190840297026/');$('#toast').textContent='Game link copied. See you at Dispatch!'}catch{$('#toast').textContent='Game link: roblox.com/games/130190840297026/'}$('#toast').classList.add('visible');clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('#toast').classList.remove('visible'),5000)});
if('IntersectionObserver' in window&&!matchMedia('(prefers-reduced-motion: reduce)').matches){const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in-view');observer.unobserve(e.target)}}),{threshold:.08});document.querySelectorAll('.section-head,.steps article,.conditions article,.delivery-receipt,.pass-grid article,.update-list article,.final-cta').forEach((el,i)=>{el.classList.add('reveal');el.style.transitionDelay=(i%3)*70+'ms';observer.observe(el)})}
render();setDistrict(0);

let motionPaused=false;try{motionPaused=localStorage.getItem("dd-motion-paused")==="true"}catch{}
function updateMotion(){document.body.classList.toggle("motion-paused",motionPaused);$("#motion-toggle").textContent=motionPaused?"Resume motion":"Pause motion";$("#motion-toggle").setAttribute("aria-pressed",String(motionPaused))}
$("#motion-toggle").addEventListener("click",()=>{motionPaused=!motionPaused;updateMotion();try{localStorage.setItem("dd-motion-paused",String(motionPaused))}catch{}});updateMotion();
