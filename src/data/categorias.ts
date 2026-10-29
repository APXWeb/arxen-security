import type { Categoria } from './tipos';

export const categorias: Categoria[] = [
  {
    slug: 'protecao-de-dispositivos-e-servidores',
    nome: 'Proteção de dispositivos e servidores',
    curto: 'Endpoints e servidores',
    icone: 'endpoint',
    resumo:
      'Proteção em camadas para computadores, servidores e dispositivos móveis, com gestão centralizada das políticas.',
    introducao:
      'Estações de trabalho e servidores são a porta de entrada mais comum de malware e ransomware. As soluções desta categoria combinam prevenção, detecção e uma console única para que a equipe de TI enxergue e corrija problemas sem depender de visitas a cada máquina.',
    sinais: [
      'A empresa ainda gerencia antivírus máquina por máquina.',
      'Não há visão consolidada de quais dispositivos estão protegidos e atualizados.',
      'Servidores de arquivos ou aplicações ficam fora da política de segurança.',
    ],
  },
  {
    slug: 'seguranca-e-prevencao-de-vazamento-de-dados',
    nome: 'Segurança e prevenção contra vazamento de dados',
    curto: 'Dados e DLP',
    icone: 'dados',
    resumo:
      'Descoberta e classificação de informações sensíveis, políticas de DLP e gestão de riscos internos.',
    introducao:
      'Vazamentos nem sempre vêm de ataques externos: muitos acontecem por um anexo enviado ao destinatário errado, um arquivo copiado para um pendrive ou um compartilhamento em nuvem aberto demais. Aqui estão as soluções que ajudam a saber onde estão os dados sensíveis e a controlar como eles circulam.',
    sinais: [
      'A empresa trata dados pessoais e precisa demonstrar controles para a LGPD.',
      'Não se sabe quais arquivos sensíveis existem nem onde estão armazenados.',
      'Saídas de colaboradores ou uso de pendrives e nuvens pessoais preocupam a gestão.',
    ],
  },
  {
    slug: 'protecao-de-emails-e-dominios',
    nome: 'Proteção de e-mails e domínios',
    curto: 'E-mail e domínio',
    icone: 'email',
    resumo:
      'Autenticação de e-mail (DMARC, SPF e DKIM) e proteção contra quem tenta se passar pelo domínio da empresa.',
    introducao:
      'O e-mail continua sendo o principal canal de phishing e fraude. Além de filtrar o que chega, é preciso impedir que criminosos enviem mensagens em nome do seu domínio. Esta categoria reúne autenticação de e-mail, monitoramento de domínios semelhantes e proteção de caixas de correio.',
    sinais: [
      'Clientes ou fornecedores já receberam e-mails falsos usando o nome da empresa.',
      'O domínio ainda não tem uma política DMARC em modo de bloqueio.',
      'Mensagens legítimas da empresa caem com frequência no spam.',
    ],
  },
  {
    slug: 'backup-e-recuperacao',
    nome: 'Backup e recuperação',
    curto: 'Backup',
    icone: 'backup',
    resumo:
      'Cópias de segurança de servidores, estações e Microsoft 365, com recuperação planejada e testada.',
    introducao:
      'Backup só tem valor quando a recuperação funciona no momento em que é necessária. As soluções desta categoria cuidam das cópias, do armazenamento fora do ambiente da empresa e dos recursos para validar a restauração antes de um incidente.',
    sinais: [
      'O backup atual nunca foi testado com uma restauração completa.',
      'As cópias ficam na mesma rede que poderia ser atingida por um ransomware.',
      'Dados do Microsoft 365 não têm backup próprio.',
    ],
  },
  {
    slug: 'gestao-de-dispositivos-e-acessos',
    nome: 'Gestão de dispositivos e acessos',
    curto: 'Dispositivos e acessos',
    icone: 'acesso',
    resumo:
      'Inventário, suporte remoto e gestão de celulares corporativos, além do controle de acessos privilegiados.',
    introducao:
      'Saber quais equipamentos existem, quem tem acesso a quê e o que foi feito em sistemas críticos é a base de qualquer programa de segurança. Aqui estão as plataformas de gerenciamento de endpoints e dispositivos móveis e as soluções de gestão de acessos privilegiados (PAM).',
    sinais: [
      'Senhas administrativas são compartilhadas entre técnicos ou fornecedores.',
      'Não há inventário atualizado de hardware e software.',
      'Celulares corporativos são usados sem política de segurança.',
    ],
  },
  {
    slug: 'gestao-de-vulnerabilidades',
    nome: 'Gestão de vulnerabilidades',
    curto: 'Vulnerabilidades',
    icone: 'vulnerabilidade',
    resumo:
      'Identificação, priorização e correção de vulnerabilidades, falhas de configuração e patches pendentes.',
    introducao:
      'Grande parte dos ataques explora falhas já conhecidas e com correção disponível. As soluções desta categoria encontram essas brechas, ajudam a decidir o que corrigir primeiro e automatizam a aplicação de patches.',
    sinais: [
      'A aplicação de atualizações depende de iniciativa manual.',
      'Não há relatório de quais vulnerabilidades existem no ambiente.',
      'Auditorias pedem evidências de conformidade de configuração.',
    ],
  },
  {
    slug: 'deteccao-e-resposta-a-ameacas',
    nome: 'Detecção e resposta a ameaças',
    curto: 'Detecção e resposta',
    icone: 'deteccao',
    resumo:
      'Correlação de eventos de diferentes fontes para identificar ataques em andamento e responder com rapidez.',
    introducao:
      'Prevenção reduz riscos, mas não elimina incidentes. As soluções de detecção e resposta (EDR, XDR, SIEM e NDR) reúnem sinais de endpoints, rede, nuvem e identidades para revelar comportamentos suspeitos e apoiar a investigação.',
    sinais: [
      'Alertas de várias ferramentas chegam separados e sem contexto.',
      'A empresa ou o provedor de serviços precisa estruturar um SOC.',
      'Não há como reconstruir o que aconteceu depois de um incidente.',
    ],
  },
  {
    slug: 'seguranca-de-ambientes-corporativos',
    nome: 'Segurança de ambientes corporativos',
    curto: 'Ambiente corporativo',
    icone: 'corporativo',
    resumo:
      'Produtividade, identidade e proteção do ambiente de trabalho em nuvem, do e-mail aos aplicativos colaborativos.',
    introducao:
      'O ambiente de trabalho moderno depende de e-mail, arquivos e colaboração em nuvem. Esta categoria reúne as plataformas de produtividade e as camadas de proteção para aplicações em nuvem e servidores de e-mail que sustentam a operação diária.',
    sinais: [
      'A empresa usa e-mail sem domínio próprio ou com ferramentas dispersas.',
      'Aplicações em nuvem não têm proteção adicional contra malware e phishing.',
      'Licenças e identidades são gerenciadas sem padrão.',
    ],
  },
];

export const categoriaPorSlug = (slug: string) => categorias.find((c) => c.slug === slug);
