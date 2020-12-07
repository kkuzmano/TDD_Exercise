function translate(word){
    //return 'appleay'
    word = word.toLowerCase()
    const vowels = ["a","e","i","o","u","y"];
    //we are spliting up the word into an array
    word = word.split("");
    //console.log(word)
    let firstLetter= word[0];
    if(vowels.includes(firstLetter)){
        word = word.join("");
        return word +"way";
    }

    else{
        while (true){
            let firstLetter = word.splice(0, 1);
            word.push (firstLetter);
            if(vowels.includes(word [0])) {
                break;
            }
        }
    }
    word = word.join('');
    return word + 'ay';
}

console.log(translate("apple"));
console.log(translate("ice"));
console.log(translate('pear'));
console.log(translate('truck'));
console.log(translate('APPLE'));
//use splice to chop us consonate
//add something on end and use .push
//when you move a consonate to the end keep moving letters to end until you hit a vowel.