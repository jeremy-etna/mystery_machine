
function money_for_nothing(pricePredict) {
    const n = pricePredict.length;
    const result = [];

    for (let i = 1; i < n; i++) {
        if (pricePredict[i] > pricePredict[i - 1]) {
            result.push(i - 1);

            while (i < n && pricePredict[i] > pricePredict[i - 1]) {
                i++;
            }

            result.push(i - 1);
        }
    }
    console.log(result)
    return result;
}

function main() {
    money_for_nothing(JSON.parse(process.argv[2]));
}

main();