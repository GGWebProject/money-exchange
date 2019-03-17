// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change

    const cashObj     = {}
    const moneyEquals = {
                            50: 'H',
                            25: 'Q',
                            10: 'D',
                             5: 'N',
                             1: 'P'
                        }
    const usedMoney   = [50, 25, 10, 5, 1];

    function writeInObj(elem, obj, increase) {
        obj[moneyEquals[elem]] = increase;
    }

    if (currency > 10000) {
        cashObj.error = "You are rich, my friend! We don't have so much coins for exchange"
    } else if (currency > 0) {
        usedMoney.forEach((element, index) => {
            if (currency/element >= 1) {
                writeInObj(element, cashObj, Math.floor(currency/element));
                currency = currency%element;
            } else if (currency/element < 1 && currency/element >= 0) {
                return
            }
        });  
    }

    return cashObj;

}
