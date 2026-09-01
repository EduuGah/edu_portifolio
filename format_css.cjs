const fs = require('fs');
let css = fs.readFileSync('src/styles.css', 'utf8');

// We want project-card to just be a stacked card, not a row grid, because the screenshots look best stacked on top.
css = css.replace(/\.project-card\s*\{[^\}]+\}/g, ''); // remove all occurrences
css = css.replace(/@media \(max-width: 620px\) \{\s*\.project-card \{ grid-template-columns:1fr; \}\s*\.project-visual \{ min-height:190px; \}\s*\}/g, ''); // remove the media query targeting it if possible

// Now let's add the correct styles for projects and contact!
css += `
/* --- Fix Project Cards --- */
.project-card { 
  display: flex;
  flex-direction: column;
  min-height: 300px;
  border: 1px solid var(--line);
  background: #13212a;
  border-radius: 10px;
  overflow: hidden;
  transition: border-color 0.2s, transform 0.2s;
}
.project-card:hover {
  border-color: #54707a;
  transform: translateY(-3px);
}
.project-image-container {
  width: 100%;
  height: 240px;
  border-bottom: 1px solid var(--line);
  background: #1a2932;
  overflow: hidden;
}
.project-screenshot {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}
.project-card:hover .project-screenshot {
  transform: scale(1.05);
}

/* --- Fix Contact Section --- */
.contact { 
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 70px;
}
.contact-grid { 
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  align-content: start;
}
.contact-intro h2 { margin-top: 15px; }
.contact-intro p { color: var(--muted); max-width: 480px; margin-top: 22px; }
.contact-card { 
  min-height: 120px;
  padding: 20px;
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 14px;
  align-items: center;
  border: 1px solid var(--line);
  border-radius: 8px;
  background: #13212a;
  color: inherit;
  transition: transform 0.2s, border-color 0.2s;
}
.contact-card:hover {
  border-color: #57c7a5;
  transform: translateY(-4px);
}
.contact-icon { color: var(--mint); }
.contact-card strong, .contact-card small { display: block; }
.contact-card small { color: var(--muted); margin-top: 5px; font-size: 12px; overflow-wrap: anywhere; }
.contact-card > svg { color: #71868d; }

@media (max-width: 900px) {
  .contact { grid-template-columns: 1fr; gap: 45px; }
}
@media (max-width: 620px) {
  .contact-grid { grid-template-columns: 1fr; }
}

/* --- Fix Hero Profile Image --- */
.profile-art {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  min-height: 380px;
}
.profile-img-container {
  width: min(100%, 300px);
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid #39505b;
  box-shadow: 15px 15px 0 rgba(0,0,0,.12);
  background: #13212a;
  transform: rotate(1.5deg);
}
.profile-img {
  width: 100%;
  height: auto;
  display: block;
}
@media (max-width: 620px) {
  .profile-art { min-height: auto; margin-top: 20px; }
  .profile-img-container { transform: none; box-shadow: 10px 10px 0 rgba(0,0,0,.12); }
}
`;

fs.writeFileSync('src/styles.css', css);
