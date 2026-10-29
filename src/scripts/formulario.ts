/**
 * Formulário comercial: validação acessível, filtros simples contra robôs e
 * envio para o endpoint configurado em src/config/site.ts.
 *
 * Sem endpoint, nada é enviado nem guardado (nem em localStorage): o visitante
 * é avisado de que a integração está pendente.
 */

type Erros = Record<string, string>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const INTERVALO_REENVIO_MS = 30_000;

function validar(form: HTMLFormElement): Erros {
  const d = new FormData(form);
  const erros: Erros = {};
  const texto = (k: string) => String(d.get(k) ?? '').trim();

  if (texto('nome').length < 2) erros.nome = 'Informe seu nome.';
  const email = texto('email');
  if (!email) erros.email = 'Informe um e-mail para retorno.';
  else if (!EMAIL_RE.test(email)) erros.email = 'Confira o formato do e-mail (ex.: nome@empresa.com.br).';
  if (texto('empresa').length < 2) erros.empresa = 'Informe o nome da empresa.';
  const tel = texto('telefone');
  if (tel && tel.replace(/\D/g, '').length < 10) erros.telefone = 'Inclua DDD e número completo, ou deixe em branco.';
  const msg = texto('mensagem');
  if (msg.length < 15) erros.mensagem = 'Descreva o cenário em pelo menos algumas palavras (15 caracteres).';
  if (!d.get('consentimento')) erros.consentimento = 'É necessário concordar com o uso dos dados para receber o retorno.';
  return erros;
}

function mostrarErros(form: HTMLFormElement, erros: Erros, focar: boolean) {
  const campos = ['nome', 'email', 'empresa', 'telefone', 'mensagem', 'consentimento'];
  campos.forEach((nome) => {
    const input = form.elements.namedItem(nome) as HTMLInputElement | null;
    if (!input) return;
    const p = form.querySelector<HTMLElement>(`#${input.id}-erro`);
    const msg = erros[nome];
    input.setAttribute('aria-invalid', msg ? 'true' : 'false');
    if (p) {
      p.textContent = msg ?? '';
      p.hidden = !msg;
      if (msg) input.setAttribute('aria-describedby', p.id);
      else input.removeAttribute('aria-describedby');
    }
  });

  const resumo = form.querySelector<HTMLElement>('[data-resumo-erros]')!;
  const lista = Object.entries(erros);
  if (!lista.length) {
    resumo.hidden = true;
    resumo.innerHTML = '';
    return;
  }
  if (!focar) return;
  resumo.innerHTML = '';
  const titulo = document.createElement('strong');
  titulo.textContent = lista.length === 1 ? 'Há 1 campo para revisar:' : `Há ${lista.length} campos para revisar:`;
  const ul = document.createElement('ul');
  lista.forEach(([nome, msg]) => {
    const input = form.elements.namedItem(nome) as HTMLInputElement;
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = `#${input.id}`;
    a.textContent = msg;
    a.addEventListener('click', (e) => {
      e.preventDefault();
      input.focus();
    });
    li.append(a);
    ul.append(li);
  });
  resumo.append(titulo, ul);
  resumo.hidden = false;
  resumo.focus();
}

function definirStatus(form: HTMLFormElement, tipo: 'ok' | 'erro' | 'pendente' | '', titulo = '', texto = '') {
  const el = form.querySelector<HTMLElement>('[data-status]')!;
  el.dataset.tipo = tipo;
  el.innerHTML = '';
  if (!tipo) return el;
  const s = document.createElement('strong');
  s.textContent = titulo;
  const p = document.createElement('span');
  p.textContent = texto;
  el.append(s, p);
  return el;
}

function alternarPerfil(form: HTMLFormElement) {
  const perfil = (form.querySelector<HTMLInputElement>('input[name="perfil"]:checked')?.value ?? 'empresa') as string;
  form.querySelectorAll<HTMLElement>('[data-so-perfil]').forEach((el) => {
    const visivel = el.dataset.soPerfil === perfil;
    el.hidden = !visivel;
    el.querySelectorAll<HTMLSelectElement>('select').forEach((s) => (s.disabled = !visivel));
  });
}

function preencherPelaUrl(form: HTMLFormElement) {
  const q = new URLSearchParams(location.search);
  const select = form.elements.namedItem('interesse') as HTMLSelectElement | null;
  const solucao = q.get('solucao');
  const fabricante = q.get('fabricante');
  if (select) {
    const valor = solucao ? `solucao:${solucao}` : fabricante ? `fabricante:${fabricante}` : '';
    if (valor && [...select.options].some((o) => o.value === valor)) select.value = valor;
  }
  const perfil = q.get('perfil');
  if (perfil === 'revenda' || perfil === 'empresa') {
    const r = form.querySelector<HTMLInputElement>(`input[name="perfil"][value="${perfil}"]`);
    if (r) r.checked = true;
  }
}

function resumoTexto(form: HTMLFormElement) {
  const d = new FormData(form);
  const select = form.elements.namedItem('interesse') as HTMLSelectElement;
  const interesse = select.selectedOptions[0]?.textContent ?? '';
  return [
    `Perfil: ${d.get('perfil') === 'revenda' ? 'Revenda ou empresa de TI' : 'Empresa'}`,
    `Nome: ${d.get('nome')}`,
    `Empresa: ${d.get('empresa')}`,
    `E-mail: ${d.get('email')}`,
    d.get('telefone') ? `Telefone: ${d.get('telefone')}` : '',
    `Interesse: ${interesse}`,
    '',
    String(d.get('mensagem') ?? ''),
  ]
    .filter((l) => l !== null)
    .join('\n');
}

export function iniciarFormularios() {
  document.querySelectorAll<HTMLFormElement>('[data-form-contato]').forEach((form) => {
    if (form.dataset.iniciado) return;
    form.dataset.iniciado = '1';

    const abertoEm = Date.now();
    const tempoMinimo = Number(form.dataset.tempoMinimo || 3000);
    const endpoint = form.dataset.endpoint || '';
    const botao = form.querySelector<HTMLButtonElement>('[data-enviar]')!;
    const textoBotao = botao.querySelector<HTMLElement>('.form__enviar-texto')!;
    let tentouEnviar = false;
    let ultimoEnvio = 0;

    preencherPelaUrl(form);
    alternarPerfil(form);
    form.querySelectorAll('input[name="perfil"]').forEach((r) => r.addEventListener('change', () => alternarPerfil(form)));

    // Após a primeira tentativa, a validação acompanha a digitação.
    form.addEventListener('input', () => tentouEnviar && mostrarErros(form, validar(form), false));
    form.addEventListener(
      'blur',
      (e) => {
        const alvo = e.target as HTMLInputElement;
        if (!tentouEnviar || !alvo.name) return;
        mostrarErros(form, validar(form), false);
      },
      true,
    );

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (form.classList.contains('enviando')) return;
      tentouEnviar = true;

      const erros = validar(form);
      mostrarErros(form, erros, true);
      if (Object.keys(erros).length) {
        definirStatus(form, '');
        return;
      }

      const d = new FormData(form);
      // Robôs costumam preencher o campo isca, invisível para pessoas.
      const suspeito = String(d.get('site') ?? '') !== '';
      // Envio instantâneo após abrir a página: pede confirmação em vez de enviar.
      if (Date.now() - abertoEm < tempoMinimo) {
        definirStatus(form, 'erro', 'Confirme o envio.', 'Revise os dados e clique em "Enviar solicitação" novamente.');
        return;
      }

      if (Date.now() - ultimoEnvio < INTERVALO_REENVIO_MS) {
        definirStatus(form, 'erro', 'Aguarde alguns segundos.', 'Sua solicitação anterior acabou de ser processada. Tente novamente em instantes, se necessário.');
        return;
      }

      if (!endpoint) {
        const el = definirStatus(
          form,
          'pendente',
          'Envio online ainda não ativado.',
          'Os dados foram validados, mas não foram enviados nem armazenados: o formulário ainda não tem um destino configurado. Para registrar seu interesse agora, copie o resumo abaixo e encaminhe pelo canal de contato da ARXEN.',
        );
        if (navigator.clipboard) {
          const b = document.createElement('button');
          b.type = 'button';
          b.className = 'btn btn--contorno btn--pequeno';
          b.textContent = 'Copiar resumo da solicitação';
          b.addEventListener('click', async () => {
            try {
              await navigator.clipboard.writeText(resumoTexto(form));
              b.textContent = 'Resumo copiado';
            } catch {
              b.textContent = 'Não foi possível copiar';
            }
          });
          el.append(document.createElement('br'), b);
        }
        return;
      }

      form.classList.add('enviando');
      botao.disabled = true;
      botao.setAttribute('aria-busy', 'true');
      textoBotao.textContent = 'Enviando…';
      definirStatus(form, '');

      try {
        if (suspeito) {
          // Simula sucesso para não sinalizar ao robô que foi bloqueado.
          await new Promise((r) => setTimeout(r, 800));
        } else {
          const dados: Record<string, string> = {};
          d.forEach((v, k) => {
            if (k !== 'site') dados[k] = String(v);
          });
          dados.pagina = location.href;
          const resp = await fetch(endpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
            body: JSON.stringify(dados),
          });
          if (!resp.ok) throw new Error(String(resp.status));
        }
        ultimoEnvio = Date.now();
        form.reset();
        alternarPerfil(form);
        mostrarErros(form, {}, false);
        tentouEnviar = false;
        definirStatus(form, 'ok', 'Solicitação enviada.', 'Obrigado. A equipe da ARXEN vai analisar o cenário descrito e retornar pelo e-mail informado.').focus?.();
      } catch {
        definirStatus(form, 'erro', 'Não foi possível enviar agora.', 'Verifique sua conexão e tente novamente. Seus dados continuam preenchidos no formulário.');
      } finally {
        form.classList.remove('enviando');
        botao.disabled = false;
        botao.removeAttribute('aria-busy');
        textoBotao.textContent = 'Enviar solicitação';
      }
    });
  });
}
