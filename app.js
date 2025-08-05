let amigos = [];

function adicionarAmigo() {
    const amigoInput = document.getElementById('amigo');
    const nome = amigoInput.value.trim();

    if (!nome) {
        alert('Por favor, digite um nome válido!');
        return;
    }

    if (amigos.includes(nome)) {
        alert('Este nome já foi adicionado!');
        return;
    }

    amigos.push(nome);
    amigoInput.value = '';

    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = amigos.map(amigo => `<li class="amigo-item">${amigo}</li>`).join('');
}

function sortearAmigo() {
    const listaResultado = document.getElementById('resultado');

    if (amigos.length === 0) {
        alert('Adicione pelo menos um amigo para fazer o sorteio!');
        return;
    }

    // Gera um índice aleatório
    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    
    // Obtém o nome sorteado
    const nomeSorteado = amigos[indiceSorteado];

    // Exibe o nome sorteado na tela
    listaResultado.innerHTML = `<li class="amigo-sorteado">A pessoa sorteada é: <strong>${nomeSorteado}</strong></li>`;
}