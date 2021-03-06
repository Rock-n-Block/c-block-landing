function detectTheme() {
  let theme = 'dark';
  const themeFromLocalStorage = localStorage.getItem('theme');

  if (themeFromLocalStorage) {
    if (themeFromLocalStorage === 'dark' || themeFromLocalStorage === 'light') {
      theme = themeFromLocalStorage;
    }
  } else {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      theme = 'dark';
    }
  }
  document.body.setAttribute('data-theme', theme);
}

detectTheme();
