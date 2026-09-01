const fs = require('fs');
let css = fs.readFileSync('src/styles.css', 'utf8');
css = css.replace('.nav-shell nav a.active::after { content:""; position:absolute; bottom:0; left:0; right:0; height:2px; background:var(--mint); }', '');
fs.writeFileSync('src/styles.css', css);
