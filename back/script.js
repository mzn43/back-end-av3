function calcular(formapagamento) {

    let preco = Number(document.getElementById("preco").value);
    let frete = Number(document.getElementById("frete").value);

    let subtotal = preco + frete;
    let total;

    if (formapagamento === "pix") {

        total = subtotal - (subtotal * 0.10);

        document.getElementById("forma").textContent = "PIX";

    } else if (formapagamento === "dinheiro") {

        total = subtotal - (subtotal * 0.05);

        document.getElementById("forma").textContent = "Dinheiro";

    } else if (formapagamento === "cartao") {

        total = subtotal;

        document.getElementById("forma").textContent = "Cartão à vista";

    } else if (formapagamento === "parcelado") {

        total = subtotal + (subtotal * 0.05);

        document.getElementById("forma").textContent = "Parcelado";

    }

    document.getElementById("total").textContent = total.toFixed(2);
}
