"use strict";
var Colors;
(function (Colors) {
    Colors["RED"] = "#8B0000";
    Colors["DARKBLUE"] = "#00008B";
    Colors["GREEN"] = "#006400";
    Colors["PURPLE"] = "#4B0082";
    Colors["ORANGE"] = "#FF4500";
    Colors["LIGHTBLUE"] = "#008B8B";
})(Colors || (Colors = {}));
const COLORS_LENGHT = 4;
function generateRandomListOfColors() {
    let colors = [
        Colors.RED,
        Colors.DARKBLUE,
        Colors.GREEN,
        Colors.PURPLE,
        Colors.ORANGE,
        Colors.LIGHTBLUE,
    ];
    let randomColors = [];
    for (let i = 0; i < COLORS_LENGHT; i++) {
        const randomColor = Math.floor(Math.random() * 6);
        if (randomColors.includes(colors[randomColor])) {
            i--;
            continue;
        }
        randomColors.push(colors[randomColor]);
    }
    // return randomColors;
    console.log(randomColors);
}
generateRandomListOfColors();
