// Tipos gerados pelo Supabase para o projeto Cardapio Digital Restaurante.
// Gerado em 15/09/2026.
export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export type Database = {
  public: {
    Tables: {
      produtos: { Row: { id:string; nome:string; descricao:string; preco:number; categoria:string; imagem:string|null }; Insert: { id:string; nome:string; descricao:string; preco:number; categoria:string; imagem?:string|null }; Update: Partial<{ id:string; nome:string; descricao:string; preco:number; categoria:string; imagem:string|null }> }
      pedidos: { Row: { id:number; numero_pedido:string; nome_cliente:string; mesa:number; subtotal:number; taxa_garcom:number; total:number; status:string; criado_em:string }; Insert: { id?:number; numero_pedido:string; nome_cliente:string; mesa:number; subtotal:number; taxa_garcom?:number; total:number; status?:string; criado_em?:string }; Update: Partial<{ id:number; numero_pedido:string; nome_cliente:string; mesa:number; subtotal:number; taxa_garcom:number; total:number; status:string; criado_em:string }> }
      itens_pedido: { Row: { id:number; pedido_id:number; produto_id:string; nome_produto:string; quantidade:number; valor_unitario:number; valor_total:number }; Insert: { id?:number; pedido_id:number; produto_id:string; nome_produto:string; quantidade:number; valor_unitario:number; valor_total:number }; Update: Partial<{ id:number; pedido_id:number; produto_id:string; nome_produto:string; quantidade:number; valor_unitario:number; valor_total:number }> }
    }
    Views: {}
    Functions: {}
    Enums: {}
    CompositeTypes: {}
  }
}
