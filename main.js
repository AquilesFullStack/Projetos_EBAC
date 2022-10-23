const form = document.getElementById('form')
const contatostel = [];
const contatosnome = [];

let linhas = ''

form.addEventListener('submit', function(e){ //Quando o formulário é enviado a página não dá refresh e aciona as funções
    e.preventDefault();

    adicionar();
    atualizaTabela();
    //verificar();
})

function adicionar(){
    const Tname = document.getElementById('txtname')
    const Ntelefone = document.getElementById('Ntel')

    if(contatostel.includes(Ntelefone.value)){ //verifica dentro da array se o valor digitado já existe
        window.alert(`O número de telefone ${Ntelefone.value} já foi inserido`);
    } else {
        contatostel.push(Number(Ntelefone.value)); // manda o valor para a array/vetor
        contatosnome.push(Tname); // manda o valor para a array/vetor

        let linha ='<tr>'; //cria uma linha dentro da tabela no HTML
        linha += `<td>${Tname.value}</td>`;
        linha += `<td>${Ntelefone.value}</td>`;
        linha += `</tr>`;

        linhas += linha;
    }

    Ntelefone.value = '';
    Tname.value = '';
    
}

function atualizaTabela(){
    const corpoComoTabela = document.querySelector('tbody');        
    corpoComoTabela.innerHTML = linhas;
}

