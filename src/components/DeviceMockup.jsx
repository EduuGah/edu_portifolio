import { useState } from "react";
import { Icon } from "./Icon";

function ScreenNav({ count, index, onPrev, onNext }) {
  if (count <= 1) return null;
  return (
    <div className="device-screen-nav">
      <button type="button" onClick={onPrev} aria-label="Tela anterior">
        <Icon name="arrow" size={9} className="device-screen-arrow-icon-prev" />
      </button>
      <span>{index + 1}/{count}</span>
      <button type="button" onClick={onNext} aria-label="Próxima tela">
        <Icon name="arrow" size={9} />
      </button>
    </div>
  );
}

export function DeviceMockup({ desktopImages, mobileImages, alt, demo }) {
  const desktops = desktopImages ?? [];
  const mobiles = mobileImages ?? [];
  const [desktopIndex, setDesktopIndex] = useState(0);
  const [mobileIndex, setMobileIndex] = useState(0);

  const step = (setIndex, count, dir) => (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIndex((i) => (i + dir + count) % count);
  };

  return (
    <a className="project-image-container device-mockup" href={demo} target="_blank" rel="noreferrer" aria-label={alt}>
      <div className="device-laptop">
        <div className="device-laptop-screen">
          <div className="device-browser-bar">
            <span className="device-dot device-dot-red" />
            <span className="device-dot device-dot-yellow" />
            <span className="device-dot device-dot-green" />
          </div>
          <div className="device-browser-screen">
            <img src={desktops[desktopIndex]} alt={`${alt} — versão desktop, tela ${desktopIndex + 1} de ${desktops.length}`} loading="lazy" />
            <ScreenNav count={desktops.length} index={desktopIndex} onPrev={step(setDesktopIndex, desktops.length, -1)} onNext={step(setDesktopIndex, desktops.length, 1)} />
          </div>
        </div>
        <div className="device-laptop-base" />
      </div>
      <div className="device-phone">
        <div className="device-phone-notch" />
        <div className="device-phone-screen">
          <img src={mobiles[mobileIndex]} alt={`${alt} — versão mobile, tela ${mobileIndex + 1} de ${mobiles.length}`} loading="lazy" />
          <ScreenNav count={mobiles.length} index={mobileIndex} onPrev={step(setMobileIndex, mobiles.length, -1)} onNext={step(setMobileIndex, mobiles.length, 1)} />
        </div>
      </div>
    </a>
  );
}
