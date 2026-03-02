// Controle de reprodução dos vídeos do portfólio
const portfolioVideos = document.querySelectorAll('.video-card video');

portfolioVideos.forEach(video => {
    // Ao clicar, ele dá play e ativa o som
    video.addEventListener('click', () => {
        if (video.paused) {
            // Pausa outros vídeos antes de dar play neste
            portfolioVideos.forEach(v => { v.pause(); v.muted = true; });
            
            video.play();
            video.muted = false;
        } else {
            video.pause();
            video.muted = true;
        }
    });
});

// Mensagem no console para o desenvolvedor
console.log("Site carregado. Estilo: Cinema Mobile Next-Gen.");