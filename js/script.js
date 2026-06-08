// ATLAS DIGITAL - JS PRINCIPAL

document.addEventListener('DOMContentLoaded', function() {
  
  // Menu mobile
  const menuToggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.menu');
  
  if (menuToggle) {
    menuToggle.addEventListener('click', function() {
      menu.classList.toggle('ativo');
    });
  }
  
  // Dropdown mobile
  const dropdownLinks = document.querySelectorAll('.menu > li.tem-dropdown > a');
  dropdownLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        this.parentElement.classList.toggle('dropdown-aberto');
      }
    });
  });
  
  // FAQ - abrir/fechar
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const pergunta = item.querySelector('.faq-pergunta');
    pergunta.addEventListener('click', function() {
      item.classList.toggle('ativo');
    });
  });
  
  // Smooth scroll para âncoras
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
  
  // Form contato (placeholder)
  const formContato = document.querySelector('#form-contato');
  if (formContato) {
    formContato.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Formulário enviado! (substituir por integração real)');
    });
  }
});
