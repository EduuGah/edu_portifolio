const fs = require('fs');
let code = fs.readFileSync('src/sections/Projects.jsx', 'utf8');

code = code.replace('/projetos/dineflow.png', '/projetos/dineflow.png');
code = code.replace('/projetos/cutflow.png', '/projetos/cutflow.png');
code = code.replace('/projetos/ForgeFlow.jpg', '/projetos/ForgeFlow.jpg');
code = code.replace('/projetos/CoupleFlow.png', '/projetos/CoupleFlow.png');

fs.writeFileSync('src/sections/Projects.jsx', code);
