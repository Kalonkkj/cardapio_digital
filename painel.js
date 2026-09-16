let db = null;
if (typeof supabaseReady !== 'undefined' && supabaseReady && window.supabase) {
  db = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
}

const money = value => Number(value).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

async function loadOrders() {
  const box = document.getElementById('orders');
  if (!db) {
    box.innerHTML = '<div class="cart-empty">Supabase não configurado.</div>';
    return;
  }

  const { data, error } = await db
    .from('pedidos')
    .select('*, itens_pedido(*)')
    .order('criado_em', { ascending: false });

  if (error) {
    box.innerHTML = '<div class="cart-empty">Erro: ' + error.message + '</div>';
    return;
  }
  if (!data.length) {
    box.innerHTML = '<div class="cart-empty">Nenhum pedido registrado.</div>';
    return;
  }

  box.innerHTML = data.map(p => `
    <article class="cart-item" style="display:block;margin-bottom:14px">
      <div style="display:flex;justify-content:space-between;gap:16px;align-items:flex-start">
        <div>
          <h4>Pedido ${p.numero_pedido}</h4>
          <small>${escapeHtml(p.nome_cliente)} • Mesa ${p.mesa}<br>${new Date(p.criado_em).toLocaleString('pt-BR')} • <strong>${p.status}</strong></small>
        </div>
        <strong>${money(p.total)}</strong>
      </div>
      <div style="margin-top:10px">${(p.itens_pedido || []).map(i => `<div style="display:flex;justify-content:space-between;gap:10px;padding:4px 0"><span>${i.quantidade}× ${escapeHtml(i.nome_produto)}</span><strong>${money(i.valor_total)}</strong></div>`).join('')}</div>
    </article>
  `).join('');
}

function escapeHtml(value) {
  return String(value).replace(/[&<>'"]/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[char]));
}

loadOrders();

if (db) {
  db.channel('pedidos-em-tempo-real')
    .on('postgres_changes', { event: '*', schema: 'public', table: 'pedidos' }, () => loadOrders())
    .subscribe();
}
