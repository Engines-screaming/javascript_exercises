describe('Payments test (with setup and tear-down', function() {
    beforeEach(function() {
        // sample bill and tip amount
        billAmtInput.value = 200;
        tipAmtInput.value = 20;
        payment = {billAmt: '200', tipAmt: '20', tipPercent: 10};
    })

    afterEach(function() {
        billAmtInput.value = '';
        tipAmtInput.value = '';
    })

    it('test createCurrentPayment function', function() {
        expect(createCurPayment()).toEqual(payment);
    })

    it('check if appendPaymentTable creates new row with data', function() {
        appendPaymentTable(payment);
        paymentRow = document.querySelector('#payment1');
        console.dir(paymentRow);
        expect(paymentRow.children[0].innerText).toEqual('$200');
        expect(paymentRow.children[1].innerText).toEqual('$20');
        expect(paymentRow.children[2].innerText).toEqual('10%');
    })
})