const form = document.getElementById('form-atividade');
const imgAprovado = '<img src="./images/aprovado.png"  alt= "emoji celebrando" />';
const imgReprovado = '<img src="./images/reprovado.png"  alt= "emoji decepcionado" />';
const atividade = [];
const notas = [];
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>';
const notaMinima = parseFloat(prompt('Digite a nota mínima: '));

let linhas ='';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaMediaFinal();

})

function adicionaLinha(){
    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');

    if(atividade.includes(inputNomeAtividade.value)){
        alert(`A atividade ${inputNomeAtividade.value} já foi inserida`);
    } else {
        atividade.push(parseFloat(inputNomeAtividade.value));
        notas.push(parseFloat(inputNotaAtividade.value));

        let linha ='<tr>';
        linha += `<td>${inputNomeAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`;
        linha += `</tr>`;

        linhas += linha;
    }

    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
    
}

function atualizaTabela(){
    const corpoComoTabela = document.querySelector('tbody');        
    corpoComoTabela.innerHTML = linhas;
}

function atualizaMediaFinal(){
    const MediaFinal = caculaMediaFinal();

    document.getElementById(`media-final-valor`).innerHTML = MediaFinal;
    document.getElementById(`media-final-resultado`).innerHTML = MediaFinal >= notaMinima ? spanAprovado : spanReprovado;
    
}

function caculaMediaFinal(){
    let somadasNotas = 0;
    
    for (let i = 0; i < notas.length; i++) {
        somadasNotas += notas[i]; 
    }
    return somadasNotas / notas.length;
}

