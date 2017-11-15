var assert = chai.assert;

describe('Clone', function(){
    describe('Sprite', function(){
        var url = "http://llcs-1252287760.cossh.myqcloud.com/animations/fire.png";
        var sprite = new Sprite();
        sprite.src = url;
        var sprite_clone = sprite.clone();
        it('can be cloned', function(){
            assert.ok(sprite_clone instanceof Sprite);
            assert.ok(sprite_clone.url == Sprite.src);
            assert.ok(sprite != sprite_clone);
            assert.ok(sprite !== sprite_clone);
        });
    });
});
