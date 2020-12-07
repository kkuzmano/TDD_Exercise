describe('translate', function(){
    it("testing apple with the word A.", function(){
        expect(translate("apple")).toEqual("appleway")
   });

    it("testing ice", function(){
        expect(translate("ice")).toEqual("iceway")
    });
    it('word starts with consonate',function() {
        expect(translate('pear')).toEqual('earpay')
    });
    it('word starts with two consonates',function() {
        expect(translate('truck')).toEqual('ucktray')
    });
    it('word starts with three consonates',function() {
        expect(translate('string')).toEqual('ingstray')
    });
    it('word starts with capital',function() {
        expect(translate('APPLE')).toEqual('appleway')
    });
})
