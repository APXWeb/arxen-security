/**
 * Busca e filtros do catálogo.
 * - Dentro de um grupo (ex.: dois fabricantes) os filtros somam (OU).
 * - Entre grupos (fabricante × necessidade) os filtros restringem (E).
 * - A busca exige todos os termos digitados, sem diferenciar acentos.
 * O estado fica na URL (?q=&categoria=&fabricante=) para ser compartilhável.
 */

const normalizar = (t: string) => t.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().trim();

export function iniciarCatalogo() {
  const elLista = document.querySelector<HTMLElement>('[data-lista]');
  if (!elLista) return;
  const lista: HTMLElement = elLista;

  const cards = [...lista.querySelectorAll<HTMLElement>('[data-solucao]')];
  const busca = document.querySelector<HTMLInputElement>('#busca-catalogo')!;
  const painel = document.querySelector<HTMLElement>('[data-filtros]')!;
  const checks = [...painel.querySelectorAll<HTMLInputElement>('input[type="checkbox"]')];
  const contagem = document.querySelector<HTMLElement>('[data-contagem]')!;
  const chips = document.querySelector<HTMLElement>('[data-chips]')!;
  const vazio = document.querySelector<HTMLElement>('[data-vazio]')!;
  const btnAbrir = document.querySelector<HTMLButtonElement>('[data-abrir-filtros]')!;
  const qtdAtivos = document.querySelector<HTMLElement>('[data-qtd-ativos]')!;
  const btnVer = painel.querySelector<HTMLElement>('.filtros__ver');

  const rotulo = (input: HTMLInputElement) => input.closest('label')?.querySelector('.filtro__rotulo')?.textContent ?? input.value;
  const marcados = (grupo: string) => checks.filter((c) => c.name === grupo && c.checked).map((c) => c.value);

  function lerUrl() {
    const q = new URLSearchParams(location.search);
    busca.value = q.get('q') ?? '';
    const cats = q.getAll('categoria');
    const fabs = q.getAll('fabricante');
    checks.forEach((c) => {
      c.checked = (c.name === 'categoria' ? cats : fabs).includes(c.value);
    });
  }

  function escreverUrl() {
    const q = new URLSearchParams();
    if (busca.value.trim()) q.set('q', busca.value.trim());
    marcados('categoria').forEach((v) => q.append('categoria', v));
    marcados('fabricante').forEach((v) => q.append('fabricante', v));
    const s = q.toString();
    history.replaceState(null, '', s ? `?${s}` : location.pathname);
  }

  function aplicar() {
    const termos = normalizar(busca.value).split(/\s+/).filter(Boolean);
    const cats = marcados('categoria');
    const fabs = marcados('fabricante');
    let visiveis = 0;

    cards.forEach((card) => {
      const indice = card.dataset.indice ?? '';
      const okBusca = termos.every((t) => indice.includes(t));
      const okFab = !fabs.length || fabs.includes(card.dataset.fabricante ?? '');
      const cardCats = (card.dataset.categorias ?? '').split(' ');
      const okCat = !cats.length || cats.some((c) => cardCats.includes(c));
      const mostrar = okBusca && okFab && okCat;
      card.hidden = !mostrar;
      if (mostrar) visiveis++;
    });

    contagem.textContent =
      visiveis === cards.length
        ? `${visiveis} soluções`
        : visiveis === 0
          ? 'Nenhum resultado'
          : visiveis === 1
            ? '1 solução encontrada'
            : `${visiveis} soluções encontradas`;
    if (btnVer) btnVer.textContent = visiveis === 0 ? 'Nenhum resultado' : visiveis === 1 ? 'Ver 1 resultado' : `Ver ${visiveis} resultados`;
    vazio.hidden = visiveis > 0;
    lista.hidden = visiveis === 0;

    // Chips dos filtros ativos (removíveis).
    chips.innerHTML = '';
    const ativos = checks.filter((c) => c.checked);
    if (busca.value.trim()) {
      chips.append(criarChip(`“${busca.value.trim()}”`, 'Remover busca', () => {
        busca.value = '';
        atualizar();
      }));
    }
    ativos.forEach((c) =>
      chips.append(criarChip(rotulo(c), `Remover filtro ${rotulo(c)}`, () => {
        c.checked = false;
        atualizar();
      })),
    );
    qtdAtivos.textContent = String(ativos.length);
    qtdAtivos.hidden = ativos.length === 0;
  }

  function criarChip(texto: string, rotuloAcessivel: string, aoRemover: () => void) {
    const b = document.createElement('button');
    b.type = 'button';
    b.setAttribute('aria-label', rotuloAcessivel);
    b.textContent = texto;
    const x = document.createElement('span');
    x.setAttribute('aria-hidden', 'true');
    x.textContent = '×';
    b.append(x);
    b.addEventListener('click', () => {
      aoRemover();
      busca.focus({ preventScroll: true });
    });
    return b;
  }

  function atualizar() {
    aplicar();
    escreverUrl();
  }

  function limpar() {
    busca.value = '';
    checks.forEach((c) => (c.checked = false));
    atualizar();
  }

  let espera: number | undefined;
  busca.addEventListener('input', () => {
    clearTimeout(espera);
    espera = window.setTimeout(atualizar, 120);
  });
  checks.forEach((c) => c.addEventListener('change', atualizar));
  document.querySelectorAll('[data-limpar]').forEach((b) => b.addEventListener('click', limpar));

  // Painel de filtros no celular.
  const abrirPainel = (abrir: boolean) => {
    painel.classList.toggle('aberto', abrir);
    btnAbrir.setAttribute('aria-expanded', String(abrir));
    document.body.style.overflow = abrir ? 'hidden' : '';
    if (abrir) painel.querySelector<HTMLElement>('input')?.focus({ preventScroll: true });
    else btnAbrir.focus({ preventScroll: true });
  };
  btnAbrir.addEventListener('click', () => abrirPainel(true));
  painel.querySelectorAll('[data-fechar-filtros]').forEach((b) => b.addEventListener('click', () => abrirPainel(false)));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && painel.classList.contains('aberto')) abrirPainel(false);
  });
  window.matchMedia('(min-width: 1000px)').addEventListener('change', (m) => {
    if (m.matches && painel.classList.contains('aberto')) {
      painel.classList.remove('aberto');
      document.body.style.overflow = '';
    }
  });

  lerUrl();
  aplicar();
  window.addEventListener('popstate', () => {
    lerUrl();
    aplicar();
  });
}
