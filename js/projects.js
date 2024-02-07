let images = document.querySelectorAll("img");
let txt = document.getElementById("info");
let descriptions = {
    "platformer": "Detta är mitt senaste project, ett 2d platformer spel. Jag började på det denna termin då jag var uttråkad på en programmering 1 lektion. Martin hade nämnt att vi skulle göra spel senare så jag bestämde mig för att göra det där och då och göra så mycket som möjligt själv. Som att skapa en egen tilemapklass för att kunna göra 2d-banor och partikelsystem för att få lite finare grafik. Mer info på min github(klicka på bilden)",
    "sand": "Sandprojekt",
    "mandelbrot": "Mandelbrot text"
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