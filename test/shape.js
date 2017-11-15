var assert = chai.assert;

describe('Window', function(){
    it('Canvas should be ready', function(){
        assert.isOk(canvas);
        assert.isOk(ctx);
    });
});

describe('Shapes', function(){
    describe('Rectangle', function(){
        it('should be ready', function(){
            var rect = new Rectangle();
            assert.ok(rect instanceof Rectangle);
        });
    });
});
