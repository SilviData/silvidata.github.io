/* =========================================================
   SilviData · Portafolio
   JS mínimo: solo interacciones.
   1. Filtros de la página Proyectos
   ========================================================= */


/* 1. Filtros de proyectos ---------------------------------
   Los botones tienen data-filtro="todos | dashboard | caso"
   y las tarjetas data-tipo="dashboard | caso".
   Las tarjetas sin data-tipo (como la de Behance) siempre se ven. */
const botonesFiltro = document.querySelectorAll('[data-filtro]');
const tarjetasFiltrables = document.querySelectorAll('[data-tipo]');

botonesFiltro.forEach((boton) => {
  boton.addEventListener('click', () => {
    const filtro = boton.dataset.filtro;

    botonesFiltro.forEach((otro) => {
      const activo = otro === boton;
      otro.classList.toggle('btn--activo', activo);
      otro.setAttribute('aria-pressed', activo);
    });

    tarjetasFiltrables.forEach((tarjeta) => {
      const visible = filtro === 'todos' || tarjeta.dataset.tipo === filtro;
      tarjeta.classList.toggle('oculto', !visible);
    });
  });
});
