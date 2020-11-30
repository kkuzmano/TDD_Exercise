class WordManipulator {
	constructor(language = 'en_us') {
		this.language = language;
	}

	/**
	 * @todo Implement
	 *
	 * Reverses a string
	 *
	 * @see https://www.freecodecamp.org/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/
	 *
	 * @param {string} text Text to reverse
	 * @return reversed string
	 */
	reverseString(text) {
		return text;
	}

	/**
	 * Convert text to Title Case, aka every first letter is capitalized
	 *
	 * @see https://www.freecodecamp.org/news/three-ways-to-title-case-a-sentence-in-javascript-676a9175eb27/
	 *
	 * @todo Implement
	 */
	titleCase(text) {
		return text;
	}

	/**
	 * @param {string[]} stringArray
	 * @return {string} string representing the text as paragraphs
	 */
	createParagraphs(stringArray) {
		return '';
	}

	/**
	 * Used with permission from
	 * https://gist.github.com/ForbesLindesay/5467742#file-number-to-words-js
	 *
	 * @param {Number} num Number to convert to words
	 * @return {string} number in english
	 */
	convertNumbersToWords(num) {
		const ones = [
			'',
			'one',
			'two',
			'three',
			'four',
			'five',
			'six',
			'seven',
			'eight',
			'nine',
			'ten',
			'eleven',
			'twelve',
			'thirteen',
			'fourteen',
			'fifteen',
			'sixteen',
			'seventeen',
			'eighteen',
			'nineteen',
		];
		const tens = [
			'',
			'',
			'twenty',
			'thirty',
			'forty',
			'fifty',
			'sixty',
			'seventy',
			'eighty',
			'ninety',
		];

		const numString = num.toString();

		if (num < 0) throw new Error('Negative numbers are not supported.');

		if (num === 0) return 'zero';

		//the case of 1 - 20
		if (num < 20) {
			return ones[num];
		}

		if (numString.length === 2) {
			return tens[numString[0]] + ' ' + ones[numString[1]];
		}

		//100 and more
		if (numString.length == 3) {
			if (numString[1] === '0' && numString[2] === '0')
				return ones[numString[0]] + ' hundred';
			else
				return (
					ones[numString[0]] +
					' hundred and ' +
					this.convertNumbersToWords(+(numString[1] + numString[2]))
				);
		}

		if (numString.length === 4) {
			const end = +(numString[1] + numString[2] + numString[3]);
			if (end === 0) return ones[numString[0]] + ' thousand';
			if (end < 100)
				return (
					ones[numString[0]] +
					' thousand and ' +
					this.convertNumbersToWords(end)
				);
			return (
				ones[numString[0]] + ' thousand ' + this.convertNumbersToWords(end)
			);
		}
	}
}

const wm = new WordManipulator();
console.log(wm.convertNumbersToWords(2002));
