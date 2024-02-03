function load() {
  const target = document.getElementById('content_target');
  if (target) {
    target.innerText =
      'this content from options.ts file (find me at src/scripts/options.ts)';
  }
}

load();
