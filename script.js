// 1. SISTEMA DE SENHA
(function() {
    const hashCorreto = "c2l0ZWNhdmVybmFycGcxMjM="; 
    let senhaUser = prompt("Digite a senha da Caverna RPG:");
    if (btoa(senhaUser) !== hashCorreto) {
        alert("Senha incorreta!");
        document.body.innerHTML = "<h1 style='color:white; text-align:center; margin-top:100px;'>Acesso Negado</h1>";
    }
})();

// 2. CRONÔMETRO (HORÁRIO DE BRASÍLIA)
const dataProximaSessao = new Date("2026-01-08T16:00:00-03:00").getTime();

const x = setInterval(function() {
    const agora = new Date().getTime();
    const distancia = dataProximaSessao - agora;

    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

    if(document.getElementById("days")) {
        document.getElementById("days").innerHTML = dias;
        document.getElementById("hours").innerHTML = horas;
        document.getElementById("minutes").innerHTML = minutos;
        document.getElementById("seconds").innerHTML = segundos;
    }

    if (distancia < 0) {
        clearInterval(x);
        const statusH2 = document.getElementById("status-sessao");
        if(statusH2) statusH2.innerHTML = "A SESSÃO COMEÇOU!";
        const timerDiv = document.getElementById("timer");
        if(timerDiv) timerDiv.innerHTML = "PEGUEM SEUS DADOS! POIS O RPG COMEÇOU:)";
    }
}, 1000);

// 3. REGISTROS (DIÁRIO) - VÍRGULA CORRIGIDA AQUI
const registrosDados = [
    {
        nome: "Mestre",
        tipo: "Aviso",
        data: "06/01/2026",
        mensagem: "Sejam bem-vindos à Caverna! Usem o formulário abaixo para enviar seus relatos."
    }, // <-- ESSA VÍRGULA ESTAVA FALTANDO E TRAVOU TUDO
    {
        nome: "Helena",
        tipo: "Resumo",
        data: "07/01/2026",
        mensagem: "Resumo da seção: Hoje nossos guerreiros receberam uma nova missão: investigar um possível assassinato do rei. Com o primeiro ponto sendo a biblioteca, eles leram uma carta do Conselho de Segurança, onde continham informações importantes sobre o rei. Logo após a visita à biblioteca, passaram na casa de Nina, uma bruxa local, que deu informações sobre os possíveis suspeitos. Com essas informações, dividiram o grupo em dois, metade foi para um pequeno interrogatório com um Nobre do Leste e outra metade vai se infiltrar em uma base dos nobres, onde tem uma possível máquina de alta destruição. O que é a máquina? Será que a máquina vai ser usada contra o rei? A infiltração será bem sucedida? Descubra na próxima seção ⚔️"
    }
];

function carregarPosts() {
    const lista = document.getElementById('registros-lista');
    if (!lista) return;
    lista.innerHTML = "";
    registrosDados.slice().reverse().forEach(post => {
        const item = document.createElement('article');
        item.style.borderBottom = "1px solid #444";
        item.style.padding = "15px 0";
        item.innerHTML = `
            <h3 style="color:#d4af37; margin:0;">${post.nome} <small style="color:#888; font-size:0.6em;">(${post.tipo})</small></h3>
            <p style="font-size:0.8em; color:#aaa; margin:5px 0;">${post.data}</p>
            <p style="margin:5px 0;">${post.mensagem}</p>
        `;
        lista.appendChild(item);
    });
}

window.onload = carregarPosts;