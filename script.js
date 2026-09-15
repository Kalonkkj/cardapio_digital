const categories = ["ENTRADAS","PRATO PRINCIPAL","SOBREMESAS","BEBIDAS","CARTA DE VINHOS"];

const data = {
"ENTRADAS": [
["Bruschetta Clássica","Pão artesanal, tomate, manjericão e azeite",28],
["Bruschetta de Cogumelos","Cogumelos salteados, alho e ervas",34],
["Carpaccio de Carne","Lâminas finas, rúcula e parmesão",46],
["Carpaccio de Salmão","Salmão, alcaparras e molho cítrico",49],
["Camarão ao Alho","Camarões salteados com alho e ervas",52],
["Camarão Empanado","Camarões crocantes com molho da casa",48],
["Bolinho de Bacalhau","Bolinhos dourados com ervas frescas",36],
["Croquete de Carne","Croquetes artesanais de carne temperada",32],
["Dadinho de Tapioca","Tapioca crocante com geleia de pimenta",30],
["Queijo Coalho Grelhado","Queijo coalho dourado e melado de cana",31],
["Cesta de Pães Artesanais","Seleção de pães com manteiga temperada",25],
["Hummus Cremoso","Grão-de-bico, tahine, limão e pão sírio",27],
["Guacamole da Casa","Abacate, tomate, cebola e coentro",29],
["Pastel de Queijo","Massa crocante e queijo cremoso",24],
["Pastel de Camarão","Pastel artesanal recheado com camarão",31],
["Pastel de Carne Seca","Carne seca, cebola e queijo coalho",29],
["Mini Cuscuz Nordestino","Cuscuz, queijo coalho e carne de sol",33],
["Tábua de Queijos","Seleção de queijos, frutas e castanhas",59],
["Tábua de Frios","Frios, queijos, azeitonas e pães",62],
["Azeitonas Temperadas","Azeitonas marinadas com ervas e cítricos",22],
["Anéis de Lula","Lulas crocantes com maionese de limão",43],
["Polvo ao Vinagrete","Polvo, pimentões, cebola e ervas",54],
["Ostras Frescas","Ostras servidas com limão fresco",58],
["Salada Caprese","Tomate, muçarela de búfala e manjericão",35],
["Salada de Folhas","Folhas, tomate-cereja e vinagrete",26],
["Ceviche de Peixe Branco","Peixe fresco, limão, cebola e coentro",45],
["Ceviche de Camarão","Camarão, limão, cebola roxa e pimenta",48],
["Mini Espetinhos","Espetinhos de carne com molho especial",38],
["Batata Rústica","Batatas assadas com ervas e alho",25],
["Mandioca Crocante","Mandioca frita com molho de ervas",24]
],
"PRATO PRINCIPAL": [
["Filé Mignon ao Molho Madeira","Filé grelhado, molho madeira e batatas",82],
["Filé Mignon com Gorgonzola","Filé, creme de gorgonzola e legumes",86],
["Medalhão de Filé","Medalhão envolto em bacon e purê",88],
["Bife Ancho Grelhado","Corte alto grelhado e batatas rústicas",92],
["Picanha na Brasa","Picanha fatiada, farofa e vinagrete",79],
["Costela ao Vinho","Costela cozida lentamente em vinho tinto",76],
["Carne de Sol Nordestina","Carne de sol, mandioca, queijo e manteiga",69],
["Escondidinho de Carne Seca","Purê de mandioca e carne seca gratinada",57],
["Risoto de Funghi","Arroz arbóreo, funghi e parmesão",61],
["Risoto de Camarão","Camarões, arroz arbóreo e ervas",68],
["Risoto de Limão Siciliano","Arroz cremoso, limão e parmesão",55],
["Risoto de Cogumelos","Mix de cogumelos e parmesão",58],
["Salmão Grelhado","Salmão, purê de batata e legumes",72],
["Salmão ao Molho de Maracujá","Salmão grelhado e molho agridoce",75],
["Tilápia Crocante","Filé de tilápia e arroz de ervas",54],
["Peixe ao Molho de Camarão","Peixe grelhado com molho cremoso",67],
["Bacalhau à Portuguesa","Bacalhau, batatas, cebola e azeitonas",79],
["Linguine ao Camarão","Massa fresca, camarão e molho de tomate",64],
["Fettuccine Alfredo","Massa, creme, parmesão e ervas",49],
["Penne Arrabbiata","Penne, tomate, alho e pimenta",43],
["Nhoque ao Pomodoro","Nhoque artesanal e molho de tomate",46],
["Nhoque de Mandioquinha","Nhoque, manteiga e parmesão",51],
["Lasanha Bolonhesa","Massa, ragu de carne e queijo",55],
["Lasanha de Berinjela","Berinjela, tomate, queijo e manjericão",48],
["Ravioli de Ricota","Ravioli artesanal ao molho de manteiga",57],
["Frango à Parmegiana","Frango empanado, molho e queijo gratinado",52],
["Frango ao Molho de Ervas","Peito grelhado, ervas e legumes",49],
["Peito de Pato ao Molho de Laranja","Pato grelhado e molho cítrico",78],
["Moqueca de Peixe","Peixe, leite de coco, pimentões e dendê",66],
["Moqueca de Camarão","Camarões, leite de coco e pimentões",73]
],
"SOBREMESAS": [
["Pudim de Leite","Pudim cremoso com calda de caramelo",19],
["Brigadeiro Gourmet","Brigadeiro artesanal com chocolate",16],
["Brownie com Sorvete","Brownie quente, sorvete e calda",28],
["Petit Gâteau","Bolinho de chocolate com sorvete",31],
["Cheesecake de Frutas Vermelhas","Cheesecake cremoso e frutas vermelhas",27],
["Cheesecake de Maracujá","Cheesecake com cobertura de maracujá",26],
["Torta de Limão","Creme de limão e merengue",24],
["Torta de Chocolate","Chocolate intenso e massa crocante",27],
["Mousse de Chocolate","Mousse aerada de chocolate meio amargo",22],
["Mousse de Maracujá","Mousse leve com calda de maracujá",20],
["Creme Brûlée","Creme de baunilha com açúcar caramelizado",29],
["Banoffee","Banana, doce de leite e chantilly",25],
["Cocada Cremosa","Coco fresco em creme delicado",18],
["Quindim","Doce tradicional de coco e gemas",17],
["Romeu e Julieta","Goiabada artesanal e queijo cremoso",21],
["Pavê de Chocolate","Camadas de biscoito e creme de chocolate",22],
["Tiramisù","Café, mascarpone e cacau",29],
["Cannoli Siciliano","Massa crocante, ricota e chocolate",26],
["Panacota de Baunilha","Creme de baunilha com frutas",24],
["Panacota de Morango","Creme suave com calda de morango",24],
["Sorvete de Baunilha","Duas bolas com farofa crocante",18],
["Sorvete de Chocolate","Duas bolas de chocolate cremoso",18],
["Sorvete de Pistache","Duas bolas de pistache",22],
["Sorvete de Frutas Vermelhas","Sorvete artesanal de frutas",21],
["Taça Tropical","Manga, abacaxi, creme e coco",25],
["Salada de Frutas","Frutas frescas da estação",19],
["Crepe de Nutella","Crepe, creme de avelã e morango",27],
["Crepe de Doce de Leite","Crepe com doce de leite e canela",25],
["Churros Artesanais","Churros com doce de leite",23],
["Trufa de Chocolate","Trufas artesanais de chocolate",20]
],
"BEBIDAS": [
["Água Mineral","Água mineral sem gás 500 ml",6],
["Água com Gás","Água mineral com gás 500 ml",7],
["Água de Coco","Água de coco natural",10],
["Limonada Suíça","Limão, leite condensado e gelo",14],
["Limonada com Hortelã","Limão fresco, hortelã e gelo",12],
["Suco de Laranja","Laranja natural espremida na hora",13],
["Suco de Abacaxi","Abacaxi natural batido com gelo",13],
["Suco de Maracujá","Maracujá natural e água",13],
["Suco de Morango","Morangos frescos e gelo",15],
["Suco de Manga","Manga natural e gelo",14],
["Suco de Caju","Caju natural e gelo",13],
["Suco de Acerola","Acerola natural e gelo",12],
["Chá Gelado de Pêssego","Chá preto, pêssego e gelo",12],
["Chá Gelado de Limão","Chá preto, limão e gelo",12],
["Refrigerante Cola","Refrigerante de cola 350 ml",8],
["Refrigerante Guaraná","Refrigerante de guaraná 350 ml",8],
["Tônica","Água tônica 350 ml",8],
["Ginger Ale","Refrigerante de gengibre 350 ml",9],
["Café Espresso","Café espresso intenso",7],
["Café Duplo","Dose dupla de espresso",10],
["Cappuccino","Café, leite vaporizado e espuma",12],
["Café com Leite","Espresso com leite cremoso",10],
["Chocolate Quente","Chocolate cremoso e leite",14],
["Chá de Camomila","Infusão suave de camomila",9],
["Chá Verde","Infusão de chá verde",9],
["Mate Gelado","Mate gelado com limão",11],
["Virgin Mojito","Limão, hortelã, açúcar e soda",17],
["Pink Lemonade","Limão, frutas vermelhas e soda",16],
["Smoothie de Morango","Morango, iogurte e gelo",18],
["Smoothie Tropical","Manga, maracujá, banana e iogurte",19]
],
"CARTA DE VINHOS": [
["Vinho Tinto Cabernet Sauvignon","Tinto encorpado com notas de frutas negras",89],
["Vinho Tinto Merlot","Merlot macio e frutado",82],
["Vinho Tinto Malbec","Malbec intenso com notas de ameixa",96],
["Vinho Tinto Pinot Noir","Tinto elegante e aromático",105],
["Vinho Tinto Syrah","Syrah encorpado e especiado",98],
["Vinho Tinto Tempranillo","Tinto espanhol frutado e equilibrado",91],
["Vinho Tinto Carménère","Notas de frutas e especiarias",87],
["Vinho Tinto Sangiovese","Vinho italiano de acidez marcante",94],
["Vinho Tinto Chianti","Clássico italiano equilibrado",110],
["Vinho Tinto Reserva","Reserva intenso com passagem por madeira",135],
["Vinho Branco Chardonnay","Branco aromático, fresco e cremoso",92],
["Vinho Branco Sauvignon Blanc","Branco cítrico e refrescante",88],
["Vinho Branco Pinot Grigio","Leve, seco e frutado",86],
["Vinho Branco Riesling","Aromático com acidez vibrante",90],
["Vinho Branco Moscato","Branco floral e levemente adocicado",84],
["Vinho Branco Chenin Blanc","Fresco, frutado e elegante",89],
["Vinho Branco Gewürztraminer","Aromas florais e frutas tropicais",99],
["Vinho Rosé Seco","Rosé fresco com frutas vermelhas",86],
["Vinho Rosé Provence","Rosé delicado e elegante",118],
["Vinho Rosé Brut","Espumante rosé seco e refrescante",125],
["Espumante Brut","Espumante seco e equilibrado",115],
["Espumante Moscatel","Espumante aromático e adocicado",99],
["Espumante Rosé","Espumante rosado de frutas vermelhas",125],
["Champagne Brut","Champagne francês elegante",280],
["Champagne Rosé","Champagne rosé de perfil delicado",320],
["Vinho do Porto Tawny","Vinho fortificado com notas de frutas secas",120],
["Vinho do Porto Ruby","Porto jovem, intenso e frutado",110],
["Vinho Madeira","Vinho fortificado complexo e aromático",145],
["Vinho Branco Reserva","Branco estruturado com notas de madeira",128],
["Vinho Tinto Gran Reserva","Tinto complexo e longo",175]
]};

const imageByCategory = {
"ENTRADAS":"https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80",
"PRATO PRINCIPAL":"https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
"SOBREMESAS":"https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=800&q=80",
"BEBIDAS":"https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=800&q=80",
"CARTA DE VINHOS":"https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80"
};

const products = [];
let productCounter = 1;
categories.forEach(cat => data[cat].forEach((p,i) => products.push({
  id: `p${String(productCounter++).padStart(3,"0")}`, name:p[0], desc:p[1], price:p[2], category:cat,
  image:imageByCategory[cat]
})));

let cart = JSON.parse(localStorage.getItem("saborArteCart") || "{}");

const money = n => n.toLocaleString("pt-BR",{style:"currency",currency:"BRL"});
const el = id => document.getElementById(id);

function renderMenu(){
  el("categoryMenu").innerHTML = `<button class="active" data-cat="TODAS">Todos</button>` +
    categories.map(c=>`<button data-cat="${c}">${c}</button>`).join("");
  document.querySelectorAll(".category-menu button").forEach(btn=>{
    btn.onclick=()=>{ 
      document.querySelectorAll(".category-menu button").forEach(b=>b.classList.remove("active"));
      btn.classList.add("active"); el("categoryFilter").value=btn.dataset.cat;
      renderProducts();
      if(btn.dataset.cat!=="TODAS") document.getElementById("cat-"+slug(btn.dataset.cat))?.scrollIntoView({behavior:"smooth",block:"start"});
    };
  });
}
const slug=s=>s.replaceAll(" ","-").replaceAll("ã","a").replaceAll("ç","c").replaceAll("é","e");

function renderProducts(){
  const search=el("search").value.trim().toLowerCase();
  const filter=el("categoryFilter").value;
  let html="", shown=0;
  categories.forEach(cat=>{
    if(filter!=="TODAS" && filter!==cat)return;
    const list=products.filter(p=>p.category===cat && p.name.toLowerCase().includes(search));
    if(!list.length)return;
    shown+=list.length;
    html+=`<section class="category-section" id="cat-${slug(cat)}">
      <div class="section-title"><h3>${cat}</h3><div class="line"></div><small>${list.length} itens</small></div>
      <div class="products">${list.map(p=>`
        <article class="product">
          <div class="product-img" style="background-image:url('${p.image}')"></div>
          <div class="product-info">
            <h4 class="product-name">${p.name}</h4>
            <p class="product-desc">${p.desc}</p>
            <div class="product-bottom">
              <span class="price">${money(p.price)}</span>
              <button class="add-btn" onclick="addToCart('${p.id}')">Adicionar</button>
            </div>
          </div>
        </article>`).join("")}</div></section>`;
  });
  el("productSections").innerHTML=html;
  el("emptyState").hidden=shown!==0;
}
function addToCart(id){cart[id]=(cart[id]||0)+1;save();renderCart()}
function changeQty(id,delta){cart[id]=(cart[id]||0)+delta;if(cart[id]<=0)delete cart[id];save();renderCart()}
function removeItem(id){delete cart[id];save();renderCart()}
function save(){localStorage.setItem("saborArteCart",JSON.stringify(cart))}
function renderCart(){
  const ids=Object.keys(cart);
  if(!ids.length) el("cart").innerHTML=`<div class="cart-empty">Seu pedido está vazio.<br>Adicione seus pratos favoritos acima. 🍽️</div>`;
  else el("cart").innerHTML=ids.map(id=>{
    const p=products.find(x=>x.id===id),q=cart[id];
    return `<div class="cart-item">
      <div><h4>${p.name}</h4><small>${money(p.price)} por unidade</small></div>
      <div class="qty"><button onclick="changeQty('${id}',-1)">−</button><strong>${q}</strong><button onclick="changeQty('${id}',1)">+</button></div>
      <strong class="item-total">${money(p.price*q)}</strong>
      <button class="remove" onclick="removeItem('${id}')">Remover</button>
    </div>`;
  }).join("");
  const subtotal=ids.reduce((s,id)=>s+products.find(p=>p.id===id).price*cart[id],0);
  const tip=el("tipCheck").checked?subtotal*.1:0;
  el("subtotal").textContent=money(subtotal);el("tipValue").textContent=money(tip);el("total").textContent=money(subtotal+tip);
  const count=ids.reduce((s,id)=>s+cart[id],0);
  el("itemCount").textContent=`(${count} ${count===1?"item":"itens"})`;el("nav-count").textContent=count;
}
el("search").addEventListener("input",renderProducts);
el("categoryFilter").addEventListener("change",e=>{
  document.querySelectorAll(".category-menu button").forEach(b=>b.classList.toggle("active",b.dataset.cat===e.target.value));
  renderProducts();
});
el("tipCheck").addEventListener("change",renderCart);
el("clearOrder").onclick=()=>{if(Object.keys(cart).length && confirm("Deseja limpar todo o pedido?")){cart={};save();renderCart()}};

async function saveOrderToDatabase(name, table, ids, subtotal, tip) {
  if (typeof supabaseReady === "undefined" || !supabaseReady || !window.supabase) return null;
  const db = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  const numero = "SA-" + Date.now().toString().slice(-8);
  const { data, error } = await db.from("pedidos").insert({ numero_pedido: numero, nome_cliente: name, mesa: Number(table), subtotal: Number(subtotal.toFixed(2)), taxa_garcom: Number(tip.toFixed(2)), total: Number((subtotal + tip).toFixed(2)) }).select().single();
  if (error) throw error;
  const itens = ids.map(id => { const p=products.find(x=>x.id===id); return { pedido_id:data.id, produto_id:p.id, nome_produto:p.name, quantidade:cart[id], valor_unitario:p.price, valor_total:Number((p.price*cart[id]).toFixed(2)) }; });
  const r = await db.from("itens_pedido").insert(itens);
  if (r.error) throw r.error;
  return numero;
}

el("finishOrder").onclick=async ()=>{
  const ids=Object.keys(cart),name=el("customerName").value.trim(),table=el("tableNumber").value;
  if(!ids.length)return alert("Adicione pelo menos um produto ao pedido.");
  if(!name)return alert("Informe o nome do cliente.");
  if(!table)return alert("Informe o número da mesa.");
  const subtotal=ids.reduce((s,id)=>s+products.find(p=>p.id===id).price*cart[id],0);
  const tip=el("tipCheck").checked?subtotal*.1:0;
  try { await saveOrderToDatabase(name, table, ids, subtotal, tip); } catch (err) { console.error("Erro ao salvar pedido no Supabase:", err); }
  el("confirmName").textContent=name;el("confirmTable").textContent=table;el("confirmTotal").textContent=money(subtotal+tip);
  el("confirmItems").innerHTML=ids.map(id=>{const p=products.find(x=>x.id===id);return `<div class="confirm-line"><span>${cart[id]}× ${p.name}</span><strong>${money(p.price*cart[id])}</strong></div>`}).join("")+
    (tip?`<div class="confirm-line"><span>Garçom (10%)</span><strong>${money(tip)}</strong></div>`:"");
  el("modal").hidden=false;
};
el("closeModal").onclick=()=>el("modal").hidden=true;
el("newOrder").onclick=()=>{el("modal").hidden=true;cart={};save();renderCart();el("customerName").value="";el("tableNumber").value="";el("tipCheck").checked=false;window.scrollTo({top:document.getElementById("pedido").offsetTop-70,behavior:"smooth"})};

renderMenu();renderProducts();renderCart();
