describe('Helpers test (with setup and tear down)', function() {

    beforeEach(function() {
        // setup up sample allPayments 
        allPayments = {payment1: {billAmt: 10, tipAmt: 1, tipPercent: 10},
                        payment2: {billAmt: 20, tipAmt: 2, tipPercent: 10}
        };
    });

    afterEach(function() {
        // clear allPayments object
        allPayments = {};
    })

    it('test sumPaymentTotal[billAmt]', function() {
        expect(sumPaymentTotal('billAmt')).toEqual(30);
    })

    it('test sumPaymentTotal[tipAmt]', function() {
        expect(sumPaymentTotal('tipAmt')).toEqual(3);
    })

    it('test sumPaymentTotal[tipPercent]', function() {
        expect(sumPaymentTotal('tipPercent')).toEqual(20);
    })

    it('test calculateTipPercent function', function() {
        billAmtTotal = sumPaymentTotal('billAmt');
        tipAmtTotal = sumPaymentTotal('tipAmt');
        expect(calculateTipPercent(billAmtTotal, tipAmtTotal)).toEqual(10);
    })
    
    it('test appendTd', function() {
        newTr = document.createElement('tr');
        appendTd(newTr, 20);
        expect(newTr.firstElementChild.innerText).toEqual('20');
    })
});