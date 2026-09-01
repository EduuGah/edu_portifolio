const fs = require('fs');
let css = fs.readFileSync('src/styles.css', 'utf8');

// Add the background colors for the new visuals
const newCSS = `
.project-visual.dine { background: #262235; }
.project-visual.cut { background: #2f2521; }
.project-visual.forge { background: #203b36; }
.project-visual.couple { background: #3b222d; }

.mini-receipt { position:absolute; right:9px; bottom:22px; background:#18262d; border:1px solid #45606a; padding:10px; width:90px; border-radius:6px; font-size:8px; }
.mini-receipt b { color:var(--yellow); display:block; margin-bottom:4px; }
.mini-receipt i { display:block; padding:3px 0; border-bottom:1px solid #283a42; color:#9badb0; }
.mini-receipt i:last-child { border-bottom:0; }

.mini-calendar { position:absolute; right:9px; bottom:22px; background:#18262d; border:1px solid #45606a; padding:10px; width:90px; border-radius:6px; font-size:8px; }
.mini-calendar b { color:var(--mint); display:block; margin-bottom:6px; }
.mini-calendar .grid { display:grid; grid-template-columns:repeat(3, 1fr); gap:3px; }
.mini-calendar .grid span { height:12px; background:#283a42; border-radius:2px; }
.mini-calendar .grid span.active { background:var(--mint); }
`;

css += newCSS;

// Let's restore the project-card grid logic since I changed it to 1fr previously!
css = css.replace(/\.project-card \{[\s\S]*?min-height: auto;[\s\S]*?\}/, '');

fs.writeFileSync('src/styles.css', css);
