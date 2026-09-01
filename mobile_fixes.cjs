const fs = require('fs');
let css = fs.readFileSync('src/styles.css', 'utf8');

// Ensure art-wrapper is perfectly bounded
css = css.replace('.art-wrapper {\n  position: relative;\n  width: 100%;\n  max-width: 520px;\n  display: flex;\n  justify-content: center;\n}', '.art-wrapper {\n  position: relative;\n  width: 100%;\n  max-width: 520px;\n  margin: 0 auto;\n}');

css += `
@media (max-width: 620px) {
  .hero-art { min-height: auto; padding: 30px 0 20px; }
  .editor { transform: none; box-shadow: 10px 10px 0 rgba(0,0,0,.12); }
  .focus-note {
    bottom: -15px;
    right: 0px;
    padding: 12px 14px;
    gap: 8px;
  }
}
`;
fs.writeFileSync('src/styles.css', css);
