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
    return randomColors;
}
function check(colorFromUser, colorsToGuess) {
    let result = {
        correctColorAndPosition: 0,
        correctColor: 0,
    };
    for (let i = 0; i < COLORS_LENGHT; i++) {
        if (colorFromUser[i] === colorsToGuess[i]) {
            result.correctColorAndPosition++;
        }
        else if (colorsToGuess.includes(colorFromUser[i])) {
            result.correctColor++;
        }
    }
    if (result.correctColorAndPosition === COLORS_LENGHT) {
        return true;
    }
    else {
        return false;
    }
}
document.querySelector("#controlla")?.addEventListener("click", () => {
    // todo: implementare la logica di gioco
    // check();
});
function cronology() { }
document.querySelector("#cronologia")?.addEventListener("click", () => {
    cronology();
});
