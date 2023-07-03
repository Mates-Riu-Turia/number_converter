const basicSymbols = [{ symbol: "I", val: 1 }, { symbol: "V", val: 5 }, { symbol: "X", val: 10 }, { symbol: "L", val: 50 }, { symbol: "C", val: 100 }, { symbol: "D", val: 500 }, { symbol: "M", val: 1000 }];

const noSubstraction = (num) => {
    // Calculate the Roman equivalent but without roman substraction
    for (const index in basicSymbols) {
        const symbolVal = basicSymbols[index];
        const symbolValPrev = basicSymbols[index - 1];

        if (symbolVal.val == num) {
            return symbolVal.symbol;
        }
        else if(symbolVal.val > num) {
            let result = symbolValPrev.symbol;
            result += noSubstraction(num - symbolValPrev.val);
            return result;
        }

    }
}

const arabic2roman = (num) => {
    console.log(noSubstraction(num));
};

export default arabic2roman;