// 1. SISTEMA DE SENHA
(function() {
    const hashCorreto = "c2l0ZWNhdmVybmFycGcxMjM="; 
    let senhaUser = prompt("Digite a senha da Caverna RPG:");
    if (btoa(senhaUser) !== hashCorreto) {
        alert("Senha incorreta!");
        document.body.innerHTML = "<h1 style='color:white; text-align:center; margin-top:100px;'>Acesso Negado</h1>";
    }
})();

// 2. CRONÔMETRO
const dataProximaSessao = new Date("2026-01-08T16:00:00-03:00").getTime();
const x = setInterval(function() {
    const agora = new Date().getTime();
    const distancia = dataProximaSessao - agora;

    document.getElementById("days").innerHTML = Math.floor(distancia / (1000 * 60 * 60 * 24));
    document.getElementById("hours").innerHTML = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    document.getElementById("minutes").innerHTML = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    document.getElementById("seconds").innerHTML = Math.floor((distancia % (1000 * 60)) / 1000);

    if (distancia < 0) {
        clearInterval(x);
        document.getElementById("status-sessao").innerHTML = "A SESSÃO COMEÇOU!";
        document.getElementById("timer").innerHTML = "PEGUEM SEUS DADOS! POIS O RPG COMEÇOU:)";
    }
}, 1000);

// 3. NOVO: ATUALIZAÇÕES DOS PERSONAGENS
const personagensDados = [
    { nome: "Ariah", status: "Desenvolveu medo da Nina", nota: "O motivo é que ela é muito grossa" },
    { nome: "Homura", status: "Desenvolveu curiosidade em cachaça.", nota: "O Motivo: falaram muito perto dela (quando ela era pequena não deixavam ela nem chegar perto)" },
    { nome: "Lucca", status: "Se preparando para infiltração", nota: "Nada por aqui" },
    { nome: "Alice", status: "Alice se prepara pra usar pela primeira vez as habilidades de bardo em uma missão", nota: "Nada por aqui."}
];

function carregarPersonagens() {
    const lista = document.getElementById('personagens-lista');
    if (!lista) return;
    lista.innerHTML = personagensDados.map(p => `
        <div class="card-personagem">
            <h3>${p.nome}</h3>
            <p><strong>Status:</strong> ${p.status}</p>
            <p><strong>Nota:</strong> ${p.nota}</p>
        </div>
    `).join('');
}

// 4. DIÁRIO DE REGISTROS (Respeitando sua lista anterior)
const registrosDados = [
    {
        nome: "Mestre",
        tipo: "Aviso",
        data: "06/01/2026",
        mensagem: "Sejam bem-vindos à Caverna! Usem o formulário abaixo para enviar seus relatos."
    },
    {
        nome: "Helena",
        tipo: "Resumo",
        data: "07/01/2026",
        mensagem: "Resumo da seção: Hoje nossos guerreiros receberam uma nova missão: investigar um possível assassinato do rei. Com o primeiro ponto sendo a biblioteca, eles leram uma carta do Conselho de Segurança, onde continham informações importantes sobre o rei. Logo após a visita à biblioteca, passaram na casa de Nina, uma bruxa local, que deu informações sobre os possíveis suspeitos. Com essas informações, dividiram o grupo em dois, metade foi para um pequeno interrogatório com um Nobre do Leste e outra metade vai se infiltrar em uma base dos nobres, onde tem uma possível máquina de alta destruição. O que é a máquina? Será que a máquina vai ser usada contra o rei? A infiltração será bem sucedida? Descubra na próxima seção ⚔️"
    }
];

function carregarDiario() {
    const lista = document.getElementById('registros-lista');
    if (!lista) return;
    lista.innerHTML = registrosDados.slice().reverse().map(post => `
        <article class="post">
            <h3>${post.nome} <small>(${post.tipo})</small></h3>
            <p style="font-size:0.8em; color:#666;">${post.data}</p>
            <p>${post.mensagem}</p>
        </article>
    `).join('');
}

window.onload = function() {
    carregarPersonagens();
    carregarDiario();
};