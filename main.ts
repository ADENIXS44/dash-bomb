namespace SpriteKind {
    export const Bomb = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Bomb, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    Bomb.destroy()
})
sprites.onDestroyed(SpriteKind.Player, function (sprite) {
    Bomb.destroy()
})
let Bomb: Sprite = null
tiles.setCurrentTilemap(tilemap`level1`)
let Gojo = sprites.create(img`
    . . . . . . 8 8 8 . . . . . . . 
    . . . . . . 8 5 7 8 . . . . . . 
    . . . . 8 8 8 5 5 8 8 8 . . . . 
    . . 8 8 8 8 5 5 5 5 8 7 8 8 . . 
    . 8 7 7 5 7 5 5 5 5 7 5 7 7 8 . 
    . 8 7 5 5 7 7 5 5 7 7 5 5 7 8 . 
    . . 8 5 5 5 7 7 7 7 5 5 5 f . . 
    . . f f 5 5 5 5 5 5 5 5 f f . . 
    . . f f f f f f f f f f f f . . 
    . . f f f f f f f f f f f f . . 
    . . . f f f f f f f f f f . . . 
    . . . e e f f f f f f f e . . . 
    . . e b f b 2 b b 2 b c b e . . 
    . . e e f 2 2 2 2 2 2 f e e . . 
    . . . . c b 2 2 2 2 b c . . . . 
    . . . . . f f f f f f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(Gojo, 120, 0)
Gojo.setPosition(80, 104)
info.setScore(0)
info.setLife(3)
game.onUpdateInterval(2000, function () {
    Bomb = sprites.create(img`
        . . . . . f f f f f f . . . . . 
        . . . f f f f f f f f f f . . . 
        . . f f f f f f f f f f f f . . 
        . f f f f f f f f f f f f f f . 
        . f f f f f f f f 1 1 1 f f f . 
        f f f f f f f f f 1 1 1 f f f f 
        f f f f f f f f f 1 1 1 f f f f 
        f f f f f f f f f f f f 1 f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        . f f f f f f f f f f f f f f . 
        . f f f f f f f f f f f f f f . 
        . . f f f f f f f f f f f f . . 
        . . . f f f f f f f f f f . . . 
        . . . . . f f f f f f . . . . . 
        `, SpriteKind.Bomb)
    Bomb.setPosition(randint(10, 145), 7)
    Bomb.setVelocity(0, 50)
})
