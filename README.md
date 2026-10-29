# ARXEN Security — site corporativo

Site estático em [Astro](https://astro.build): página inicial, catálogo com busca e filtros, páginas de fabricantes, produtos e categorias, fluxos para empresas e revendas.

```bash
npm install
npm run dev          # desenvolvimento em http://localhost:4321
npm run build        # gera dist/ para domínio próprio (raiz)
npm run build:pages  # gera dist/ para apxweb.github.io/arxen-security/
npm run check        # checagem de tipos
```

Para outro domínio: `SITE_URL=https://www.exemplo.com.br npm run build` (e `BASE_PATH=/pasta/` se publicar em subpasta).

## Onde mudar cada coisa

| O quê | Arquivo |
|---|---|
| Contatos, WhatsApp, CNPJ, endpoint do formulário, indexação | `src/config/site.ts` |
| Dados institucionais (fundação, certificações, parcerias confirmadas) | `src/config/site.ts` → `INSTITUCIONAL` |
| Soluções do catálogo | `src/data/solucoes.ts` |
| Fabricantes (texto, logo, blocos editoriais) | `src/data/fabricantes.ts` |
| Categorias / necessidades | `src/data/categorias.ts` |
| Cores, tipografia, botões | `src/styles/global.css` |

Para incluir um produto, acrescente um objeto em `src/data/solucoes.ts`. A página `/solucoes/<slug>/`, o card, os filtros, os links relacionados, o formulário e o sitemap são gerados automaticamente. Um novo fabricante segue a mesma lógica em `fabricantes.ts` (logo em `public/img/fabricantes/`).

## Pendências que dependem do cliente

- **Formulário:** `FORMULARIO.endpoint` está `null`. Assim, o formulário valida os campos mas **não envia nem armazena nada** e avisa isso ao visitante. Basta informar uma URL que aceite POST com JSON (Formspree, Getform, função serverless…).
- **Contatos:** e-mail, telefone, WhatsApp e LinkedIn estão `null` e não aparecem até serem preenchidos.
- **Indexação:** `SITE.indexavel = false` (proposta) gera `noindex` e `Disallow: /`. Mude para `true` no domínio definitivo.
- **Parcerias:** o site afirma explicitamente que a apresentação dos fabricantes **não** indica parceria oficial. Se houver parceria confirmada por escrito, inclua o slug em `INSTITUCIONAL.parceriasConfirmadas`.
- **Política de privacidade:** é uma minuta marcada como tal; precisa de revisão jurídica e dos dados do controlador/DPO.
- **Logos de fabricantes:** Cove Data Protection e DataDike só foram encontrados em versão branca; o site usa uma versão positiva (texto escuro) derivada. Substituir pelos arquivos oficiais dos kits de marca.
- **Dados a confirmar:** composição atual dos planos ESET PROTECT no Brasil (a ESET mudou a nomenclatura em alguns mercados); sistemas suportados pelo cloud4mobile além de Android; site oficial da DataDike estava fora do ar durante a pesquisa (descrições baseadas no portfólio de referência).

## Logo da ARXEN

`assets/brand/arxen-logo-original.jpeg` é o arquivo recebido. `public/img/brand/arxen-logo.{png,webp}` é a mesma arte com o fundo branco removido — sem redesenho, recoloração ou mudança de proporção. Por isso a logo aparece sempre sobre superfícies claras (cabeçalho e rodapé). Uma versão para fundo escuro depende de arquivo oficial do cliente.

## Fontes

Cada página de solução lista as fontes consultadas. Referência de portfólio: societyinfo.com.br. Validações em eset.com, safetica.com, n-able.com (Cove), sendmarc.com, stellarcyber.ai, secpod.com, mobiltec.com.br e microsoft.com.
