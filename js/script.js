const rua = document.querySelector('#endereco')
const cidade = document.querySelector('#cidade');
const bairro = document.querySelector('#bairro');
const estado = document.querySelector('#estado');
const mensagemErro = document.querySelector('#mensagem__erro');

async function buscaEndereco (cep) {
    mensagemErro.innerHTML = '';
    try {
        //                      fetch que faz a busca
        let consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        let cepCorrigido = await consultaCEP.json();
        if(cepCorrigido.erro) {
            mensagemErro.innerHTML = 'você digitou um cep invelide  atumalaca!!!'
            throw Error ('CEEEEEEEP errrrrrrrrrrrrrrrrrrrrrrado kkkkkkkk!!!!!!!!!!! LOL OMG ajkfdhajshfja');
        } else {
            console.log(cepCorrigido);
            rua.value = cepCorrigido.logradouro;
            cidade.value = cepCorrigido.localidade;
            bairro.value = cepCorrigido.bairro;
            estado.value = cepCorrigido.uf;
        }
    } catch (erro) {
        mensagemErro.innerHTML = 'CEP inválido !!!! burro jumento analfabeto !!!';
        console.log(erro);
    }
}

const cep = document.querySelector('#cep');
cep.addEventListener('focusout', () => {
    buscaEndereco(cep.value);
})