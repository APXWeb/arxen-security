/** Estrutura de dados do catálogo. Fabricantes, categorias e soluções seguem estes tipos. */

export type IconeNome =
  | 'endpoint'
  | 'dados'
  | 'email'
  | 'backup'
  | 'acesso'
  | 'vulnerabilidade'
  | 'deteccao'
  | 'corporativo'
  | 'empresa'
  | 'revenda'
  | 'seta'
  | 'check'
  | 'busca'
  | 'filtro'
  | 'fechar'
  | 'menu'
  | 'externo'
  | 'info';

export interface Categoria {
  slug: string;
  nome: string;
  /** Nome curto para chips e filtros. */
  curto: string;
  icone: IconeNome;
  resumo: string;
  /** Texto introdutório da página da categoria. */
  introducao: string;
  /** Perguntas que ajudam o visitante a reconhecer a necessidade. */
  sinais: string[];
}

/** Blocos editoriais que variam conforme o fabricante. */
export type BlocoFabricante =
  | {
      tipo: 'tabela';
      titulo: string;
      intro?: string;
      colunas: string[];
      linhas: { rotulo: string; valores: (string | boolean)[] }[];
      nota?: string;
    }
  | {
      tipo: 'etapas';
      titulo: string;
      intro?: string;
      etapas: { titulo: string; texto: string }[];
      nota?: string;
    }
  | {
      tipo: 'blocos';
      titulo: string;
      intro?: string;
      itens: { titulo: string; texto: string }[];
      nota?: string;
    }
  | {
      tipo: 'perfis';
      titulo: string;
      intro?: string;
      perfis: { titulo: string; texto: string; itens: string[] }[];
      nota?: string;
    };

export interface Logo {
  src: string;
  largura: number;
  altura: number;
  /** Correção óptica de tamanho (1 = padrão). */
  escala?: number;
  /** Observação interna sobre a origem do arquivo (não exibida). */
  origem: string;
}

export interface Fabricante {
  slug: string;
  nome: string;
  logo: Logo;
  /** Frase de posicionamento curta, usada em cards. */
  foco: string;
  apresentacao: string[];
  necessidades: string[];
  blocos: BlocoFabricante[];
  siteOficial: string;
  fontes: { rotulo: string; url: string }[];
}

export interface Solucao {
  slug: string;
  nome: string;
  fabricante: string;
  categorias: string[];
  /** Categoria principal exibida no card. */
  categoriaPrincipal: string;
  /** Família/linha, quando houver (ex.: "ESET PROTECT"). */
  familia?: string;
  descricao: string;
  beneficio: string;
  destaque?: boolean;
  oQueE: string[];
  problema: string;
  cenarios: string[];
  comoFunciona: { titulo: string; texto: string }[];
  recursos: { titulo: string; texto: string }[];
  /** Requisitos/limitações confirmados em fonte oficial. */
  requisitos: string[];
  /** Pontos a confirmar na proposta comercial. */
  aConfirmar: string[];
  /** Tipo de pedido mais adequado. */
  conversao: 'proposta' | 'avaliacao' | 'demonstracao';
  palavrasChave: string[];
  fontes: { rotulo: string; url: string }[];
}
