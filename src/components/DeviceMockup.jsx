import { useState } from "react";

function ScreenDots({ count, index, onPick }) {
  if (count <= 1) return null;
  return (
    <div className="device-screen-dots">
      {Array.from({ length: count }).map((_, i) => (
        <button
          key={i}
          type="button"
          className={`device-screen-dot${i === index ? " active" : ""}`}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onPick(i);
          }}
          aria-label={`Imagem ${i + 1} de ${count}`}
        />
      ))}
    </div>
  );
}

export function DeviceMockup({ desktopImages, mobileImages, alt, demo }) {
  const desktops = desktopImages ?? [];
  const mobiles = mobileImages ?? [];
  const [desktopIndex, setDesktopIndex] = useState(0);
  const [mobileIndex, setMobileIndex] = useState(0);

  return (
    <a className="project-image-container device-mockup" href={demo} target="_blank" rel="noreferrer" aria-label={alt}>
      <div className="device-browser">
        <div className="device-browser-bar">
          <span className="device-dot device-dot-red" />
          <span className="device-dot device-dot-yellow" />
          <span className="device-dot device-dot-green" />
        </div>
        <div className="device-browser-screen">
          <img
            src={desktops[desktopIndex]}
            alt={`${alt} — versão desktop, imagem ${desktopIndex + 1} de ${desktops.length}`}
            loading="lazy"
          />
          <ScreenDots count={desktops.length} index={desktopIndex} onPick={setDesktopIndex} />
        </div>
      </div>
      <div className="device-phone">
        <div className="device-phone-notch" />
        <div className="device-phone-screen">
          <img
            src={mobiles[mobileIndex]}
            alt={`${alt} — versão mobile, imagem ${mobileIndex + 1} de ${mobiles.length}`}
            loading="lazy"
          />
          <ScreenDots count={mobiles.length} index={mobileIndex} onPick={setMobileIndex} />
        </div>
      </div>
    </a>
  );
}
