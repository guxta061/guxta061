// theme-toggle.js

function toggleTheme() {
  document.body.classList.toggle('dark-mode');

  const isDark = document.body.classList.contains('dark-mode');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');

  console.log(`Tema alterado por Gustavo: ${isDark ? 'Modo Escuro' : 'Modo Claro'}`);
}

// Aplicar o tema salvo ao carregar
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
  }
});
