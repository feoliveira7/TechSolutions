const fundoConverter = document.getElementById('frameConverter')
const fundoDolar = document.getElementById('frameDolar')


function converterFrame(){
    fundoDolar.style.display = 'none';
    fundoConverter.style.display = 'flex';
}

function voltarFrame(){
    fundoDolar.style.display = 'flex';
    fundoConverter.style.display = 'none';
}