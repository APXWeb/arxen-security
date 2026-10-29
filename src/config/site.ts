/**
 * Configuração central da ARXEN Security.
 *
 * Tudo o que depende de informação do cliente fica aqui. Campos com `null`
 * simplesmente não são exibidos no site — nada é inventado para preencher.
 */

export const SITE = {
  nome: 'ARXEN Security',
  nomeCurto: 'ARXEN',
  descritor: 'Segurança de Dados',
  descricaoPadrao:
    'Soluções de cibersegurança para proteger dados, dispositivos, acessos e operações de empresas, com orientação para escolher o que cada negócio realmente precisa.',
  idioma: 'pt-BR',
  locale: 'pt_BR',

  /**
   * false enquanto o site for uma proposta: gera `noindex` e bloqueia robôs.
   * Mude para true quando o site estiver no domínio definitivo.
   */
  indexavel: false,

  /** Rodapé de autoria da proposta. Defina como null para remover. */
  creditoProposta: {
    texto: 'Proposta de site desenvolvida pela APX Web',
    url: 'https://apxweb.github.io/apex-web/',
  } as { texto: string; url: string } | null,
};

/**
 * Canais de contato — PENDENTES. Preencha quando o cliente fornecer.
 * Exemplo de WhatsApp: '5511999999999' (somente dígitos, com DDI e DDD).
 */
export const CONTATO = {
  email: null as string | null,
  telefone: null as string | null,
  telefoneExibicao: null as string | null,
  whatsapp: null as string | null,
  linkedin: null as string | null,
  endereco: null as string | null,
  cnpj: null as string | null,
};

/**
 * Destino do formulário — PENDENTE.
 *
 * Aceita qualquer endpoint que receba POST com JSON (Formspree, Getform,
 * função serverless própria etc.). Enquanto for null, o formulário valida os
 * campos mas NÃO envia nem armazena nada, e informa isso ao visitante.
 */
export const FORMULARIO = {
  endpoint: null as string | null,
  /** Intervalo mínimo (ms) entre abrir o formulário e enviar — filtro simples contra robôs. */
  tempoMinimoMs: 3000,
};

/**
 * Dados institucionais — PENDENTES. Cada item só aparece na página Sobre
 * quando preenchido. Não preencher com estimativas.
 */
export const INSTITUCIONAL = {
  anoFundacao: null as number | null,
  cidade: null as string | null,
  /** Ex.: [{ titulo: 'ISO 27001', descricao: '...' }] — somente certificações vigentes e comprováveis. */
  certificacoes: [] as { titulo: string; descricao?: string }[],
  /** Parcerias oficiais confirmadas por escrito pelos fabricantes (slugs de src/data/fabricantes.ts). */
  parceriasConfirmadas: [] as string[],
};

export function whatsappUrl(mensagem?: string) {
  if (!CONTATO.whatsapp) return null;
  const texto = mensagem ? `?text=${encodeURIComponent(mensagem)}` : '';
  return `https://wa.me/${CONTATO.whatsapp}${texto}`;
}
