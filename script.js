// 1. SISTEMA DE SENHA (Apenas um exemplo, mantenha o seu se preferir)
(function() {
    const hashCorreto = "c2l0ZWNhdmVybmFycGcxMjM="; // senha: caverna123
    let senhaUser = prompt("Digite a senha da Caverna:");
    if (btoa(senhaUser) !== hashCorreto) {
        alert("Senha incorreta!");
        document.body.innerHTML = "<h1>Acesso Negado</h1>";
    }
})();

// 2. CRONÔMETRO (AJUSTADO PARA BRASÍLIA -03:00)
const dataProximaSessao = new Date("2026-01-07T16:00:00-03:00").getTime();

const x = setInterval(function() {
    const agora = new Date().getTime();
    const distancia = dataProximaSessao - agora;

    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = dias;
    document.getElementById("hours").innerHTML = horas;
    document.getElementById("minutes").innerHTML = minutos;
    document.getElementById("seconds").innerHTML = segundos;

    if (distancia < 0) {
        clearInterval(x);
        document.getElementById("status-sessao").innerHTML = "A SESSÃO COMEÇOU!";
        document.getElementById("timer").innerHTML = "⚔️ EM COMBATE ⚔️";
    }
}, 1000);

// 3. REGISTROS (DIÁRIO)
const registrosDados = [
    {
        nome: "Mestre",
        tipo: "Aviso",
        data: "06/01/2026",
        mensagem: "Sejam bem-vindos à Caverna!"
    }
];

function carregarPosts() {
    const lista = document.getElementById('registros-lista');
    if (!lista) return;
    lista.innerHTML = "";
    registrosDados.slice().reverse().forEach(post => {
        const item = document.createElement('article');
        item.style.borderBottom = "1px solid #444";
        item.style.marginBottom = "10px";
        item.innerHTML = `
            <h3 style="color:#d4af37">${post.nome} <small style="color:#888">(${post.tipo})</small></h3>
            <p style="font-size:0.8em; color:#aaa">${post.data}</p>
            <p>${post.mensagem}</p>
        `;
        lista.appendChild(item);
    });
}

// Inicia tudo
window.onload = carregarPosts;