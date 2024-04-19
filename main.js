const form = document.getElementById('form-agenda');
const nomeContato = [];
const numeroContato = [];
let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault()

    adicionaLinha();
    atualizaTabela();
    atualizaNumeroTotalDeContatos();
})

function adicionaLinha() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroContato = document.getElementById('numero-contato');

    if(nomeContato.includes(inputNomeContato.value)) {
        alert(`O nome ${inputNomeContato.value} já foi adicionado`);
    } else {
        nomeContato.push(inputNomeContato.value);
        numeroContato.push(parseFloat(inputNumeroContato.value));

        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputNumeroContato.value}</td>`;
        linha += `</tr>`;

        linhas += linha;
        console.log(adicionaLinha)
    };

    inputNomeContato.value = '';
    inputNumeroContato.value = '';
};

function atualizaTabela() {
    const corpoDaTabela = document.querySelector('tbody');
    corpoDaTabela.innerHTML = linhas;
};

function atualizaNumeroTotalDeContatos() {
    const numeroTotalDeContatos = nomeContato.length;
    document.getElementById('numero-total').innerHTML = numeroTotalDeContatos;
};
