const textTransformer = require('./textTransformer');

const originalText = 'Ghbdtn vbh!';
console.log('Original Text:', originalText);

const upperCaseText = textTransformer.toUpperCase(originalText);
console.log('Upper Case Text:', upperCaseText);

const lowerCaseText = textTransformer.toLowerCase(originalText);
console.log('Lower Case Text:', lowerCaseText);

const reversedText = textTransformer.reverse(originalText);
console.log('Reversed Text:', reversedText);

const switchedText = textTransformer.switchLayout(originalText);
console.log('Switched Layout Text:', switchedText);

