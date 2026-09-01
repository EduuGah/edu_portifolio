const fs = require('fs');
let css = fs.readFileSync('src/styles.css', 'utf8');

// I might have removed it entirely by mistake in the previous replace.
// Let's just append it to the end to be safe.
css += `
.project-card { display:grid; grid-template-columns:200px 1fr; min-height:300px; border:1px solid var(--line); background:#13212a; border-radius:10px; overflow:hidden; transition:border-color .2s, transform .2s; }
.project-card:hover { border-color:#54707a; transform:translateY(-3px); }

@media (max-width: 620px) {
  .project-card { grid-template-columns:1fr; }
  .project-visual { min-height:190px; }
}
`;
fs.writeFileSync('src/styles.css', css);
