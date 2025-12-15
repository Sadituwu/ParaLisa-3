document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    const audio = document.getElementById('bg-music');

    // Permitir la reproducción del audio al hacer clic en cualquier carta
    document.body.addEventListener('click', () => {
        audio.play().catch(error => console.log("Reproducción bloqueada por el navegador:", error));
    }, { once: true }); // Solo se ejecutará una vez

    // Mensajes para las cartas
    const messages = [
        "Te amo mas que don cangreso al dinero 💖",
        "Eres la coincidencia mas bonita que este año me regalo :3🎁",
        "Tú haces que mis días sean Bonitos✨",
        "Me traes mas loco que un manicomio💫",
        "Amo cada postre y cada abrazo tuyo. 💌"
    ];

    // Asignar eventos a cada carta
    cards.forEach((card, index) => {
        card.addEventListener('click', () => {
            if (card.classList.contains('flip')) return;

            const back = card.querySelector('.back');
            back.textContent = messages[index];
            card.classList.add('flip');

            if (index === messages.length - 1) {
                setTimeout(() => {
                    alert("Feliz 5 meses amor mio!❤️");
                    audio.play(); // Reproducir la canción
                }, 800);
            }
        });
    });

    // Crear la lluvia de corazones
    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.textContent = '💖';
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.animationDuration = `${Math.random() * 2 + 2}s`;
        document.querySelector('.heart-rain').appendChild(heart);
        setTimeout(() => heart.remove(), 4000);
    }

    setInterval(createHeart, 300);
});
