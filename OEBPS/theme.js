(function() {
    var theme = null;
    try {
        theme = localStorage.getItem('theme');
    } catch(e) {}
    
    if (!theme) {
        var match = window.location.search.match(/[?&]theme=([^&]+)/);
        if (match) {
            theme = match[1];
        }
    }
    
    if (theme === 'dark') {
        document.documentElement.classList.add('dark-theme');
    } else {
        document.documentElement.classList.remove('dark-theme');
    }
    
    // Comunica a navegação de página para a janela pai (leitor.html)
    try {
        window.parent.postMessage({
            type: 'page-navigation',
            path: window.location.pathname
        }, '*');
    } catch(e) {}
    
    // Propaga o tema e redireciona os áudios locais para o GitHub Pages em produção
    window.addEventListener('DOMContentLoaded', function() {
        if (theme) {
            var links = document.getElementsByTagName('a');
            for (var i = 0; i < links.length; i++) {
                var href = links[i].getAttribute('href');
                // Ignora links externos e âncoras puras
                if (href && href.indexOf('http') !== 0 && href.indexOf('#') !== 0 && href.indexOf('mailto:') !== 0) {
                    href = href.replace(/[?&]theme=[^&]+/g, '');
                    href += (href.indexOf('?') >= 0 ? '&' : '?') + 'theme=' + theme;
                    links[i].setAttribute('href', href);
                }
            }
        }

        // Redireciona áudios locais para o GitHub Pages quando rodando no Firebase
        if (window.location.hostname && window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1') {
            var githubBase = "https://glauberlasantiago.github.io/ensinando-na-era-digital-bates/OEBPS/";
            var audioEl = document.getElementById('tts-audio');
            if (audioEl) {
                var sourceEl = document.getElementById('audio-source');
                if (sourceEl) {
                    var currentSrc = sourceEl.getAttribute('src');
                    if (currentSrc && currentSrc.indexOf('http') !== 0) {
                        sourceEl.setAttribute('src', githubBase + currentSrc);
                        audioEl.load(); // Recarrega para aplicar a nova URL
                    }
                }
            }
        }
    });
})();
