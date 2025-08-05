🎁 Amigo Secreto App
<div align="center">

🎉 Organize seu Amigo Secreto online de forma fácil e divertida! 🎉

</div>

🚀 Sobre o Projeto
Este aplicativo web foi desenvolvido para simplificar a organização do seu sorteio de Amigo Secreto. Diga adeus aos métodos tradicionais e aproveite uma solução digital que garante um sorteio justo e sem complicações.

✨ Funcionalidades em Destaque
➕ Adicionar Participantes: Inclua os nomes de todos os seus amigos de forma rápida e intuitiva.

✅ Validação Inteligente: Evita a adição de nomes repetidos, garantindo a integridade do sorteio.

🎲 Sorteio Justo e Automático: A lógica por trás do sorteio assegura que cada participante receba o nome de outra pessoa, sem a possibilidade de tirar a si mesmo.

📃 Visualização Clara dos Resultados: A lista de quem tirou quem é apresentada de forma organizada e fácil de entender.

📱 Interface Amigável: Design simples e direto para uma ótima experiência do usuário em diversos dispositivos.

🛠 Por Dentro do Código: JavaScript
O coração da nossa aplicação reside no JavaScript, onde a mágica do sorteio acontece. Vamos dar uma olhada em alguns pontos chave:

➕ Adicionando Participantes
A função adicionarAmigo() é responsável por capturar os nomes digitados e adicioná-los à nossa lista de participantes:

```javascript
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
```

Esta função garante que apenas nomes válidos e não repetidos sejam adicionados à lista, proporcionando uma base sólida para o sorteio.

🎲 Realizando o Sorteio: O Núcleo da Aplicação
A função sortearAmigo() é onde a emoção acontece! Ela implementa a lógica para embaralhar os nomes e garantir que cada pessoa sorteie um amigo diferente.

```javascript
function sortearAmigo() {
const listaResultado = document.getElementById('resultado');

if (amigos.length < 2) {
    alert('Adicione pelo menos 2 amigos para fazer o sorteio!');
    return;
}

const amigosEmbaralhados = [...amigos];

function embaralhar(lista) {
    for (let i = lista.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        // 🔄 Troca de elementos para embaralhar
        [\lista\[i], lista\[j]] = [\lista\[j], lista\[i]];
    }
}

embaralhar(amigosEmbaralhados);

listaResultado.innerHTML = '';

for (let i = 0; i < amigos.length; i++) {
    const doador = amigos\[i];
    let recebedor;

    if (i < amigos.length - 1) {
        recebedor = amigosEmbaralhados\[i + 1];
    } else {
        recebedor = amigosEmbaralhados\[0];
    }

    const item = document.createElement('li');
    item.textContent = `${doador} ➡️ ${recebedor}`;
    listaResultado.appendChild(item);
}
}
```

Aqui, o algoritmo de Fisher-Yates (dentro da função embaralhar) é utilizado para garantir um embaralhamento justo dos nomes. Em seguida, a lógica de atribuição garante que o último amigo da lista embaralhada seja atribuído ao primeiro da lista original, fechando o ciclo do amigo secreto sem auto-sorteios.

🛠 Tecnologias Utilizadas
HTML5: Estrutura da página web.

CSS3: Estilização e design da interface do usuário.

JavaScript: Lógica de interação e funcionalidades do sorteio.

🚀 Como Usar
Abra o arquivo index.html no seu navegador preferido.

No campo indicado, digite o nome de cada participante e clique em "Adicionar".

Quando todos os nomes estiverem na lista, clique no botão "Sortear amigo".

Os resultados do sorteio serão exibidos abaixo do botão.

🎉 Divirta-se com seu Amigo Secreto!
