const fs = require('fs');
let css = fs.readFileSync('src/styles.css', 'utf8');

css = css.replace(
  /@media \(max-width: 620px\) \{\s*\.nav-shell \{[^\}]+\}\s*\.nav-shell nav \{[^\}]+\}\s*\.nav-contact \{[^\}]+\}\s*h1 \{[^\}]+\}/,
  `@media (max-width: 620px) {
  .nav-shell { flex-wrap: wrap; height: auto; padding: 10px; flex-direction: column; min-height: 50px; }
  .nav-shell nav { width: 100%; justify-content: center; overflow-x: auto; padding-bottom: 0px; gap: 14px; }
  .nav-shell nav a { font-size: 13px; }
  .nav-contact { display: none; }
  h1 { font-size: 32px; }
  .hero-text { font-size: 15px; margin: 20px 0; }
  .editor-body .line { font-size: 12px; }
  .button { padding: 10px 16px; font-size: 13px; }`
);

fs.writeFileSync('src/styles.css', css);
