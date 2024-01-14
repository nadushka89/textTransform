const layoutMappings = {
    'q': 'й', 'w': 'ц', 'e': 'у', 'r': 'к', 't': 'е', 'y': 'н', 'u': 'г', 'i': 'ш', 'o': 'щ', 'p': 'з',
    '[': 'х', ']': 'ъ', 'a': 'ф', 's': 'ы', 'd': 'в', 'f': 'а', 'g': 'п', 'h': 'р', 'j': 'о', 'k': 'л',
    'l': 'д', ';': 'ж', "'": 'э', 'z': 'я', 'x': 'ч', 'c': 'с', 'v': 'м', 'b': 'и', 'n': 'т', 'm': 'ь',
    ',': 'б', '.': 'ю', '/': '.'
};

function toUpperCase (text){
    return text.toUpperCase();
}

function toLowerCase (text){
    return text.toLowerCase();
}
function reverse (text){
    return text.split('').reverse().join('');
}

function switchLayout (text){
    const switchedText = text.split('').map(char => {
        const lowerChar = char.toLowerCase();
        return layoutMappings[lowerChar] || char;
    }).join('');

    return switchedText;
}


module.exports = { toUpperCase,toLowerCase,reverse,switchLayout };
