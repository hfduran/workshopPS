async function requerirCapsulasAppendChild() {
    const resposta = await fetch(
        "https://entregavel.polijrinternal.com/produtos"
    );
    const capsulas = await resposta.json();

    const cardsWrapper = document.getElementById("cardsWrapper");

    capsulas.forEach(capsula => {
        nome = capsula.nome;
        foto = capsula.foto;
        descricao = capsula.descricao;
        intensidade = capsula.intensidade;
        preco = capsula.preco;

        // criar elementos
        var newCard = document.createElement("div");
        var newCapsuleName = document.createElement("h1");
        var newCapsuleImage = document.createElement("img");
        var newCapsuleIntensity = document.createElement("p");
        var newPriceAndBuyContainer = document.createElement("div");
        var newCapsulePrice = document.createElement("h1");
        var newBuyButton = document.createElement("button");

        // adicionar a classe aos elementos
        newCard.classList.add("cardContainer");
        newCapsuleName.classList.add("cardName");
        newCapsuleImage.classList.add("capsuleImage");
        newCapsuleIntensity.classList.add("capsuleIntensity");
        newPriceAndBuyContainer.classList.add("priceAndBuyContainer");
        newCapsulePrice.classList.add("capsulePrice");
        newBuyButton.classList.add("buyButton");

        // colocar os dados
        newCapsuleImage.src = foto;
        newCapsuleName.innerHTML = nome;
        newCapsuleIntensity.innerHTML = "intensidade: " + intensidade;
        newCapsulePrice.innerHTML = "R$" + preco;
        newBuyButton.innerHTML = "Comprar";

        // juntar os elementos
        cardsWrapper.appendChild(newCard);
        newCard.appendChild(newCapsuleName);
        newCard.appendChild(newCapsuleImage);
        newCard.appendChild(newCapsuleIntensity);
        newCard.appendChild(newPriceAndBuyContainer);
        newPriceAndBuyContainer.appendChild(newCapsulePrice);
        newPriceAndBuyContainer.appendChild(newBuyButton);
    });
}
// requerirCapsulasAppendChild();

async function requerirCapsulasInnerHTML() {
    const resposta = await fetch(
        "https://entregavel.polijrinternal.com/produtos"
    );
    const capsulas = await resposta.json();

    const cardsWrapper = document.getElementById("cardsWrapper");

    capsulas.forEach(capsula => {
        nome = capsula.nome;
        foto = capsula.foto;
        descricao = capsula.descricao;
        intensidade = capsula.intensidade;
        preco = capsula.preco;

        var newCard = document.createElement("div");

        newCard.classList.add("cardContainer");

        newCard.innerHTML = `

			<h1 class="capsuleName">${nome}</h1>
			<img src=${foto} class="capsuleImage" />
			<p class="capsuleIntensity">intensidade: ${intensidade}</p>
			<div class="priceAndBuyContainer">
				<h1 class="capsulePrice">R$ ${preco},00</h1>
				<button class="buyButton">Comprar!</button>
			</div>

		`;

        cardsWrapper.appendChild(newCard);
    });
}
requerirCapsulasInnerHTML();