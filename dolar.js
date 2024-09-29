fetch(`https://economia.awesomeapi.com.br/last/USD-BRL`).then(resposta => {
    return resposta.json()
}).then(economia => {

    document.getElementById('valorDolar').innerHTML = 'R$' +  parseFloat(economia.USDBRL.bid).toFixed(2);
    document.getElementById('maiorDolar').innerHTML = 'R$' +  parseFloat(economia.USDBRL.high).toFixed(2);
    document.getElementById('menorDolar').innerHTML = 'R$' +  parseFloat(economia.USDBRL.low).toFixed(2);

})

setInterval(function() {
    console.log("Atualizando informações");
    
    fetch(`https://economia.awesomeapi.com.br/last/USD-BRL`).then(resposta => {
        return resposta.json()
    }).then(economia => {

        document.getElementById('valorDolar').innerHTML = 'R$' + parseFloat(economia.USDBRL.bid).toFixed(2);
        document.getElementById('maiorDolar').innerHTML = 'R$' +  parseFloat(economia.USDBRL.high).toFixed(2);
        document.getElementById('menorDolar').innerHTML = 'R$' +  parseFloat(economia.USDBRL.low).toFixed(2);

    })

}, 10000);

function convert() {
    fetch(`https://economia.awesomeapi.com.br/last/USD-BRL`).then(resposta => {
        return resposta.json()
    }).then(economia => {

        let valorReal = document.getElementById('inputReal').value;
        let valorConvertido = valorReal / parseFloat(economia.USDBRL.bid);

        document.getElementById('inputResultado').innerHTML = '$' + valorConvertido.toFixed(2);
    });
}
