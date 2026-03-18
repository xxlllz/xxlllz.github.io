function setFavicon() {
  const lightSchemeIcon = document.querySelector('link[rel="icon"][media="(prefers-color-scheme:dark)"]');
  const darkSchemeIcon = document.querySelector('link[rel="icon"][media="(prefers-color-scheme:light)"]');

  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    if (lightSchemeIcon) lightSchemeIcon.removeAttribute('media');
    if (darkSchemeIcon) darkSchemeIcon.media = '(prefers-color-scheme:light)';
  } else {
    if (darkSchemeIcon) darkSchemeIcon.removeAttribute('media');
    if (lightSchemeIcon) lightSchemeIcon.media = '(prefers-color-scheme:dark)';
  }
}

setFavicon();

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', setFavicon);
