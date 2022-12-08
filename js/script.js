//usando API ViaCEP https://viacep.com.br
async function buscaEndereco (cep) {
    try {
        let consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        let cepCorrigido = await consultaCEP.json();
        if(cepCorrigido.erro) {
            throw Error ('CEEEEEEEP errrrrrrrrrrrrrrrrrrrrrrado kkkkkkkk!!!!!!!!!!! LOL OMG ajkfdhajshfja');
        } else {
            console.log(cepCorrigido);
        }
    } catch (erro) {
        console.log(erro);
    }
}
