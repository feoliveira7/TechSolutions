
async function getWeather(){
    var cidade = document.getElementById('city').value;

    var resposta = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&appid=64ed82577ced7f69cb1687f0ce536131`)

    var tempCelsius = resposta.data.main.temp;

    document.getElementById('temperatura').innerHTML = cidade;

    document.getElementById('textoTemperatura').innerHTML = `${tempCelsius.toFixed(0)}`;
    document.getElementById('textoTemperatura').style.color = 'rgb(22, 22, 22)';

    document.getElementById('textoCelsius').innerHTML = `°C`;
    document.getElementById('textoCelsius').style.color = 'rgb(22, 22, 22)';

    if (tempCelsius > 24) {
        document.getElementById('imagemTempo').src = 'img/ensolarado.png';
    } else if (tempCelsius > 15) {
        document.getElementById('imagemTempo').src = 'img/sol_com_nuves.png';
    } else {
        document.getElementById('imagemTempo').src = 'img/nublado.png';
    }

    document.getElementById('botaoBuscar').addEventListener('click', getWeather);
}


// `A temperatura atual de ${cidade} é de ${tempCelsius.toFixed(0)} °C`