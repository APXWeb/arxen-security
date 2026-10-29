import type { Fabricante } from './tipos';

/**
 * Fabricantes do catálogo.
 *
 * Conteúdo redigido a partir das páginas oficiais dos fabricantes e do
 * portfólio de referência (societyinfo.com.br). A ARXEN não é apresentada
 * como parceira oficial de nenhum deles — ver INSTITUCIONAL.parceriasConfirmadas.
 */
export const fabricantes: Fabricante[] = [
  {
    slug: 'eset',
    nome: 'ESET',
    logo: { src: 'img/fabricantes/eset.svg', largura: 527, altura: 88, escala: 1.3, origem: 'SVG do site oficial eset.com; o texto usa currentColor e foi definido em branco' },
    foco: 'Proteção de endpoints, servidores e e-mail com detecção e resposta.',
    apresentacao: [
      'A ESET é uma fabricante europeia de software de cibersegurança, conhecida pela proteção de endpoints com baixo consumo de recursos e pela pesquisa própria de ameaças.',
      'Para empresas, o portfólio é organizado na plataforma ESET PROTECT: uma console única que gerencia proteção de computadores, servidores e dispositivos móveis, e que pode ser ampliada com criptografia, proteção de e-mail e aplicações em nuvem, gestão de vulnerabilidades, autenticação multifator e XDR.',
    ],
    necessidades: [
      'Substituir antivírus isolados por uma proteção gerenciada de forma central.',
      'Reduzir o risco de ransomware e ameaças ainda desconhecidas.',
      'Estender a proteção ao e-mail e às aplicações em nuvem.',
      'Ganhar capacidade de investigação com detecção e resposta (XDR).',
    ],
    blocos: [
      {
        tipo: 'tabela',
        titulo: 'Como os planos ESET PROTECT se organizam',
        intro:
          'Os planos reúnem módulos em níveis crescentes de proteção. A tabela resume o que as páginas públicas da ESET indicam para cada nível. Os itens marcados como "A confirmar" e a composição final dependem da oferta vigente no Brasil, que a ESET revisa com frequência, e são definidos na proposta.',
        colunas: ['Entry', 'Advanced', 'Complete', 'Elite'],
        linhas: [
          { rotulo: 'Console de gerenciamento', valores: [true, true, true, true] },
          { rotulo: 'Proteção moderna de endpoints', valores: [true, true, true, true] },
          { rotulo: 'Defesa contra ameaças avançadas e zero-day', valores: [false, true, true, true] },
          { rotulo: 'Criptografia de disco completo', valores: [false, true, true, true] },
          { rotulo: 'Proteção de aplicações em nuvem', valores: [false, false, true, true] },
          { rotulo: 'Segurança para servidor de e-mail', valores: [false, false, true, true] },
          { rotulo: 'Gestão de vulnerabilidades e patches', valores: [false, false, true, true] },
          { rotulo: 'Detecção e resposta estendida (XDR)', valores: [false, false, false, true] },
          { rotulo: 'Autenticação multifator', valores: [false, false, false, 'A confirmar'] },
        ],
        nota:
          'Referência elaborada a partir das descrições públicas dos planos. Em alguns mercados a ESET passou a adotar novas nomenclaturas; a proposta indica a oferta vigente no Brasil.',
      },
    ],
    siteOficial: 'https://www.eset.com/br/',
    fontes: [
      { rotulo: 'ESET — soluções para empresas', url: 'https://www.eset.com/br/' },
      { rotulo: 'ESET PROTECT — comparação de planos (PT)', url: 'https://www.eset.com/pt/business/entry-protection/' },
    ],
  },
  {
    slug: 'safetica',
    nome: 'Safetica',
    logo: { src: 'img/fabricantes/safetica.svg', largura: 1000, altura: 228, origem: 'SVG do site oficial safetica.com' },
    foco: 'Prevenção contra vazamento de dados, classificação e risco interno.',
    apresentacao: [
      'A Safetica desenvolve uma plataforma de segurança de dados que reúne descoberta e classificação de informações sensíveis, prevenção contra vazamento (DLP), gestão de riscos internos e apoio à conformidade regulatória.',
      'A proposta é dar visibilidade sobre onde estão os dados importantes e como eles circulam — por e-mail, dispositivos, aplicações e nuvem — para que a empresa possa definir políticas proporcionais ao risco, em vez de bloquear tudo.',
    ],
    necessidades: [
      'Descobrir e classificar dados sensíveis armazenados na empresa.',
      'Evitar vazamentos acidentais ou intencionais por e-mail, USB e nuvem.',
      'Identificar comportamentos de risco de usuários internos.',
      'Gerar evidências para LGPD, GDPR, ISO 27001 e outras normas.',
    ],
    blocos: [
      {
        tipo: 'tabela',
        titulo: 'Edições da plataforma',
        intro:
          'A Safetica é oferecida em nuvem, em três edições, e também em versão on-premises para ambientes que exigem os dados dentro da própria infraestrutura.',
        colunas: ['Cloud Standard', 'Cloud Premium', 'Cloud Enterprise', 'On-Prem'],
        linhas: [
          { rotulo: 'Políticas de DLP para e-mail, dispositivos e fluxo de dados', valores: [true, true, true, true] },
          { rotulo: 'Classificação de dados com apoio de IA', valores: [false, true, true, false] },
          { rotulo: 'Cópia sombra de arquivos em incidentes', valores: [false, true, true, 'A confirmar'] },
          { rotulo: 'Integração com SIEM', valores: [false, true, true, 'A confirmar'] },
          { rotulo: 'Relatórios disponíveis', valores: ['Até 5', 'Até 20', 'Ilimitados', 'Ilimitados'] },
          { rotulo: 'Retenção de dados', valores: ['12 meses', '24 meses', '36 meses', 'Conforme o servidor'] },
        ],
        nota: 'Resumo baseado na página oficial de edições da Safetica. "A confirmar": a página não descreve esse recurso para a versão On-Prem. A ausência de classificação por IA na On-Prem é informada pelo fabricante. Detalhes de licenciamento são confirmados na proposta.',
      },
    ],
    siteOficial: 'https://www.safetica.com/',
    fontes: [
      { rotulo: 'Safetica — edições e planos', url: 'https://www.safetica.com/pricing' },
      { rotulo: 'Safetica — site oficial', url: 'https://www.safetica.com/' },
    ],
  },
  {
    slug: 'cove-data-protection',
    nome: 'Cove Data Protection',
    logo: { src: 'img/fabricantes/cove.png', largura: 821, altura: 197, escala: 1.3, origem: 'Versão para fundo escuro (branco + turquesa), como publicada no portfólio de referência' },
    foco: 'Backup em nuvem e recuperação de desastres, da N-able.',
    apresentacao: [
      'Cove Data Protection é a solução de backup e recuperação de desastres da N-able, entregue como serviço em nuvem. A infraestrutura de armazenamento, as atualizações e a segurança da plataforma ficam a cargo do fabricante.',
      'Uma mesma console protege servidores físicos e virtuais, estações de trabalho e dados do Microsoft 365. As cópias são armazenadas fora do ambiente do cliente, o que ajuda a manter a recuperação possível mesmo quando a rede local é comprometida.',
    ],
    necessidades: [
      'Proteger servidores e estações com cópias fora do ambiente local.',
      'Fazer backup de e-mails, OneDrive e SharePoint do Microsoft 365.',
      'Reduzir o tempo de retorno após falhas ou ransomware.',
      'Comprovar periodicamente que a restauração funciona.',
    ],
    blocos: [
      {
        tipo: 'blocos',
        titulo: 'O que a plataforma cobre',
        itens: [
          { titulo: 'Servidores e estações', texto: 'Windows, macOS e Linux, incluindo máquinas virtuais em VMware e Hyper-V, gerenciados na mesma console.' },
          { titulo: 'Microsoft 365', texto: 'Exchange, OneDrive e SharePoint, com retenção configurável e cópia de contas inativas.' },
          { titulo: 'Recuperação de desastres', texto: 'Recursos como Standby Image e testes automatizados de recuperação para validar o retorno de sistemas críticos.' },
          { titulo: 'Armazenamento em nuvem', texto: 'Cópias mantidas em data centers do fabricante, com criptografia AES-256 em trânsito e em repouso.' },
        ],
        nota: 'Versões de sistemas operacionais suportadas mudam ao longo do tempo; a compatibilidade do seu ambiente é verificada na avaliação.',
      },
    ],
    siteOficial: 'https://www.n-able.com/products/cove-data-protection',
    fontes: [
      { rotulo: 'N-able — Cove Data Protection', url: 'https://www.n-able.com/products/cove-data-protection' },
      { rotulo: 'Documentação — Recovery Testing', url: 'https://documentation.n-able.com/covedataprotection/USERGUIDE/documentation/Content/service-management/console-new/recovery-testing/recovery-testing-overview.htm' },
    ],
  },
  {
    slug: 'sendmarc',
    nome: 'Sendmarc',
    logo: { src: 'img/fabricantes/sendmarc.svg', largura: 368, altura: 48, escala: 0.95, origem: 'SVG do site oficial sendmarc.com, em branco monocromático para fundo escuro' },
    foco: 'Autenticação de e-mail com DMARC e defesa contra falsificação de domínio.',
    apresentacao: [
      'A Sendmarc é especializada em autenticação de e-mail. Sua plataforma ajuda empresas a configurar, monitorar e aplicar DMARC, SPF e DKIM em todos os seus domínios, para que apenas remetentes autorizados consigam enviar mensagens em nome da marca.',
      'Além da autenticação, o portfólio inclui monitoramento de domínios semelhantes ao da empresa, detecção de credenciais vazadas e suporte a BIMI, que exibe a logo da marca ao lado dos e-mails nas caixas de entrada compatíveis.',
    ],
    necessidades: [
      'Impedir que criminosos enviem e-mails usando o domínio da empresa.',
      'Chegar a uma política DMARC de bloqueio sem interromper e-mails legítimos.',
      'Identificar domínios falsos que imitam a marca.',
      'Saber quando credenciais da empresa aparecem em vazamentos.',
    ],
    blocos: [
      {
        tipo: 'etapas',
        titulo: 'O caminho até um domínio protegido',
        intro: 'A adoção de DMARC é gradual. A plataforma acompanha cada fase com relatórios sobre quem envia e-mails em nome do domínio.',
        etapas: [
          { titulo: 'Diagnóstico', texto: 'Verificação dos registros de SPF, DKIM e DMARC existentes e do nível atual de proteção.' },
          { titulo: 'Monitoramento', texto: 'Coleta dos relatórios DMARC enviados pelos servidores de e-mail para mapear todos os remetentes legítimos.' },
          { titulo: 'Ajuste', texto: 'Correção das fontes de envio autorizadas até que todas passem na autenticação.' },
          { titulo: 'Aplicação', texto: 'Avanço da política até o bloqueio das mensagens que tentam usar o domínio sem autorização.' },
        ],
      },
    ],
    siteOficial: 'https://sendmarc.com/',
    fontes: [{ rotulo: 'Sendmarc — site oficial', url: 'https://sendmarc.com/' }],
  },
  {
    slug: 'microsoft',
    nome: 'Microsoft',
    logo: { src: 'img/fabricantes/microsoft.svg', largura: 338, altura: 72, origem: 'SVG oficial (Wikimedia Commons), com o texto em branco para fundo escuro' },
    foco: 'Produtividade, colaboração e IA para o trabalho com Microsoft 365.',
    apresentacao: [
      'A Microsoft fornece a plataforma de produtividade usada por boa parte das empresas: e-mail corporativo, aplicativos de escritório, armazenamento e colaboração em nuvem, reunidos no Microsoft 365.',
      'No contexto de segurança, o Microsoft 365 também concentra recursos de identidade, conformidade e proteção de dados e dispositivos. O Microsoft 365 Copilot acrescenta um assistente de IA integrado aos aplicativos.',
    ],
    necessidades: [
      'Padronizar e-mail corporativo com domínio próprio.',
      'Organizar licenças e identidades dos colaboradores.',
      'Colaborar com segurança em documentos e reuniões.',
      'Avaliar o uso de IA generativa no trabalho de forma controlada.',
    ],
    blocos: [
      {
        tipo: 'perfis',
        titulo: 'Duas frentes do portfólio',
        perfis: [
          {
            titulo: 'Microsoft 365',
            texto: 'Base de produtividade e colaboração da empresa.',
            itens: ['E-mail com domínio próprio', 'Aplicativos de escritório e colaboração', 'Armazenamento e compartilhamento em nuvem', 'Controles de identidade, segurança e conformidade'],
          },
          {
            titulo: 'Microsoft 365 Copilot',
            texto: 'Assistente de IA para o trabalho, contratado como complemento.',
            itens: ['Integração com os aplicativos do Microsoft 365', 'Chat de IA para o ambiente corporativo', 'Agentes com cobrança conforme o uso'],
          },
        ],
        nota: 'Planos e recursos variam conforme a licença Microsoft escolhida; a recomendação parte do porte e das necessidades da empresa.',
      },
    ],
    siteOficial: 'https://www.microsoft.com/pt-br/microsoft-365',
    fontes: [{ rotulo: 'Microsoft 365 — site oficial', url: 'https://www.microsoft.com/pt-br/microsoft-365' }],
  },
  {
    slug: 'datadike',
    nome: 'DataDike',
    logo: { src: 'img/fabricantes/datadike.png', largura: 900, altura: 128, origem: 'Versão branca, como publicada no portfólio de referência' },
    foco: 'Gestão de endpoints (SONAR) e acesso privilegiado (F-Safer).',
    apresentacao: [
      'A DataDike desenvolve soluções de cibersegurança em duas frentes complementares: a gestão unificada de endpoints e o controle de acessos privilegiados.',
      'O SONAR reúne inventário, acesso remoto, monitoramento e automação para estações e servidores. O F-Safer controla, registra e audita o acesso de administradores e fornecedores a sistemas críticos, sem expor as senhas.',
    ],
    necessidades: [
      'Manter inventário e suporte remoto de todo o parque de máquinas.',
      'Automatizar rotinas de TI e aplicação de patches.',
      'Eliminar o compartilhamento de senhas administrativas.',
      'Registrar e auditar sessões em servidores e bancos de dados.',
    ],
    blocos: [
      {
        tipo: 'perfis',
        titulo: 'Dois produtos, dois problemas',
        perfis: [
          {
            titulo: 'SONAR — gestão de endpoints',
            texto: 'Para a equipe de TI que precisa enxergar e operar o parque a partir de uma console.',
            itens: ['Inventário de hardware e software', 'Controle remoto e transferência de arquivos', 'Execução de scripts e automações', 'Monitoramento e alertas'],
          },
          {
            titulo: 'F-Safer — acesso privilegiado (PAM)',
            texto: 'Para quem precisa controlar quem acessa sistemas críticos, quando e o que faz.',
            itens: ['Acesso just-in-time pelo navegador', 'Cofre e rotação de credenciais', 'Gravação de sessões', 'Bloqueio de comandos críticos'],
          },
        ],
      },
    ],
    siteOficial: 'https://www.datadike.com.br/',
    fontes: [{ rotulo: 'Portfólio de referência — DataDike', url: 'https://societyinfo.com.br/datadike/' }],
  },
  {
    slug: 'mobiltec',
    nome: 'Mobiltec',
    logo: { src: 'img/fabricantes/mobiltec.png', largura: 900, altura: 210, escala: 1.1, origem: 'Versão branca oficial do site mobiltec.com.br (logo-mobiltec-white)' },
    foco: 'Gerenciamento de dispositivos móveis corporativos com o cloud4mobile.',
    apresentacao: [
      'A Mobiltec é uma empresa brasileira de gerenciamento de dispositivos móveis (MDM). Sua plataforma, o cloud4mobile, permite configurar, monitorar e proteger smartphones, tablets e coletores usados por equipes internas e de campo.',
      'A fabricante informa ter sido a primeira da América Latina a receber a certificação Android Enterprise Recommended, do Google, e mantém integrações com Samsung Knox e dispositivos Zebra.',
    ],
    necessidades: [
      'Configurar celulares e tablets corporativos em escala.',
      'Proteger dados corporativos em aparelhos perdidos ou roubados.',
      'Restringir aparelhos de campo a aplicativos de trabalho.',
      'Separar dados pessoais e corporativos em aparelhos próprios (BYOD).',
    ],
    blocos: [
      {
        tipo: 'blocos',
        titulo: 'Modelos de uso de aparelhos',
        intro: 'A política certa depende de quem é dono do aparelho e de como ele é usado.',
        itens: [
          { titulo: 'Corporativo dedicado', texto: 'Aparelho da empresa com uso exclusivo para o trabalho, configurado e controlado pela TI.' },
          { titulo: 'Corporativo com perfil pessoal', texto: 'Aparelho da empresa que também comporta um espaço de uso pessoal (COPE).' },
          { titulo: 'Aparelho do colaborador', texto: 'Perfil de trabalho isolado em aparelho próprio (BYOD), com remoção seletiva dos dados corporativos.' },
          { titulo: 'Modo quiosque', texto: 'Interface restrita a aplicativos definidos, comum em coletores e totens.' },
        ],
        nota: 'Modos de implantação disponíveis e sistemas operacionais suportados são confirmados na demonstração, conforme o modelo de aparelho.',
      },
    ],
    siteOficial: 'https://www.mobiltec.com.br/',
    fontes: [
      { rotulo: 'Mobiltec — site oficial', url: 'https://www.mobiltec.com.br/' },
      { rotulo: 'cloud4mobile — página do produto', url: 'https://www.mobiltec.com.br/cloud4mobile' },
    ],
  },
  {
    slug: 'secpod',
    nome: 'SecPod',
    logo: { src: 'img/fabricantes/secpod.svg', largura: 140, altura: 26, origem: 'SVG do site oficial secpod.com, em branco como a versão secpod_white_logo do próprio site' },
    foco: 'Gestão contínua de vulnerabilidades, exposição e patches com a plataforma SANER.',
    apresentacao: [
      'A SecPod desenvolve a plataforma SANER (anteriormente conhecida como SanerNow), voltada à gestão contínua de vulnerabilidades e exposição. A abordagem é preventiva: encontrar e corrigir as brechas antes que sejam exploradas.',
      'Com um único agente leve e uma console, a plataforma inventaria ativos, detecta vulnerabilidades e falhas de configuração, prioriza o que representa maior risco e aplica as correções — incluindo patches de sistemas operacionais e aplicativos de terceiros.',
    ],
    necessidades: [
      'Saber quais vulnerabilidades existem em todo o parque.',
      'Priorizar correções pelo risco real, não pela lista completa.',
      'Automatizar patches de sistemas e aplicativos de terceiros.',
      'Comprovar conformidade de configuração em auditorias.',
    ],
    blocos: [
      {
        tipo: 'etapas',
        titulo: 'Ciclo contínuo de remediação',
        intro: 'A plataforma trata a gestão de vulnerabilidades como um ciclo, e não como uma varredura pontual.',
        etapas: [
          { titulo: 'Descobrir', texto: 'Inventário contínuo de ativos, softwares e configurações.' },
          { titulo: 'Avaliar', texto: 'Identificação de vulnerabilidades, desvios de configuração e exposições.' },
          { titulo: 'Priorizar', texto: 'Classificação pelo risco de exploração e pelo impacto no negócio.' },
          { titulo: 'Corrigir', texto: 'Aplicação de patches e ajustes de configuração a partir da mesma console.' },
          { titulo: 'Validar', texto: 'Verificação de que a correção foi efetiva e registro para relatórios.' },
        ],
      },
    ],
    siteOficial: 'https://www.secpod.com/',
    fontes: [
      { rotulo: 'SecPod — site oficial', url: 'https://www.secpod.com/' },
      { rotulo: 'Portfólio de referência — SecPod', url: 'https://societyinfo.com.br/secpod/' },
    ],
  },
  {
    slug: 'stellar-cyber',
    nome: 'Stellar Cyber',
    logo: { src: 'img/fabricantes/stellar-cyber.svg', largura: 538, altura: 183, escala: 1.3, origem: 'SVG oficial para fundo escuro de stellarcyber.ai' },
    foco: 'Operações de segurança unificadas com Open XDR, NG-SIEM e NDR.',
    apresentacao: [
      'A Stellar Cyber desenvolve uma plataforma de operações de segurança baseada no conceito de Open XDR: em vez de exigir a troca das ferramentas existentes, ela coleta e correlaciona dados de endpoints, rede, nuvem, e-mail e identidades em uma única console.',
      'A plataforma reúne SIEM de nova geração, NDR, análise de comportamento (UEBA), detecção de ameaças de identidade e resposta automatizada, com camadas de IA para triagem e investigação. Atende empresas com SOC próprio e provedores de serviços gerenciados (MSSP/MDR).',
    ],
    necessidades: [
      'Unificar alertas de várias ferramentas em casos investigáveis.',
      'Modernizar ou substituir um SIEM tradicional.',
      'Monitorar o tráfego de rede, inclusive ambientes industriais (OT).',
      'Operar um SOC para vários clientes com isolamento de dados.',
    ],
    blocos: [
      {
        tipo: 'perfis',
        titulo: 'Para quem a plataforma foi desenhada',
        perfis: [
          {
            titulo: 'Empresas com equipe de segurança',
            texto: 'Organizações que querem consolidar ferramentas e dar contexto aos alertas.',
            itens: ['Substituir ou complementar o SIEM atual', 'Transformar EDR existente em XDR', 'Implantar NDR, inclusive em OT'],
          },
          {
            titulo: 'MSSPs e provedores de MDR',
            texto: 'Empresas que prestam serviços de SOC a vários clientes.',
            itens: ['Arquitetura multi-tenant e multi-site', 'Isolamento de dados por cliente', 'Base para ofertas de SOC e MDR como serviço'],
          },
        ],
      },
      {
        tipo: 'blocos',
        titulo: 'Blocos da plataforma',
        itens: [
          { titulo: 'NG-SIEM', texto: 'Coleta, normalização e correlação de logs com automação e análise de comportamento.' },
          { titulo: 'NDR', texto: 'Análise do tráfego de rede para revelar movimentações que outras ferramentas não enxergam.' },
          { titulo: 'UEBA e ITDR', texto: 'Detecção de comportamentos fora do padrão de usuários, entidades e identidades.' },
          { titulo: 'Inteligência de ameaças', texto: 'Indicadores e táticas de ataque usados para enriquecer as detecções.' },
          { titulo: 'Gestão de casos', texto: 'Agrupamento de alertas relacionados em casos alinhados ao MITRE ATT&CK.' },
          { titulo: 'Resposta automatizada', texto: 'Ações de resposta e integrações com outras ferramentas de segurança.' },
        ],
      },
    ],
    siteOficial: 'https://stellarcyber.ai/',
    fontes: [
      { rotulo: 'Stellar Cyber — site oficial', url: 'https://stellarcyber.ai/' },
      { rotulo: 'Portfólio de referência — Stellar Cyber', url: 'https://societyinfo.com.br/stellar-cyber/' },
    ],
  },
];

export const fabricantePorSlug = (slug: string) => fabricantes.find((f) => f.slug === slug);
