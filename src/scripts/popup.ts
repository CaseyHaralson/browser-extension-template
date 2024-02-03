function load() {
  const target = document.getElementById('content_target');
  if (target) {
    target.innerText =
      'this content from popup.ts file (find me at src/scripts/popup.ts)';
  }
}

load();
