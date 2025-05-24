const sparkleCanvas = document.createElement('canvas');
document.body.appendChild(sparkleCanvas);
sparkleCanvas.width = window.innerWidth;
sparkleCanvas.height = window.innerHeight;
sparkleCanvas.style.position = 'fixed';
sparkleCanvas.style.top = '0';
sparkleCanvas.style.left = '0';
sparkleCanvas.style.pointerEvents = 'none';
sparkleCanvas.style.zIndex = '1000';

const ctx = sparkleCanvas.getContext('2d');
let sparkles = [];

document.addEventListener('mousemove', (e) => {
    for (let i = 0; i < 2; i++) {
        sparkles.push({
            x: e.clientX + (Math.random() * 10 - 5),
            y: e.clientY + (Math.random() * 10 - 5),
            r: Math.random() * 2 + 1,
            alpha: 1,
            dx: (Math.random() - 0.5) * 0.5,
            dy: (Math.random() - 0.5) * 0.5
        });
    }
});

function animateSparkles() {
    ctx.clearRect(0, 0, sparkleCanvas.width, sparkleCanvas.height);
    for (let i = sparkles.length - 1; i >= 0; i--) {
        const s = sparkles[i];
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${s.alpha})`;
        ctx.fill();
        s.x += s.dx;
        s.y += s.dy;
        s.alpha -= 0.02;
        if (s.alpha <= 0) {
            sparkles.splice(i, 1);
        }
    }
    requestAnimationFrame(animateSparkles);
}
animateSparkles();
