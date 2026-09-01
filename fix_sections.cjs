const fs = require('fs');

const files = [
  'src/sections/About.jsx',
  'src/sections/Skills.jsx',
  'src/sections/Projects.jsx',
  'src/sections/Contact.jsx'
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/<span className="section-index">\d{2}<\/span>\s*/g, '');
  fs.writeFileSync(file, content);
});
