describe('convertNumbersToWords', function () {
	it('Should convert 1 properly', function () {
		const wm = new WordManipulator();
		expect(wm.convertNumbersToWords(1)).toEqual('one');
	});
});

describe('Reversify', function () {
    it('Should reverse abcd', function() {
        const wm = new WordManipulator();
		expect(wm.reverseString('abcd')).toEqual('dcba'); 
    })
});
