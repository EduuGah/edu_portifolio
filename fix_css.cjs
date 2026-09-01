const fs = require('fs');
let css = fs.readFileSync('src/styles.css', 'utf8');

// Replace old skills-grid styles
css = css.replace(
  /\.skills-grid \{ display:grid; grid-template-columns:repeat\(4,1fr\); border-top:1px solid var\(--line\); border-bottom:1px solid var\(--line\); \}/g,
  `.skills-grid { display:grid; grid-template-columns:repeat(4,1fr); gap: 20px; }`
);

css = css.replace(
  /\.skill-group \{ min-height:250px; padding:30px 28px; border-right:1px solid var\(--line\); \}/g,
  `.skill-group { min-height:250px; padding:30px 28px; background: rgba(19, 33, 42, 0.4); border: 1px solid var(--line); border-radius: 12px; transition: transform 0.2s ease, background 0.2s ease, border-color 0.2s ease; backdrop-filter: blur(8px); }
.skill-group:hover { transform: translateY(-4px); background: rgba(19, 33, 42, 0.8); border-color: rgba(87, 199, 165, 0.5); box-shadow: 0 10px 30px -10px rgba(0,0,0,0.5); }`
);

css = css.replace(
  /\.skill-group:last-child \{ border-right:0; \}/g,
  `.skill-group:last-child {  }` // remove logic
);

// Fix mobile overrides that might break the new cards
css = css.replace(
  /\.skill-group \{ min-height: auto; border-right: none; border-bottom: 1px solid var\(--line\); \}\s*\.skill-group:last-child \{ border-bottom: none; \}/g,
  `.skill-group { min-height: auto; }`
);

fs.writeFileSync('src/styles.css', css);
