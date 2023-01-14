// Validaçao da data de nascimento
const dataNascimento =document.querySelector('#nascimento')
dataNascimento.addEventListener('blur', (evento) => {
        validaDataNascimento(evento.target)
})
function validaDataNascimento(input){
        const dataRecebida = new Date(input.value);
        let mensagem = ''
       if(!maiorQue18(dataRecebida)) {
        mensagem = 'Voce nao tem 18 anos e nao pode se cadastrar'
       }
        
        
        input.setCustomValidity(mensagem)
}
function maiorQue18(){
        const dataAtual = new Date();
        const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMounth(), data.getUTCDate());
        return dataMais18 <= dataAtual
}