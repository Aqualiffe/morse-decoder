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

function decode(expr) {
    const newStr = expr.match(/.{10}/g);   
    
    for (let i = 0; i < newStr.length; i++) {
       if (newStr[i] === '**********' ) {
           newStr[i] = ' ';
       }
    
      newStr[i] = newStr[i].replaceAll('10', '.').replaceAll('11', '-').replaceAll('00', '');
      
        for (var key in MORSE_TABLE) {
            if(newStr[i] === key) {
                newStr[i] = MORSE_TABLE[key];
            }
        }
    }
    
    return newStr.join('');  
}

module.exports = {
    decode
}