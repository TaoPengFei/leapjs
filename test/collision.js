var assert = chai.assert;

describe('Collision', function(){
    describe('Rect with Rect', function(){
        var rect1 = new Rectangle(0, 0, 100, 100);
        var rect2 = new Rectangle(100, 100, 100, 100);
        var rect3 = new Rectangle(101, 101, 100, 100);

        it('can be cloned', function(){
            assert.ok(rect1.collide(rect1));
            assert.ok(rect1.collide(rect2));
            assert.ok(rect2.collide(rect3));
            assert.isNotOk(rect1.collide(rect3));
        });
    });
});
