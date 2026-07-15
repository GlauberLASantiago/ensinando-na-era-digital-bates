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
    
    // Propaga o tema para cliques em links locais dentro do iframe
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
    });
})();
