let images = document.querySelectorAll("img");
let txt = document.getElementById("info");
let descriptions = {
    "platformer": "Detta är mitt senaste project, ett 2d platformer spel. Jag började på det denna termin då jag var uttråkad på en programmering 1 lektion. Martin hade nämnt att vi skulle göra spel senare så jag bestämde mig för att göra det där och då och göra så mycket som möjligt själv. Som att skapa en egen tilemapklass för att kunna göra 2d-banor och partikelsystem för att få lite finare grafik. Mer info på min github(klicka på bilden)",
    "sand": "Detta är ett falling sand spel som jag gjorde under sommaren 2023 då jag hade tråkigt. Den kan simulera upp till en miljon 'sandkorn' samtidigt men kan även simulera vatten, trä och andra ämnen",
    "mandelbrot": "Denna mandelbrot sak skapade jag efter en mattelektion då Johannes visade en cool video om mandelbrotmönster"
}

for (let i of images) {
    i.addEventListener('mouseover', function () {
        txt.innerHTML = descriptions[this.id];
        txt.style.color = "rgba(243, 214, 133, 1)";
    });

    i.addEventListener("mouseout", function () {
        txt.style.color = "rgba(243, 214, 133, 0)";
    });
}