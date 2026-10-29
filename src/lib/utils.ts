/** Prefixa caminhos internos com o BASE_URL configurado (necessário em subpastas, como GitHub Pages). */
export function url(caminho = ''): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const limpo = caminho.replace(/^\//, '');
  if (!limpo) return `${base}/`;
  if (limpo.includes('#') || limpo.includes('?') || /\.[a-z0-9]+$/i.test(limpo)) return `${base}/${limpo}`;
  return `${base}/${limpo.replace(/\/?$/, '/')}`;
}

export const rotas = {
  inicio: () => url(''),
  solucoes: () => url('solucoes'),
  solucao: (slug: string) => url(`solucoes/${slug}`),
  fabricantes: () => url('fabricantes'),
  fabricante: (slug: string) => url(`fabricantes/${slug}`),
  categoria: (slug: string) => url(`categorias/${slug}`),
  sobre: () => url('sobre'),
  revendas: () => url('revendas'),
  contato: (params?: Record<string, string>) => {
    const q = params ? new URLSearchParams(params).toString() : '';
    return url('contato') + (q ? `?${q}` : '');
  },
  privacidade: () => url('privacidade'),
};

export const rotuloConversao = {
  proposta: 'Solicitar proposta',
  avaliacao: 'Solicitar avaliação',
  demonstracao: 'Solicitar demonstração',
} as const;

/** Normaliza texto para busca: minúsculas e sem acentos. */
export function normalizar(texto: string) {
  return texto.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
}
