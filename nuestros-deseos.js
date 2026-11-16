/*! Nuestros deseos - escena 3D de faroles. Un solo archivo: <script src="nuestros-deseos.js"></script> */
(function(){
"use strict";
if(window.__nuestrosDeseos)return;window.__nuestrosDeseos=true;
var CSS="\n:host{--ink:#fbe9d0;--glow:#ffb35a;--panel:rgba(24,8,28,.78);color-scheme:dark}\n*{box-sizing:border-box}\n.root{position:absolute;inset:0;overflow:hidden}\n.root{background:radial-gradient(120% 90% at 50% 35%,#7a2a55 0%,#4a1c47 40%,#1d0b25 100%);color:var(--ink);font-family:Georgia,\"Palatino Linotype\",serif}\ncanvas{position:fixed;inset:0;display:block}\n#title{position:fixed;left:0;right:0;top:max(18px,env(safe-area-inset-top,0px));text-align:center;pointer-events:none;font-size:clamp(20px,3.2vw,34px);font-style:italic;letter-spacing:.02em;text-shadow:0 0 18px rgba(255,170,80,.6)}\n#title small{display:block;font-size:.5em;opacity:.7;margin-top:4px;font-style:normal}\n#edit{position:fixed;right:14px;top:max(14px,env(safe-area-inset-top,0px));font:inherit;font-size:15px;color:var(--ink);background:var(--panel);border:1px solid rgba(255,190,120,.4);border-radius:20px;padding:8px 14px;cursor:pointer}\n#edit:focus-visible,button:focus-visible,textarea:focus-visible{outline:2px solid var(--glow);outline-offset:2px}\n#card{position:fixed;left:50%;bottom:max(28px,env(safe-area-inset-bottom,0px));transform:translate(-50%,20px);max-width:min(560px,90vw);padding:22px 28px 20px;background:var(--panel);border:1px solid rgba(255,190,120,.45);border-radius:18px;text-align:center;opacity:0;pointer-events:none;transition:opacity .4s,transform .4s;backdrop-filter:blur(8px);box-shadow:0 0 60px rgba(255,150,60,.35)}\n#card.on{opacity:1;transform:translate(-50%,0);pointer-events:auto}\n#card p{margin:0;font-size:clamp(20px,3vw,28px);line-height:1.4;font-style:italic}\n#card button{margin-top:12px;font:inherit;font-size:14px;color:var(--ink);background:none;border:0;opacity:.7;cursor:pointer;text-decoration:underline}\n#panel{position:fixed;inset:0;display:none;align-items:center;justify-content:center;background:rgba(10,3,14,.7);padding:20px}\n#panel.on{display:flex}\n#panel div{width:min(520px,100%);background:#25102c;border:1px solid rgba(255,190,120,.4);border-radius:16px;padding:20px}\n#panel h2{margin:0 0 6px;font-weight:normal;font-style:italic;font-size:22px}\n#panel p{margin:0 0 10px;font-size:14px;opacity:.75;line-height:1.4}\ntextarea{width:100%;height:240px;resize:vertical;font:16px/1.5 Georgia,serif;color:var(--ink);background:#14061a;border:1px solid rgba(255,190,120,.35);border-radius:10px;padding:10px}\n.row{display:flex;flex-wrap:wrap;gap:10px;justify-content:flex-end;margin-top:12px}\n.row button{font:inherit;font-size:15px;color:var(--ink);background:none;border:1px solid rgba(255,190,120,.4);border-radius:18px;padding:8px 16px;cursor:pointer}\n.row .go{background:#c4601f;border-color:#c4601f}\n#hint{position:fixed;left:14px;bottom:max(14px,env(safe-area-inset-bottom,0px));font-size:13px;opacity:.6;pointer-events:none}\n\n#title,#edit,#hint{z-index:5}\n#card{z-index:6;width:min(430px,90vw);padding:22px 24px 16px;border-radius:16px 16px 24px 24px;border:2px solid rgba(214,120,40,.55);color:#6b3010;background:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='96' height='96'%3E%3Cg fill='none' stroke='%23ea8a30' stroke-width='1.6' opacity='.6'%3E%3Cpath d='M22 28c-9-6-5-15 0-10 5-5 9 4 0 10z'/%3E%3Cpath d='M72 78c-9-6-5-15 0-10 5-5 9 4 0 10z'/%3E%3Cpath d='M76 30c-6-4-3-10 0-7 3-3 6 3 0 7z'/%3E%3C/g%3E%3C/svg%3E\"),linear-gradient(180deg,#f4bb62 0%,#ffd786 40%,#fff1bd 100%);box-shadow:0 0 90px 10px rgba(255,170,60,.65),inset 0 -30px 50px rgba(255,255,255,.55),inset 0 0 30px rgba(255,255,255,.3);backdrop-filter:none}\n#card #sunicon{width:78px;height:78px;margin:0 auto 8px}\n#card p{background:rgba(255,246,208,.85);border-radius:12px;padding:14px 16px;color:#6b3010}\n#card button{color:#8a4412;font-weight:bold;opacity:.85}\n#panel{z-index:9}\n#sil{position:fixed;left:50%;bottom:0;width:max(100vw,min(130vh,170vw));transform:translateX(-50%);pointer-events:none;z-index:2;transition:opacity .7s;user-select:none}\n.root.focus #sil{opacity:.06}\n.root::after{content:\"\";position:fixed;inset:0;pointer-events:none;z-index:1;background:radial-gradient(ellipse at 50% 45%,transparent 45%,rgba(14,2,20,.55) 100%)}\n.root,canvas{touch-action:none;-webkit-tap-highlight-color:transparent;-webkit-user-select:none;user-select:none}\n#edit{min-height:40px}\n#panel{overflow:auto}\ntextarea{height:min(50vh,300px)}\n@media (max-width:640px){#edit{top:auto;bottom:max(14px,env(safe-area-inset-bottom,0px));right:12px}}\n@media (hover:none){#hint{display:none}}\n#music{position:fixed;left:14px;top:max(14px,env(safe-area-inset-top,0px));z-index:5;font:inherit;font-size:15px;color:var(--ink);background:var(--panel);border:1px solid rgba(255,190,120,.4);border-radius:20px;padding:8px 14px;cursor:pointer;min-height:40px}\n#music:focus-visible{outline:2px solid var(--glow);outline-offset:2px}\n@media (max-width:640px){#music{top:auto;bottom:max(14px,env(safe-area-inset-bottom,0px));left:12px}}#music{left:max(12px,env(safe-area-inset-left,0px))}#edit{right:max(12px,env(safe-area-inset-right,0px))}@media (max-height:480px){#card{padding:12px 16px 10px;width:min(420px,70vw)}#card #sunicon{width:44px;height:44px;margin-bottom:4px}#card p{font-size:18px;padding:8px 12px}#title small{display:none}}\n";
var HTML="<div id=\"title\">Nuestros deseos<small>Toca una lámpara</small></div>\n<button id=\"edit\">✎ Editar deseos</button>\n<button id=\"music\">♪ Añadir música</button><input type=\"file\" id=\"pick\" accept=\"audio/*\" hidden>\n\n<div id=\"card\" role=\"status\" aria-live=\"polite\"><div id=\"sunicon\"></div><p id=\"wish\"></p><button id=\"close\">Cerrar</button></div>\n<div id=\"panel\"><div>\n<h2>Tus deseos</h2>\n<p>Escribe todos los que quieras, uno por línea: no hay límite. Cada vez que toques una lámpara saldrá uno al azar. Si la base de datos está activada, al guardar se actualiza para todos los navegadores (pide tu clave).</p>\n<textarea id=\"ta\" aria-label=\"Lista de deseos\"></textarea><p id=\"count\" style=\"margin:8px 0 0\"></p><input id=\"clave\" type=\"password\" placeholder=\"Clave para guardar\" autocomplete=\"off\" style=\"display:none;width:100%;margin-top:8px;font:16px Georgia,serif;color:#fbe9d0;background:#14061a;border:1px solid rgba(255,190,120,.35);border-radius:10px;padding:8px 10px\"><p id=\"msg\" style=\"margin:6px 0 0;min-height:1.2em\"></p>\n<div class=\"row\"><button id=\"copy\">Copiar lista</button><button id=\"chg\">♪ Cambiar canción</button><button id=\"cancel\">Cancelar</button><button class=\"go\" id=\"save\">Guardar</button></div>\n</div></div>\n<div id=\"hint\">Mueve el cursor para cambiar la vista</div>";
var THIS=document.currentScript,CUSTOM=THIS&&THIS.getAttribute("data-three");

function fail(msg){
  var d=document.createElement("div");
  d.style.cssText="position:fixed;left:12px;right:12px;bottom:12px;z-index:2147483647;background:#3a0d0d;color:#ffd9d0;font:14px/1.4 system-ui,sans-serif;padding:10px 14px;border-radius:10px;border:1px solid #a33";
  d.textContent="Nuestros deseos: "+msg;
  (document.body||document.documentElement).appendChild(d);
  try{console.error("[deseos]",msg);}catch(e){}
}
function loadThree(ok,bad){
  if(window.THREE&&String(window.THREE.REVISION)==="128")return ok();
  var urls=[];if(CUSTOM)urls.push(CUSTOM);
  urls.push("https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js","https://cdn.jsdelivr.net/npm/three@0.128.0/build/three.min.js");
  var i=0;
  (function next(){
    if(i>=urls.length)return bad();
    var sc=document.createElement("script");sc.src=urls[i++];
    sc.onload=function(){if(window.THREE)ok();else next();};
    sc.onerror=next;
    document.head.appendChild(sc);
  })();
}
function mount(){
  if(!document.body.attachShadow){fail("este navegador es demasiado antiguo.");return;}
  var host=document.createElement("div");
  host.id="nuestros-deseos";
  host.style.cssText="position:fixed;left:0;top:0;right:0;bottom:0;z-index:2147483000;display:block;margin:0;padding:0";
  var shadow=host.attachShadow({mode:"open"});
  var st=document.createElement("style");st.textContent=CSS;shadow.appendChild(st);
  var root=document.createElement("div");root.className="root";root.innerHTML=HTML;shadow.appendChild(root);
  document.body.appendChild(host);
  document.documentElement.style.overflow="hidden";document.body.style.overflow="hidden";
  document.title="Nuestros deseos";
  loadThree(function(){
    try{run(shadow,root,host);}
    catch(err){fail((err&&err.message)||String(err));}
  },function(){fail("no se pudo cargar three.js (sin conexión o bloqueado). Puedes alojarlo tú y usar data-three=\"ruta/three.min.js\".");});
}
function run(D,root,host){
var DEBUG=/[?&]debug/.test(location.search),hud=null;
function dbg(m){if(DEBUG){if(!hud){hud=document.createElement("div");hud.style.cssText="position:absolute;left:8px;top:70px;z-index:9;font:12px monospace;background:rgba(0,0,0,.7);color:#8f8;padding:4px 8px;border-radius:6px;pointer-events:none";root.appendChild(hud);}hud.textContent=m;try{console.log("[deseos]",m);}catch(e){}}}
dbg("listo");

var DEFAULT_WISHES=[
"Deseo ver el mundo más allá de la torre.",
"Deseo que mi familia esté siempre feliz y sana.",
"Deseo encontrar mi lugar en el mundo.",
"Deseo tener el valor de seguir mis sueños.",
"Deseo que esta noche nunca termine.",
"Deseo volver a abrazar a quien extraño.",
"Deseo aprender a volar muy alto.",
"Deseo que la luz siempre me guíe a casa.",
"Deseo que todos mis amigos cumplan sus metas.",
"Deseo paz para todo el reino."
];
var KEY="lamparas-deseos-v1";
var wishes=DEFAULT_WISHES.slice();
try{var s=localStorage.getItem(KEY);if(s){var a=JSON.parse(s);if(Array.isArray(a)&&a.length)wishes=a;}}catch(e){}
/* Lista compartida: si existe deseos.txt junto al script, esa lista manda en todos los navegadores */
var DBU=((THIS&&THIS.getAttribute("data-supabase-url"))||"").replace(/\/+$/,""),DBK=(THIS&&THIS.getAttribute("data-supabase-key"))||"";
var AH=DBK.indexOf("eyJ")===0?{apikey:DBK,Authorization:"Bearer "+DBK}:{apikey:DBK};
var prio=0;
function setList(l,p){if(p>=prio){prio=p;wishes=l;bag=[];}}
var wf=(THIS&&THIS.getAttribute("data-deseos"))||"deseos.txt";
try{fetch(new URL(wf,(THIS&&THIS.src)||location.href).href+"?v="+Date.now(),{cache:"no-store"}).then(function(r){return r.ok?r.text():"";}).then(function(t){var l=t.split(/\r?\n/).map(function(x){return x.trim();}).filter(Boolean);if(l.length)setList(l,1);}).catch(function(){});}catch(e){}
if(DBU&&DBK){try{fetch(DBU+"/rest/v1/deseos?select=texto&order=id.asc",{headers:AH,cache:"no-store"}).then(function(r){return r.ok?r.json():[];}).then(function(rows){var l=(rows||[]).map(function(x){return String(x.texto||"").trim();}).filter(Boolean);if(l.length)setList(l,2);}).catch(function(){});}catch(e){}}

var W=innerWidth,H=innerHeight;
var small=Math.min(W,H)<700||/Mobi|Android/i.test(navigator.userAgent);
var renderer=new THREE.WebGLRenderer({antialias:true,alpha:true});
renderer.setPixelRatio(Math.min(devicePixelRatio,small?1.5:2));renderer.localClippingEnabled=true;
renderer.setSize(W,H);
root.appendChild(renderer.domElement);
var scene=new THREE.Scene();
scene.fog=new THREE.FogExp2(0x5a2050,.013);
var camera=new THREE.PerspectiveCamera(50,W/H,.1,1500);
camera.position.set(0,2.4,11);

function tex(draw,w,h){var c=document.createElement("canvas");c.width=w;c.height=h;draw(c.getContext("2d"),w,h);return new THREE.CanvasTexture(c);}
var glowTex=tex(function(g,w,h){var r=g.createRadialGradient(w/2,h/2,0,w/2,h/2,w/2);r.addColorStop(0,"rgba(255,220,150,1)");r.addColorStop(.25,"rgba(255,150,70,.55)");r.addColorStop(1,"rgba(255,90,60,0)");g.fillStyle=r;g.fillRect(0,0,w,h);},128,128);
var bokehTex=tex(function(g,w,h){var r=g.createRadialGradient(w/2,h/2,0,w/2,h/2,w/2);r.addColorStop(0,"rgba(255,255,255,.9)");r.addColorStop(.7,"rgba(255,255,255,.7)");r.addColorStop(.9,"rgba(255,255,255,.95)");r.addColorStop(1,"rgba(255,255,255,0)");g.fillStyle=r;g.fillRect(0,0,w,h);},64,64);
var paperTex=tex(function(g,w,h){
  var r=g.createLinearGradient(0,0,0,h);r.addColorStop(0,"#f4bb62");r.addColorStop(.45,"#ffd786");r.addColorStop(1,"#fff1bd");
  g.fillStyle=r;g.fillRect(0,0,w,h);
  var ink="rgba(234,138,48,.88)";
  function heart(x,y,s){g.beginPath();g.moveTo(x,y+s*.4);g.bezierCurveTo(x-s*1.0,y-s*.3,x-s*.45,y-s*.95,x,y-s*.4);g.bezierCurveTo(x+s*.45,y-s*.95,x+s*1.0,y-s*.3,x,y+s*.4);g.stroke();}
  function sun(cx,cy,R){
    g.fillStyle=ink;g.beginPath();g.arc(cx,cy,R,0,6.283);g.fill();
    for(var k=0;k<14;k++){var L=R*(k%2?1.6:2.0);g.save();g.translate(cx,cy);g.rotate(k/14*6.283+.25);g.beginPath();g.moveTo(R*1.05,-R*.3);g.quadraticCurveTo(R*1.5,-R*.34,L,R*.14);g.quadraticCurveTo(R*1.45,R*.22,R*1.05,R*.32);g.closePath();g.fill();g.restore();}
    g.strokeStyle="rgba(255,225,150,.55)";g.lineWidth=4;g.beginPath();g.arc(cx,cy,R*.72,0,6.283);g.stroke();
  }
  var sx=[w*.25,w*.75],sy=h*.48;
  g.strokeStyle=ink;g.lineWidth=3;
  var seed=7;function rnd(){seed=(seed*16807)%2147483647;return seed/2147483647;}
  for(var i=0;i<70;i++){
    var x=rnd()*w,y=h*.08+rnd()*h*.84,near=false;
    for(var q=0;q<2;q++){if(Math.abs(x-sx[q])<135&&Math.abs(y-sy)<135)near=true;}
    if(!near)heart(x,y,8+rnd()*6);
  }
  sun(sx[0],sy,58);sun(sx[1],sy,58);
  var e=g.createLinearGradient(0,0,w,0);
},1024,400);

/* ---------- Lámparas ---------- */
var lampGeo=new THREE.CylinderGeometry(.55,.5,1.25,48,1,true);
var topGeo=new THREE.CircleGeometry(.55,48);topGeo.rotateX(-Math.PI/2);
var innerGeo=new THREE.CircleGeometry(.5,48);innerGeo.rotateX(Math.PI/2);
var reflMat=new THREE.MeshBasicMaterial({map:paperTex,transparent:true,opacity:.3,side:THREE.DoubleSide,depthWrite:false});
function addRefl(g){var u=g.userData;
  
  u.rh=new THREE.Sprite(new THREE.SpriteMaterial({map:glowTex,blending:THREE.AdditiveBlending,depthWrite:false,transparent:true,fog:false,opacity:.3}));}
var lamps=[],pickables=[];
var tints=[0xffffff,0xffd0b0,0xffb0b8,0xffe0a0];
function makeLamp(i){
  var g=new THREE.Group();
  var tint=tints[i%tints.length];
  var body=new THREE.Mesh(lampGeo,new THREE.MeshBasicMaterial({map:paperTex,color:0xffffff,side:THREE.DoubleSide}));
  var top=new THREE.Mesh(topGeo,new THREE.MeshBasicMaterial({color:0xeaa84e,side:THREE.DoubleSide}));
  top.position.y=.625;
  var inner=new THREE.Mesh(innerGeo,new THREE.MeshBasicMaterial({color:0xfff6c8,side:THREE.DoubleSide}));
  inner.position.y=-.55;
  var halo=new THREE.Sprite(new THREE.SpriteMaterial({map:glowTex,blending:THREE.AdditiveBlending,depthWrite:false,transparent:true,fog:false,opacity:.5}));
  halo.scale.set(2.8,2.8,1);halo.position.y=-.2;
  var flame=new THREE.Sprite(new THREE.SpriteMaterial({map:glowTex,blending:THREE.AdditiveBlending,depthWrite:false,transparent:true,fog:false,color:0xffe6a0,opacity:.6}));
  flame.scale.set(1.2,1.2,1);flame.position.y=-.62;
  g.add(body,top,inner,halo,flame);
  body.userData.lamp=g;
  var z=-4-Math.random()*56;
  if(i%14===0)z=-3-Math.random()*6;
  var spread=(10-z)*.75*sf();
  g.position.set((Math.random()*2-1)*spread,Math.random()*10,z);
  var sc=(.6+Math.random()*.4)*(1+Math.max(0,-z)/40);
  g.scale.setScalar(sc);
  g.userData={id:i,base:sc,speed:.25+Math.random()*.35,ph:Math.random()*6.28,halo:halo,flame:flame,body:body,hover:0,pulse:0};
  addRefl(g);
  scene.add(g);lamps.push(g);pickables.push(body);
}
for(var i=0;i<(small?40:70);i++)makeLamp(i);

/* ---------- Fondo dinámico: capas de luces lejanas que suben y titilan ---------- */
var bms=[],neb=[];
var VS="uniform float uTime,uScale,uTop,uCY,uCZ,uMir;attribute float aSize,aPh,aSp,aR;attribute vec3 aCol;varying vec3 vC;varying float vA;void main(){vec3 p=position;float dd=uCZ-p.z;float hh=uCY+dd*uTop;p.y=mod(aR*hh+uTime*aSp,hh);if(uMir>.5)p.y=-p.y;p.x+=sin(uTime*.3+aPh)*1.4;vec4 mv=modelViewMatrix*vec4(p,1.0);gl_PointSize=aSize*uScale/-mv.z;gl_Position=projectionMatrix*mv;vC=aCol;vA=.6+.4*sin(uTime*(.8+aSp*.5)+aPh*5.0);}";
var FS="uniform sampler2D uMap;uniform float uA;varying vec3 vC;varying float vA;void main(){float a=texture2D(uMap,gl_PointCoord).a*vA;gl_FragColor=vec4(vC,a*uA);}";
function mkPts(n,sx,y0,y1,za,zb,sA,sB,pA,pB,pal,map,mirror){
  var pos=new Float32Array(n*3),col=new Float32Array(n*3),sz=new Float32Array(n),ph=new Float32Array(n),sp=new Float32Array(n),rr=new Float32Array(n);
  for(var i=0;i<n;i++){
    pos[i*3]=(Math.random()*2-1)*sx;pos[i*3+1]=y0+Math.random()*(y1-y0);pos[i*3+2]=za+Math.random()*(zb-za);
    var c=pal[i%pal.length],k=.2+Math.random()*.45;col[i*3]=c[0]*k;col[i*3+1]=c[1]*k;col[i*3+2]=c[2]*k;
    sz[i]=sA+Math.random()*(sB-sA);ph[i]=Math.random()*6.28;sp[i]=pA+Math.random()*(pB-pA);rr[i]=Math.random();
  }
  var g=new THREE.BufferGeometry();
  g.setAttribute("position",new THREE.BufferAttribute(pos,3));g.setAttribute("aCol",new THREE.BufferAttribute(col,3));
  g.setAttribute("aSize",new THREE.BufferAttribute(sz,1));g.setAttribute("aPh",new THREE.BufferAttribute(ph,1));g.setAttribute("aSp",new THREE.BufferAttribute(sp,1));g.setAttribute("aR",new THREE.BufferAttribute(rr,1));
  var m=new THREE.ShaderMaterial({uniforms:{uTop:{value:1},uCY:{value:2.4},uCZ:{value:11},uMir:{value:0},uA:{value:1},uTime:{value:0},uScale:{value:H*renderer.getPixelRatio()*.5},uMap:{value:map}},vertexShader:VS,fragmentShader:FS,transparent:true,depthWrite:false,blending:THREE.AdditiveBlending});
  var pt=new THREE.Points(g,m);pt.frustumCulled=false;scene.add(pt);bms.push(m);
  if(false){var m2=m.clone();m2.uniforms.uMir.value=1;m2.uniforms.uA.value=.4;var p2=new THREE.Points(g,m2);p2.frustumCulled=false;scene.add(p2);bms.push(m2);}
  return pt;
}
var warm=[[1,.62,.3],[1,.42,.45],[1,.8,.45],[.95,.5,.7]],emb=[[1,.85,.5],[1,.7,.35]];
mkPts(small?220:450,110,-14,56,-130,-60,3.5,7,.15,.5,warm,bokehTex,true);
mkPts(small?70:120,70,-14,56,-60,-18,1.3,3,.35,.9,warm,bokehTex,true);
mkPts(small?40:90,14,-10,30,-10,3,.1,.28,.5,1.3,emb,glowTex);
(function(){
  var cols=[0xff7a3a,0xff4f7a,0xc04aa0,0xffa040];
  for(var q=0;q<9;q++){
    var sp=new THREE.Sprite(new THREE.SpriteMaterial({map:glowTex,blending:THREE.AdditiveBlending,depthWrite:false,transparent:true,fog:false,color:cols[q%4],opacity:.08}));
    sp.scale.set(90+Math.random()*60,70+Math.random()*50,1);
    sp.position.set((Math.random()*2-1)*90,4+Math.random()*30,-160);
    sp.userData={ph:Math.random()*6.28,bx:sp.position.x,by:sp.position.y};
    scene.add(sp);neb.push(sp);
  }
})();

/* ---------- Lago, cielo y barca en 3D ---------- */
renderer.localClippingEnabled=true;
scene.add(new THREE.HemisphereLight(0xffb070,0x1a0820,.65));
var pl=new THREE.PointLight(0xff9a50,1.3,70);pl.position.set(0,7,8);scene.add(pl);
var rim=new THREE.DirectionalLight(0xff8040,1.1);rim.position.set(0,8,-12);scene.add(rim);
// cielo degradado (se funde con el horizonte del lago)
var sky=new THREE.Mesh(new THREE.SphereGeometry(700,24,16),new THREE.ShaderMaterial({side:THREE.BackSide,depthWrite:false,fog:false,
 vertexShader:"varying vec3 vP;void main(){vP=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",
 fragmentShader:"varying vec3 vP;void main(){float e=normalize(vP).y;vec3 hz=vec3(.62,.24,.30),mid=vec3(.32,.11,.32),top=vec3(.09,.03,.16);vec3 c=mix(hz,mid,smoothstep(0.0,.28,e));c=mix(c,top,smoothstep(.2,.85,e));gl_FragColor=vec4(c,1.0);}"}));
sky.renderOrder=-3;scene.add(sky);
// agua
var reflRT=new THREE.WebGLRenderTarget(512,512,{minFilter:THREE.LinearFilter,magFilter:THREE.LinearFilter,format:THREE.RGBAFormat}),mc=new THREE.PerspectiveCamera(),texM=new THREE.Matrix4();
var water=new THREE.Mesh(new THREE.PlaneGeometry(1600,1600),new THREE.ShaderMaterial({uniforms:{uTime:{value:0},uRef:{value:reflRT.texture},uTex:{value:texM}},depthWrite:false,fog:false,
 vertexShader:"varying vec3 vW;void main(){vec4 w=modelMatrix*vec4(position,1.0);vW=w.xyz;gl_Position=projectionMatrix*viewMatrix*w;}",
 fragmentShader:"varying vec3 vW;uniform float uTime;uniform sampler2D uRef;uniform mat4 uTex;"+
 "void main(){vec2 p=vW.xz;float t=uTime;vec2 g=vec2(0.0);"+
 "g+=vec2(.8,.6)*cos(dot(p,vec2(.8,.6))*1.9+t*1.3)*.6;g+=vec2(-.5,.86)*cos(dot(p,vec2(-.5,.86))*3.1+t*1.7)*.45;"+
 "g+=vec2(.95,-.3)*cos(dot(p,vec2(.95,-.3))*5.3+t*2.3)*.3;g+=vec2(-.2,-.98)*cos(dot(p,vec2(-.2,-.98))*8.7+t*3.1)*.2;"+
 "vec3 V=normalize(cameraPosition-vW);float dist=length(cameraPosition-vW);"+
 "vec3 n=normalize(vec3(-g.x*.05,1.0,-g.y*.05));float f=.1+.9*pow(1.0-clamp(dot(V,n),0.0,1.0),3.0);"+
 "vec4 pc=uTex*vec4(vW,1.0);vec2 uv=pc.xy/pc.w;float sc=1.0/(1.0+dist*.04);uv+=vec2(g.x*.010,g.y*.020)*sc;"+
 "vec3 rc=texture2D(uRef,uv).rgb*.30+texture2D(uRef,uv+vec2(0.0,.008)).rgb*.20+texture2D(uRef,uv-vec2(0.0,.008)).rgb*.20+texture2D(uRef,uv+vec2(.004,.02)).rgb*.15+texture2D(uRef,uv-vec2(.004,.02)).rgb*.15;"+
 "vec3 deep=vec3(.04,.02,.09),hz=vec3(.5,.2,.28);vec3 base=mix(deep,hz,pow(1.0-clamp(V.y,0.0,1.0),2.2));"+
 "vec3 c=mix(base,rc*.92,f*.92);"+
 "float sp=pow(max(sin(p.x*7.0+g.x*3.0+t*2.0)*sin(p.y*6.0+g.y*3.0-t*1.7),0.0),12.0);c+=vec3(1.0,.55,.3)*sp*.22*f*smoothstep(90.0,5.0,dist);"+
 "gl_FragColor=vec4(c,1.0);}"}));
water.rotation.x=-Math.PI/2;water.renderOrder=-2;scene.add(water);
// anillos de oleaje suave alrededor de la barca
var foam=[];(function(){for(var i=0;i<3;i++){var m=new THREE.Mesh(new THREE.RingGeometry(.96,1,72).rotateX(-Math.PI/2),new THREE.MeshBasicMaterial({color:0xffb080,transparent:true,opacity:0,depthWrite:false,blending:THREE.AdditiveBlending,fog:false}));m.position.y=.02;m.userData.o=i/3;scene.add(m);foam.push(m);}})();
// barca (casco abierto, proa y popa levantadas)
function hullGeo(){
  var NU=40,NV=16,L=5.2,pos=[],idx=[];
  for(var i=0;i<=NU;i++){var u=i/NU*2-1,yt=.65+.45*u*u,w=1.55*Math.pow(Math.max(0,1-u*u),.45),dp=1.05*(1-.5*u*u);
    for(var j=0;j<=NV;j++){var v=j/NV;pos.push(u*L,yt-dp*Math.sin(Math.PI*v),-w*Math.cos(Math.PI*v));}}
  for(var i=0;i<NU;i++)for(var j=0;j<NV;j++){var a=i*(NV+1)+j,b=a+NV+1;idx.push(a,b,a+1,b,b+1,a+1);}
  var g=new THREE.BufferGeometry();g.setAttribute("position",new THREE.Float32BufferAttribute(pos,3));g.setIndex(idx);g.computeVertexNormals();return g;
}
var clipUp=new THREE.Plane(new THREE.Vector3(0,1,0),0),clipDown=new THREE.Plane(new THREE.Vector3(0,-1,0),0);
var boat=new THREE.Group();
boat.add(new THREE.Mesh(hullGeo(),new THREE.MeshStandardMaterial({color:0x1b0e10,roughness:.8,side:THREE.DoubleSide,clippingPlanes:[clipUp]})));
(function(){
  var pts=[],N=40,L=5.2;
  function ed(u){return new THREE.Vector3(u*L,.65+.45*u*u,0);}
  for(var i=0;i<=N;i++){var u=i/N*2-1,w=1.55*Math.pow(Math.max(0,1-u*u),.45);pts.push(new THREE.Vector3(u*L,.65+.45*u*u,-w));}
  for(var i=N-1;i>=1;i--){var u=i/N*2-1,w=1.55*Math.pow(Math.max(0,1-u*u),.45);pts.push(new THREE.Vector3(u*L,.65+.45*u*u,w));}
  boat.add(new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts,true),160,.07,6,true),new THREE.MeshStandardMaterial({color:0x2e1a14,roughness:.7})));
})();
// pareja: contorno exacto de tu foto, extruido en 3D
var FIG=[{"o":[352,787,352,791,820,791,832,769,835,760,835,753,836,752,835,737,830,722,821,706,815,699,807,693,794,688,774,687,773,686,777,684,784,684,785,683,799,687,820,686,823,684,826,679,833,678,836,675,837,671,842,668,843,663,845,662,850,666,858,669,872,678,881,681,892,682,909,691,913,695,947,711,946,713,942,712,941,713,927,714,914,721,907,728,898,742,881,791,1332,791,1328,780,1325,777,1320,765,1309,750,1309,744,1310,743,1309,733,1305,729,1303,729,1295,723,1299,715,1299,713,1297,711,1299,709,1300,710,1300,709,1291,710,1290,708,1288,708,1282,703,1283,693,1290,682,1294,672,1292,669,1288,669,1275,664,1269,658,1269,656,1275,646,1273,648,1272,646,1278,637,1280,638,1278,642,1279,647,1280,647,1279,642,1282,634,1281,635,1279,634,1280,627,1275,623,1274,625,1272,625,1267,622,1266,619,1260,616,1265,603,1268,601,1271,595,1270,593,1271,591,1268,588,1268,584,1268,587,1265,588,1252,583,1256,578,1259,566,1255,574,1254,570,1257,564,1257,557,1258,556,1256,553,1250,548,1237,545,1235,543,1234,539,1235,533,1234,528,1231,523,1232,520,1241,522,1247,527,1247,533,1243,539,1244,544,1245,544,1245,539,1249,531,1249,527,1246,522,1232,513,1233,508,1237,505,1241,498,1241,491,1238,486,1235,484,1218,483,1214,481,1213,478,1211,477,1211,475,1213,473,1212,472,1215,467,1215,462,1217,457,1215,447,1212,445,1195,442,1193,440,1195,436,1192,438,1185,431,1185,427,1184,430,1182,429,1183,420,1185,416,1184,415,1185,411,1183,405,1184,403,1179,400,1171,401,1162,394,1161,391,1162,388,1161,385,1162,369,1158,362,1155,360,1146,358,1140,353,1138,350,1137,344,1133,336,1132,331,1127,326,1122,324,1119,321,1121,320,1117,314,1107,312,1106,310,1100,308,1091,307,1085,303,1089,302,1095,306,1093,304,1094,303,1087,301,1078,301,1076,302,1075,301,1064,306,1059,303,1047,300,1039,306,1032,303,1025,303,1021,308,1019,308,1017,310,1010,311,1008,309,1004,311,1001,314,1001,316,998,317,997,328,988,334,982,340,977,352,978,353,977,363,981,369,978,358,979,351,980,350,982,352,982,357,984,353,983,345,985,341,990,336,997,332,998,333,989,346,983,364,984,378,983,379,981,379,980,377,977,378,980,380,982,379,983,382,979,388,972,395,966,399,963,403,964,408,967,411,969,411,973,414,973,419,970,424,971,426,975,428,971,433,971,436,975,442,975,446,973,448,972,452,974,460,983,464,1011,464,1015,467,1014,476,1012,477,1012,479,1006,489,1005,495,1009,506,1015,511,1013,515,1013,519,1017,526,1017,528,1015,529,1014,532,1010,534,1004,540,1005,549,1009,556,1011,566,1015,571,1012,580,1017,587,1014,591,1017,588,1019,593,1015,597,1010,596,1004,590,1004,586,1008,582,1004,584,1003,588,1001,589,1001,597,1002,599,1001,596,1002,591,1011,599,1012,602,1010,604,1009,603,1002,610,1000,615,1001,623,1003,624,1005,630,1006,629,1009,630,1007,632,1004,641,1006,643,1005,639,1009,632,1018,641,1015,648,1015,651,1012,654,1011,658,1007,657,1004,660,1000,659,996,660,958,659,948,656,933,654,916,648,908,647,897,639,874,618,870,616,865,616,862,618,854,613,835,619,831,619,830,618,831,615,827,611,819,609,813,612,809,612,805,614,783,630,771,630,763,633,757,633,753,635,745,631,735,630,727,634,722,631,718,627,717,624,712,620,707,618,705,619,693,618,691,616,692,609,690,606,686,591,679,583,677,577,678,574,670,561,670,555,672,551,672,545,673,544,673,530,668,510,661,497,654,488,659,482,659,476,655,467,645,457,652,449,657,439,660,437,669,436,677,438,697,438,700,437,705,431,706,428,705,416,711,410,711,407,709,403,714,400,713,397,714,388,718,386,722,386,726,383,727,380,713,355,713,349,718,343,717,330,716,329,716,318,713,306,716,305,716,303,720,300,719,299,722,297,723,298,722,297,724,295,725,290,723,288,723,284,721,280,716,277,718,276,718,275,717,276,715,275,716,272,712,271,713,269,716,269,712,268,711,266,701,265,699,263,698,264,697,262,690,259,689,256,685,253,670,252,664,245,662,246,658,245,651,248,647,245,639,246,636,244,626,244,620,247,615,246,614,245,617,244,618,242,609,243,601,249,594,250,585,260,579,261,577,265,568,268,560,276,560,278,553,290,555,287,557,289,552,294,552,296,549,298,549,303,551,305,548,311,550,312,548,317,548,322,549,323,548,332,550,334,550,341,553,346,554,352,565,370,569,387,568,392,565,393,557,390,549,390,541,388,529,388,528,389,515,388,512,389,506,397,505,402,506,409,504,412,496,415,480,416,475,418,470,423,469,426,469,439,464,446,463,455,465,461,471,467,469,468,454,486,445,500,437,517,435,519,435,522,421,552,412,578,403,599,403,603,388,650,386,663,384,668,382,678,382,687,381,688,382,701,371,712,367,722,366,734,367,735,367,740,371,748,370,755,362,765,359,772,359,782,361,786,359,788],"h":[[638,716,637,718,619,722,615,724,614,723,615,720,617,718,621,717,627,710],[1075,704,1078,706,1080,710,1082,708,1090,713,1088,716,1085,717,1085,719,1087,720,1081,730,1081,736,1083,739,1082,741,1059,734,1051,733,1049,731,1056,728,1064,720],[1022,603,1024,605,1024,609,1022,611,1024,615,1021,619,1017,621,1012,616,1014,618,1015,624,1013,627,1011,627,1007,624,1006,617,1013,609],[1234,487,1238,492,1239,498,1236,503,1235,502,1236,499,1231,508,1231,511,1228,514,1226,514,1224,511,1227,499,1226,498,1226,493,1223,489,1226,487],[1018,479,1020,481,1020,485,1024,493,1024,495,1021,498,1019,506,1013,501,1011,497,1011,491],[1199,448,1208,448,1213,454,1213,457,1211,459,1211,461,1210,462,1209,461,1209,465,1207,467,1205,464,1203,464,1199,460,1199,454,1198,453,1202,452,1200,452,1198,450]]}],BOX=[352, 1332, 242, 791],FS_=4.3/(BOX[3]-BOX[2]);
(function(){
  var cx=(BOX[0]+BOX[1])/2,D=1.15,mat=new THREE.MeshStandardMaterial({color:0x070307,roughness:.9,metalness:0});
  function P(arr){var r=[];for(var i=0;i<arr.length;i+=2)r.push(new THREE.Vector2((arr[i]-cx)*FS_,(BOX[3]-arr[i+1])*FS_));return r;}
  var grp=new THREE.Group();
  FIG.forEach(function(c){
    var sh=new THREE.Shape(P(c.o));
    c.h.forEach(function(h){sh.holes.push(new THREE.Path(P(h)));});
    var g=new THREE.ExtrudeGeometry(sh,{depth:D,bevelEnabled:false});g.translate(0,0,-D/2);
    grp.add(new THREE.Mesh(g,mat));
  });
  grp.position.y=.22;boat.add(grp);
})();
scene.add(boat);
// reflejo de la barca y la pareja en el agua
var mirMat=new THREE.MeshBasicMaterial({color:0x000000,transparent:true,opacity:.4,depthWrite:false,side:THREE.DoubleSide,clippingPlanes:[clipDown]});
var boatMir=boat.clone();boatMir.traverse(function(o){if(o.isMesh)o.material=mirMat;});boatMir.visible=false;

/* ---------- Interacción ---------- */
var ray=new THREE.Raycaster(),mouse=new THREE.Vector2(),px=0,py=0,hovered=null,down=null;
var card=D.getElementById("card"),wishEl=D.getElementById("wish"),focused=null;
(function(){var r="";for(var k=0;k<14;k++){r+='<path transform="rotate('+(k*360/14+14)+' 50 50)" d="M64 44 Q70 43 '+(k%2?74:80)+' 50.5 Q70 56 64 56Z"/>';}
D.getElementById("sunicon").innerHTML='<svg viewBox="0 0 100 100" width="100%" height="100%" fill="#ea8a30"><circle cx="50" cy="50" r="15"/>'+r+'<circle cx="50" cy="50" r="11" fill="none" stroke="#ffe19a" stroke-width="1.2"/></svg>';})();
function hideWish(){card.classList.remove("on");root.classList.remove("focus");focused=null;}
function setMouse(e){mouse.x=e.clientX/innerWidth*2-1;mouse.y=-(e.clientY/innerHeight)*2+1;}
var _v=new THREE.Vector3();
function pick(){
  /* Detección generosa: se elige el farol más cercano al dedo/cursor en pantalla, con un área de toque amplia */
  var mx=(mouse.x*.5+.5)*W,my=(-mouse.y*.5+.5)*H,best=null,bs=1,th=Math.tan(camera.fov*Math.PI/360);
  camera.updateMatrixWorld();
  for(var i=0;i<lamps.length;i++){
    var g=lamps[i];_v.copy(g.position).project(camera);
    if(_v.z>1||_v.z<-1)continue;
    var dx=(_v.x*.5+.5)*W-mx,dy=(-_v.y*.5+.5)*H-my;
    var d=camera.position.distanceTo(g.position),r=Math.max(small?36:28,g.scale.x*1.15*(H*.5)/(th*d));
    var q=Math.sqrt(dx*dx+dy*dy)/r;
    if(q<bs){bs=q;best=g;}
  }
  return best;
}
function ptr(e){var r=renderer.domElement.getBoundingClientRect();mouse.x=((e.clientX-r.left)/r.width)*2-1;mouse.y=-((e.clientY-r.top)/r.height)*2+1;}
function onUI(e){var p=e.composedPath?e.composedPath():[e.target];for(var i=0;i<p.length;i++){var el=p[i];if(!el)continue;if(el.id==="card"||el.id==="panel"||el.id==="music"||el.id==="edit")return true;if(el.tagName==="BUTTON"||el.tagName==="TEXTAREA"||el.tagName==="INPUT")return true;}return false;}
var clicks=0;
addEventListener("pointermove",function(e){if(onUI(e))return;ptr(e);px=mouse.x;py=mouse.y;var l=pick();if(l!==hovered){hovered=l;renderer.domElement.style.cursor=l?"pointer":"default";}},true);
var dn=null;
addEventListener("pointerdown",function(e){if(onUI(e)){dn=null;return;}dn={x:e.clientX,y:e.clientY,t:Date.now()};ptr(e);},true);
addEventListener("pointerup",function(e){
  if(!dn||onUI(e))return;
  var mv=Math.hypot(e.clientX-dn.x,e.clientY-dn.y),dt=Date.now()-dn.t;dn=null;
  if(mv>16||dt>900)return;
  ptr(e);var l=pick();clicks++;
  dbg("toques: "+clicks+" | ultimo: "+Math.round(e.clientX)+","+Math.round(e.clientY)+" -> "+(l?"lampara #"+l.userData.id:"ninguna"));
  if(l)showWish(l);else hideWish();
},true);
addEventListener("pointercancel",function(){dn=null;},true);
var bag=[],lastW=-1;
function nextWish(){
  if(!bag.length){
    bag=wishes.map(function(_,i){return i;});
    for(var i=bag.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1)),x=bag[i];bag[i]=bag[j];bag[j]=x;}
    if(bag.length>1&&bag[bag.length-1]===lastW){bag.unshift(bag.pop());}
  }
  lastW=bag.pop();return wishes[lastW];
}
function showWish(l){
  l.userData.pulse=1;
  wishEl.textContent="“"+nextWish()+"”";
  focused=l;root.classList.add("focus");
  card.classList.add("on");
}
D.getElementById("close").onclick=hideWish;

var panel=D.getElementById("panel"),ta=D.getElementById("ta");
function upd(){var n=ta.value.split("\n").filter(function(x){return x.trim();}).length;D.getElementById("count").textContent=n+(n===1?" deseo":" deseos");}
ta.addEventListener("input",upd);
if(DBU&&DBK){var ci=D.getElementById("clave");ci.style.display="block";try{ci.value=sessionStorage.getItem("nd-clave")||"";}catch(e){}}
D.getElementById("copy").onclick=function(){
  var b=D.getElementById("copy");
  function ok(){b.textContent="¡Copiado!";setTimeout(function(){b.textContent="Copiar lista";},1800);}
  function old(){ta.select();try{document.execCommand("copy");ok();}catch(e){}}
  if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(ta.value).then(ok,old);}else old();
};
D.getElementById("edit").onclick=function(){ta.value=wishes.join("\n");panel.classList.add("on");upd();ta.focus();};
D.getElementById("cancel").onclick=function(){panel.classList.remove("on");};
D.getElementById("save").onclick=function(){
  var l=ta.value.split("\n").map(function(x){return x.trim();}).filter(Boolean);
  var msg=D.getElementById("msg");
  if(!l.length){msg.textContent="Escribe al menos un deseo.";return;}
  if(DBU&&DBK){
    var clave=D.getElementById("clave").value;
    msg.textContent="Guardando…";
    fetch(DBU+"/rest/v1/rpc/guardar_deseos",{method:"POST",headers:Object.assign({"Content-Type":"application/json"},AH),body:JSON.stringify({p_clave:clave,p_lista:l})})
    .then(function(r){return r.text().then(function(t){return {ok:r.ok,t:t};});})
    .then(function(o){
      if(o.ok){setList(l,3);try{sessionStorage.setItem("nd-clave",clave);}catch(e){}msg.textContent="Guardado en la base de datos ✓";setTimeout(function(){panel.classList.remove("on");msg.textContent="";},900);}
      else msg.textContent=/clave/i.test(o.t)?"Clave incorrecta.":"No se pudo guardar. Revisa la configuración.";
    }).catch(function(){msg.textContent="Sin conexión: no se pudo guardar.";});
    return;
  }
  wishes=l;bag=[];try{localStorage.setItem(KEY,JSON.stringify(l));}catch(e){}
  panel.classList.remove("on");
};
addEventListener("keydown",function(e){if(e.key==="Escape"){panel.classList.remove("on");hideWish();}});

function sf(){return Math.min(1,innerWidth/innerHeight*.75+.25);}
var CY=2.4,CZ=11,LK=3.5,LT=1,lastFov=0;
/* Distancia de cámara según el formato (que quepa la barca) y altura máxima visible a cada profundidad */
function bounds(){
  var asp=W/H,f=camera.fov*Math.PI/360;
  CZ=Math.max(11,Math.min(26,5.2/(Math.tan(f)*asp)));
  camera.position.z=CZ;
  LT=Math.tan(Math.atan((LK-CY)/CZ)+f)+.12;
}
var lastSf=sf();
function fit(){
  W=innerWidth;H=innerHeight;
  camera.aspect=W/H;camera.fov=W/H<1?68:50;camera.updateProjectionMatrix();bounds();
  renderer.setSize(W,H);
  var RS=small?.4:.6,pr=renderer.getPixelRatio();reflRT.setSize(Math.max(64,Math.floor(W*pr*RS)),Math.max(64,Math.floor(H*pr*RS)));
  for(var q=0;q<bms.length;q++){bms[q].uniforms.uScale.value=H*renderer.getPixelRatio()*.5;bms[q].uniforms.uTop.value=LT;bms[q].uniforms.uCY.value=CY;bms[q].uniforms.uCZ.value=CZ;}
  var f=sf()/lastSf;lastSf=sf();
  if(camera.fov!==lastFov){lastFov=camera.fov;for(var q=0;q<lamps.length;q++){var lm=lamps[q],hh=lm.userData.hp||lm.position,d=CZ-lm.position.z;hh.y=Math.random()*(CY+d*LT);}}
  if(Math.abs(f-1)>.001)for(var q=0;q<lamps.length;q++){var h=lamps[q].userData.hp;if(h)h.x*=f;else lamps[q].position.x*=f;}
}
addEventListener("resize",fit);addEventListener("orientationchange",function(){setTimeout(fit,250);setTimeout(fit,700);});fit();

/* ---------- Música de fondo (el archivo lo elige la persona; no se sube a ningún servidor) ---------- */
var AC=null,gain=null,srcNode=null,abuf=null,playing=false,stopped=false;
var mb=D.getElementById("music"),filePick=D.getElementById("pick");
function actx(){if(!AC){var C=window.AudioContext||window.webkitAudioContext;AC=new C();gain=AC.createGain();gain.gain.value=.7;gain.connect(AC.destination);}if(AC.state==="suspended")AC.resume();return AC;}
var MUS=(THIS&&THIS.getAttribute("data-musica"))||"",mfail=false,interacted=false;
function lbl(){mb.textContent=!abuf?((MUS&&!mfail)?"♪ Cargando…":"♪ Añadir música"):(playing?"♪ Pausar":"♪ Música");}
function stopA(){if(srcNode){try{srcNode.stop();}catch(e){}try{srcNode.disconnect();}catch(e){}srcNode=null;}playing=false;lbl();}
function playA(){if(!abuf)return;actx();stopA();srcNode=AC.createBufferSource();srcNode.buffer=abuf;srcNode.loop=true;srcNode.connect(gain);srcNode.start(0);playing=true;lbl();}
function idb(op,val,cb){try{var rq=indexedDB.open("deseos-audio",1);rq.onupgradeneeded=function(){rq.result.createObjectStore("a");};rq.onsuccess=function(){try{var st=rq.result.transaction("a",op==="set"?"readwrite":"readonly").objectStore("a");if(op==="set")st.put(val,"song");else{var g=st.get("song");g.onsuccess=function(){if(cb)cb(g.result);};}}catch(e){}};}catch(e){}}
function loadA(ab,save){actx().decodeAudioData(ab.slice(0),function(b){abuf=b;stopped=false;playA();if(save)idb("set",ab);},function(){mb.textContent="♪ Archivo no válido";setTimeout(lbl,2500);});}
filePick.onchange=function(){var f=filePick.files[0];if(!f)return;var r=new FileReader();r.onload=function(){loadA(r.result,true);};r.readAsArrayBuffer(f);filePick.value="";};
mb.onclick=function(){if(!abuf){if(MUS&&!mfail)return;filePick.click();}else if(playing){stopped=true;stopA();}else{stopped=false;playA();}};
D.getElementById("chg").onclick=function(){filePick.click();};
function loadUrl(u){
  try{fetch(new URL(u,(THIS&&THIS.src)||location.href).href).then(function(r){if(!r.ok)throw new Error("mp3");return r.arrayBuffer();})
  .then(function(ab){actx().decodeAudioData(ab,function(b){abuf=b;lbl();if(interacted&&!playing&&!stopped)playA();},function(){mfail=true;lbl();});})
  .catch(function(){mfail=true;lbl();});}catch(e){mfail=true;lbl();}
}
if(MUS){lbl();loadUrl(MUS);}
else idb("get",null,function(ab){if(ab){try{actx().decodeAudioData(ab.slice(0),function(b){abuf=b;lbl();},function(){});}catch(e){}}});
function firstGo(e){
  if(onUI(e))return;
  interacted=true;try{actx();}catch(x){}
  if(abuf){removeEventListener("click",firstGo,true);removeEventListener("touchend",firstGo,true);if(!playing&&!stopped)playA();}
}
addEventListener("click",firstGo,true);addEventListener("touchend",firstGo,true);

/* ---------- Animación ---------- */
var clock=new THREE.Clock(),reduce=matchMedia("(prefers-reduced-motion: reduce)").matches;
function loop(){
  requestAnimationFrame(loop);
  var dt=Math.min(clock.getDelta(),.05),t=clock.elapsedTime;
  var k=reduce?0:1;
  var FX=camera.position.x*.4,FZ=CZ-6,FY=CY+(LK-CY)*6/CZ+.2;
  for(var i=0;i<lamps.length;i++){
    var g=lamps[i],u=g.userData;
    if(!u.hp){u.hp=g.position.clone();u.m=0;}
    u.hp.y+=u.speed*dt*k;
    u.hp.x+=Math.sin(t*.4+u.ph)*.15*dt*k;
    var dz=CZ-u.hp.z;if(u.hp.y>CY+dz*LT){u.hp.y=Math.random()*1.2;}
    var foc=(g===focused);
    u.m+=((foc?1:0)-u.m)*Math.min(1,dt*(foc?3.2:2.5));if(!foc&&u.m<.002)u.m=0;
    var m=u.m,e=m*m*(3-2*m);
    g.position.set(u.hp.x*(1-e)+FX*e,u.hp.y*(1-e)+FY*e,u.hp.z*(1-e)+FZ*e);
    if(foc){var rt=-Math.PI/2+Math.round((g.rotation.y+Math.PI/2)/Math.PI)*Math.PI;g.rotation.y+=(rt-g.rotation.y)*Math.min(1,dt*4);}else g.rotation.y+=dt*.2*k*(1-e);
    var target=(g===hovered)?1:0;
    u.hover+=(target-u.hover)*.15;
    u.pulse=Math.max(0,u.pulse-dt*.8);
    var s=(u.base*(1-e)+2.3*e)*(1+u.hover*.25*(1-e)+Math.sin(u.pulse*Math.PI)*.35);
    g.scale.setScalar(s);
    if(u.rb){var gy=g.position.y,fd=Math.max(0,1-gy/18);u.rb.visible=u.rh.visible=fd>.02;
      u.rb.position.set(g.position.x,-gy,g.position.z);u.rb.scale.set(g.scale.x,-g.scale.y,g.scale.z);u.rb.rotation.y=g.rotation.y;
      var wob=1+.12*Math.sin(t*2.6+u.ph);u.rh.position.set(g.position.x,-gy-.3*g.scale.y,g.position.z);u.rh.scale.set(g.scale.x*2.4*wob,g.scale.x*5,1);u.rh.material.opacity=.32*fd*u.halo.material.opacity;}
    var fl=.85+Math.sin(t*5+u.ph*3)*.1+u.hover*.4+u.pulse*.5;
    u.halo.material.opacity=Math.min(1,fl)*.55;
    u.halo.scale.setScalar(2.8+u.hover*1.6+u.pulse*2);
  }
  var tm=reduce?0:t;
  for(var q=0;q<bms.length;q++)bms[q].uniforms.uTime.value=tm;
  for(var q=0;q<neb.length;q++){var nb=neb[q],nd=nb.userData;nb.position.x=nd.bx+Math.sin(tm*.05+nd.ph)*12;nb.position.y=nd.by+Math.cos(tm*.07+nd.ph)*5;nb.material.opacity=.07+.04*Math.sin(tm*.15+nd.ph*2);}
  camera.position.x+=((px*1.8+Math.sin(t*.12)*1.0*k)-camera.position.x)*.04;
  camera.position.y+=((CY+py*.6+Math.sin(t*.17)*.15*k)-camera.position.y)*.04;
  var bob=Math.sin(tm*1.1)*.05,rz=Math.sin(tm*.8)*.012;boat.position.y=bob;boat.rotation.z=rz;boatMir.position.y=-bob;boatMir.rotation.z=-rz;water.material.uniforms.uTime.value=tm;
  camera.lookAt(0,LK,0);
  for(var q=0;q<foam.length;q++){var fm=foam[q],ph=(tm*.18+fm.userData.o)%1;fm.scale.set(5.4*(1+ph*.55),1,1.7*(1+ph*1.1));fm.material.opacity=.20*(1-ph)*Math.min(1,ph*6);}
  water.visible=false;
  var rs=reflRT.height/(H*renderer.getPixelRatio());
  for(var q=0;q<bms.length;q++)bms[q].uniforms.uScale.value*=rs;
  mc.position.set(camera.position.x,-camera.position.y,camera.position.z);mc.up.set(0,-1,0);mc.lookAt(0,-LK,0);
  mc.fov=camera.fov;mc.aspect=camera.aspect;mc.near=camera.near;mc.far=camera.far;mc.updateProjectionMatrix();mc.updateMatrixWorld();
  texM.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1);texM.multiply(mc.projectionMatrix);texM.multiply(mc.matrixWorldInverse);
  renderer.clippingPlanes=[clipUp];renderer.setRenderTarget(reflRT);renderer.render(scene,mc);renderer.setRenderTarget(null);renderer.clippingPlanes=[];
  for(var q=0;q<bms.length;q++)bms[q].uniforms.uScale.value/=rs;
  water.visible=true;
  renderer.render(scene,camera);
}
loop();

}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",mount);else mount();
})();
