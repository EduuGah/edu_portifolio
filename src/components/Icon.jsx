export function Icon({ name, size = 20, className = "" }) {
  const common = {
    width: size, height: size, viewBox: "0 0 24 24",
    fill: "none", stroke: "currentColor", strokeWidth: 1.8,
    strokeLinecap: "round", strokeLinejoin: "round",
    "aria-hidden": true,
    className
  };

  const paths = {
    github: <><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.7-1.6 6.7-7A5.5 5.5 0 0 0 19.2 4 5.1 5.1 0 0 0 19 1s-1.2-.4-4 1.5a13.4 13.4 0 0 0-7 0C5.2.6 4 1 4 1a5.1 5.1 0 0 0-.2 3A5.5 5.5 0 0 0 2.7 7.5c0 5.4 3.4 6.6 6.7 7A4.8 4.8 0 0 0 8.4 18v4"/><path d="M8 20c-3 .9-3-1.4-4.2-1.8"/></>,
    linkedin: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></>,
    instagram: <><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".7" fill="currentColor" stroke="none"/></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></>,
    arrow: <><path d="M5 12h13"/><path d="m13 6 6 6-6 6"/></>,
    external: <><path d="M14 5h5v5"/><path d="m10 14 9-9"/><path d="M19 14v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h4"/></>,
    code: <><path d="m8 9-4 3 4 3"/><path d="m16 9 4 3-4 3"/><path d="m14 5-4 14"/></>,
    database: <><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v7c0 1.7 3.6 3 8 3s8-1.3 8-3V5"/><path d="M4 12v7c0 1.7 3.6 3 8 3s8-1.3 8-3v-7"/></>,
    tools: <><path d="m14.7 6.3 3-3a4.2 4.2 0 0 1-5.6 5.6l-8 8a2.1 2.1 0 0 0 3 3l8-8a4.2 4.2 0 0 1 5.6-5.6l-3 3"/><path d="m5 19 2-2"/></>,
    layers: <><path d="m12 2 9 5-9 5-9-5 9-5Z"/><path d="m3 12 9 5 9-5"/><path d="m3 17 9 5 9-5"/></>,
    menu: <><path d="M4 6h16M4 12h16M4 18h16"/></>
  };
  return <svg {...common}>{paths[name]}</svg>;
}
