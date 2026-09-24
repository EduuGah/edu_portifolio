import { useEffect, useRef } from "react";

export function ParticlesBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    let particles = [];
    const numParticles = 140; // Reduzido levemente para performance

    let mouse = {
      x: null,
      y: null,
      radius: 200
    };

    const handleMouseMove = (event) => {
      mouse.x = event.x;
      mouse.y = event.y;
    };

    // Variáveis para suavizar o scroll (Lerp)
    let targetScrollY = window.scrollY;
    let currentScrollY = window.scrollY;
    
    const handleScroll = () => {
       targetScrollY = window.scrollY;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll, { passive: true });

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    class Particle {
      constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.density = (Math.random() * 30) + 1;
        this.dx = (Math.random() - 0.5) * 1.2;
        this.dy = (Math.random() - 0.5) * 1.2;
        this.opacity = Math.random() * 0.4;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = `rgba(87, 199, 165, ${this.opacity})`;
        ctx.fill();
      }

      update(scrollDelta) {
        this.x += this.dx;
        this.y += this.dy;

        // Parallax suave
        if (scrollDelta !== 0) {
          this.y -= scrollDelta * 0.3; 
        }

        // Wrap around bounds (seamless)
        this.x = ((this.x % canvas.width) + canvas.width) % canvas.width;
        this.y = ((this.y % canvas.height) + canvas.height) % canvas.height;

        let interacted = false;

        // Interação com o mouse
        if (mouse.x != null && mouse.y != null) {
          let dx = mouse.x - this.x;
          let dy = mouse.y - this.y;
          let distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < mouse.radius) {
            let forceDirectionX = dx / distance;
            let forceDirectionY = dy / distance;
            let force = (mouse.radius - distance) / mouse.radius;
            let directionX = forceDirectionX * force * this.density * 0.2;
            let directionY = forceDirectionY * force * this.density * 0.2;

            this.x += directionX;
            this.y += directionY;
            interacted = true;
          }
        }
        
        // Ciclo de vida: desaparece ao ser atraída e ressurge em outro lugar
        if (interacted) {
          this.opacity -= 0.002; // Apaga bem mais devagar ao ser tocada
          if (this.opacity <= 0) {
            // Renasce em posição aleatória
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.opacity = 0;
          }
        } else {
          if (this.opacity < 0.4) {
            this.opacity += 0.005; // Acende devagar
          }
        }

        this.opacity = Math.max(0, Math.min(0.4, this.opacity));
        
        // Só desenha se estiver visível (economiza processamento)
        if (this.opacity > 0) {
          this.draw();
        }
      }
    }

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < numParticles; i++) {
        let size = (Math.random() * 2) + 1;
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        particles.push(new Particle(x, y, size));
      }
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Interpolação linear (Lerp) para suavizar o scroll do parallax
      let prevScroll = currentScrollY;
      currentScrollY += (targetScrollY - currentScrollY) * 0.1;
      
      if (Math.abs(targetScrollY - currentScrollY) < 0.1) {
         currentScrollY = targetScrollY;
      }

      let scrollDelta = currentScrollY - prevScroll;

      for (let i = 0; i < particles.length; i++) {
        particles[i].update(scrollDelta);
      }
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none'
      }}
    />
  );
}
