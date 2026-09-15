# Sabor & Arte — Cardápio Digital + Supabase

O projeto continua tendo os 150 produtos em JavaScript, conforme a atividade, e agora inclui estrutura para salvar pedidos em um banco PostgreSQL do Supabase.

## Ativar banco
1. Crie um projeto no Supabase.
2. No SQL Editor, execute `supabase.sql`.
3. Em Project Settings > API, copie a Project URL e a chave `anon public`.
4. Cole as duas em `supabase-config.js`.
5. Publique a pasta inteira em GitHub Pages, Netlify ou Vercel.
6. `painel.html` mostra os pedidos gravados no banco.

O ZIP não consegue criar uma conta/projeto Supabase automaticamente: a criação do banco precisa ser feita na conta do proprietário.


## Banco já configurado

Projeto Supabase: `Cardapio Digital Restaurante`
URL: `https://kyzptazmxfkkhncjpuzy.supabase.co`
Região: `sa-east-1` (São Paulo)

O banco já foi criado e recebeu 150 produtos, divididos em 30 por categoria. Os pedidos são gravados em `pedidos` e seus produtos em `itens_pedido`. O painel (`painel.html`) consulta os pedidos e atualiza automaticamente quando novos pedidos chegam.

> Segurança: o projeto usa uma chave publishable no navegador e RLS nas tabelas. Não coloque chaves secret/service_role no frontend.

> Plano gratuito: projetos com pouca atividade podem ser pausados automaticamente após um período de inatividade.
