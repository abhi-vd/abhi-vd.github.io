// theme toggle
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

// project filter
function filter(lang, btn) {
  document.querySelectorAll('.f').forEach(b => b.classList.remove('on'));
  btn.classList.add('on');
  document.querySelectorAll('#tb tr').forEach(row => {
    row.style.display = (lang === 'all' || row.dataset.lang === lang) ? '' : 'none';
  });
}
