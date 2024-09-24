// Abrir e fechar porta e adicionar ao carrinho
function addToCart(nomeProduto, preco) {
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    let produto = carrinho.find(item => item.nome === nomeProduto);
    if (produto) {
        produto.qtd++;
    } else {
        carrinho.push({ nome: nomeProduto, preco: preco, qtd: 1 });
    }

    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    alert(`${nomeProduto} adicionado ao carrinho!`);

}

function carregarCarrinho() {
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    let itensCarrinho = document.querySelector("#itensCarrinho");
    let valorTotal = 0;
    itensCarrinho.innerHTML = '';

    carrinho.forEach(element => {
        let itemProduto = document.createElement('div');
        itemProduto.textContent = `${element.nome} - ${element.qtd} x R$ ${element.preco}`;

        itensCarrinho.appendChild(itemProduto);
        valorTotal += (element.qtd * element.preco);

    });
    document.querySelector("#valorTotal").textContent = valorTotal;


}


if (window.location.pathname.includes('carrinho.html')) {
    carregarCarrinho();
}

function limparCarrinho() {
    localStorage.removeItem("carrinho");
    localStorage.clear();
}

// Cadastrar 

async function cadastrar(event) {
    event.preventDefault();

    const nome = document.getElementById('nome_login').value;
    const email = document.getElementById('email_login').value;
    const senha = document.getElementById('senha_login').value;
    const reescrever = document.getElementById('reescrever').value;

    const data = { nome, email, senha, reescrever }

    const response = await fetch('http://localhost:3000/usuario/cadastrar', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })

    const results = await response.json();

    if (results.success) {
        alert(results.message)
    } else {
        alert(alert.message)
    }
}


