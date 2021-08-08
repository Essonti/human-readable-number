module.exports = function toReadable (number) {
    if (number === 0) {return 'zero'};
    let result = '';
    switch (number % 10) {
        case 1: result = 'one'; break;
        case 2: result = 'two'; break;
        case 3: result = 'three'; break;
        case 4: result = 'four'; break;
        case 5: result = 'five'; break;
        case 6: result = 'six'; break;
        case 7: result = 'seven'; break;
        case 8: result = 'eight'; break;
        case 9: result = 'nine'; break;
        case 0: result = ''; break;
    };
    if (number > 9) {
        number = Math.floor(number / 10);
        switch (number % 10) {
            case 1: if (result === '') {result = 'ten'} 
            else if (result === 'one') {result = 'eleven'}
            else if (result === 'two') {result = 'twelve'}
            else if (result === 'three') {result = 'thirteen'}
            else if (result === 'four') {result = 'fourteen'}
            else if (result === 'five') {result = 'fifteen'}
            else if (result === 'six') {result = 'sixteen'}
            else if (result === 'seven') {result = 'seventeen'}
            else if (result === 'eight') {result = 'eighteen'}
            else if (result === 'nine') {result = 'nineteen'}
            break;         
            case 2: result = 'twenty' + ' ' + result; break;
            case 3: result = 'thirty' + ' ' + result; break;
            case 4: result = 'forty' + ' ' + result; break;
            case 5: result = 'fifty' + ' ' + result; break;
            case 6: result = 'sixty' + ' ' + result; break;
            case 7: result = 'seventy' + ' ' + result; break;
            case 8: result = 'eighty' + ' ' + result; break;
            case 9: result = 'ninety' + ' ' + result; break;
            case 0: result  = '' + result; break;
        };
    };
    if (number > 9) {
        number = Math.floor(number / 10);
        switch (number % 10) {
            case 1: result = 'one hundred' + ' ' + result; break;
            case 2: result = 'two hundred' + ' ' + result; break;
            case 3: result = 'three hundred' + ' ' + result; break;
            case 4: result = 'four hundred' + ' ' + result; break;
            case 5: result = 'five hundred' + ' ' + result; break;
            case 6: result = 'six hundred' + ' ' + result; break;
            case 7: result = 'seven hundred' + ' ' + result; break;
            case 8: result = 'eight hundred' + ' ' + result; break;
            case 9: result = 'nine hundred' + ' ' + result; break;     
        };
    };
    return result.trim(); 
};
