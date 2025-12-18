let currentDialogue = [];
let index = 0;

document.addEventListener("DOMContentLoaded", () => {
    const playButton = document.getElementById("play-button");
    const dialogBox = document.getElementById("dialog-box");
    const dialogText = document.getElementById("dialog-text");
    const dialogAvatar = document.getElementById("dialog-avatar");
    const personagemImg = document.getElementById("personagem-imagem");
    const menuWrapper = document.querySelector(".menu-wrapper");
    const menuHorizontal = document.querySelector(".menu-horizontal");
    const titleArea = document.querySelector(".title-area");

    function showLine() {
        // fim do diálogo
        if (index >= currentDialogue.length) {
            dialogBox.style.opacity = "0";
            dialogBox.style.transform = "translateX(-50%) translateY(40px)";

            if (personagemImg) {
                personagemImg.classList.remove("show");
                setTimeout(() => personagemImg.classList.add("hidden"), 400);
            }

            setTimeout(() => dialogBox.classList.add("hidden"), 400);
            return;
        }

        const line = currentDialogue[index];

        dialogBox.classList.remove("mary", "patrick");
        dialogBox.classList.add(line.speaker);

        dialogText.textContent = line.text;

        dialogAvatar.src = line.speaker === "mary"
            ? "Imagens/mary.png"
            : "Imagens/patrick.png";

        if (personagemImg) {
            personagemImg.src = line.speaker === "mary"
                ? "Imagens/mary.png"
                : "Imagens/patrick.png";

            personagemImg.classList.remove("hidden");
            personagemImg.classList.add("show");
        }

        index++;
    }

    function startDialogue(data) {
        currentDialogue = data;
        index = 0;

        dialogBox.classList.remove("hidden");

        // fundo do diálogo
        menuWrapper.classList.add("dialogo-fundo");

        // animação de entrada da caixa
        setTimeout(() => {
            dialogBox.classList.add("show");
            dialogBox.style.opacity = "1";
            dialogBox.style.transform = "translateX(-50%) translateY(0)";
        }, 50);

        showLine();
    }

    playButton.addEventListener("click", () => {
        // esconder menu
        menuHorizontal.style.opacity = "0";
        titleArea.style.opacity = "0";

        setTimeout(() => {
            menuHorizontal.style.display = "none";
            titleArea.style.display = "none";
        }, 400);

        // iniciar diálogo
        fetch("php/dialogo.json")
            .then(r => r.json())
            .then(startDialogue)
            .catch(err => console.error("Erro a carregar diálogo:", err));
    });

    // avançar diálogo ao clicar na caixa
    dialogBox.addEventListener("click", showLine);
});
