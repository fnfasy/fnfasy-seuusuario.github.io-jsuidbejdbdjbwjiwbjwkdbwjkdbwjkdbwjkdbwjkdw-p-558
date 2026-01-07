// A senha real é 'caverna123', mas no código aparece codificada
const hashSenha = "c2l0ZWNhdmVybmFycGcxMjM="; 

if (sessionStorage.getItem("acessoPermitido") !== "true") {
    let tentativa = prompt("Digite a palavra-passe da Caverna:");
    
    // btoa converte texto para base64 para comparar
    if (btoa(tentativa) === hashSenha) {
        sessionStorage.setItem("acessoPermitido", "true");
    } else {
        document.body.innerHTML = "Acesso Negado.";
        window.location.reload(); // Recarrega para pedir de novo
    }
}

// ==========================================
// 1. CONFIGURAÇÃO DO CONTADOR
// ==========================================
const dataProximaSessao = new Date("Jan 7, 2026 16:00:00").getTime();

const contador = setInterval(function() {
    const agora = new Date().getTime();
    const distancia = dataProximaSessao - agora;

    const d = Math.floor(distancia / (1000 * 60 * 60 * 24));
    const h = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((distancia % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = d;
    document.getElementById("hours").innerHTML = h;
    document.getElementById("minutes").innerHTML = m;
    document.getElementById("seconds").innerHTML = s;

    if (distancia < 0) {
        clearInterval(contador);
        document.getElementById("timer").innerHTML = "A SESSÃO ESTÁ ACONTECENDO!";
    }
}, 1000);

// ==========================================
// 2. BANCO DE DADOS LOCAL (JSON)
// ==========================================
// MESTRE: Para adicionar novos registros, basta copiar o formato abaixo e colar aqui!
const registrosDados = [
    {
        nome: "Mestre (José)",
        tipo: "relato",
        data: "06/01/2026",
        mensagem: "A campanha começou! Bem vindos ao Caverna RPG"
    },
];

// Função para renderizar os registros na tela
function carregarPosts() {
    const lista = document.getElementById('registros-lista');
    lista.innerHTML = ""; // Limpa antes de carregar
    
    registrosDados.reverse().forEach(post => {
        const item = document.createElement('article');
        item.className = 'post';
        item.innerHTML = `
            <h3>${post.nome} - <small>${post.tipo}</small></h3>
            <p><small>${post.data}</small></p>
            <p>${post.mensagem}</p>
        `;
        lista.appendChild(item);
    });
}

carregarPosts();
