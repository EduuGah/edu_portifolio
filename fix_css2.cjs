const fs = require('fs');
let css = fs.readFileSync('src/styles.css', 'utf8');

css += `
.mini-phone, .mini-board { width:128px; background:#111b22; border:1px solid #45606a; border-radius:7px; padding:12px; font-size:9px; display:flex; flex-direction:column; gap:8px; }
.mini-phone span, .mini-board span { color:var(--mint); font-weight:700; font-size:11px; }
.mini-phone b, .mini-board b { color:#e6e8df; font-size:10px; }
.mini-phone i, .mini-board i { color:#81969c; font-style:normal; padding:6px; background:#1d2d35; border-radius:3px; }
.mini-chart, .mini-task { position:absolute; right:9px; bottom:22px; background:#18262d; border:1px solid #45606a; padding:10px; width:90px; border-radius:6px; font-size:8px; }
.mini-chart b, .mini-task b { color:var(--yellow); display:block; margin-bottom:7px; }
.bars { display:flex; align-items:end; gap:4px; height:45px; }
.bars i { width:10px; background:var(--mint); opacity:.75; }
.bars i:nth-child(1){height:15px}.bars i:nth-child(2){height:24px}.bars i:nth-child(3){height:20px}.bars i:nth-child(4){height:34px}.bars i:nth-child(5){height:42px}
.mini-task span { display:block; color:#9badb0; }.mini-task em { display:block; color:var(--mint); font-style:normal; margin-top:8px; font-size:14px; }
.project-content { padding:28px 25px; display:flex; flex-direction:column; }
.project-head { display:flex; justify-content:space-between; align-items:center; }
.project-head h3 { font-size:25px; margin:0; letter-spacing:-.03em; }
.project-head a { color:var(--muted); }
.project-head a:hover { color:var(--mint); }
.project-content p { color:#bac7c9; font-size:14px; margin:14px 0 20px; }
.tags { display:flex; flex-wrap:wrap; gap:6px; }
.project-links { margin-top:auto; padding-top:25px; display:flex; flex-wrap:wrap; gap:16px; align-items:center; }
.project-links a { display:inline-flex; align-items:center; gap:7px; font-size:13px; color:var(--white); }
.project-links a:hover { color:var(--mint); }
.project-links a:last-child { color:var(--muted); }
`;
fs.writeFileSync('src/styles.css', css);
