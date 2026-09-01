const fs = require('fs');
let css = fs.readFileSync('src/styles.css', 'utf8');

// Replace focus note to ensure right positioning and z-index
css = css.replace(
  /\.focus-note \{[^\}]+\}/g,
  `.focus-note { position:absolute; right: -10px; bottom: 42px; z-index: 3; display:flex; gap:11px; padding:15px 17px; background:var(--paper-2); color:var(--ink); border:1px solid #d0ccbe; border-radius:9px; box-shadow:10px 10px 0 rgba(0,0,0,.12); font-size:12px; }`
);

// We need to ensure the profile-art css is responsive
// And remove any duplicate .profile-art styles
css = css.replace(/\/\* --- New Styles for Profile Photo ---\*\/[\s\S]*?(?=\/\* --- New Styles for Project Screenshots ---\*\/)/g, `/* --- New Styles for Profile Photo --- */
.profile-art {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  min-height: 470px;
}
.profile-img-container {
  width: min(100%, 320px);
  position: relative;
  z-index: 2;
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid #39505b;
  box-shadow: 25px 25px 0 rgba(0,0,0,.12);
  background: #13212a;
}
.profile-img {
  width: 100%;
  height: auto;
  display: block;
  filter: grayscale(20%) contrast(1.1);
  transition: filter 0.3s;
}
.profile-img-container:hover .profile-img {
  filter: grayscale(0%) contrast(1);
}
`);

// update mobile focus-note
css = css.replace(
  /\.focus-note \{ right:0; bottom:0; transform:scale\(\.9\); transform-origin:right bottom; \}/g,
  `.focus-note { right:10px; bottom:10px; transform:scale(.9); transform-origin:right bottom; }`
);

fs.writeFileSync('src/styles.css', css);
