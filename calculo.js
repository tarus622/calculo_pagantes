let pagantes = Math.round(6731 * 0.54);
let percentual = 0.2;
let totalPagantes = pagantes;
let count = 0;

while (count < 24) {
    pagantes = pagantes - (pagantes * percentual);
    totalPagantes += pagantes;
    if (percentual > 0.10)
        percentual = percentual - 0.01;

    count++;
}

const mediaPagantesPorMes = Math.round(totalPagantes / 24);

const numeroEsperadoDeMeses = (mediaPagantesPorMes * 24) / Math.round(6731 * 0.54);

const receitaTrimestral = mediaPagantesPorMes * (19.5 * 0.7) * 3;

const maximoCPI = (receitaTrimestral / 149578).toFixed(2);

console.log(numeroEsperadoDeMeses);
console.log(maximoCPI);