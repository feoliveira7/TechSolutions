window.addEventListener('scroll', function() {
    const fundoTitulo = document.getElementById('tituloFundo');
    const logo = document.getElementById('logoID');
    const titulo = document.getElementById('tituloID');

    const posicaoScroll = window.scrollY;

    if (posicaoScroll > 100) { // Ajuste o valor conforme necessário
        fundoTitulo.classList.add('scrolled');
        titulo.classList.add('scrolled');
        logo.src = 'img/codeWhite.png'
    } else {
        fundoTitulo.classList.remove('scrolled');
        titulo.classList.remove('scrolled');
        logo.src = 'img/code.png'
    }
});