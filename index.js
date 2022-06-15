const elementoResposta = document.querySelector("#resposta")

const respostas = [
    "Certeza!",
    "Não tenho tanta certeza.",
    "É decididamente assim.",
    "Não conta com isso.",
    "Sem dúvidas!",
    "Pergunta novamente mais tarde.",
    "Sim, definitivamente!",
    "Minha resposta é não.",
    "Você pode contar com isso.",
    "Melhor não te dizer agora.",
    "A meu ver, sim.",
    "Minhas fontes dizem não.",
    "Provavelmente.",
    "Não é possível prever agora.",
    "Perspectiva boa.",
    "As perspectivas não são tão boas.",
    "Sim.",
    "Concentre-se e pergunte novamente.",
    "Sinais apontam que sim.",
    ]

    //Clicar em fazer pergunta
    function fazerPergunta() {
        //gerar número aleatório
        const totalRespostas = respostas.length
        const numeroAleatorio = Math.floor(Math.random() * totalRespostas)

        elementoResposta.innerHTML = respostas[numeroAleatorio];
    }