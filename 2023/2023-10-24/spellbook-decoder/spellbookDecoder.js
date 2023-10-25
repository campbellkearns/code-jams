// creating alphabet array
const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

const spellBookDecoder = (word, key) => {

    let finalWord = word.split('').map((letter) => { 
        
        if(key > alphabet.indexOf(letter)){
            return alphabet[alphabet.length - key];
        }
        return alphabet[alphabet.indexOf(letter) - key]
    })

    return finalWord.join('');
}

console.log(spellBookDecoder('a',2))
console.log(spellBookDecoder('jgnnq',2))
console.log(spellBookDecoder('yqtnf',2))
console.log(spellBookDecoder('grj',3))