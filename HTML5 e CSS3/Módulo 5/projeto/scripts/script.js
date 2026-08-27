const botao = document.getElementById('botao-tema');
const body = document.body;

// Persistência do tema
const temasalvo = localStorage.getItem('tema');
temaEscuro(temasalvo === 'escuro');

// Função para alternar entre tema claro e escuro
function temaEscuro(tipo) {
  if (tipo == true) {
    body.classList.add('escuro');
    botao.innerHTML = '<i class="fa-solid fa-sun"></i>';
  } else {
    body.classList.remove('escuro');
    botao.innerHTML = '<i class="fa-solid fa-moon"></i>';
  }
}

botao.addEventListener('click', () => {
  const isescuro = body.classList.toggle('escuro');
  temaEscuro(isescuro);
  localStorage.setItem('tema', isescuro ? 'escuro' : 'claro');
});

// Scroll suave para links de navegação
const navLinks = document.querySelectorAll('#menu ul a.rolagem');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const headerHeight = document.querySelector('header').offsetHeight;

      const isMobile = window.innerWidth < 768;
      const targetPosition = isMobile 
        ? target.offsetTop - headerHeight + 40 
        : target.offsetTop - headerHeight - 10;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// Ajustar link para se adequar à media query
function ajustarLinks() {
  const link = document.querySelector('#menu li:first-child a');

  if (window.innerWidth < 992) {
    link.setAttribute('href', '#ficha');
  } else {
    link.setAttribute('href', '#apresentacao');
  }
}

ajustarLinks();
window.addEventListener('resize', ajustarLinks);