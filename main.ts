sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    mySprite.setPosition(randint(10, 81), randint(15, 79))
    mySprite.setVelocity(randint(15, 100), randint(7, 59))
    info.changeLifeBy(-1)
})
let mySprite2: Sprite = null
let mySprite: Sprite = null
let j = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 2 . 2 2 2 2 2 2 2 . . . 
    . . . 2 2 . . . 2 . . . 2 . . . 
    . . . 2 . . . . 2 . . . 2 . . . 
    . . . 2 . . . . 2 . . 2 2 . . . 
    . . . 2 . . . . 2 . 2 2 . . . . 
    . . . 2 2 2 2 2 2 2 2 . . . . . 
    . . . . . . 2 . . 2 . . . . . . 
    . . . . . 2 . . . 2 . . . . . . 
    . . . . . 2 . 2 2 2 . . . . . . 
    . . . . . 2 2 2 . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
j.setStayInScreen(true)
controller.moveSprite(j)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . 3 . . . . . 
    . . . 3 . . . . 3 3 3 . . . . . 
    . . . . 3 3 3 3 3 . 3 . . . . . 
    . . . . . . . . . . 3 . . . . . 
    . . . . . . . . . . 3 . . . . . 
    . . . . . . . . . . 3 . . . . . 
    . . . . . . . . . . 3 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
mySprite.setPosition(randint(0, 10), randint(0, 10))
mySprite.setVelocity(68, 75)
mySprite.setStayInScreen(true)
mySprite.setBounceOnWall(true)
game.onUpdateInterval(3000, function () {
    mySprite2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 . . . . . . . . . 
        . . . . 3 3 2 2 2 . . . . . . . 
        . . . 3 . . 2 . . 2 2 . . . . . 
        . . . 3 . . . . . . . 2 . . . . 
        . . . 3 3 3 3 3 . . 2 2 . . . . 
        . . . . . 3 3 . . 2 2 . . . . . 
        . . . . . . . . 2 2 . . . . . . 
        . . . . . . 2 2 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Food)
    mySprite.setPosition(randint(10, 141), randint(10, 13))
})
