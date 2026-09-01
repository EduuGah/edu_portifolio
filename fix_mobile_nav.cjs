const fs = require('fs');
let css = fs.readFileSync('src/styles.css', 'utf8');

css = css.replace(
  /\.nav-shell nav \{ width: 100%; justify-content: center; overflow-x: auto; padding-bottom: 0px; gap: 14px; \}/,
  `.nav-shell nav { width: 100%; justify-content: center; overflow-x: auto; overflow-y: hidden; padding-bottom: 0px; gap: 14px; }
  .nav-shell nav::-webkit-scrollbar { display: none; }`
);

fs.writeFileSync('src/styles.css', css);
