'use strict';

const ninjaSquad = ["Naruto", "Neji", "Sakura", "Sasuke", "Hinata", "Shikamaru"];

function mergeByakugan(hinata, neji) {
    const combined = [];
    let hinataIndex = 0;
    let nejiIndex = 0;

    while (hinataIndex < hinata.length && nejiIndex < neji.length) {
        if (hinata[hinataIndex] < neji[nejiIndex]) {
            combined.push(hinata[hinataIndex]);
            hinataIndex++;
        } else {
            combined.push(neji[nejiIndex]);
            nejiIndex++;
        }
    }
    return combined.concat(hinata.slice(hinataIndex), neji.slice(nejiIndex));
}

function sortByakugan(ninjas) {
    if (ninjas.length <= 1) {
        return ninjas;
    }
    const middle = Math.floor(ninjas.length / 2);
    const hinata = ninjas.slice(0, middle);
    const neji = ninjas.slice(middle);
    return mergeByakugan(sortByakugan(hinata), sortByakugan(neji));
}
console.log(sortByakugan(ninjaSquad));