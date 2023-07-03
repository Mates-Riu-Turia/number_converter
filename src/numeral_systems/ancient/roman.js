const basicSymbols = [{ symbol: "I", val: 1 }, { symbol: "IV", val: 4 }, { symbol: "V", val: 5 }, { symbol: "IX", val: 9 }, { symbol: "X", val: 10 }, { symbol: "XL", val: 40 }, { symbol: "L", val: 50 }, { symbol: "XC", val: 90 }, { symbol: "C", val: 100 }, { symbol: "CD", val: 400 }, { symbol: "D", val: 500 }, { symbol: "CM", val: 900 }, { symbol: "M", val: 1000 }];

const arabic2roman = (num) => {
    // Calculate the Roman equivalent but without roman substraction
    for (const index in basicSymbols) {
        const symbolVal = basicSymbols[index];
        const symbolValPrev = basicSymbols[index - 1];

        if (symbolVal.val == num) {
            return symbolVal.symbol;
        }
        else if (symbolVal.val > num) {
            let result = symbolValPrev.symbol;
            result += arabic2roman(num - symbolValPrev.val);
            return result;
        }

    }
};

export default arabic2roman;