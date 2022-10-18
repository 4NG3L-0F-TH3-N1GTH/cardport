

const menu = document.querySelectorAll(".window");
menu.forEach(window => {


    window.addEventListener("click", function () {
        if (window.classList.contains("select")) {
            return;
        }
        const contentToBeSelect = document.querySelector(".content:not(.select)")
        const contentSelect = document.querySelector(".content.select");
        contentSelect.classList.remove("select")

        const windowSelect = document.querySelector(".window.select");
        windowSelect.classList.remove("select")

        window.classList.add("select")

        contentToBeSelect.classList.add("select")

    });
});

const musica = new Audio("../musica/Cyberpunk Edgerunner LOFI - Tyler Clark - 'Hollow'.mp3")
musica.volume = 0.1
musica.repeat = 500
musica.play()
