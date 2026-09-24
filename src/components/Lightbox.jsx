import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export function Lightbox({ images, index, onClose, onChange, title }) {
  const closeRef = useRef(null);
  const count = images.length;
  const shot = images[index];

  useEffect(() => {
    const previousFocus = document.activeElement;
    closeRef.current?.focus();
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onChange((index + 1) % count);
      if (e.key === "ArrowLeft") onChange((index - 1 + count) % count);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      previousFocus?.focus?.();
    };
  }, [index, count, onClose, onChange]);

  // Portal: dentro do carrossel há um transform, que prenderia o `fixed`
  // à trilha em vez da janela.
  return createPortal(
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={`${title}: ${shot.caption}`} onClick={onClose}>
      <figure className="lightbox-figure" onClick={(e) => e.stopPropagation()}>
        <img src={shot.src} alt={`${title}: ${shot.caption}`} />
        <figcaption>
          <span>{shot.caption}</span>
          <span className="mono">{index + 1} / {count}</span>
        </figcaption>
      </figure>
      <button ref={closeRef} type="button" className="lightbox-close" onClick={onClose} aria-label="Fechar">
        <X size={20} />
      </button>
      {count > 1 && (
        <>
          <button type="button" className="lightbox-nav lightbox-prev" onClick={(e) => { e.stopPropagation(); onChange((index - 1 + count) % count); }} aria-label="Tela anterior">
            <ChevronLeft size={22} />
          </button>
          <button type="button" className="lightbox-nav lightbox-next" onClick={(e) => { e.stopPropagation(); onChange((index + 1) % count); }} aria-label="Próxima tela">
            <ChevronRight size={22} />
          </button>
        </>
      )}
    </div>,
    document.body
  );
}
