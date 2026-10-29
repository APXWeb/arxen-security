// Entrada suave de conteúdo ao rolar. Sem IntersectionObserver (ou com
// movimento reduzido), tudo aparece imediatamente.
const alvos = document.querySelectorAll<HTMLElement>('.revelar');
const reduzir = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!('IntersectionObserver' in window) || reduzir) {
  alvos.forEach((el) => el.classList.add('visivel'));
} else {
  const obs = new IntersectionObserver(
    (entradas) => {
      entradas.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('visivel');
          obs.unobserve(e.target);
        }
      });
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
  );
  alvos.forEach((el) => obs.observe(el));
}
