let mySprite2 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . 2 2 . . . . . . . 
. . . . . . . 2 2 . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Projectile)
let mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
. 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
. 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
. 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
. 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
. 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
. 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
. 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
. 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
. 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
. 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
. 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
. 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
. 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
controller.moveSprite(mySprite)
let mySprite3 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . 5 5 . . . . . . . 
. . . . . . . 5 5 . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
if (mySprite.overlapsWith(mySprite2)) {
    music.wawawawaa.play()
}
if (mySprite.overlapsWith(mySprite3)) {
    music.wawawawaa.play()
}
game.onUpdateInterval(5, function () {
    info.changeScoreBy(27393042)
    mySprite3 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . 5 5 . . . . . . . 
. . . . . . . 5 5 . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
    mySprite2 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . 2 2 . . . . . . . 
. . . . . . . 2 2 . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Projectile)
    mySprite2.setVelocity(Math.randomRange(-100, 100), Math.randomRange(100, -100))
    mySprite.setFlag(SpriteFlag.BounceOnWall, true)
    mySprite2.setFlag(SpriteFlag.BounceOnWall, true)
    mySprite3.setFlag(SpriteFlag.BounceOnWall, true)
    mySprite3.setVelocity(Math.randomRange(-100, 100), Math.randomRange(100, -100))
    if (mySprite.overlapsWith(mySprite3)) {
        music.wawawawaa.play()
        music.siren.play()
        music.pewPew.play()
    }
    if (mySprite.overlapsWith(mySprite2)) {
        music.powerUp.play()
        music.wawawawaa.play()
        music.magicWand.play()
    }
})
