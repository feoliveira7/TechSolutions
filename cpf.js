const txtErro = document.getElementById('txtErrado');

function buscarCPF(){
    fetch('https://raw.githubusercontent.com/feoliveira7/APIs-RAW/main/cpf.json').then(resposta => resposta.json()).then(corpo =>{
        var identificador = document.getElementById('cpfInput').value
        var encontrado = false;

        corpo.forEach(pessoa =>{
            if(identificador == pessoa.cpf){
                
                document.getElementById("nome").innerHTML = pessoa.nome;
                document.getElementById("cidade").innerHTML = pessoa.cidade;
                document.getElementById("nascimento").innerHTML = pessoa.nascimento;
                document.getElementById("idade").innerHTML = pessoa.idade;
                document.getElementById("genero").innerHTML = pessoa.genero;
                document.getElementById("situacao").innerHTML = pessoa.situacao;
                encontrado = true;
                txtErro.style.opacity = '0%';
            }
            if(!encontrado){
                txtErro.style.opacity = '100%';
            }
        })
    })
}





























document.getElementById('cpfInput').addEventListener('input', function (e) {
    let input = e.target.value;

    // Remove todos os caracteres não numéricos
    input = input.replace(/\D/g, '');

    // Adiciona a formatação do CPF: XXX.XXX.XXX-XX
    input = input.replace(/(\d{3})(\d)/, "$1.$2");
    input = input.replace(/(\d{3})(\d)/, "$1.$2");
    input = input.replace(/(\d{3})(\d{1,2})$/, "$1-$2");

    e.target.value = input;
});

// // function buscarCPF(){

// //     // id = document.getElementById(cpfinput)

// //     console.log(document.getElementById('cpfInput').value)

// // }