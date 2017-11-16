var assert = chai.assert;

describe('Canvas', function(){
    describe('preventDefaultEvent', function(){
        it('should be exit', function(){
            assert.ok(canvas.preventDefaultEvent);
            assert.ok(canvas.preventDefaultEvent instanceof Function);
        });
    });
});
