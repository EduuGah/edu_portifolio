export function DeviceMockup({ desktopImage, mobileImage, alt, demo }) {
  return (
    <a className="project-image-container device-mockup" href={demo} target="_blank" rel="noreferrer" aria-label={alt}>
      <div className="device-browser">
        <div className="device-browser-bar">
          <span className="device-dot device-dot-red" />
          <span className="device-dot device-dot-yellow" />
          <span className="device-dot device-dot-green" />
        </div>
        <div className="device-browser-screen">
          <img src={desktopImage} alt={`${alt} — versão desktop`} loading="lazy" />
        </div>
      </div>
      <div className="device-phone">
        <div className="device-phone-notch" />
        <div className="device-phone-screen">
          <img src={mobileImage} alt={`${alt} — versão mobile`} loading="lazy" />
        </div>
      </div>
    </a>
  );
}
