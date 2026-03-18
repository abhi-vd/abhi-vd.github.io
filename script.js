function toggleTheme() {
  const isLight = document.body.classList.toggle('light');
  document.getElementById('theme-toggle').textContent = isLight ? '🌙' : '☀️';
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
}

// remember preference on page load
if (localStorage.getItem('theme') === 'light') {
  document.body.classList.add('light');
  document.getElementById('theme-toggle').textContent = '🌙';
}
