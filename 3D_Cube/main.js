let colorHex = "0123456789abcdefABCDEF";
let layers = document.querySelectorAll(".layer");

function ChangeColor() {
    Array.from(layers).forEach((e) => {
        let color = "";
        for (let i = 0; i < 6; i++) {
            color += colorHex[Math.floor(Math.random() * colorHex.length)];
        }
        finalColor = `#${color}`;
        e.style.cssText = `
            transition: 2s;
            background-color: ${finalColor};
            box-shadow: 0 0 30px 0 ${finalColor};
        `;
        // console.log(e);
    });
    // console.log(finalColor);
}

let counter = setInterval(ChangeColor, 4000)

console.log(layers);