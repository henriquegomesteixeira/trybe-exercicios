let word = 'tryber';
let palavra = '';

 for (let i = 0; i < word.length; i += 1) {
    
    palavra += word[word.length - 1 - i]
 }

 console.log(palavra);