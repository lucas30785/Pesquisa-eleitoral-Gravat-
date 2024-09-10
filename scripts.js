document.getElementById('pesquisaForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const candidato = document.getElementById('candidato').value;
    const porcentagem = parseFloat(document.getElementById('porcentagem').value);

    // Adicionar dados da pesquisa à tabela
    addPesquisa(candidato, porcentagem);

    // Limpar o formulário
    document.getElementById('pesquisaForm').reset();
});

const pesquisas = {};

function addPesquisa(candidato, porcentagem) {
    // Se o candidato já existir, adicionar ao array, senão, criar novo
    if (!pesquisas[candidato]) {
        pesquisas[candidato] = [];
    }
    pesquisas[candidato].push(porcentagem);

    // Atualizar os resultados
    atualizarTabela();
}

function calcularMedia(arr) {
    const soma = arr.reduce((acc, val) => acc + val, 0);
    return (soma / arr.length).toFixed(2);
}

function atualizarTabela() {
    const tbody = document.getElementById('resultBody');
    tbody.innerHTML = ''; // Limpar a tabela

    for (const candidato in pesquisas) {
        const media = calcularMedia
