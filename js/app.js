const products=[
['N07 Acid Tee','Graphic','₹1,799','₹2,499','New','https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=85'],
['Concrete Logo Tee','Graphic','₹1,599','₹2,199','Sale','https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=800&q=85'],
['NOIR Oversized Tee','Oversized','₹1,899','₹2,499','New','https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=800&q=85'],
['Signal Box Tee','Oversized','₹1,499','₹2,099','Hot','https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=85'],
['Cargo 02 — Ash','Utility','₹3,499','₹4,499','New','https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=85'],
['Utility Track Pant','Utility','₹2,899','₹3,899','Sale','https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=800&q=85'],
['After Dark Bomber','Outerwear','₹4,999','₹6,499','Hot','https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=85'],
['Riot Coach Jacket','Outerwear','₹4,499','₹5,999','New','https://images.unsplash.com/photo-1544022613-e87ca75a784a?auto=format&fit=crop&w=800&q=85'],
['Static Zip Hoodie','Oversized','₹3,299','₹4,299','Sale','https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800&q=85'],
['No Signal Hoodie','Graphic','₹3,499','₹4,499','Hot','https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=800&q=85'],
['Gridline Shirt','Graphic','₹2,499','₹3,199','New','https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=85'],
['Monument Shirt','Oversized','₹2,799','₹3,499','New','https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&w=800&q=85'],
['Rework Denim','Utility','₹3,799','₹4,799','Sale','https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=85'],
['Blackout Denim','Utility','₹3,499','₹4,299','Hot','https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=800&q=85'],
['Core Sweat','Oversized','₹2,699','₹3,499','New','https://images.unsplash.com/photo-1578681994506-b8f463449011?auto=format&fit=crop&w=800&q=85'],
['Street Archive Tee','Graphic','₹1,699','₹2,299','Sale','https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=800&q=85'],
['Chrome Logo Tee','Graphic','₹1,899','₹2,499','New','https://images.unsplash.com/photo-1583743814966-8936f37f5b6e?auto=format&fit=crop&w=800&q=85'],
['Distress Longsleeve','Graphic','₹2,199','₹2,999','Hot','https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=800&q=85'],
['Flight Utility Vest','Utility','₹3,999','₹4,999','New','https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=800&q=85'],
['Racer Vest','Utility','₹2,199','₹2,999','Sale','https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=800&q=85'],
['NOIRA Cap 01','Accessories','₹999','₹1,399','New','https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=800&q=85'],
['Core Beanie','Accessories','₹899','₹1,299','Sale','https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?auto=format&fit=crop&w=800&q=85'],
['No Signal Tote','Accessories','₹1,299','₹1,799','Hot','https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=800&q=85'],
['Metal Tag Chain','Accessories','₹799','₹1,099','New','https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=85'],
['Raw Edge Shorts','Utility','₹1,999','₹2,699','Sale','https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=800&q=85'],
['Night Shift Shorts','Oversized','₹1,899','₹2,499','New','https://images.unsplash.com/photo-1565084888279-aca607ecce0c?auto=format&fit=crop&w=800&q=85'],
['Riot Windbreaker','Outerwear','₹3,999','₹5,299','Hot','https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&w=800&q=85'],
['Concrete Puffer','Outerwear','₹5,499','₹6,999','Sale','https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=800&q=85'],
['Distorted Crew','Graphic','₹2,599','₹3,299','New','https://images.unsplash.com/photo-1578681994506-b8f463449011?auto=format&fit=crop&w=800&q=85'],
['No Rules Tee','Graphic','₹1,499','₹2,099','Sale','https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=85']
];
let cart=JSON.parse(localStorage.noiraCart||'[]'), wish=JSON.parse(localStorage.noiraWish||'[]'), filter='All';
const $=s=>document.querySelector(s); const money=s=>s;
function render(){let arr=products.map((p,i)=>({...{p},i})).filter(x=>filter==='All'||filter==='New'? (filter==='All'||x.p[4]==='New'||(filter==='New'&&x.p[4]==='Hot')) : filter==='Sale'?x.p[2]!==x.p[3]:x.p[1]===filter);let sort=$('#sort').value;if(sort==='low')arr.sort((a,b)=>parseInt(a.p[2].replace(/\D/g,''))-parseInt(b.p[2].replace(/\D/g,'')));if(sort==='high')arr.sort((a,b)=>parseInt(b.p[2].replace(/\D/g,''))-parseInt(a.p[2].replace(/\D/g,'')));if(sort==='sale')arr.sort((a,b)=>discount(b.p)-discount(a.p));$('#products').innerHTML=arr.map(({p,i})=>card(p,i)).join('');updateCounts()}
function discount(p){return Math.round((1-parseInt(p[2].replace(/\D/g,''))/parseInt(p[3].replace(/\D/g,'')))*100)}
function card(p,i){let sale=discount(p)>0;return `<article class="product"><div class="productImg"><span class="badge ${sale?'sale':''}">${p[4]==='New'?'NEW':p[4]==='Hot'?'HOT':sale?discount(p)+'% OFF':'NOIRA'}</span><button class="heart ${wish.includes(i)?'on':''}" onclick="toggleWish(${i})">${wish.includes(i)?'♥':'♡'}</button><img src="${p[5]}" alt="${p[0]}"><button class="quick" onclick="quick(${i})">QUICK VIEW</button></div><div class="productInfo"><div><b>${p[0]}</b><b>${p[2]}</b></div><small>${p[1]} ${sale?`<span class="old">${p[3]}</span> <b>${discount(p)}% OFF</b>`:''}</small><button class="btn dark" style="margin-top:10px;width:100%" onclick="add(${i})">ADD TO BAG</button></div></article>`}
function add(i){cart.push(i);localStorage.noiraCart=JSON.stringify(cart);updateCounts();toast('ADDED TO BAG — '+products[i][0])}
function toggleWish(i){wish=wish.includes(i)?wish.filter(x=>x!==i):[...wish,i];localStorage.noiraWish=JSON.stringify(wish);render();toast(wish.includes(i)?'SAVED TO WISHLIST':'REMOVED FROM WISHLIST')}
function updateCounts(){$('#bagCount').textContent=cart.length;$('#wishCount').textContent=wish.length}
function quick(i){let p=products[i];$('#quickContent').innerHTML=`<div class="quickLayout"><img src="${p[5]}"><div><p class="eyebrow">${p[4]} / ${p[1]}</p><h2>${p[0]}</h2><h3>${p[2]} <span class="old">${p[3]}</span></h3><p>Heavyweight street essential. Cut for an oversized silhouette and built for daily rotation.</p><div class="sizes"><b>SELECT SIZE</b><br><button class="active">S</button><button>M</button><button>L</button><button>XL</button><button>XXL</button></div><button class="btn dark" style="width:100%;margin-top:25px" onclick="add(${i});closePop()">ADD TO BAG</button></div></div>`;$('#quickPopup').classList.add('open')}
function openBag(){renderBag();$('#drawer').classList.add('open');$('#shade').classList.add('open')}
function renderBag(){if(!cart.length){$('#drawerBody').innerHTML='<p style="padding:40px 0;color:#777">YOUR BAG IS EMPTY.<br>THE NEXT DROP IS WAITING.</p>';$('#subtotal').textContent='₹0';return}let total=0;$('#drawerBody').innerHTML=cart.map((i,n)=>{let p=products[i],v=parseInt(p[2].replace(/\D/g,''));total+=v;return `<div class="bagItem"><img src="${p[5]}"><div><b>${p[0]}</b><small>${p[2]}</small><div class="qty"><button onclick="removeCart(${n})">REMOVE</button></div></div></div>`}).join('');$('#subtotal').textContent='₹'+total.toLocaleString('en-IN')}
function removeCart(n){cart.splice(n,1);localStorage.noiraCart=JSON.stringify(cart);renderBag();updateCounts()}
function closeAll(){$('#drawer').classList.remove('open');$('#shade').classList.remove('open')};function closePop(){$$('.popup').forEach(x=>x.classList.remove('open'))};function $$(s){return document.querySelectorAll(s)}
function toast(t){$('#toast').textContent=t;$('#toast').classList.add('show');setTimeout(()=>$('#toast').classList.remove('show'),1800)}
function showSale(){$('#salePopup').classList.add('open')}
$('#bagBtn').onclick=openBag;$('#shade').onclick=closeAll;$('#wishBtn').onclick=()=>{if(wish.length){filter='All';render();location.hash='shop';toast(wish.length+' SAVED PIECES')}else toast('YOUR WISHLIST IS EMPTY')};$('#searchBtn').onclick=()=>{$('#searchPopup').classList.add('open');$('#searchInput').focus()};
$$('.close').forEach(x=>x.onclick=()=>{x.closest('.popup')?x.closest('.popup').classList.remove('open'):closeAll()});
$$('.filters button').forEach(b=>b.onclick=()=>{$$('.filters button').forEach(x=>x.classList.remove('active'));b.classList.add('active');filter=b.dataset.filter;render()});$('#sort').onchange=render;
$$('.collections a').forEach(a=>a.onclick=()=>{filter=a.dataset.cat;$$('.filters button').forEach(x=>x.classList.toggle('active',x.dataset.filter===filter));setTimeout(render,0)});
$('#searchInput').oninput=e=>{let q=e.target.value.toLowerCase();$('#searchResults').innerHTML=products.filter(p=>p[0].toLowerCase().includes(q)||p[1].toLowerCase().includes(q)).slice(0,7).map((p,i)=>`<div class="searchResult"><b>${p[0]}</b><span>${p[2]}</span></div>`).join('')};
let end=Date.now()+12*3600*1000+47*60*1000+9000;setInterval(()=>{let d=Math.max(0,end-Date.now()),h=Math.floor(d/36e5),m=Math.floor(d%36e5/6e4),s=Math.floor(d%6e4/1e3);$('#hours').textContent=String(h).padStart(2,'0');$('#mins').textContent=String(m).padStart(2,'0');$('#secs').textContent=String(s).padStart(2,'0')},1000);
setTimeout(showSale,2200);render();
