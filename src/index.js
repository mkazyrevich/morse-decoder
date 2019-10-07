const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

let decode = function (expr) {
    let arr = [];
    let words = '';
    for (let i=0; i<=(expr.length-10); i=i+10) {
        arr.push(expr.substr(i, 10));
    }
    arr = arr.map(function(item){
        for (let k=0; k<item.length-1; k=k+2) {
            if (item.substr(k, 1)!='0') {
                return item.substr(k);
            } 
            else {
                continue;
            }
        }  
    })
    
    arr = arr.map(function(item){
        let arrElem = [];
        for (let k=0; k<=(item.length-2); k=k+2) {
            if (item.substr(k, 2)=='10') {
                arrElem.push('.');
            } 
            else {
                if (item.substr(k, 2)=='11') {
                    arrElem.push('-');
                }
                else {
                    arrElem.push(item.substr(k, 2));
                }
            }
        }
        return arrElem.join('');
    })
    for (let item of arr) {
        for (let key in MORSE_TABLE) {
            if (item == "**********") {
                words += ' ';
                break;
            }
            else {
                if (key == item) {
                words += MORSE_TABLE[key];
                }
        
            }
        }
    }
    return words;
}

module.exports = {
    decode
}