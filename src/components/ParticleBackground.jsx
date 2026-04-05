import React, { useRef, useEffect } from 'react';

const ParticleBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];
    
    let mouse = {
      x: null,
      y: null,
      radius: 120 // Repelling force radius
    };

    const handleMouseMove = (event) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = event.clientX - rect.left;
      mouse.y = event.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    const handleMouseClick = (event) => {
      const rect = canvas.getBoundingClientRect();
      // Ensure click is within the canvas bounds vertically
      const clickY = event.clientY - rect.top;
      const clickX = event.clientX - rect.left;
      
      if (clickY < 0 || clickY > rect.height || clickX < 0 || clickX > rect.width) return;
      
      // Create burst particles (increased amount)
      for (let i = 0; i < 40; i++) {
        const radius = Math.random() * 3 + 1;
        const color = Math.random() > 0.5 ? '#A05FB5' : (Math.random() > 0.5 ? '#7A4B9A' : '#4A90E2');
        const angle = Math.random() * Math.PI * 2;
        const velocity = Math.random() * 10 + 2;
        
        particles.push(new Particle(
          clickX, 
          clickY, 
          Math.cos(angle) * velocity, 
          Math.sin(angle) * velocity, 
          radius, 
          color,
          true // flag for burst particle
        ));
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('click', handleMouseClick);

    // Initial resize and listener
    const resize = () => {
      if (canvas.parentElement) {
        canvas.width = canvas.parentElement.offsetWidth;
        canvas.height = canvas.parentElement.offsetHeight;
        init();
      }
    };
    window.addEventListener('resize', resize);

    class Particle {
      constructor(x, y, dx, dy, radius, color, isBurst = false) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.color = color;
        this.isBurst = isBurst;
        this.life = isBurst ? 100 : Infinity;
        this.gravity = 0.94; // Friction for burst particles to slow down
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        // Add subtle glow
        ctx.shadowBlur = this.isBurst ? 15 : 8;
        ctx.shadowColor = this.color;
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      update() {
        if (this.isBurst) {
          this.dx *= this.gravity;
          this.dy *= this.gravity;
          this.x += this.dx;
          this.y += this.dy;
          this.life--;
          this.radius = Math.max(0, this.radius - 0.05);
          this.draw();
          return;
        }

        // Drifting motion for normal particles
        this.x += this.dx;
        this.y += this.dy;

        // Screen wrapping
        if (this.x > canvas.width) this.x = 0;
        else if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        else if (this.y < 0) this.y = canvas.height;

        // Anti-gravity repulsion from mouse
        if (mouse.x != null && mouse.y != null) {
          let dx = mouse.x - this.x;
          let dy = mouse.y - this.y;
          let distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < mouse.radius) {
            const forceDirectionX = dx / distance;
            const forceDirectionY = dy / distance;
            const force = (mouse.radius - distance) / mouse.radius;
            // Repulsive force vector
            const directionX = forceDirectionX * force * 5;
            const directionY = forceDirectionY * force * 5;

            this.x -= directionX;
            this.y -= directionY;
          }
        }
        this.draw();
      }
    }

    const init = () => {
      particles = [];
      const density = 4000; // Screen area per particle (lower means more particles)
      const numberOfParticles = (canvas.width * canvas.height) / density;
      for (let i = 0; i < numberOfParticles; i++) {
        let radius = Math.random() * 2 + 0.5;
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        let dx = (Math.random() - 0.5) * 0.4;
        let dy = (Math.random() - 0.5) * 0.4;
        
        // Brand palette: Purple to Blue
        let colorArray = ['#7A4B9A', '#A05FB5', '#4A90E2', '#8c60ba'];
        let color = colorArray[Math.floor(Math.random() * colorArray.length)];
        
        particles.push(new Particle(x, y, dx, dy, radius, color));
      }
    };

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        if (particles[i].isBurst && particles[i].life <= 0) {
          particles.splice(i, 1);
          i--;
        }
      }
    };

    // Wait for DOM layout to complete before setting size
    setTimeout(() => {
      resize();
      animate();
    }, 0);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('click', handleMouseClick);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none"
    />
  );
};

export default ParticleBackground;
