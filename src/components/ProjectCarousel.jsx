import { useState } from "react";
import { Icon } from "./Icon";

export function ProjectCarousel({ images, alt, demo }) {
  const [index, setIndex] = useState(0);

  if (!images || images.length <= 1) {
    return (
      <a className="project-image-container" href={demo} target="_blank" rel="noreferrer" aria-label={alt}>
        <img src={images?.[0]} alt={alt} className="project-screenshot" loading="lazy" />
      </a>
    );
  }

  const stepTo = (e, next) => {
    e.preventDefault();
    e.stopPropagation();
    setIndex(next);
  };

  const prev = (e) => stepTo(e, (index - 1 + images.length) % images.length);
  const next = (e) => stepTo(e, (index + 1) % images.length);

  return (
    <div className="project-image-container project-carousel">
      <a
        className="project-carousel-link"
        href={demo}
        target="_blank"
        rel="noreferrer"
        aria-label={alt}
      >
        <img
          src={images[index]}
          alt={`${alt} — imagem ${index + 1} de ${images.length}`}
          className="project-screenshot"
          loading="lazy"
        />
      </a>
      <button type="button" className="carousel-arrow carousel-arrow-prev" onClick={prev} aria-label="Imagem anterior">
        <Icon name="arrow" size={15} className="carousel-arrow-icon-prev" />
      </button>
      <button type="button" className="carousel-arrow carousel-arrow-next" onClick={next} aria-label="Próxima imagem">
        <Icon name="arrow" size={15} />
      </button>
      <div className="carousel-dots">
        {images.map((_, i) => (
          <button
            key={images[i]}
            type="button"
            className={`carousel-dot${i === index ? " active" : ""}`}
            onClick={(e) => stepTo(e, i)}
            aria-label={`Ir para imagem ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
