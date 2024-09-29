fetch('https://raw.githubusercontent.com/feoliveira7/APIs-RAW/main/eco.json').then(resposta => resposta.json()).then(corpo =>{
    console.log(corpo)

    document.getElementById('imagem1').innerHTML = corpo.imagem1;
    document.getElementById('marca1').innerHTML = corpo.marca1;
    document.getElementById('modelo1').innerHTML = corpo.modelo1;
    document.getElementById('cor1').innerHTML = corpo.cor1;
    document.getElementById('preco1').innerHTML = corpo.preco1;

    document.getElementById('imagem2').innerHTML = corpo.imagem2;
    document.getElementById('marca2').innerHTML = corpo.marca2;
    document.getElementById('modelo2').innerHTML = corpo.modelo2;
    document.getElementById('cor2').innerHTML = corpo.cor2;
    document.getElementById('preco2').innerHTML = corpo.preco2;

    document.getElementById('imagem3').innerHTML = corpo.imagem3;
    document.getElementById('marca3').innerHTML = corpo.marca3;
    document.getElementById('modelo3').innerHTML = corpo.modelo3;
    document.getElementById('cor3').innerHTML = corpo.cor3;
    document.getElementById('preco3').innerHTML = corpo.preco3;

})