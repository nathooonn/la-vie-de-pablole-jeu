namespace SpriteKind {
    export const cool = SpriteKind.create()
    export const house = SpriteKind.create()
    export const coin = SpriteKind.create()
    export const boss = SpriteKind.create()
    export const npc = SpriteKind.create()
    export const npc2 = SpriteKind.create()
    export const bossshark = SpriteKind.create()
    export const ghost_king = SpriteKind.create()
    export const deatharrow = SpriteKind.create()
    export const spikeofdeath = SpriteKind.create()
    export const babyshark = SpriteKind.create()
    export const babyshark2 = SpriteKind.create()
    export const babyshark3 = SpriteKind.create()
    export const fireball = SpriteKind.create()
}
namespace StatusBarKind {
    export const bossbar = StatusBarKind.create()
    export const sharkbossbar = StatusBarKind.create()
    export const ghostkingbar = StatusBarKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Released, function () {
    if (droite == true) {
        if (hassword) {
            animation.runImageAnimation(
            mySprite2,
            [img`
                . . . f f f f f . . . . . 
                . f f f f f f f f f . . . 
                . f f f f f f 2 f f f . . 
                f f f f c f f 2 2 f f . . 
                f c f f c c f f 2 2 2 f f 
                f c c f f f f 2 f f f f f 
                f f f f f f f 2 f f f f . 
                f f e e f f f f f f f . . 
                . f e 4 e f 2 f 2 f . . . 
                . f f f e f 2 f 2 f . . . 
                . . f e e f f f 2 f . . . 
                . . e 4 4 f f f 2 f . . . 
                . . e 4 4 e f f f 2 . . . 
                . . f e e f 6 f f f . . . 
                . . . f f f f f f . . . . 
                . . . . f f f . . . . . . 
                `],
            100,
            true
            )
        } else {
            animation.runImageAnimation(
            mySprite2,
            [img`
                . . . f f f f f . . . . . 
                . f f f f f f f f f . . . 
                . f f f f f f c f f f . . 
                f f f f c f f f c f f . . 
                f c f f c c f f f c c f f 
                f c c f f f f e f f f f f 
                f f f f f f f e e f f f . 
                f f e e f b f e e f f . . 
                . f e 4 e 1 f 4 4 f . . . 
                . f f f e 4 4 4 4 f . . . 
                . . f e e e e e f f . . . 
                . . e 4 4 e 7 7 7 f . . . 
                . . e 4 4 e 7 7 7 f . . . 
                . . f e e f 6 6 6 f . . . 
                . . . f f f f f f . . . . 
                . . . . f f f . . . . . . 
                `],
            100,
            true
            )
        }
    } else {
        if (hassword) {
            animation.runImageAnimation(
            mySprite2,
            [img`
                . . . . . f f f f f . . . 
                . . . f f f f f f f f f . 
                . . f f f c f f f f f f . 
                . . f f f f f f c f f f f 
                f f f f f f f c c f f c f 
                f f f f f e f f f f c c f 
                . f f f e e f f f f f f f 
                . . f f e e f b f e e f f 
                . . . f 4 4 f 1 e 4 e f . 
                . . . f 4 4 4 4 e f f f . 
                . . . f f e e e e e f . . 
                . . . f 7 7 7 e 4 4 e . . 
                . . . f 7 7 7 e 4 4 e . . 
                . . . f 6 6 6 f e e f . . 
                . . . . f f f f f f . . . 
                . . . . . . f f f . . . . 
                `],
            100,
            true
            )
        } else {
            animation.runImageAnimation(
            mySprite2,
            [img`
                . . . . . f f f f f . . . 
                . . . f f f f f f f f f . 
                . . f f f c f f f f f f . 
                . . f f c f f f c f f f f 
                f f c c f f f c c f f c f 
                f f f f f e f f f f c c f 
                . f f f e e f f f f f f f 
                . . f f e e f b f e e f f 
                . . . f 4 4 f 1 e 4 e f . 
                . . . f 4 4 4 4 e f f f . 
                . . . f f e e e e e f . . 
                . . . f 7 7 7 e 4 4 e . . 
                . . . f 7 7 7 e 4 4 e . . 
                . . . f 6 6 6 f e e f . . 
                . . . . f f f f f f . . . 
                . . . . . . f f f . . . . 
                `],
            100,
            true
            )
        }
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.bossshark, function (sprite, otherSprite) {
    boss_shark_bar.value += -5
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    levelreset()
    tiles.setCurrentTilemap(tilemap`niveau22`)
    game.splash("toi:woaw")
    game.splash("toi:J'ai bien fait de parler au cochon")
    game.splash("??:J'attendais ta venue")
    game.splash("??:je suis hereux de voir que tu a survecue mais maintenant c'est l'heure de mourrirre")
    music.play(music.createSong(hex`00780004080100`), music.PlaybackMode.LoopingInBackground)
    mySprite2.setPosition(77, 99)
    boss_shark = sprites.create(img`
        .5...55...5..ccfff..............
        .5...22...5ccddbcf..............
        .55..55..55cddbbf...............
        ..5..55..5fccbbcf...............
        ..55555555ccccccff.........ccc..
        ...ffbbbbbbbcbbbbcfff....ccbbc..
        ..fbbbbbbbbcbcbbbbcccff.cdbbc...
        ffbbbbbbffbbcbcbbbcccccfcdbbf...
        fbcbbb11ff1bcbbbbbcccccffbbf....
        fbbb11111111bbbbbcccccccbbcf....
        .fb11133cc11bbbbcccccccccccf....
        ..fccc31c111bbbcccccbdbffbbcf...
        ...fc13c111cbbbfcddddcc..fbbf...
        ....fccc111fbdbbccdcc.....fbbf..
        ........ccccfcdbbcc........fff..
        .............fffff..............
        `, SpriteKind.bossshark)
    animation.runImageAnimation(
    boss_shark,
    [img`
        .............9fff2c..9..........
        .............5fcb5dcc5..........
        .............55fb5dd55..........
        .............55f555c55..........
        ..ccc........555555555fffff.....
        ..cbbcc....fffcbbbbcbbbbbbbff...
        ...cbbdc.ffcccbbbbcbcbbbbbbbbf..
        ...fbbdcfcccccbbbcbcbbffbbbbbbff
        ....fbbffcccccbbbbbcb1ff11bbbcbf
        ....fcbbcccccccbbbbb11111111bbbf
        ....fcccccccccccbbbb11cc33111bf.
        ...fcbbffbdbcccccbbb111c13cccf..
        ...fbbf..ccddddcfbbbc111c31cf...
        ..fbbf.....ccdccbbdbf111cccf....
        ..fff........ccbbdcfcccc........
        ..............fffff.............
        `,img`
        ..............9ffc2...9.........
        ..............5bbd5c..5.........
        ..............55bb5dc55.........
        ccc...........55c555c55.........
        cbbcc.........555555555fffff....
        .cbbdc.....fffcbbbbbbbbbbbbbff..
        .fbbddc..ffcccbbbbcbcbbbbbbbbbff
        ..fbbdfffcccccbbbcbcbbffbbbbbcbf
        ..fcbbbcccccccbbbcbcb1ff1111bbbf
        ..fccbcccccccccbbbbbb11111111bf.
        .fcbbfffccccccccbbbb11cc33cccf..
        .fbbf...cbdbcccccbbb111c131cf...
        fbbf.....ccdddddfbbbc111c33f....
        fff........ccddfbbdbf1111ff.....
        .............cfbbdbfccccc.......
        ..............fffff.............
        `,img`
        .............9fff2...9..........
        .............5fbd5cc.5..........
        ..ccc........55fb5db55..........
        ..cbbc.......55f555c55..........
        ...cbdc......555555555fffffff...
        ...fbdc....fffcbbbbbbbbbbbbbcff.
        ....fbdc.ffcccbbbbbbcbbbbbbbbbcf
        ....fcdffcccccbbbcbcbbbffbbbbcbf
        ....fcbbccccccbbbcbcbbbff1111bbf
        ...fcbbccccccccbbbcbb11111111bf.
        ...fbbfffcccccccbbbb11bc33cccf..
        ..fbbf..cbdbcccccbbb111c131cf...
        ..fff....cbdddddccbbc111c33f....
        ..........ccbddccbbdf1111ff.....
        ............ccfbbbdfccccc.......
        ..............fffff.............
        `,img`
        ..............9ffc5...9.........
        ..............5bbd5c..5.........
        ..............55bd5dc55.........
        ccc...........55c555c55.........
        cbbcc.........555555555fffff....
        .cbbdc.....fffcbbbbbbbbbbbbbff..
        .fbbddc..ffcccbbbbcbcbbbbbbbbbff
        ..fbbdfffcccccbbbcbcbbffbbbbbcbf
        ..fcbbbcccccccbbbcbcb1ff1111bbbf
        ..fccbcccccccccbbbbbb11111111bf.
        .fcbbfffccccccccbbbb11cc33cccf..
        .fbbf...cbdbcccccbbb111c131cf...
        fbbf.....ccdddddfbbbc111c33f....
        fff........ccddfbbdbf1111ff.....
        .............cfbbdbfccccc.......
        ..............fffff.............
        `],
    500,
    true
    )
    boss_shark.follow(mySprite2, 50)
    boss_shark_bar = statusbars.create(50, 10, StatusBarKind.sharkbossbar)
    boss_shark_bar.setColor(9, 8)
    boss_shark_bar.attachToSprite(boss_shark, 10, 4)
    boss_shark_bar.max += 1000
    boss_shark_bar.value += 1500
    scaling.scaleByPixels(boss_shark, 10, ScaleDirection.Horizontally, ScaleAnchor.Middle)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.boss, function (sprite, otherSprite) {
    status_bar_healt.value += -1
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.ghost_king, function (sprite, otherSprite) {
    ghostkingbar.value += -5
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.npc, function (sprite, otherSprite) {
    dialogue = true
    game.showLongText("tu veux des cheats", DialogLayout.Bottom)
    story.showPlayerChoices("oui", "non")
    if (story.checkLastAnswer("oui")) {
        status_bar_healt.max += 100000000
        status_bar_healt.value += 100000000
        game.showLongText("ok", DialogLayout.Bottom)
    } else if (story.checkLastAnswer("ew non mon esti")) {
        sprites.destroy(mySprite2, effects.fire, 2000)
        game.showLongText("meurt", DialogLayout.Bottom)
    }
    dialogue = false
    pause(30000)
    controller.moveSprite(mySprite, 400, 400)
})
statusbars.onStatusReached(StatusBarKind.sharkbossbar, statusbars.StatusComparison.EQ, statusbars.ComparisonType.Percentage, 50, function (status) {
    animation.stopAnimation(animation.AnimationTypes.All, boss_shark)
    animation.runImageAnimation(
    boss_shark,
    [img`
        ........2....ffff5c..f..........
        ........2....2fcb2dcc2...2......
        .........2...22fb2dd22..22......
        .........22..22f222c22..2.......
        ..ccc.....2..222222222f2fff.....
        ..cbbcc....fffcbbbbcbbbbbbbff...
        ...cbbdc.ffcccbbbbcbcbbbbbbbbf..
        ...fbbdcfcccccbbbcbcbbffbbbbbbff
        ....fbbffcccccbbbbbcb1ff11bbbcbf
        ....fcbb22ffffffffbb12222111bbbf
        ....fcc222c2c2cc2b2212cc22111bf.
        ...fcbb2f2d2c2cc2bb2121c122ccf..
        ...fbbf2.2c2dddcf2b2c111c32cf...
        ..fbbf.....2cdccb2db2111cccf....
        ..fff........ccbb2cf2ccc........
        ..............fffff.............
        `,img`
        .........2....fffc2...f.........
        .........22...2bbd2c..2...2.....
        ..........2...22bb2dc22..2......
        ccc.......22..22c222c22..2......
        cbbcc......22.222222222ff2ff....
        .cbbdc.....fffcbbbbbbbbbbbbbff..
        .fbbddc..ffcccbbbbcbcbbbbbbbbbff
        ..fbbdfffcccccbbbcbcbbffbbbbbcbf
        ..fcbbbcccccccbbbcfcb1ff1111bbbf
        ..fccbccccccccffff2bb12211111bf.
        .fcbbfffccffffcc2b22112233cccf..
        .fbbf...cb22222c22b21112131cf...
        fbbf.....cc2dd2df2b22111c33f....
        fff........ccd22bbdbf1111ff.....
        .............cfbbdbfccccc.......
        ..............fffff.............
        `,img`
        ........22...ffff5...f...2......
        .........2...ffbd2cc.f...2......
        ..ccc....2...22fb2db22...2......
        ..cbbc...22..22f222c22..2.......
        ...cbdc...2..222222222f22ffff...
        ...fbdc...22ffcbbbbbbbbbbbbbcff.
        ....fbdc.ffcccbbbbbbcbbbbbbbbbcf
        ....fcdffcccccbbbcbcbbbffbbbbcbf
        ....fcbbcccfccbbbcbcbbbff1111bbf
        ...fcbbccccffffffff2211212111bf.
        ...fbbfffcc222ccb2bb212232cccf..
        ..fbbf..cb22c2ccc2bb221c131cf...
        ..fff....cbdd2ddc22bc221c33f....
        ..........ccb22ccb2df1211ff.....
        ............ccfbbbdfcc2cc.......
        ..............fffff.............
        `,img`
        .........2....fffc5...f...2.....
        .........2....2bbd2c..2...2.....
        ..........2...22bd2dc22...2.....
        ccc.......22..22c222c22..2......
        cbbcc......22.222222222ff2ff....
        .cbbdc.....fffcbbbbbbbbbbbbbff..
        .fbbddc..ffcccbbbbcbcbbbbbbbbbff
        ..fbbdfffcccccbbbcbcbbffbbbbbcbf
        ..fcbbbcccccccbbbcbcbffff111bbbf
        ..fccbcccfffffffbbbfff2221111bf.
        .fcbbfffcf22222fffbf22cc23cccf..
        .fbbf...c22bc2222fb2211c23fff...
        fbbf.....222d22222fbc111c33f....
        fff........2cddf222bf1111ff.....
        .........22..cfbb2bfccccc.......
        ..............fffff.............
        `],
    500,
    true
    )
    babyshark = sprites.create(img`
        .........2.2.....ccfff..............
        .........2.2....cddbbf..............
        .........222...cddbbf...............
        .......22....22ccbbcf............ccc
        ........2ffff2ccccccff.........ccbbc
        ......f22bbbb22bbbbbbcfff.....cdbbc.
        ....ffbbb222bbbcbcbbbbcccff..cddbbf.
        ....fbcbb2b2ffbbcbcbbbcccccfffdbbf..
        ....fbbb1111ff1bcbcbbbcccccccbbbcf..
        .....fb11111111bbbbbbcccccccccbccf..
        ......fccc33cc11bbbbccccccccfffbbcf.
        .......fc131c111bbbcccccbdbc...fbbf.
        ........f33c111cbbbfdddddcc.....fbbf
        .........ff1111fbdbbfddcc........fff
        ...........cccccfbdbbfc.............
        .................fffff..............
        `, SpriteKind.babyshark)
    babysharknumber2 = sprites.create(img`
        ........2..2.....ccfff..............
        ........2222....cddbbf..............
        .....222....222cddbbf...............
        .......2....22fccbbcf............ccc
        .....222fffff2ccccccff.........ccbbc
        ......ff2222b22bbbbbbcfff.....cdbbc.
        ....ffbb2bb2bbbcbcbbbbcccff..cddbbf.
        ....fbcb2bb2ffbbcbcbbbcccccfffdbbf..
        ....fbbb1111ff1bcbcbbbcccccccbbbcf..
        .....fb11111111bbbbbbcccccccccbccf..
        ......fccc33cc11bbbbccccccccfffbbcf.
        .......fc131c111bbbcccccbdbc...fbbf.
        ........f33c111cbbbfdddddcc.....fbbf
        .........ff1111fbdbbfddcc........fff
        ...........cccccfbdbbfc.............
        .................fffff..............
        `, SpriteKind.babyshark)
    babysharknumber3 = sprites.create(img`
        .................ccfff..............
        ................cddbbf..............
        .......222.....cddbbf...............
        .......2.2....fccbbcf............ccc
        .......2ff22ffccccccff.........ccbbc
        .....22fbbb2bbbbbbbbbcfff.....cdbbc.
        ....f2bbb222bbbcbcbbbbcccff..cddbbf.
        ....f22bbbbbffbbcbcbbbcccccfffdbbf..
        ....fbb21211ff1bcbcbbbcccccccbbbcf..
        .....fb22211111bbbbbbcccccccccbccf..
        ......fccc33cc11bbbbccccccccfffbbcf.
        .......fc131c111bbbcccccbdbc...fbbf.
        ........f33c111cbbbfdddddcc.....fbbf
        .........ff1111fbdbbfddcc........fff
        ...........cccccfbdbbfc.............
        .................fffff..............
        `, SpriteKind.babyshark)
    boss_shark.follow(mySprite2, 75)
    babyshark.setPosition(144, 28)
    babysharknumber2.setPosition(138, 8)
    babysharknumber3.setPosition(123, 36)
    babyshark.follow(mySprite2, 110)
    babysharknumber2.follow(mySprite2, 110)
    babysharknumber3.follow(mySprite2, 110)
})
statusbars.onStatusReached(StatusBarKind.bossbar, statusbars.StatusComparison.EQ, statusbars.ComparisonType.Percentage, 25, function (status) {
    music.play(music.melodyPlayable(music.sonar), music.PlaybackMode.UntilDone)
    fireball = sprites.create(img`
        ..............................
        ..............................
        ..............................
        ..............................
        ...........24.................
        ............4......24.........
        ........555.44..42..44........
        .....44...5.444422............
        .44..4455fffffff244...........
        .5....fff.444.442ff...........
        .4...ff445544.44424f5.44......
        ..4..44455422244424ff444...4..
        ..45f4f445444fff424ff..4...4..
        ..4ff45fff55ff2f4245ff24......
        ..4ff4444f.444244244ff2.......
        .44f44524544442.444..ff.....2.
        .44445244544ff44f4.f5ff.....2.
        44.45524f5444f224454ff........
        .4.45f24f5444f54f4542f.44...2.
        .44.ff4445555544424424444...2.
        ..444ff444f44.44ff54244.4.....
        .....44f22fff4444545244....4..
        ...4.444555444245ffff4.....4..
        ...4444ffffffff4ff.544.4......
        ..445..45ff4455444554..4......
        44..4....4..4.4.444...........
        ........44..44................
        ..............................
        ...........44..44.............
        ..............................
        `, SpriteKind.fireball)
    scaling.scaleByPixels(fireball, 20, ScaleDirection.Uniformly, ScaleAnchor.Middle)
    fireball.setPosition(72, 29)
    fireball.follow(mySprite2, 75)
    boss.setImage(img`
        ........................bbbbbbbbbbbbbbbbbbb..................................
        ......................bbb5555555555555555bbbbb...............................
        .....................bb5555555555555555555555bbb......bbc....................
        ....................bb5555555555555555555555555bbb..cbbcc....................
        ...................bb5555555555555555555555555555bccbbccc....................
        ...................b5555555555555555555555555555555ccccc.....................
        ..................bb55555555555555555555555ffff55555cccc.....................
        ..................b5555555ffffffffff55555555555fff555ccc.....................
        ..................c55555f5f5555555555555555555555fff55cc.....ccc.............
        ..................c55555555555555555555555555555555ff55ccccccbbc.............
        ..................c5555555ffffffff5555555555fffff5555555cccbbbcc.............
        ..................c5555555f111111f5555555555ff111fff55555ccbccc..............
        ..................c5555555f111111f5555555555ff111111f55555ccccc..............
        ...................c555555f111f11f5555555555ff1111111f5555dcccc..............
        ...................c555555f11ff11f5555555555ff1111111f55555dcc...............
        ....................c555555f11f1ff5555555555f111ff111f55555dcc...............
        ....................c555555f1111f55555555555f111ff111f55555ddc...............
        .....................c55555ff111f55555555555f11111111f5555dddccccbbc.........
        ......................c55555fffff55555555555f11111111f555555ddccbbcc.........
        ......................c555555555555555555555ff111111f5555555ddcccccc.........
        .......................cc55555555555555555555ff1111f5555555dddccccc..........
        ........................ccb55555555555555555555fffff5555555d55dcccc..........
        .........................cb55555555555555555555555555555555555dcccc..........
        .........................cd5555555555555555555555555555555555dddccc..........
        .................cccc....c55555555555555555555555555555555ddddddcc...........
        ................c55bcc...c555555fffffffffff5555555555555555dddddcc...........
        ................c55bbc...c55555555555555555ffffffff55555555ddddddccc.........
        ..............ccc55bddc..cb55555555555555555555555cccc5555dddddddcccccc......
        .............c55bb5bdddc..c55555555555555555555555c55ccccddddddddcccccc......
        .............c55dbbbdddcc..cd555555555555555555555cb5555ccccdddddccccc.......
        .............c555bddbbb5c..c5555555555555555555ccccbb55bb5dbcddddbccc........
        ..............bbbbddb555cccc5555555555555555555c55ccbbbb5555bcddddcc.........
        .............cdd555b555bdbb55555555555555555555bb5555db5555555cdddc..........
        ...........ccbbb555bbbb5dbb555555555555555555555bb55ddbccbb555ccddcc.........
        ...........c555bb5555555bb55555555555555555555555bc5ddddddbb555cdddcc........
        ...........c5555b5555555b5555555555555555555555555c55dddbbbb555cbdddc........
        ............cbbb555555dbb5555555555555555555555555cc5ddbb5555555bbbddc.......
        .............cbb55555ddb555555555555555555555555555c55db55555555dbbbdcc......
        ..............cccddddddb555555555555555555555555555cc555bbb555555dddddc......
        ................ccddddb55555555555555555555555555555c55555dd555555ddddc......
        .................cddddb555555555555f555555555555555dcc5555dd5555555dddc......
        ..cc.............ccddbd555555f2555ff55555555555555d5dc555dd55555555dddc......
        ..c5bb............ccdbd55555522fff55555555555555555ddcc555555555555dddc......
        ..c55b.............ccbd555555f2f522555555555555555ddddc555555555555ddcc......
        ..cb5bb.............cbdd5555ff55ff222222555555555d5dddcc5555555555dddcc......
        ..cb55b..............cdd5555f55555f22ff255555555d55ddddccc5555555dddcc.......
        ..cb55b..............cddd5555555555fff22555d555d55dddddddccc555ddddcc........
        ..c555b..............cdd55555dd55ffff525555555dddddddddddddcccccccccc........
        .cb555bb.............cbdd5555dd5ff2252555555dddddddddddddddddddddddccc.......
        .cb555bb............ccbddd5d5fff5552df525ff555dddddddddddddddddddddcccc......
        .c55555b...........cccbbdddddfd555552ff2ffd55dddddddddddddddddddddbccc.......
        cb55555b..........cccbbbbdddd55ddd5252fffdddddddddddddddddddddddddbcc........
        cb55555b........bccbbbd5555dd555dd55fffff2dddddddddddddddd55ddddbbbc.........
        c5555555bb....bbbddbb5555555ddddddfffdd5ff2dddddddddddddd55ddddddbbc.........
        c55555555bbbbbbddddc555555555ddddffddddddfddddddddddddddd5dd5555ddbc.........
        cd5555555555ddddddc5555555555ddddddddddddddddddddddddddddd55555555dc.........
        cd5555555555dddddcc5555555555dddddddddddddddddddddddddd55d555555555cc........
        cdd55555555ddddddc55555555555dddddddddddddddddddddddddd5555555555555c........
        cddd555555ddddddcc5555555555ddddddddddddddddddddddddddddd55555555555cc.......
        ccddddddddddddddc55555555555ddddddddddddddddddddddddddddd555555555555c.......
        .cddddddddddddddc555555555555dddddddddddddddddddddddddddd555555555555c.......
        .ccddddddddddddcc555555555555ddddddddddddddddddbddddddddd555555555555cc......
        ..ccdddddddddddcc5555555dd55dddddddddddddddddddbdddddddd5d555555555555c......
        ...ccddddddddddccd5555dddddddddddddbbddddddddddbddddddddd5555555555555c......
        ....cccddddddddcddddddddddddddddddbbddddddddddbbbdddddddddd55555555555c......
        ......cccdddddccdddddddddddddddddccccccccccccbbbbddddddddddd555555555dc......
        ........cccccccdddddddddddddddddccc........ccccbbbdddddddddddd5555555dcc.....
        ............ccc555555dddddddddccc.............cccbddddddddddddd55555ddccc....
        .............c55555555ddddddccc..................ccdddddddddddddddddddccc....
        ...........ccdddccd555dddccccc....................ccdddddddddddd5555555dc....
        ..........ccdddccdddddcddcc........................cccddddddddd55555555dcc...
        ..........ccdddcdddccccddc...........................ccccccdddd555ddddccddcc.
        ..........ccccccddcccccdcc...............................ccddddddccddddccddcc
        ...............cdc.....ccc................................cccccdddccddddcddcc
        ...............cc...........................................ccccdddccccdccccc
        ...............................................................ccccc..ccc....
        `)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.floorDarkDiamond, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`niveau19`)
    mySprite = sprites.create(img`
        . . . . . . . c c c . . . . . . 
        . . . . . . c b 5 c . . . . . . 
        . . . . c c c 5 5 c c c . . . . 
        . . c c b c 5 5 5 5 c c c c . . 
        . c b b 5 b 5 5 5 5 b 5 b b c . 
        . c b 5 5 b b 5 5 b b 5 5 b c . 
        . . f 5 5 5 b b b b 5 5 5 c . . 
        . . f f 5 5 5 5 5 5 5 5 f f . . 
        . . f f f b f e e f b f f f . . 
        . . f f f 1 f b b f 1 f f f . . 
        . . . f f b b b b b b f f . . . 
        . . . e e f e e e e f e e . . . 
        . . e b c b 5 b b 5 b f b e . . 
        . . e e f 5 5 5 5 5 5 f e e . . 
        . . . . c b 5 5 5 5 b c . . . . 
        . . . . . f f f f f f . . . . . 
        `, SpriteKind.Food)
    boss = sprites.create(img`
        ........................bbbbbbbbbbbbbbbbbbb..................................
        ......................bbb5555555555555555bbbbb...............................
        .....................bb5555555555555555555555bbb......bbc....................
        ....................bb5555555555555555555555555bbb..cbbcc....................
        ...................bb5555555555555555555555555555bccbbccc....................
        ...................b5555555555555555555555555555555ccccc.....................
        ..................bb555b555555555bd55555555555555555cccc.....................
        ..................b5555b555555555bb555555555555555555ccc.....................
        ..................c555555555555555555555555bccc5555555cc.....ccc.............
        ..................c55555bccccc5555555555555ccc1c5555555ccccccbbc.............
        ..................c5555bccccccccb5555555555dcbbc55555555cccbbbcc.............
        ..................c555bddcccccccccb1555555555555555555555ccbccc..............
        ..................c555bcdcccccccccc11b55555555555555555555ccccc..............
        ...................c55ccbcccccccccc11cc5555555555555555555dcccc..............
        ...................c55ccccccccccccc1bccb1555555bb5555555555dcc...............
        ....................c5cccccccccccccccccb1155555b55555555555dcc...............
        ....................c55ccccccccccccccccc1bccccb555555555555ddc...............
        .....................c55cccccccccccccccccccccc555555555555dddccccbbc.........
        ......................c55ccccccb333cc333bcccc555555555555555ddccbbcc.........
        ......................cc55dccc3333bc333333ccb555555555555555ddcccccc.........
        .......................cc555c33333b3333333cc555555555555555dddccccc..........
        ........................ccb533333b33333333c5555555555555555d55dcccc..........
        .........................cb533333b3333333b55d55555555555555555dcccc..........
        .........................cd533333b33b133b55dd5555555555555555dddccc..........
        .................cccc....c5513333333b11355dd55555555555555ddddddcc...........
        ................c55bcc...c5513333333b1155dd5555555555555555dddddcc...........
        ................c55bbc...c5533333333b555dd55555555555555555ddddddccc.........
        ..............ccc55bddc..cb553133133555dd555555555cccc5555dddddddcccccc......
        .............c55bb5bdddc..c55513313555dd5555555555c55ccccddddddddcccccc......
        .............c55dbbbdddcc..cd5555555dbdd5555555555cb5555ccccdddddccccc.......
        .............c555bddbbb5c..cbbbbbbbbbddd5555555ccccbb55bb5dbcddddbccc........
        ..............bbbbddb555ccccddbbbbbddddd5555555c55ccbbbb5555bcddddcc.........
        .............cdd555b555bdbb5dddddddddddd5555555bb5555db5555555cdddc..........
        ...........ccbbb555bbbb5dbb5ddddddddddd555555555bb55ddbccbb555ccddcc.........
        ...........c555bb5555555bb555dddddddddd5555555555bc5ddddddbb555cdddcc........
        ...........c5555b5555555b5555ddddddddd555555555555c55dddbbbb555cbdddc........
        ............cbbb555555dbb555555dddddd5555555555555cc5ddbb5555555bbbddc.......
        .............cbb55555ddb555555555555555555555555555c55db55555555dbbbdcc......
        ..............cccddddddb555555555555555555555555555cc555bbb555555dddddc......
        ................ccddddb55555555555555555555555555555c55555dd555555ddddc......
        .................cddddb5555555555555555555555555555dcc5555dd5555555dddc......
        ..cc.............ccddbd555555555555555555555555555d5dc555dd55555555dddc......
        ..c5bb............ccdbd5555555555555555555555555555ddcc555555555555dddc......
        ..c55b.............ccbd555555555555555555555555555ddddc555555555555ddcc......
        ..cb5bb.............cbdd5555555555555555555555555d5dddcc5555555555dddcc......
        ..cb55b..............cdd555555555555555555555555d55ddddccc5555555dddcc.......
        ..cb55b..............cddd555555555555555555d555d55dddddddccc555ddddcc........
        ..c555b..............cdd55555dd555555555555555dddddddddddddcccccccccc........
        .cb555bb.............cbdd5555dd5555555555555dddddddddddddddddddddddccc.......
        .cb555bb............ccbddd5d55555555dd55555555dddddddddddddddddddddcccc......
        .c55555b...........cccbbddddddd555555555ddd55dddddddddddddddddddddbccc.......
        cb55555b..........cccbbbbdddd55ddd5555ddddddddddddddddddddddddddddbcc........
        cb55555b........bccbbbd5555dd555dd5555d55ddddddddddddddddd55ddddbbbc.........
        c5555555bb....bbbddbb5555555ddddddddddd55dddddddddddddddd55ddddddbbc.........
        c55555555bbbbbbddddc555555555dddddddddddddddddddddddddddd5dd5555ddbc.........
        cd5555555555ddddddc5555555555ddddddddddddddddddddddddddddd55555555dc.........
        cd5555555555dddddcc5555555555dddddddddddddddddddddddddd55d555555555cc........
        cdd55555555ddddddc55555555555dddddddddddddddddddddddddd5555555555555c........
        cddd555555ddddddcc5555555555ddddddddddddddddddddddddddddd55555555555cc.......
        ccddddddddddddddc55555555555ddddddddddddddddddddddddddddd555555555555c.......
        .cddddddddddddddc555555555555dddddddddddddddddddddddddddd555555555555c.......
        .ccddddddddddddcc555555555555ddddddddddddddddddbddddddddd555555555555cc......
        ..ccdddddddddddcc5555555dd55dddddddddddddddddddbdddddddd5d555555555555c......
        ...ccddddddddddccd5555dddddddddddddbbddddddddddbddddddddd5555555555555c......
        ....cccddddddddcddddddddddddddddddbbddddddddddbbbdddddddddd55555555555c......
        ......cccdddddccdddddddddddddddddccccccccccccbbbbddddddddddd555555555dc......
        ........cccccccdddddddddddddddddccc........ccccbbbdddddddddddd5555555dcc.....
        ............ccc555555dddddddddccc.............cccbddddddddddddd55555ddccc....
        .............c55555555ddddddccc..................ccdddddddddddddddddddccc....
        ...........ccdddccd555dddccccc....................ccdddddddddddd5555555dc....
        ..........ccdddccdddddcddcc........................cccddddddddd55555555dcc...
        ..........ccdddcdddccccddc...........................ccccccdddd555ddddccddcc.
        ..........ccccccddcccccdcc...............................ccddddddccddddccddcc
        ...............cdc.....ccc................................cccccdddccddddcddcc
        ...............cc...........................................ccccdddccccdccccc
        ...............................................................ccccc..ccc....
        `, SpriteKind.boss)
    bosshere = true
    scaling.scaleByPixels(boss, 50, ScaleDirection.Uniformly, ScaleAnchor.Middle)
    mySprite2.setPosition(76, 115)
    game.splash("maman:MON ENFANT PRÉFERÉ SAUVE MOI")
    game.splash("toi: je suis ton seul enfant??")
    game.splash("maman: justement ")
    game.splash("maman:deniese toe pi tue le gros dinosaur jaune")
    game.splash("toi:calme toe")
    game.splash("maman:FARME TA BOTIE")
    music.play(music.createSong(hex`0078000408020403001c0001dc00690000045e0100040000000000000000000005640001040003600000000400011e04000800012008000c00011d0c001000011b10001400012014001800012018001c00011d1c002000011e20002400011b24002800011e28002c0001222c003000011d30003400012434003800011e38003c0001203c004000012505001c000f0a006400f4010a0000040000000000000000000000000000000002300000000400011908000c00011910001400011918001c00011920002400011928002c00011930003400011938003c00011906001c00010a006400f401640000040000000000000000000000000000000002600000000400011d04000800011e08000c00011b0c001000011910001400011d14001800011e18001c00011b1c002000011d20002400011924002800011d28002c0001202c003000011b30003400012234003800011d38003c00011e3c004000012409010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c8003d00000001000106080009000203061000110001061800190001061c001d000104200021000106280029000106300031000106340035000103380039000106`), music.PlaybackMode.LoopingInBackground)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    mySprite.setPosition(125, 24)
    boss.setPosition(120, 37)
    boss_bar = statusbars.create(100, 20, StatusBarKind.bossbar)
    boss_bar.attachToSprite(boss, 10, 4)
    boss_bar.positionDirection(CollisionDirection.Bottom)
    if (deafeated_ghostking_and_got_the_sword) {
        boss_bar.max += 8000
        boss_bar.value += 8000
    } else {
        boss_bar.max += 1e+40
        boss_bar.value += 1e+40
    }
    boss.follow(mySprite2, 35)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.babyshark, function (sprite, otherSprite) {
    status_bar_healt.value += -25
    sprites.destroy(otherSprite, effects.disintegrate, 500)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile7`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`niveau12`)
    if (has_killed_boss_king) {
        game.splash("toi:cool c'est sûrement la grotte que le fantôme m'avait conseiller d'aller")
        game.splash("toi:le roi m'avait dit que dans cette grotte ce trouvait une épé")
        game.splash("toi: oh l'épé est dans le millieu de la grotte")
        game.splash("toi:esque je la prend?")
        game.splash("toi:c'est décider je la prend avec moi")
    }
    mySprite2.setPosition(72, 53)
    sprites.destroy(house)
    sprites.destroy(mySprite4)
    sprites.destroy(mySprite3)
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    if (hassword) {
        animation.runImageAnimation(
        mySprite2,
        [img`
            . . . f f f f f . . . . . 
            . f f f f f 2 f f f . . . 
            . f f 2 f f 2 f 2 f f . . 
            f f f 2 f f 2 f f f f . . 
            f c f f f 2 f f f 2 f f f 
            f c c f f f f f f f f 2 f 
            f f f f f f f 2 2 f f 2 . 
            f f e e f f f f f f f . . 
            . f e 4 e f f f 2 f . . . 
            . f f f e f f 2 f f . . . 
            . . f e e e f f 2 f . . . 
            . . e 4 4 e f f 2 2 . . . 
            . . e 4 4 e 7 f 2 f . . . 
            . . f e e f 6 f f f . . . 
            . . . f f f f f f . . . . 
            . . . . f f f . . . . . . 
            `],
        100,
        true
        )
    } else {
        animation.runImageAnimation(
        mySprite2,
        [img`
            . . . f f f f f . . . . . 
            . f f f f f f f f f . . . 
            . f f f f f f c f f f . . 
            f f f f c f f f c f f . . 
            f c f f c c f f f c c f f 
            f c c f f f f e f f f f f 
            f f f f f f f e e f f f . 
            f f e e f b f e e f f . . 
            . f e 4 e 1 f 4 4 f . . . 
            . f f f e 4 4 4 4 f . . . 
            . . f e e e e e f f . . . 
            . . e 4 4 e 7 7 7 f . . . 
            . . e 4 4 e 7 7 7 f . . . 
            . . f e e f 6 6 6 f . . . 
            . . . f f f f f f . . . . 
            . . . . f f f . . . . . . 
            `],
        100,
        true
        )
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.ghost_king, function (sprite, otherSprite) {
    status_bar_healt.value += -1
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile9`, function (sprite, location) {
    if (has_killed_boss_king == true) {
        deafeated_ghostking_and_got_the_sword = true
        hassword = true
    } else if (has_killed_boss_king == false) {
        hassword = true
    }
    game.splash("tu à trouver l'épé de samurai legendaire")
    game.splash("tu a maintenat +50 de vie tu a maintenant 140 de vie au total et tu peux maintenant tirer des projectiles en haut et en bas si tu touche le boutton ''a'' mais tu est maintenant maudit ")
    status_bar_healt.max += 50
    status_bar_healt.value += 140
    sprites.destroyAllSpritesOfKind(SpriteKind.coin)
    mySprite3 = sprites.create(img`
        ......ffff..............
        ....fff22fff............
        ...fff2222fff...........
        ..fffeeeeeefff..........
        ..ffe222222eef..........
        ..fe2ffffff2ef..........
        ..ffffeeeeffff......ccc.
        .ffefbf44fbfeff....cddc.
        .ffefbf44fbfeff...cddc..
        .fee4dddddd4eef.ccddc...
        fdfeeddddd4eeffecddc....
        fbffee4444ee4fddccc.....
        fbf4f222222f1edde.......
        fcf.f222222f44ee........
        .ff.f445544f............
        ....ffffffff............
        .....ff..ff.............
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Enemy)
    mySprite4 = sprites.create(img`
        4 4 4 5 5 4 4 4 4 4 4 4 4 4 4 4 
        4 4 4 4 4 5 5 2 2 2 2 2 2 2 2 2 
        4 4 2 5 5 5 2 2 2 2 2 2 2 2 2 4 
        4 4 4 5 2 2 5 5 5 5 5 5 5 4 4 4 
        5 5 5 f f f 2 2 2 f f f 4 5 5 5 
        4 4 4 f 4 f 5 5 5 f 2 f f 2 5 2 
        4 4 4 f f f 4 4 4 f 4 4 f 4 4 4 
        4 4 4 4 f 4 4 5 4 f f f f 5 2 4 
        4 2 2 5 5 4 4 4 4 5 5 5 5 5 4 4 
        4 5 4 4 5 5 5 5 5 5 5 5 4 2 2 4 
        2 2 4 4 4 4 4 4 2 2 4 2 f 4 4 2 
        5 4 f 4 4 5 4 4 4 4 4 4 f 2 4 4 
        2 2 f 4 4 4 4 4 5 5 5 f f 5 5 4 
        5 5 f f 4 2 2 5 2 2 f f 4 4 4 4 
        2 4 4 f f 4 f f f f f 4 4 4 4 4 
        2 2 2 2 2 2 2 2 2 4 4 4 4 4 4 4 
        `, SpriteKind.Enemy)
    mySprite3.setPosition(1789, 789)
    house = sprites.create(img`
        ....................e2e22e2e....................
        .................222eee22e2e222.................
        ..............222e22e2e22eee22e222..............
        ...........e22e22eeee2e22e2eeee22e22e...........
        ........eeee22e22e22e2e22e2e22e22e22eeee........
        .....222e22e22eeee22e2e22e2e22eeee22e22e222.....
        ...22eeee22e22e22e22eee22eee22e22e22e22eeee22...
        4cc22e22e22eeee22e22e2e22e2e22e22eeee22e22e22cc4
        6c6eee22e22e22e22e22e2e22e2e22e22e22e22e22eee6c6
        46622e22eeee22e22eeee2e22e2eeee22e22eeee22e22664
        46622e22e22e22eeee22e2e22e2e22eeee22e22e22e22664
        4cc22eeee22e22e22e22eee22eee22e22e22e22eeee22cc4
        6c622e22e22eeee22e22e2e22e2e22e22eeee22e22e226c6
        466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
        46622e22eeee22e22e22e2e22e2e22e22e22eeee22e22664
        4cc22e22e22e22e22eeee2e22e2eeee22e22e22e22e22cc4
        6c622eeee22e22eeee22eee22eee22eeee22e22eeee226c6
        46622e22e22eeee22e22e2e22e2e22e22eeee22e22e22664
        466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
        4cc22e22eeee22e22e22e2e22e2e22e22e22eeee22e22cc4
        6c622e22e22e22e22e22eee22eee22e22e22e22e22e226c6
        46622eeee22e22e22eeecc6666cceee22e22e22eeee22664
        46622e22e22e22eeecc6666666666cceee22e22e22e22664
        4cceee22e22eeecc66666cccccc66666cceee22e22eeecc4
        6c622e22eeecc66666cc64444446cc66666cceee22e226c6
        46622e22cc66666cc64444444444446cc66666cc22e22664
        46622cc6666ccc64444444444444444446ccc6666cc22664
        4ccc6666ccc6444bcc666666666666ccb4446ccc6666ccc4
        cccccccc6666666cb44444444444444bc6666666cccccccc
        64444444444446c444444444444444444c64444444444446
        66cb444444444cb411111111111111114bc444444444bc66
        666cccccccccccd166666666666666661dccccccccccc666
        6666444444444c116eeeeeeeeeeeeee611c4444444446666
        666e2222222e4c16e4e44e44e44e44ee61c4e2222222e666
        666eeeeeeeee4c16e4e44e44e44e44ee61c4eeeeeeeee666
        666eddddddde4c66f4e4effffffe44ee66c4eddddddde666
        666edffdffde4c66f4effffffffff4ee66c4edffdffde666
        666edccdccde4c66f4effffffffffeee66c4edccdccde666
        666eddddddde4c66f4eeeeeeeeeeeeee66c4eddddddde666
        c66edffdffde4c66e4e44e44e44e44ee66c4edffdffde66c
        c66edccdccde4c66e4e44e44e44e44ee66c4edccdccde66c
        cc66666666664c66e4e44e44e44feeee66c46666666666cc
        .c66444444444c66e4e44e44e44ffffe66c44444444466c.
        ..c64eee4eee4c66f4e44e44e44f44fe66c4eee4eee46c..
        ...c4eee4eee4c66f4e44e44e44effee66c4eee4eee4c...
        ....644444444c66f4e44e44e44e44ee66c444444446....
        .....64eee444c66f4e44e44e44e44ee66c444eee46.....
        ......6ccc666c66e4e44e44e44e44ee66c666ccc6......
        `, SpriteKind.house)
    house.setPosition(75, 16)
    mySprite2.setPosition(76, 70)
    mySprite4.setPosition(133, 97)
    mySprite4.sayText("me lava")
    mySprite6.setPosition(4, 6)
    mySprite3.follow(mySprite2)
    tiles.setCurrentTilemap(tilemap`map`)
    enemy_bar = statusbars.create(20, 4, StatusBarKind.EnemyHealth)
    enemy_bar.attachToSprite(mySprite3, 10, 4)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairWest, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`niveau3`)
    levelreset()
    mySprite5 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . e e e e e e e . . . . . 
        . . . e e e e e e e e e . . . . 
        . . e e e e e e e e e e e . . . 
        . e e e e e e e e e e e e e . . 
        . e e e e e e e e e e e e e . . 
        . e e e e e e e e e e e e e . . 
        . e e e e e e e e e e e e e . . 
        . e e e e e e e e e e e e e . . 
        . e e e e e e e e e e 5 e e . . 
        . e e e e e e e e e e e e e . . 
        . e e e e e e e e e e e e e . . 
        . e e e e e e e e e e e e e . . 
        . e e e e e e e e e e e e e . . 
        . e e e e e e e e e e e e e . . 
        `, SpriteKind.coin)
    mySprite5.setPosition(84, 4)
    mySprite2.setPosition(156, 113)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (hassword) {
        animation.runImageAnimation(
        mySprite2,
        [img`
            . . . . f f f f . . . . . 
            . . 2 2 f f f f f f . . . 
            . 2 2 f f f f f f f f . . 
            2 2 f 2 2 2 f f f f f c . 
            2 f 2 f 2 f f f f f f c . 
            f 2 2 f 2 f e e f f c c . 
            f 2 f f f e e f f c c f . 
            f f f 2 f e e f b f f f . 
            . f 2 2 f 4 4 f 1 4 f . . 
            . f f f f 4 4 4 4 e f . . 
            . f f f e e e e f f f . . 
            f f f f 7 7 7 7 b f e f . 
            e 2 f 7 7 7 7 7 7 f 4 e . 
            f f f 6 6 6 6 6 6 f e e . 
            . . . f f f f f f . . . . 
            . . . f f . . f f . . . . 
            `,img`
            . . . . . . . . . . . . . 
            . . . . . f f f f . . . . 
            . . . f f f 2 f f f f . . 
            . . f 2 2 2 2 f c f f f . 
            f f 2 2 f f f f c f f f c 
            f f f f 2 2 f f f f f f c 
            . f 2 2 2 f f e e f f c c 
            . 2 f f f f e e f f c c f 
            . f 2 2 2 f e e f b f f f 
            . f 2 f f f 4 4 f 1 4 f f 
            . . f f 4 4 4 4 4 e e f e 
            . f 2 2 f 7 7 7 e 4 4 4 e 
            . e f 2 7 7 7 7 e 4 4 e . 
            . . f f 6 6 6 6 6 e e . . 
            . . . f f f f f f f . . . 
            . . . f f f . . . . . . . 
            `,img`
            . . . . . . . . . . . . . 
            . . . . f f f f . . . . . 
            . . f f 2 2 f f f f . . . 
            . f 2 2 2 f f f f f f . . 
            f f 2 f f f f f f f f f f 
            f 2 2 f f f f f c f f f f 
            f f f f f f f f f c c c . 
            f 2 2 2 f e e f f f f f . 
            f 2 f f f e e f b f f f . 
            f f 2 f f 4 4 f 1 4 f f . 
            f f 2 e f 4 4 4 4 e f . . 
            f f f f f 7 7 7 b f e f . 
            . f 2 f e 7 7 7 7 f 4 e . 
            . . 2 e 6 6 6 6 6 f . . . 
            . . . f f f f f f f . . . 
            . . . . . . . f f f . . . 
            `],
        100,
        true
        )
    } else {
        animation.runImageAnimation(
        mySprite2,
        [img`
            . . . . f f f f . . . . . 
            . . f f f f f f f f . . . 
            . f f f f f f c f f f . . 
            f f f f f f c c f f f c . 
            f f f c f f f f f f f c . 
            c c c f f f e e f f c c . 
            f f f f f e e f f c c f . 
            f f f b f e e f b f f f . 
            . f 4 1 f 4 4 f 1 4 f . . 
            . f e 4 4 4 4 4 4 e f . . 
            . f f f e e e e f f f . . 
            f e f b 7 7 7 7 b f e f . 
            e 4 f 7 7 7 7 7 7 f 4 e . 
            e e f 6 6 6 6 6 6 f e e . 
            . . . f f f f f f . . . . 
            . . . f f . . f f . . . . 
            `,img`
            . . . . . . . . . . . . . 
            . . . . . f f f f . . . . 
            . . . f f f f f f f f . . 
            . . f f f f f f c f f f . 
            f f f f f f f c c f f f c 
            f f f f c f f f f f f f c 
            . c c c f f f e e f f c c 
            . f f f f f e e f f c c f 
            . f f f b f e e f b f f f 
            . f f 4 1 f 4 4 f 1 4 f f 
            . . f e 4 4 4 4 4 e e f e 
            . f e f b 7 7 7 e 4 4 4 e 
            . e 4 f 7 7 7 7 e 4 4 e . 
            . . . f 6 6 6 6 6 e e . . 
            . . . f f f f f f f . . . 
            . . . f f f . . . . . . . 
            `,img`
            . . . . . . . . . . . . . 
            . . . . f f f f . . . . . 
            . . f f f f f f f f . . . 
            . f f f c f f f f f f . . 
            c f f f c c f f f f f f f 
            c f f f f f f f c f f f f 
            c c f f e e f f f c c c . 
            f c c f f e e f f f f f . 
            f f f b f e e f b f f f . 
            f f 4 1 f 4 4 f 1 4 f f . 
            e f e e 4 4 4 4 4 e f . . 
            e 4 4 4 e 7 7 7 b f e f . 
            . e 4 4 e 7 7 7 7 f 4 e . 
            . . e e 6 6 6 6 6 f . . . 
            . . . f f f f f f f . . . 
            . . . . . . . f f f . . . 
            `],
        100,
        true
        )
    }
    haut = false
})
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    if (hassword) {
        animation.runImageAnimation(
        mySprite2,
        [img`
            . . . . f f 2 2 . . . . . 
            . . f f c f 2 f f f . . . 
            . f f c f f 2 2 f f f . . 
            f f c c f f f f 2 2 f f . 
            f f c c f f f f 2 2 2 f . 
            f f f f f 2 f f 2 f 2 f . 
            f f f f f f f f 2 2 f 2 . 
            f f f f f f f f 2 2 2 2 . 
            f f f f f f f f 2 f f f . 
            . f f f f f f f 2 2 2 . . 
            . f f f f f f f f f 2 . . 
            f e f f f f f f f 2 2 f . 
            e 4 f 7 7 7 7 2 f 2 f f . 
            e e f 6 6 6 6 6 f f f f . 
            . . . f f f f f f . . . . 
            . . . f f . . f f . . . . 
            `],
        100,
        true
        )
    } else {
        animation.runImageAnimation(
        mySprite2,
        [img`
            . . . . f f f f . . . . . 
            . . f f c c c c f f . . . 
            . f f c c c c c c f f . . 
            f f c c c c c c c c f f . 
            f f c c f c c c c c c f . 
            f f f f f c c c f c c f . 
            f f f f c c c f c c f f . 
            f f f f f f f f f f f f . 
            f f f f f f f f f f f f . 
            . f f f f f f f f f f . . 
            . f f f f f f f f f f . . 
            f e f f f f f f f f e f . 
            e 4 f 7 7 7 7 7 7 c 4 e . 
            e e f 6 6 6 6 6 6 f e e . 
            . . . f f f f f f . . . . 
            . . . f f . . f f . . . . 
            `],
        100,
        true
        )
    }
})
statusbars.onStatusReached(StatusBarKind.Health, statusbars.StatusComparison.EQ, statusbars.ComparisonType.Percentage, 0, function (status) {
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.house, function (sprite, otherSprite) {
    tiles.setCurrentTilemap(tilemap`niveau3`)
    levelreset()
    mySprite5 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . e e e e e e e . . . . . 
        . . . e e e e e e e e e . . . . 
        . . e e e e e e e e e e e . . . 
        . e e e e e e e e e e e e e . . 
        . e e e e e e e e e e e e e . . 
        . e e e e e e e e e e e e e . . 
        . e e e e e e e e e e e e e . . 
        . e e e e e e e e e e e e e . . 
        . e e e e e e e e e e 5 e e . . 
        . e e e e e e e e e e e e e . . 
        . e e e e e e e e e e e e e . . 
        . e e e e e e e e e e e e e . . 
        . e e e e e e e e e e e e e . . 
        . e e e e e e e e e e e e e . . 
        `, SpriteKind.coin)
    mySprite5.setPosition(84, 4)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (hassword) {
        if (haut == true) {
            animation.runImageAnimation(
            mySprite2,
            [img`
                . . . . f f f f . . . . . 
                . . f f c c c f f f . . . 
                . f f c c c c f f f f . . 
                f f c c c c c 2 2 f f f . 
                f f c c f c c f 2 2 f 2 . 
                f f f f f c c c f f f 2 . 
                f f f f c c c f f f f f 1 
                f f f f f f f f f f 2 2 1 
                f f f f f f f f 2 f f f 1 
                . f f f f f f f 2 f f . 1 
                . f f f f f f f 2 f f 5 1 
                f e f f f f f 2 2 f e f 5 
                e 4 f 7 7 7 7 f 2 f f e 2 
                e e f 6 6 6 6 6 2 2 f f 2 
                . . . f f f f f f f . . . 
                . . . f f . . f f . . . . 
                `,img`
                . . . . . . . . . . . . . 
                . . . . . f f f f . . . . 
                . . . f f c c f f 2 f . . 
                . f f f c c c f f f f f . 
                f f c c c c c f 2 f 2 f f 
                f c c c c f c f f f f f f 
                . f f f f c c f f f f 2 f 
                . f f f f c c f f f 2 2 f 
                . f f f f f f f f f 2 f f 
                . f f f f f f f f 2 2 f f 
                . . f f f f f f 2 f f f 1 
                . . e f f f f f 2 2 f f 5 
                . . e f f f f f f f f f f 
                . . 4 c 7 7 7 7 7 f 2 2 f 
                . . e f f f f f f f f e . 
                . . . f f f . . . . . . . 
                `,img`
                . . . . . . . . . . . . . 
                . . . . . f f f f . . . . 
                . . . f f c c f f f f . . 
                . . f f c c c f 2 f f f . 
                . f f f c c f f f 2 2 f f 
                f f f c c c f f f 2 2 f f 
                f f c c c f f f f f 2 f 2 
                . f f f f f f f f f f f 2 
                . f f f f c f f f f f f f 
                . . f f f f f f f f 2 f f 
                . . f f f f f f f f f f 1 
                . . f f f f f f f 2 f f 5 
                . f e f f f f f f 2 2 f 2 
                . e 4 4 e 7 7 7 7 f 2 f . 
                . . e e f f f f f f f f . 
                . . . . . . . . f f f . . 
                `],
            100,
            false
            )
            slash = sprites.createProjectileFromSprite(img`
                ..............................
                ..............................
                ..............................
                ..............................
                ..............................
                ..............................
                .........................2....
                ....22...................2....
                ...2.......22222222222....2...
                ..2....22222.........222...2..
                .22...22...fffffff.....22..2..
                22....2..fff.....ff.....22....
                2....2..ff........ff.....2....
                ....22.ff...........f....22...
                ....2..f.............f....2...
                ...2..ff.............ff...2...
                ..22..f...............f...22..
                ..2..f................ff...2..
                .22..f.................f...22.
                .2..ff.................ff...2.
                .2..f...................f...22
                .2..f...................ff...2
                .2.ff....................f...2
                .2.f.....................f...2
                .2.f.....................f...2
                .........................ff...
                ..........................f...
                ..............................
                ..............................
                ..............................
                `, mySprite2, 0, -10000)
        } else if (haut == false) {
            slash_2 = sprites.createProjectileFromSprite(img`
                ..............................
                ..............................
                ..............................
                ..............................
                ..............................
                ..............................
                ..............................
                ..............................
                ...2..........................
                ...2.f................f2......
                ...2.f................f22.....
                ...2.ff...............f22.....
                ...2..f...............f22.....
                ...2..f...............f22.....
                ...2..ff..............f22.....
                ...22..ff.............f22.....
                ...22...f.............f2....2.
                ....2...ff............f2....2.
                ....2....f..........fff2....2.
                ....22....ff......ff...2....2.
                .....2.....ffffffff...22....2.
                .....22..............22....2..
                ..2...22222.........22.....2..
                ...2......222222222222....2...
                ...22....................2....
                .....2...................2....
                .......................22.....
                .......................2......
                ..............................
                ..............................
                `, mySprite2, 0, 10000)
            animation.runImageAnimation(
            mySprite2,
            [img`
                . . . . f f f f . . . . . 
                . . f 2 f f f f f f . . . 
                . f 2 f f 2 f c f f f . . 
                f 2 f 2 f f f c f f f c . 
                f f 2 f f 2 f f f f f c . 
                2 2 f f f f e e f f c c . 
                1 f f f 2 e e f f c c f . 
                1 2 f f 2 e e f b f f f . 
                1 2 2 f f 4 4 f 1 4 f . . 
                1 2 2 f 4 4 4 4 4 e f . . 
                1 2 f f e e e e f f f . . 
                5 f f f 7 7 7 7 b f e f . 
                2 2 f 7 7 7 7 7 7 f 4 e . 
                e 2 f 6 6 6 6 6 6 f e e . 
                . . . f f f f f f . . . . 
                . . . f f . . f f . . . . 
                `,img`
                . . . . . . . . . . . . . 
                . . . . . f f f f . . . . 
                . . . f f f f f f f f . . 
                . . f f f f f f c f f f . 
                f f 2 f 2 2 f c c f f f c 
                f f f f f 2 f f f f f f c 
                1 f f 2 2 2 f e e f f c c 
                1 f f f f f e e f f c c f 
                1 f f f 2 f e e f b f f f 
                1 f f f 2 2 4 4 f 1 4 f f 
                5 . f f f f 4 4 4 e e f e 
                2 f f 2 f 7 7 7 e 4 4 4 e 
                . f 2 2 f 7 7 7 e 4 4 e . 
                . . . f f 6 6 6 6 e e . . 
                . . . f f f f f f f . . . 
                . . . f f f . . . . . . . 
                `,img`
                . . . . . . . . . . . . . 
                . . . . f f f f . . . . . 
                . . f f f f f f f f . . . 
                . f f f f f f f f f f . . 
                f f f 2 f c f f f f f f f 
                2 f 2 f f f f f c f f f f 
                f f f f f e f f f b 1 c . 
                2 f 2 f f e e f b d 1 f . 
                2 f 2 2 f e e b d 1 f f . 
                f f 2 2 f 4 b d 1 4 f f . 
                e f 2 f 5 5 5 1 4 e f . . 
                e f 2 f e 2 5 7 b f e f . 
                . e f f e 5 7 7 7 f 4 e . 
                . . e e 5 6 6 6 6 f . . . 
                . . . f f f f f f f . . . 
                . . . . . . . f f f . . . 
                `],
            100,
            false
            )
        }
    }
})
statusbars.onZero(StatusBarKind.EnemyHealth, function (status) {
    sprites.destroy(enemy_bar.spriteAttachedTo())
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (hassword) {
        animation.runImageAnimation(
        mySprite2,
        [img`
            . . . . f f f f . . . . . 
            . . f f c c f f f f f . . 
            . f f c c c f 2 f f 2 f . 
            f f c c c c f f 2 f 2 2 . 
            f f c c f c c f 2 2 f f . 
            f f f f f c c c f 2 f f . 
            f f f f c c c f f f 2 f . 
            f f f f f f f f 2 f f f . 
            f f f f f f f 2 2 f f f . 
            . f f f f f f f 2 f f . . 
            . f f f f f f f 2 f f . . 
            f e f f f f f f 2 f e f . 
            e 4 f 7 7 7 7 f 2 f f e . 
            e e f 6 6 6 6 f f 2 2 e . 
            . . . f f f f f f 2 . . . 
            . . . f f . . f f . . . . 
            `,img`
            . . . . . . . . . . . . . 
            . . . . . f f f f . . . . 
            . . . f f c f f f f f . . 
            . f f f c c f 2 2 f f f . 
            f f c c c c f f 2 f f f f 
            f c c c c f c f f f 2 2 f 
            . f f f f c c f f 2 f 2 f 
            . f f f f c c f f f 2 f 2 
            . f f f f f f f f f f 2 f 
            . f f f f f f f 2 2 f f f 
            . . f f f f f f 2 2 f f . 
            . . e f f f f f 2 f f f . 
            . . e f f f f f f f f 2 f 
            . . 4 c 7 7 7 7 f f 2 2 e 
            . . e f f f f f f f 2 e . 
            . . . f f f . . . . . . . 
            `,img`
            . . . . . . . . . . . . . 
            . . . . . f f f f . . . . 
            . . . f f c c f f f f . . 
            . . f f c c c f f f f f . 
            . f f f c c c f 2 2 f f f 
            f f f c c c c f f 2 f 2 f 
            f f c c c f c f f 2 f 2 2 
            . f f f f f f 2 f f 2 f 2 
            . f f f f c f 2 2 f 2 f 2 
            . . f f f f f f 2 f f f f 
            . . f f f f f f f f f f . 
            . . f f f f f f f 2 f 2 . 
            . f e f f f f f f 2 f 2 . 
            . e 4 4 e 7 7 7 f 2 2 f . 
            . . e e f f f f f f f f f 
            . . . . . . . . f f f . . 
            `],
        100,
        true
        )
    } else {
        animation.runImageAnimation(
        mySprite2,
        [img`
            . . . . f f f f . . . . . 
            . . f f c c c c f f . . . 
            . f f c c c c c c f f . . 
            f f c c c c c c c c f f . 
            f f c c f c c c c c c f . 
            f f f f f c c c f c c f . 
            f f f f c c c f c c f f . 
            f f f f f f f f f f f f . 
            f f f f f f f f f f f f . 
            . f f f f f f f f f f . . 
            . f f f f f f f f f f . . 
            f e f f f f f f f f e f . 
            e 4 f 7 7 7 7 7 7 c 4 e . 
            e e f 6 6 6 6 6 6 f e e . 
            . . . f f f f f f . . . . 
            . . . f f . . f f . . . . 
            `,img`
            . . . . . . . . . . . . . 
            . . . . . f f f f . . . . 
            . . . f f c c c c f f . . 
            . f f f c c c c c c f f . 
            f f c c c c c c c c c f f 
            f c c c c f c c c c c c f 
            . f f f f c c c c f c c f 
            . f f f f c c f c c c f f 
            . f f f f f f f f f f f f 
            . f f f f f f f f f f f f 
            . . f f f f f f f f f f . 
            . . e f f f f f f f f f . 
            . . e f f f f f f f f e f 
            . . 4 c 7 7 7 7 7 e 4 4 e 
            . . e f f f f f f f e e . 
            . . . f f f . . . . . . . 
            `,img`
            . . . . . . . . . . . . . 
            . . . . . f f f f . . . . 
            . . . f f c c c c f f . . 
            . . f f c c c c c c f f . 
            . f f f c c c c c c c f f 
            f f f c c c c c c c c c f 
            f f c c c f c c c c c c f 
            . f f f f f c c c f c f f 
            . f f f f c c f f c f f f 
            . . f f f f f f f f f f f 
            . . f f f f f f f f f f . 
            . . f f f f f f f f f e . 
            . f e f f f f f f f f e . 
            . e 4 4 e 7 7 7 7 7 c 4 . 
            . . e e f f f f f f f e . 
            . . . . . . . . f f f . . 
            `],
        100,
        true
        )
    }
    haut = true
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    game.showLongText("un serpent très venimeux est sortie et ta mordue", DialogLayout.Bottom)
    sprites.destroy(mySprite2, effects.fountain, 500)
})
statusbars.onStatusReached(StatusBarKind.ghostkingbar, statusbars.StatusComparison.EQ, statusbars.ComparisonType.Percentage, 50, function (status) {
    spike_of_death = sprites.create(img`
        ................................................
        ................................................
        ..................a............a............a...
        .................a3a..........a3a..........a3a..
        .................a33a.........a33a........fa33a.
        .................a333a........a333a7fffffffa333a
        .....bbbbffffffff7cccfffffffff7a3afff77ffff7a3af
        ....abbbbffffffff7ccf77fff777f7aaffffffffcf7aaff
        ...acbbbbfffffff3333ffffffffa333affffffffa333aff
        ..acccbbbfffffffa33afffffffffa33afffffffffa33aff
        ..acccbbbffffffffa3fffffffffffa3fffffffffffa3fff
        aaaccccbbffffffff73fffffffffff733ffffffffff73fff
        aaaccccbbffffffff73fffffffffff73fffffffffff73fff
        ..accccbbffffffffa3fffffffffffa3fffffffffffa3fff
        ..acccccbfffffff333afffffffff333afffffffff333aff
        ...accccbfffffff333affff777fa33aaffffffffa33aaff
        ....accccffffffffffaafffffffffffaafffffffffffaaf
        .....bbbbbffffff77fa3fffffffffff33fffffffffff33f
        .................7a33a........7a33a........7a33a
        .................a33a.........a33a.........a33a.
        .................a3a..........a3a..........a3a..
        ..................a............a............a...
        ................................................
        ................................................
        `, SpriteKind.spikeofdeath)
    spike_of_death.setPosition(130, 87)
    spike_of_death.follow(mySprite2, 50)
    ghost_king.follow(mySprite, 75)
    animation.runImageAnimation(
    ghost_king,
    [img`
        ........................
        .......a...22..a........
        .......a...22..a........
        .......af..ff.fa........
        .......fff.ff.ff........
        .......fffffffff........
        ........ff3333ff........
        .......fb333333bf.......
        ...a.fffc3333333f.......
        ...aa333cb3333333f......
        ...f3aaa3b3333aaaaa.....
        ...fbfbffcf33fcaaaa.....
        ......fcf333333bbf......
        .......ccbbb3b3fcf......
        .......fffbfbfbff.......
        ........ffffffff........
        ........fffffffffff.....
        .........fffffc333aa....
        .........fffffaaaaaf....
        ..........ffffbfbfbf....
        ...........ffff.........
        ........................
        ........................
        ........................
        `,img`
        ........................
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff3333ff........
        .......fb333333bf.......
        .......f33333333f.......
        ......fb33ffff33bf......
        ....a.fb3ff33ff3bf......
        ...a..aa3f3333f3aa......
        ...a..aa3aa22aa3aa......
        ...a..aabb3333bbaaf.....
        ...aa.aabbfbbfbbaacf....
        ...aaafcbcf33fcbcfbf....
        ....aafffbbb3bbffcf.....
        ....fcb3bcffffff........
        ....f3c3c3ffffff........
        ....fbfbfbfffff.........
        .....f.f.f..............
        ........................
        ........................
        ........................
        `,img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff3333ff........
        .......fb333333bf.......
        .......f333ff333f.......
        ......fb33f33f333f......
        ......aa3f3333f3aa......
        ......aa3af22fa3aa......
        ......fcbb3333bbcff.....
        .......fbcf33fcbfaaa....
        .......ffbdb3bbffff.....
        ........fcbfbfbf........
        ........ffffffff........
        ......ffffffffff........
        ....aaaaabcffff.........
        ......ffbff.............
        ........................
        ........................
        ........................
        ........................
        ........................
        `,img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff3333ff........
        .......fb333333bf.......
        .......f33ffff33f.......
        ......fa33f33f33bf......
        ......fab3a22a3baf......
        ......aaab3333baaa......
        ......aaabfbbfbaaa......
        .......fbcf33fcbfff.....
        .......ffb3333bcfbcf....
        ........fcbb3bbfaaaf....
        .......ffffffffffcf.....
        .....fcb3bcfffff........
        .....f3aaa3ffff.........
        ......ffbff.............
        ........................
        ........................
        ........................
        ........................
        ........................
        `],
    100,
    true
    )
    spike_of_death = sprites.create(img`
        ................................................
        ................................................
        ..................a............a............a...
        .................a3a..........a3a..........a3a..
        .................a33a.........a33a........fa33a.
        .................a333a........a333a7fffffffa333a
        .....bbbbffffffff7cccfffffffff7a3afff77ffff7a3af
        ....abbbbffffffff7ccf77fff777f7aaffffffffcf7aaff
        ...acbbbbfffffff3333ffffffffa333affffffffa333aff
        ..acccbbbfffffffa33afffffffffa33afffffffffa33aff
        ..acccbbbffffffffa3fffffffffffa3fffffffffffa3fff
        aaaccccbbffffffff73fffffffffff733ffffffffff73fff
        aaaccccbbffffffff73fffffffffff73fffffffffff73fff
        ..accccbbffffffffa3fffffffffffa3fffffffffffa3fff
        ..acccccbfffffff333afffffffff333afffffffff333aff
        ...accccbfffffff333affff777fa33aaffffffffa33aaff
        ....accccffffffffffaafffffffffffaafffffffffffaaf
        .....bbbbbffffff77fa3fffffffffff33fffffffffff33f
        .................7a33a........7a33a........7a33a
        .................a33a.........a33a.........a33a.
        .................a3a..........a3a..........a3a..
        ..................a............a............a...
        ................................................
        ................................................
        `, SpriteKind.spikeofdeath)
    spike_of_death.setPosition(146, 14)
    spike_of_death.follow(mySprite2, 30)
    spike_of_death = sprites.create(img`
        ................................................
        ................................................
        ..................a............a............a...
        .................a3a..........a3a..........a3a..
        .................a33a.........a33a........fa33a.
        .................a333a........a333a7fffffffa333a
        .....bbbbffffffff7cccfffffffff7a3afff77ffff7a3af
        ....abbbbffffffff7ccf77fff777f7aaffffffffcf7aaff
        ...acbbbbfffffff3333ffffffffa333affffffffa333aff
        ..acccbbbfffffffa33afffffffffa33afffffffffa33aff
        ..acccbbbffffffffa3fffffffffffa3fffffffffffa3fff
        aaaccccbbffffffff73fffffffffff733ffffffffff73fff
        aaaccccbbffffffff73fffffffffff73fffffffffff73fff
        ..accccbbffffffffa3fffffffffffa3fffffffffffa3fff
        ..acccccbfffffff333afffffffff333afffffffff333aff
        ...accccbfffffff333affff777fa33aaffffffffa33aaff
        ....accccffffffffffaafffffffffffaafffffffffffaaf
        .....bbbbbffffff77fa3fffffffffff33fffffffffff33f
        .................7a33a........7a33a........7a33a
        .................a33a.........a33a.........a33a.
        .................a3a..........a3a..........a3a..
        ..................a............a............a...
        ................................................
        ................................................
        `, SpriteKind.spikeofdeath)
    spike_of_death.setPosition(12, 115)
    spike_of_death.follow(mySprite2, 30)
    spike_of_death = sprites.create(img`
        ................................................
        ................................................
        ..................a............a............a...
        .................a3a..........a3a..........a3a..
        .................a33a.........a33a........fa33a.
        .................a333a........a333a7fffffffa333a
        .....bbbbffffffff7cccfffffffff7a3afff77ffff7a3af
        ....abbbbffffffff7ccf77fff777f7aaffffffffcf7aaff
        ...acbbbbfffffff3333ffffffffa333affffffffa333aff
        ..acccbbbfffffffa33afffffffffa33afffffffffa33aff
        ..acccbbbffffffffa3fffffffffffa3fffffffffffa3fff
        aaaccccbbffffffff73fffffffffff733ffffffffff73fff
        aaaccccbbffffffff73fffffffffff73fffffffffff73fff
        ..accccbbffffffffa3fffffffffffa3fffffffffffa3fff
        ..acccccbfffffff333afffffffff333afffffffff333aff
        ...accccbfffffff333affff777fa33aaffffffffa33aaff
        ....accccffffffffffaafffffffffffaafffffffffffaaf
        .....bbbbbffffff77fa3fffffffffff33fffffffffff33f
        .................7a33a........7a33a........7a33a
        .................a33a.........a33a.........a33a.
        .................a3a..........a3a..........a3a..
        ..................a............a............a...
        ................................................
        ................................................
        `, SpriteKind.spikeofdeath)
    spike_of_death.setPosition(11, 12)
    spike_of_death.follow(mySprite2, 30)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.bossshark, function (sprite, otherSprite) {
    statusbars.getStatusBarAttachedTo(StatusBarKind.Health, mySprite2).value += -1
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.coin, function (sprite, otherSprite) {
    sprites.destroyAllSpritesOfKind(SpriteKind.coin)
    mySprite4 = sprites.create(img`
        4 4 4 5 5 4 4 4 4 4 4 4 4 4 4 4 
        4 4 4 4 4 5 5 2 2 2 2 2 2 2 2 2 
        4 4 2 5 5 5 2 2 2 2 2 2 2 2 2 4 
        4 4 4 5 2 2 5 5 5 5 5 5 5 4 4 4 
        5 5 5 f f f 2 2 2 f f f 4 5 5 5 
        4 4 4 f 4 f 5 5 5 f 2 f f 2 5 2 
        4 4 4 f f f 4 4 4 f 4 4 f 4 4 4 
        4 4 4 4 f 4 4 5 4 f f f f 5 2 4 
        4 2 2 5 5 4 4 4 4 5 5 5 5 5 4 4 
        4 5 4 4 5 5 5 5 5 5 5 5 4 2 2 4 
        2 2 4 4 4 4 4 4 2 2 4 2 f 4 4 2 
        5 4 f 4 4 5 4 4 4 4 4 4 f 2 4 4 
        2 2 f 4 4 4 4 4 5 5 5 f f 5 5 4 
        5 5 f f 4 2 2 5 2 2 f f 4 4 4 4 
        2 4 4 f f 4 f f f f f 4 4 4 4 4 
        2 2 2 2 2 2 2 2 2 4 4 4 4 4 4 4 
        `, SpriteKind.Enemy)
    house = sprites.create(img`
        ....................e2e22e2e....................
        .................222eee22e2e222.................
        ..............222e22e2e22eee22e222..............
        ...........e22e22eeee2e22e2eeee22e22e...........
        ........eeee22e22e22e2e22e2e22e22e22eeee........
        .....222e22e22eeee22e2e22e2e22eeee22e22e222.....
        ...22eeee22e22e22e22eee22eee22e22e22e22eeee22...
        4cc22e22e22eeee22e22e2e22e2e22e22eeee22e22e22cc4
        6c6eee22e22e22e22e22e2e22e2e22e22e22e22e22eee6c6
        46622e22eeee22e22eeee2e22e2eeee22e22eeee22e22664
        46622e22e22e22eeee22e2e22e2e22eeee22e22e22e22664
        4cc22eeee22e22e22e22eee22eee22e22e22e22eeee22cc4
        6c622e22e22eeee22e22e2e22e2e22e22eeee22e22e226c6
        466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
        46622e22eeee22e22e22e2e22e2e22e22e22eeee22e22664
        4cc22e22e22e22e22eeee2e22e2eeee22e22e22e22e22cc4
        6c622eeee22e22eeee22eee22eee22eeee22e22eeee226c6
        46622e22e22eeee22e22e2e22e2e22e22eeee22e22e22664
        466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
        4cc22e22eeee22e22e22e2e22e2e22e22e22eeee22e22cc4
        6c622e22e22e22e22e22eee22eee22e22e22e22e22e226c6
        46622eeee22e22e22eeecc6666cceee22e22e22eeee22664
        46622e22e22e22eeecc6666666666cceee22e22e22e22664
        4cceee22e22eeecc66666cccccc66666cceee22e22eeecc4
        6c622e22eeecc66666cc64444446cc66666cceee22e226c6
        46622e22cc66666cc64444444444446cc66666cc22e22664
        46622cc6666ccc64444444444444444446ccc6666cc22664
        4ccc6666ccc6444bcc666666666666ccb4446ccc6666ccc4
        cccccccc6666666cb44444444444444bc6666666cccccccc
        64444444444446c444444444444444444c64444444444446
        66cb444444444cb411111111111111114bc444444444bc66
        666cccccccccccd166666666666666661dccccccccccc666
        6666444444444c116eeeeeeeeeeeeee611c4444444446666
        666e2222222e4c16e4e44e44e44e44ee61c4e2222222e666
        666eeeeeeeee4c16e4e44e44e44e44ee61c4eeeeeeeee666
        666eddddddde4c66f4e4effffffe44ee66c4eddddddde666
        666edffdffde4c66f4effffffffff4ee66c4edffdffde666
        666edccdccde4c66f4effffffffffeee66c4edccdccde666
        666eddddddde4c66f4eeeeeeeeeeeeee66c4eddddddde666
        c66edffdffde4c66e4e44e44e44e44ee66c4edffdffde66c
        c66edccdccde4c66e4e44e44e44e44ee66c4edccdccde66c
        cc66666666664c66e4e44e44e44feeee66c46666666666cc
        .c66444444444c66e4e44e44e44ffffe66c44444444466c.
        ..c64eee4eee4c66f4e44e44e44f44fe66c4eee4eee46c..
        ...c4eee4eee4c66f4e44e44e44effee66c4eee4eee4c...
        ....644444444c66f4e44e44e44e44ee66c444444446....
        .....64eee444c66f4e44e44e44e44ee66c444eee46.....
        ......6ccc666c66e4e44e44e44e44ee66c666ccc6......
        `, SpriteKind.house)
    house.setPosition(75, 16)
    mySprite2.setPosition(76, 70)
    mySprite4.setPosition(133, 97)
    mySprite4.sayText("je suis de la lave")
    mySprite6.setPosition(4, 6)
    tiles.setCurrentTilemap(tilemap`map`)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (droite == true) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f d d . . . . 
            2 2 2 2 2 1 1 1 1 1 1 1 f . . . 
            . . . . . . f f f f d d . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite2, 350, 0)
        if (hassword) {
            animation.runImageAnimation(
            mySprite2,
            [img`
                .......................
                ...ffffff..............
                .fffffffff.............
                .fffffff22f............
                ffffcffff22f...........
                fcffccffff22f..........
                fccffff22ffff..........
                ffffffff22f2...........
                ffeefbfff2ff.111112....
                ffe4e1fffff.1111ff2....
                .fffe4ff2f...111112....
                .444eeef2f...111.......
                .e44e77f22...111.......
                .feef66ff2f..111.......
                .ffffffffff............
                ..ff...fff.............
                .......................
                .......................
                .......................
                .......................
                .......................
                .......................
                .......................
                `,img`
                .......................
                ...ffffff..............
                .fffffffff.............
                .ffffffffff............
                ffffcff2fff2...........
                fcffccf22ff22..........
                fccfffff2fff2..........
                fffffffff2f2...........
                ffeefbff2ff............
                .fe4e1ff2ff..11112.....
                .fffeeff2f..111ff2.....
                ..fe44ffff...11112.....
                ..fe44f2ff...11........
                .fffeef22ff..11........
                .ffffffffff..11........
                ..ff...fff.............
                .......................
                .......................
                .......................
                .......................
                .......................
                .......................
                .......................
                `,img`
                ...fffff...............
                .fffffffff.............
                .ffffff2222............
                ffffcfffff2............
                fcffccfffffff..........
                fccfffff2ff22..........
                ffffffff22ff...........
                ffeefbfff2f..111112....
                .fe4e1fff2..1111ff2....
                .fffe4fff2...111112....
                ..feeeefff...111112....
                ..e44e7f2f...111.......
                ..e44e7f22...111.......
                ..feef6ff2...111.......
                ...ffffff..............
                ....fff................
                .......................
                .......................
                .......................
                .......................
                .......................
                .......................
                .......................
                `],
            1000,
            false
            )
        } else {
            animation.runImageAnimation(
            mySprite2,
            [img`
                .......................
                ...ffffff..............
                .fffffffff.............
                .ffffffcfff............
                ffffcfffcfff...........
                fcffccfffccff..........
                fccffffefffff..........
                fffffffeefff...........
                ffeefbfeefff.111112....
                ffe4e1f44ff.1111ff2....
                .fffe4444f...111112....
                .444eeeeff...111.......
                .e44e7777f...111.......
                .feef6666ff..111.......
                .ffffffffff............
                ..ff...fff.............
                .......................
                .......................
                .......................
                .......................
                .......................
                .......................
                .......................
                `,img`
                .......................
                ...ffffff..............
                .fffffffff.............
                .ffffffcfff............
                ffffcfffcfff...........
                fcffccfffccff..........
                fccffffefffff..........
                fffffffeefff...........
                ffeefbfeeff............
                .fe4e1f44ff..11112.....
                .fffee444f..111ff2.....
                ..fe44eeff...11112.....
                ..fe44e77f...11........
                .fffeef66ff..11........
                .ffffffffff..11........
                ..ff...fff.............
                .......................
                .......................
                .......................
                .......................
                .......................
                .......................
                .......................
                `,img`
                ...fffff...............
                .fffffffff.............
                .ffffffcfff............
                ffffcfffcff............
                fcffccfffccff..........
                fccffffefffff..........
                fffffffeefff...........
                ffeefbfeeff..111112....
                .fe4e1f44f..1111ff2....
                .fffe4444f...111112....
                ..feeeeeff...111112....
                ..e44e777f...111.......
                ..e44e777f...111.......
                ..feef666f...111.......
                ...ffffff..............
                ....fff................
                .......................
                .......................
                .......................
                .......................
                .......................
                .......................
                .......................
                `],
            1000,
            false
            )
        }
        music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.UntilDone)
    } else if (droite == false) {
        if (hassword) {
            animation.runImageAnimation(
            mySprite2,
            [img`
                .....fffff.............
                ...fffffffff...........
                ..fffcffffff...........
                ..ffffffcffff..........
                fffffffccffcf..........
                fffffeffffccf..........
                .f2feefffffff..........
                ..222efbfeeff..........
                2112f4f1e4ef...........
                2ff1ff44efff...........
                2111ffeeeef............
                ..11f77e44e............
                ...2ff7e44e............
                ...2f66feef............
                ....ffffff.............
                ......fff..............
                .......................
                .......................
                .......................
                .......................
                .......................
                .......................
                .......................
                `,img`
                .......................
                ....ffffff.............
                ...fffffffff...........
                ..fffcffffff...........
                .fffcfffcffff..........
                f22ffffccffcf..........
                f22ffeffffccf..........
                .fffeefffffff..........
                ..2ffefbfeeff..........
                ..2ff4f1e4ef...........
                2111f44eefff...........
                21112fe44ef............
                2111ffe44ef............
                ..f1f6feefff...........
                ..ffffffffff...........
                ...fff...ff............
                .......................
                .......................
                .......................
                .......................
                .......................
                .......................
                .......................
                `,img`
                .......................
                ....ffffff.............
                ...fffffffff...........
                ..fffcffffff...........
                .fffcfffcffff..........
                fffffffccffcf..........
                fffffeffffccf..........
                .fffeefffffff..........
                .f22eefbfeeff..........
                ..fff4f1e4eff..........
                211f2444efff...........
                211f2feee444...........
                211f22f7e44e...........
                211ffff6feef...........
                ..1fffffffff...........
                ...fff...ff............
                .......................
                .......................
                .......................
                .......................
                .......................
                .......................
                .......................
                `],
            1000,
            false
            )
        } else {
            animation.runImageAnimation(
            mySprite2,
            [img`
                .....fffff.............
                ...fffffffff...........
                ..fffcffffff...........
                ..ffcfffcffff..........
                ffccfffccffcf..........
                fffffeffffccf..........
                .fffeefffffff..........
                ..ffeefbfeeff..........
                211144f1e4ef...........
                2ff14444efff...........
                2111feeeeef............
                ..11777e44e............
                ...f777e44e............
                ...f666feef............
                ....ffffff.............
                ......fff..............
                .......................
                .......................
                .......................
                .......................
                .......................
                .......................
                .......................
                `,img`
                .......................
                ....ffffff.............
                ...fffffffff...........
                ..fffcffffff...........
                .fffcfffcffff..........
                ffccfffccffcf..........
                fffffeffffccf..........
                .fffeefffffff..........
                ..ffeefbfeeff..........
                ..ff44f1e4ef...........
                2111444eefff...........
                2111fee44ef............
                211177e44ef............
                ..f166feefff...........
                ..ffffffffff...........
                ...fff...ff............
                .......................
                .......................
                .......................
                .......................
                .......................
                .......................
                .......................
                `,img`
                .......................
                ....ffffff.............
                ...fffffffff...........
                ..fffcffffff...........
                .fffcfffcffff..........
                ffccfffccffcf..........
                fffffeffffccf..........
                .fffeefffffff..........
                .fffeefbfeeff..........
                ..ff44f1e4eff..........
                211f4444efff...........
                211ffeeee444...........
                211f7777e44e...........
                211f6666feef...........
                ..1fffffffff...........
                ...fff...ff............
                .......................
                .......................
                .......................
                .......................
                .......................
                .......................
                .......................
                `],
            1000,
            false
            )
        }
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . d d f f f f . . . . . . 
            . . . f 1 1 1 1 1 1 1 2 2 2 2 2 
            . . . . d d f f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite2, -350, 0)
        music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.UntilDone)
    }
})
statusbars.onZero(StatusBarKind.ghostkingbar, function (status) {
    if (hassword == true) {
        deafeated_ghostking_and_got_the_sword = true
        has_killed_boss_king = true
    } else if (hassword == false) {
        has_killed_boss_king = true
    }
    music.stopAllSounds()
    sprites.destroyAllSpritesOfKind(SpriteKind.spikeofdeath, effects.fire, 500)
    sprites.destroy(ghost_king)
    game.splash("toi:c'etait du gateau")
    game.splash("toi:skill issue")
    game.splash("???: tu veux tu les info si t'arette pas je vais mourrire sans avoir la chance de te les dire et le jeu sera fini")
    game.splash("toi:azy depeche toi ")
    if (hassword) {
        game.splash("???:je vois que tu a deja fait la première etape pour tuer Rowser qui etait de trouver l'épé legendaire de samurai")
        game.splash("toi:cool ducoup c'est quoi la deuxieme etape?")
    } else {
        game.splash("???:dacord premierment pour le tuer tu doit trouver une épé dans un trou au millieu de la map pour y acceder suis un chemin de fleur l'un d'entre eux conduira au trou")
        game.splash("toi:ok ensuite")
    }
    game.splash("???:après va dans le sou sol de ta maison Rowser sera la")
    game.splash("toi:c'est tout?")
    game.splash("???:''meurt''")
    game.splash("toi:j'espairre que tu m'a pas menti.")
    sprites.destroyAllSpritesOfKind(SpriteKind.coin)
    mySprite4 = sprites.create(img`
        4 4 4 5 5 4 4 4 4 4 4 4 4 4 4 4 
        4 4 4 4 4 5 5 2 2 2 2 2 2 2 2 2 
        4 4 2 5 5 5 2 2 2 2 2 2 2 2 2 4 
        4 4 4 5 2 2 5 5 5 5 5 5 5 4 4 4 
        5 5 5 f f f 2 2 2 f f f 4 5 5 5 
        4 4 4 f 4 f 5 5 5 f 2 f f 2 5 2 
        4 4 4 f f f 4 4 4 f 4 4 f 4 4 4 
        4 4 4 4 f 4 4 5 4 f f f f 5 2 4 
        4 2 2 5 5 4 4 4 4 5 5 5 5 5 4 4 
        4 5 4 4 5 5 5 5 5 5 5 5 4 2 2 4 
        2 2 4 4 4 4 4 4 2 2 4 2 f 4 4 2 
        5 4 f 4 4 5 4 4 4 4 4 4 f 2 4 4 
        2 2 f 4 4 4 4 4 5 5 5 f f 5 5 4 
        5 5 f f 4 2 2 5 2 2 f f 4 4 4 4 
        2 4 4 f f 4 f f f f f 4 4 4 4 4 
        2 2 2 2 2 2 2 2 2 4 4 4 4 4 4 4 
        `, SpriteKind.Enemy)
    mySprite3.setPosition(1789, 789)
    house = sprites.create(img`
        ....................e2e22e2e....................
        .................222eee22e2e222.................
        ..............222e22e2e22eee22e222..............
        ...........e22e22eeee2e22e2eeee22e22e...........
        ........eeee22e22e22e2e22e2e22e22e22eeee........
        .....222e22e22eeee22e2e22e2e22eeee22e22e222.....
        ...22eeee22e22e22e22eee22eee22e22e22e22eeee22...
        4cc22e22e22eeee22e22e2e22e2e22e22eeee22e22e22cc4
        6c6eee22e22e22e22e22e2e22e2e22e22e22e22e22eee6c6
        46622e22eeee22e22eeee2e22e2eeee22e22eeee22e22664
        46622e22e22e22eeee22e2e22e2e22eeee22e22e22e22664
        4cc22eeee22e22e22e22eee22eee22e22e22e22eeee22cc4
        6c622e22e22eeee22e22e2e22e2e22e22eeee22e22e226c6
        466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
        46622e22eeee22e22e22e2e22e2e22e22e22eeee22e22664
        4cc22e22e22e22e22eeee2e22e2eeee22e22e22e22e22cc4
        6c622eeee22e22eeee22eee22eee22eeee22e22eeee226c6
        46622e22e22eeee22e22e2e22e2e22e22eeee22e22e22664
        466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
        4cc22e22eeee22e22e22e2e22e2e22e22e22eeee22e22cc4
        6c622e22e22e22e22e22eee22eee22e22e22e22e22e226c6
        46622eeee22e22e22eeecc6666cceee22e22e22eeee22664
        46622e22e22e22eeecc6666666666cceee22e22e22e22664
        4cceee22e22eeecc66666cccccc66666cceee22e22eeecc4
        6c622e22eeecc66666cc64444446cc66666cceee22e226c6
        46622e22cc66666cc64444444444446cc66666cc22e22664
        46622cc6666ccc64444444444444444446ccc6666cc22664
        4ccc6666ccc6444bcc666666666666ccb4446ccc6666ccc4
        cccccccc6666666cb44444444444444bc6666666cccccccc
        64444444444446c444444444444444444c64444444444446
        66cb444444444cb411111111111111114bc444444444bc66
        666cccccccccccd166666666666666661dccccccccccc666
        6666444444444c116eeeeeeeeeeeeee611c4444444446666
        666e2222222e4c16e4e44e44e44e44ee61c4e2222222e666
        666eeeeeeeee4c16e4e44e44e44e44ee61c4eeeeeeeee666
        666eddddddde4c66f4e4effffffe44ee66c4eddddddde666
        666edffdffde4c66f4effffffffff4ee66c4edffdffde666
        666edccdccde4c66f4effffffffffeee66c4edccdccde666
        666eddddddde4c66f4eeeeeeeeeeeeee66c4eddddddde666
        c66edffdffde4c66e4e44e44e44e44ee66c4edffdffde66c
        c66edccdccde4c66e4e44e44e44e44ee66c4edccdccde66c
        cc66666666664c66e4e44e44e44feeee66c46666666666cc
        .c66444444444c66e4e44e44e44ffffe66c44444444466c.
        ..c64eee4eee4c66f4e44e44e44f44fe66c4eee4eee46c..
        ...c4eee4eee4c66f4e44e44e44effee66c4eee4eee4c...
        ....644444444c66f4e44e44e44e44ee66c444444446....
        .....64eee444c66f4e44e44e44e44ee66c444eee46.....
        ......6ccc666c66e4e44e44e44e44ee66c666ccc6......
        `, SpriteKind.house)
    house.setPosition(75, 16)
    mySprite2.setPosition(76, 70)
    mySprite4.setPosition(133, 97)
    mySprite4.sayText("me lava")
    mySprite6.setPosition(4, 6)
    mySprite3.follow(mySprite2)
    tiles.setCurrentTilemap(tilemap`map`)
})
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    if (hassword) {
        animation.runImageAnimation(
        mySprite2,
        [img`
            . . . . f f f f . . . . . 
            . . f f f f f f f f . . . 
            . f f f f f f 2 f f f . . 
            f f f f f f 2 2 f f f c . 
            f f 2 2 f f f f f f f c . 
            2 2 2 f f f 2 f f f c c . 
            f f f f 2 2 f f c c c f . 
            f f f 2 f f e f b f f f . 
            . f f 2 f f 4 f 1 4 f . . 
            . f f 2 f f 4 4 4 e f . . 
            . f 2 2 f e e e f f f . . 
            f f f f f 7 7 7 b f e f . 
            e f f f 7 7 7 7 7 f 4 e . 
            e e f 6 6 6 6 6 6 f e e . 
            . . . f f f f f f . . . . 
            . . . f f . . f f . . . . 
            `],
        100,
        true
        )
    } else {
        animation.runImageAnimation(
        mySprite2,
        [img`
            . . . . f f f f . . . . . 
            . . f f f f f f f f . . . 
            . f f f f f f c f f f . . 
            f f f f f f c c f f f c . 
            f f f c f f f f f f f c . 
            c c c f f f e e f f c c . 
            f f f f f e e f f c c f . 
            f f f b f e e f b f f f . 
            . f 4 1 f 4 4 f 1 4 f . . 
            . f e 4 4 4 4 4 4 e f . . 
            . f f f e e e e f f f . . 
            f e f b 7 7 7 7 b f e f . 
            e 4 f 7 7 7 7 7 7 f 4 e . 
            e e f 6 6 6 6 6 6 f e e . 
            . . . f f f f f f . . . . 
            . . . f f . . f f . . . . 
            `],
        100,
        true
        )
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (hassword) {
        animation.runImageAnimation(
        mySprite2,
        [img`
            . . . . . . . . . . . . . 
            . . . f f f f f f . . . . 
            . f f f f f f f f f . . . 
            . f f f f f f 2 f f f . . 
            f f f f c f f 2 f f f f . 
            f c f f c c f f 2 f 2 f f 
            f c c f f f f f f f f f f 
            f f f f f f f f f f 2 f . 
            f f e e f b f f f 2 f f . 
            f f e 4 e 1 f 2 f f f . . 
            . f f f e 4 f 2 2 f . . . 
            . 4 4 4 e e f f 2 f . . . 
            . e 4 f e 7 f f 2 f . . . 
            . f 2 f f 6 6 f 2 2 f . . 
            . f f 2 f f f f f 2 f . . 
            . . f f . . . f f f . . . 
            `,img`
            . . . . . . . . . . . . . 
            . . . f f f f f 2 . . . . 
            . f f f f f f f f f . . . 
            . f f f f f f 2 f f f . . 
            f f f f c f f f 2 f f f . 
            f c f f c c f f f 2 2 f f 
            f c c f f f f f f f f f f 
            f f f f f f f f f 2 f f . 
            f f e e f b f f f 2 2 . . 
            . f e 4 e 1 f f f f f . . 
            . f f f e e f 2 f f . . . 
            . . f e f f f 2 2 f . . . 
            . . f e 2 2 2 f 2 2 . . . 
            . f f f f e f 6 f 2 f . . 
            . f f f f f f f f f f . . 
            . . f f . . . f f f . . . 
            `,img`
            . . . f f f f f . . . . . 
            . f f f f f f f f f . . . 
            . f f f f f f 2 2 f f . . 
            f f f f c f f f 2 2 f . . 
            f c f f c c f f f f f f f 
            f c c f f f f f f f f f f 
            f f f f f f f f f 2 2 2 . 
            f f e e f b f f f f 2 . . 
            . f e 4 e 1 f 2 2 f . . . 
            . f f f e 4 f 2 2 2 . . . 
            . . f e e e e f f f . . . 
            . . e 4 f f 7 f 2 f . . . 
            . . e 4 2 f 7 f 2 f . . . 
            . . f 2 2 f 6 f 2 f . . . 
            . . . f f f f 2 f . . . . 
            . . . . f f f . . . . . . 
            `],
        100,
        true
        )
        droite = true
    } else {
        animation.runImageAnimation(
        mySprite2,
        [img`
            . . . . . . . . . . . . . 
            . . . f f f f f f . . . . 
            . f f f f f f f f f . . . 
            . f f f f f f c f f f . . 
            f f f f c f f f c f f f . 
            f c f f c c f f f c c f f 
            f c c f f f f e f f f f f 
            f f f f f f f e e f f f . 
            f f e e f b f e e f f f . 
            f f e 4 e 1 f 4 4 f f . . 
            . f f f e 4 4 4 4 f . . . 
            . 4 4 4 e e e e f f . . . 
            . e 4 4 e 7 7 7 7 f . . . 
            . f e e f 6 6 6 6 f f . . 
            . f f f f f f f f f f . . 
            . . f f . . . f f f . . . 
            `,img`
            . . . . . . . . . . . . . 
            . . . f f f f f f . . . . 
            . f f f f f f f f f . . . 
            . f f f f f f c f f f . . 
            f f f f c f f f c f f f . 
            f c f f c c f f f c c f f 
            f c c f f f f e f f f f f 
            f f f f f f f e e f f f . 
            f f e e f b f e e f f . . 
            . f e 4 e 1 f 4 4 f f . . 
            . f f f e e 4 4 4 f . . . 
            . . f e 4 4 e e f f . . . 
            . . f e 4 4 e 7 7 f . . . 
            . f f f e e f 6 6 f f . . 
            . f f f f f f f f f f . . 
            . . f f . . . f f f . . . 
            `,img`
            . . . f f f f f . . . . . 
            . f f f f f f f f f . . . 
            . f f f f f f c f f f . . 
            f f f f c f f f c f f . . 
            f c f f c c f f f c c f f 
            f c c f f f f e f f f f f 
            f f f f f f f e e f f f . 
            f f e e f b f e e f f . . 
            . f e 4 e 1 f 4 4 f . . . 
            . f f f e 4 4 4 4 f . . . 
            . . f e e e e e f f . . . 
            . . e 4 4 e 7 7 7 f . . . 
            . . e 4 4 e 7 7 7 f . . . 
            . . f e e f 6 6 6 f . . . 
            . . . f f f f f f . . . . 
            . . . . f f f . . . . . . 
            `],
        100,
        true
        )
        droite = true
    }
})
statusbars.onStatusReached(StatusBarKind.bossbar, statusbars.StatusComparison.EQ, statusbars.ComparisonType.Percentage, 0, function (status) {
    sprites.destroy(fireball)
    music.stopAllSounds()
    music.play(music.melodyPlayable(music.knock), music.PlaybackMode.UntilDone)
    sprites.destroy(boss_bar.spriteAttachedTo(), effects.ashes, 2000)
    story.startCutscene(function () {
        dialogue = true
        scene.followPath(mySprite2, scene.aStar(tiles.locationOfSprite(mySprite2), tiles.locationOfSprite(mySprite)), 100)
        pause(2000)
        game.splash("toi:maman tu va bien?")
        game.splash("maman:oui ça va")
        game.splash("toi:ducoup on peux avoir du pfk a soir")
        game.splash("maman:non")
        game.gameOver(true)
    })
})
function levelreset () {
    sprites.destroyAllSpritesOfKind(SpriteKind.house)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    sprites.destroyAllSpritesOfKind(SpriteKind.npc)
    sprites.destroy(mySprite4)
}
statusbars.onZero(StatusBarKind.sharkbossbar, function (status) {
    music.stopAllSounds()
    haskilledbossshark = true
    sprites.destroyAllSpritesOfKind(SpriteKind.bossshark, effects.disintegrate, 500)
    sprites.destroyAllSpritesOfKind(SpriteKind.babyshark, effects.disintegrate, 500)
    status_bar_healt.value += 90
    game.splash("toi:bon voyons voir ce qui est écris sur sa carcasse")
    game.splash("''bravo Pablo tu a tué mon serviteur le plus faible maintenant pour savoir où je suis va dans le château en bas à gauche et tue mon deuxieme serviteur")
    sprites.destroyAllSpritesOfKind(SpriteKind.coin)
    mySprite4 = sprites.create(img`
        4 4 4 5 5 4 4 4 4 4 4 4 4 4 4 4 
        4 4 4 4 4 5 5 2 2 2 2 2 2 2 2 2 
        4 4 2 5 5 5 2 2 2 2 2 2 2 2 2 4 
        4 4 4 5 2 2 5 5 5 5 5 5 5 4 4 4 
        5 5 5 f f f 2 2 2 f f f 4 5 5 5 
        4 4 4 f 4 f 5 5 5 f 2 f f 2 5 2 
        4 4 4 f f f 4 4 4 f 4 4 f 4 4 4 
        4 4 4 4 f 4 4 5 4 f f f f 5 2 4 
        4 2 2 5 5 4 4 4 4 5 5 5 5 5 4 4 
        4 5 4 4 5 5 5 5 5 5 5 5 4 2 2 4 
        2 2 4 4 4 4 4 4 2 2 4 2 f 4 4 2 
        5 4 f 4 4 5 4 4 4 4 4 4 f 2 4 4 
        2 2 f 4 4 4 4 4 5 5 5 f f 5 5 4 
        5 5 f f 4 2 2 5 2 2 f f 4 4 4 4 
        2 4 4 f f 4 f f f f f 4 4 4 4 4 
        2 2 2 2 2 2 2 2 2 4 4 4 4 4 4 4 
        `, SpriteKind.Enemy)
    mySprite3.setPosition(1789, 789)
    house = sprites.create(img`
        ....................e2e22e2e....................
        .................222eee22e2e222.................
        ..............222e22e2e22eee22e222..............
        ...........e22e22eeee2e22e2eeee22e22e...........
        ........eeee22e22e22e2e22e2e22e22e22eeee........
        .....222e22e22eeee22e2e22e2e22eeee22e22e222.....
        ...22eeee22e22e22e22eee22eee22e22e22e22eeee22...
        4cc22e22e22eeee22e22e2e22e2e22e22eeee22e22e22cc4
        6c6eee22e22e22e22e22e2e22e2e22e22e22e22e22eee6c6
        46622e22eeee22e22eeee2e22e2eeee22e22eeee22e22664
        46622e22e22e22eeee22e2e22e2e22eeee22e22e22e22664
        4cc22eeee22e22e22e22eee22eee22e22e22e22eeee22cc4
        6c622e22e22eeee22e22e2e22e2e22e22eeee22e22e226c6
        466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
        46622e22eeee22e22e22e2e22e2e22e22e22eeee22e22664
        4cc22e22e22e22e22eeee2e22e2eeee22e22e22e22e22cc4
        6c622eeee22e22eeee22eee22eee22eeee22e22eeee226c6
        46622e22e22eeee22e22e2e22e2e22e22eeee22e22e22664
        466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
        4cc22e22eeee22e22e22e2e22e2e22e22e22eeee22e22cc4
        6c622e22e22e22e22e22eee22eee22e22e22e22e22e226c6
        46622eeee22e22e22eeecc6666cceee22e22e22eeee22664
        46622e22e22e22eeecc6666666666cceee22e22e22e22664
        4cceee22e22eeecc66666cccccc66666cceee22e22eeecc4
        6c622e22eeecc66666cc64444446cc66666cceee22e226c6
        46622e22cc66666cc64444444444446cc66666cc22e22664
        46622cc6666ccc64444444444444444446ccc6666cc22664
        4ccc6666ccc6444bcc666666666666ccb4446ccc6666ccc4
        cccccccc6666666cb44444444444444bc6666666cccccccc
        64444444444446c444444444444444444c64444444444446
        66cb444444444cb411111111111111114bc444444444bc66
        666cccccccccccd166666666666666661dccccccccccc666
        6666444444444c116eeeeeeeeeeeeee611c4444444446666
        666e2222222e4c16e4e44e44e44e44ee61c4e2222222e666
        666eeeeeeeee4c16e4e44e44e44e44ee61c4eeeeeeeee666
        666eddddddde4c66f4e4effffffe44ee66c4eddddddde666
        666edffdffde4c66f4effffffffff4ee66c4edffdffde666
        666edccdccde4c66f4effffffffffeee66c4edccdccde666
        666eddddddde4c66f4eeeeeeeeeeeeee66c4eddddddde666
        c66edffdffde4c66e4e44e44e44e44ee66c4edffdffde66c
        c66edccdccde4c66e4e44e44e44e44ee66c4edccdccde66c
        cc66666666664c66e4e44e44e44feeee66c46666666666cc
        .c66444444444c66e4e44e44e44ffffe66c44444444466c.
        ..c64eee4eee4c66f4e44e44e44f44fe66c4eee4eee46c..
        ...c4eee4eee4c66f4e44e44e44effee66c4eee4eee4c...
        ....644444444c66f4e44e44e44e44ee66c444444446....
        .....64eee444c66f4e44e44e44e44ee66c444eee46.....
        ......6ccc666c66e4e44e44e44e44ee66c666ccc6......
        `, SpriteKind.house)
    house.setPosition(75, 16)
    mySprite2.setPosition(76, 70)
    mySprite4.setPosition(133, 97)
    mySprite4.sayText("me lava")
    mySprite6.setPosition(4, 6)
    tiles.setCurrentTilemap(tilemap`map`)
    enemy_bar = statusbars.create(20, 4, StatusBarKind.EnemyHealth)
    enemy_bar.attachToSprite(mySprite3, 10, 4)
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    if (hassword) {
        animation.runImageAnimation(
        mySprite2,
        [img`
            . . . . . f f f f f . . . 
            . . . f f f f f f f f f . 
            . . f f f c f f f f f f . 
            . . f f c f f f c f f f f 
            f f c c f f f c c f f c f 
            f f f f f e f f f f c c f 
            . f f f e e f f f f f f f 
            . . f f e e f b f e e f f 
            . . . f 4 4 f 1 e 4 e f . 
            . . . f 4 4 4 4 e f f f . 
            . . . f f e e e e e f . . 
            . . . f 7 7 7 e 4 4 e . . 
            . . . f 7 7 7 e 4 4 e . . 
            . . . f 6 6 6 f e e f . . 
            . . . . f f f f f f . . . 
            . . . . . . f f f . . . . 
            `],
        100,
        true
        )
    } else {
        animation.runImageAnimation(
        mySprite2,
        [img`
            . . . . . f f f f f . . . 
            . . . f f f f f f f f f . 
            . . f f f c f f f f f f . 
            . . f f c f f f c f f f f 
            f f c c f f f c c f f c f 
            f f f f f e f f f f c c f 
            . f f f e e f f f f f f f 
            . . f f e e f b f e e f f 
            . . . f 4 4 f 1 e 4 e f . 
            . . . f 4 4 4 4 e f f f . 
            . . . f f e e e e e f . . 
            . . . f 7 7 7 e 4 4 e . . 
            . . . f 7 7 7 e 4 4 e . . 
            . . . f 6 6 6 f e e f . . 
            . . . . f f f f f f . . . 
            . . . . . . f f f . . . . 
            `],
        100,
        true
        )
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.boss, function (sprite, otherSprite) {
    boss_bar.value += -5
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.fireball, function (sprite, otherSprite) {
    status_bar_healt.value += -90
    sprites.destroy(otherSprite)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile10`, function (sprite, location) {
    if (haskilledbossshark == true) {
        tiles.setCurrentTilemap(tilemap`niveau20`)
        levelreset()
        music.play(music.createSong(hex`0078000408020301001c000f05001202c102c201000405002800000064002800031400060200041e0000000400011910001400012020002400011e30003400011d3c004000011b04001c00100500640000041e000004000000000000000000000000000a040004440000000400011d04000800011e08000c00021b2210001400021b2214001800011b1c002000012228002c00012030003400011934003800012538003c00011d3c004000011909010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c8003700000001000103040005000105080009000103100011000202071400150001021c001d000108200021000105280029000105340035000109`), music.PlaybackMode.LoopingInBackground)
        mySprite2.setPosition(80, 101)
        ghost_king = sprites.create(img`
            .......a...22...a.......
            .......a...ff...a.......
            .......ff..ff..ff.......
            .......ff..ff..ff.......
            .......ffffffffff.......
            ........ffccccff........
            .......fbccbbccbf.......
            .......fc333333cf.......
            ......fcc3333333cf......
            ......fc33333333cf......
            ......fc33333333cf......
            ......fc33f33f33cf......
            ......fcbcf33fcbcf......
            .......fb333333bf.......
            ......fffc3b3b3ffff.....
            ....fccc3cbfbfccc3cf....
            ....fcc3b3ffffcc3b3f....
            ....fbfbffffffbfbfbf....
            .........ffffff.........
            ...........fff..........
            ........................
            ........................
            ........................
            ........................
            `, SpriteKind.ghost_king)
        ghost_king.setPosition(85, 14)
        ghostkingbar = statusbars.create(20, 4, StatusBarKind.ghostkingbar)
        ghostkingbar.attachToSprite(ghost_king)
        ghostkingbar.max = 1500
        ghostkingbar.value += 1500
        ghostkingbar.setColor(12, 15)
        ghost_king.follow(mySprite2, 60)
    } else if (haskilledbossshark == false) {
        game.splash("you need to  defeat the shark king first")
        house = sprites.create(img`
            ....................e2e22e2e....................
            .................222eee22e2e222.................
            ..............222e22e2e22eee22e222..............
            ...........e22e22eeee2e22e2eeee22e22e...........
            ........eeee22e22e22e2e22e2e22e22e22eeee........
            .....222e22e22eeee22e2e22e2e22eeee22e22e222.....
            ...22eeee22e22e22e22eee22eee22e22e22e22eeee22...
            4cc22e22e22eeee22e22e2e22e2e22e22eeee22e22e22cc4
            6c6eee22e22e22e22e22e2e22e2e22e22e22e22e22eee6c6
            46622e22eeee22e22eeee2e22e2eeee22e22eeee22e22664
            46622e22e22e22eeee22e2e22e2e22eeee22e22e22e22664
            4cc22eeee22e22e22e22eee22eee22e22e22e22eeee22cc4
            6c622e22e22eeee22e22e2e22e2e22e22eeee22e22e226c6
            466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
            46622e22eeee22e22e22e2e22e2e22e22e22eeee22e22664
            4cc22e22e22e22e22eeee2e22e2eeee22e22e22e22e22cc4
            6c622eeee22e22eeee22eee22eee22eeee22e22eeee226c6
            46622e22e22eeee22e22e2e22e2e22e22eeee22e22e22664
            466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
            4cc22e22eeee22e22e22e2e22e2e22e22e22eeee22e22cc4
            6c622e22e22e22e22e22eee22eee22e22e22e22e22e226c6
            46622eeee22e22e22eeecc6666cceee22e22e22eeee22664
            46622e22e22e22eeecc6666666666cceee22e22e22e22664
            4cceee22e22eeecc66666cccccc66666cceee22e22eeecc4
            6c622e22eeecc66666cc64444446cc66666cceee22e226c6
            46622e22cc66666cc64444444444446cc66666cc22e22664
            46622cc6666ccc64444444444444444446ccc6666cc22664
            4ccc6666ccc6444bcc666666666666ccb4446ccc6666ccc4
            cccccccc6666666cb44444444444444bc6666666cccccccc
            64444444444446c444444444444444444c64444444444446
            66cb444444444cb411111111111111114bc444444444bc66
            666cccccccccccd166666666666666661dccccccccccc666
            6666444444444c116eeeeeeeeeeeeee611c4444444446666
            666e2222222e4c16e4e44e44e44e44ee61c4e2222222e666
            666eeeeeeeee4c16e4e44e44e44e44ee61c4eeeeeeeee666
            666eddddddde4c66f4e4effffffe44ee66c4eddddddde666
            666edffdffde4c66f4effffffffff4ee66c4edffdffde666
            666edccdccde4c66f4effffffffffeee66c4edccdccde666
            666eddddddde4c66f4eeeeeeeeeeeeee66c4eddddddde666
            c66edffdffde4c66e4e44e44e44e44ee66c4edffdffde66c
            c66edccdccde4c66e4e44e44e44e44ee66c4edccdccde66c
            cc66666666664c66e4e44e44e44feeee66c46666666666cc
            .c66444444444c66e4e44e44e44ffffe66c44444444466c.
            ..c64eee4eee4c66f4e44e44e44f44fe66c4eee4eee46c..
            ...c4eee4eee4c66f4e44e44e44effee66c4eee4eee4c...
            ....644444444c66f4e44e44e44e44ee66c444444446....
            .....64eee444c66f4e44e44e44e44ee66c444eee46.....
            ......6ccc666c66e4e44e44e44e44ee66c666ccc6......
            `, SpriteKind.house)
        house.setPosition(75, 16)
        mySprite2.setPosition(76, 70)
        mySprite4.setPosition(133, 97)
        mySprite4.sayText("je suis de la lave")
        mySprite6.setPosition(4, 6)
        tiles.setCurrentTilemap(tilemap`map`)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.spikeofdeath, function (sprite, otherSprite) {
    status_bar_healt.value += -75
    sprites.destroy(otherSprite, effects.fire, 500)
    ghost_king.follow(mySprite2, 50)
    animation.stopAnimation(animation.AnimationTypes.All, ghost_king)
    animation.runImageAnimation(
    ghost_king,
    [img`
        .......a...22...a.......
        .......a...22...a.......
        .......ff..ff..ff.......
        .......ff..ff..ff.......
        .......ffffffffff.......
        ........ff3333ff........
        .......fb333333bf.......
        .......f33333333f.......
        ......fb33333333bf......
        ......fb33333333bf......
        ......fbbb3333bbbf......
        ......fbbbfbbfbbbf......
        ......fcbcf33fcbcf......
        .......fb333333bf.......
        ......fffcbb3bbffff.....
        ....fc333cbfbfc333cf....
        ....f3b3b3ffff3b3b3f....
        ....fbfbffffffbfbfbf....
        .........ffffff.........
        ...........fff..........
        ........................
        ........................
        ........................
        ........................
        `],
    500,
    false
    )
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairLarge, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`niveau11`)
    mySprite2.setPosition(154, 116)
    sprites.destroy(mySprite5)
    mySprite3.setPosition(69, 18)
    mySprite3 = sprites.create(img`
        ......ffff..............
        ....fff22fff............
        ...fff2222fff...........
        ..fffeeeeeefff..........
        ..ffe222222eef..........
        ..fe2ffffff2ef..........
        ..ffffeeeeffff......ccc.
        .ffefbf44fbfeff....cddc.
        .ffefbf44fbfeff...cddc..
        .fee4dddddd4eef.ccddc...
        fdfeeddddd4eeffecddc....
        fbffee4444ee4fddccc.....
        fbf4f222222f1edde.......
        fcf.f222222f44ee........
        .ff.f445544f............
        ....ffffffff............
        .....ff..ff.............
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Enemy)
    enemy_bar = statusbars.create(20, 4, StatusBarKind.EnemyHealth)
    enemy_bar.attachToSprite(mySprite3, 10, 4)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (hassword) {
        animation.runImageAnimation(
        mySprite2,
        [img`
            . . . . . f f f f f . . . 
            . . . f f f f f f f f f . 
            . . f f f c f f f f f f . 
            . . f f c f f f c f f f f 
            f f f f f f f c c f f c f 
            f f f f f e f f f f c c f 
            . f f f e e f f f f f f f 
            . . f f e e f b f e e f f 
            . . . f 4 4 f 1 e 4 e f . 
            . . . f 4 4 4 4 e f f f . 
            . . . f f e e e e e f . . 
            . . . f 7 7 7 e 4 4 e . . 
            . . . f 7 7 7 e 4 4 e . . 
            . . . f 6 6 6 f e e f . . 
            . . . . f f f f f f . . . 
            . . . . . . f f f . . . . 
            `,img`
            . . . . . . . . . . . . . 
            . . . . f f f f f f . . . 
            . . . f f f f f f f f f . 
            . . f f f c f f f f f f . 
            . f f f f f f f c f f f f 
            f f f f f f f c c f f c f 
            f f f f f e f f f f c c f 
            . f f f e e f f f f f f f 
            . . f f e e f b f e e f f 
            . . f f 4 4 f 1 e 4 e f . 
            . . . f 4 4 4 e e f f f . 
            . . . f f e e 4 4 e f . . 
            . . . f 7 7 e 4 4 e f . . 
            . . f f 6 6 f e e f f f . 
            . . f f f f f f f f f f . 
            . . . f f f . . . f f . . 
            `,img`
            . . . . . . . . . . . . . 
            . . . . f f f f f f . . . 
            . . . f f f f f f f f f . 
            . . f f f f f f f f f f . 
            . f f f f f f f c f f f f 
            f f f f f f f c c f f c f 
            f f f f f e f f f f c c f 
            . f f f e e f f f f f f f 
            . f f f e e f b f e e f f 
            . . f f 4 4 f 1 e 4 e f f 
            . . . f 4 4 4 4 e f f f . 
            . . . f f e e e e 4 4 4 . 
            . . . f 7 7 7 7 e 4 4 e . 
            . . f f 6 6 6 6 f e e f . 
            . . f f f f f f f f f f . 
            . . . f f f . . . f f . . 
            `],
        100,
        true
        )
    } else {
        animation.runImageAnimation(
        mySprite2,
        [img`
            . . . . . f f f f f . . . 
            . . . f f f f f f f f f . 
            . . f f f c f f f f f f . 
            . . f f c f f f c f f f f 
            f f c c f f f c c f f c f 
            f f f f f e f f f f c c f 
            . f f f e e f f f f f f f 
            . . f f e e f b f e e f f 
            . . . f 4 4 f 1 e 4 e f . 
            . . . f 4 4 4 4 e f f f . 
            . . . f f e e e e e f . . 
            . . . f 7 7 7 e 4 4 e . . 
            . . . f 7 7 7 e 4 4 e . . 
            . . . f 6 6 6 f e e f . . 
            . . . . f f f f f f . . . 
            . . . . . . f f f . . . . 
            `,img`
            . . . . . . . . . . . . . 
            . . . . f f f f f f . . . 
            . . . f f f f f f f f f . 
            . . f f f c f f f f f f . 
            . f f f c f f f c f f f f 
            f f c c f f f c c f f c f 
            f f f f f e f f f f c c f 
            . f f f e e f f f f f f f 
            . . f f e e f b f e e f f 
            . . f f 4 4 f 1 e 4 e f . 
            . . . f 4 4 4 e e f f f . 
            . . . f f e e 4 4 e f . . 
            . . . f 7 7 e 4 4 e f . . 
            . . f f 6 6 f e e f f f . 
            . . f f f f f f f f f f . 
            . . . f f f . . . f f . . 
            `,img`
            . . . . . . . . . . . . . 
            . . . . f f f f f f . . . 
            . . . f f f f f f f f f . 
            . . f f f c f f f f f f . 
            . f f f c f f f c f f f f 
            f f c c f f f c c f f c f 
            f f f f f e f f f f c c f 
            . f f f e e f f f f f f f 
            . f f f e e f b f e e f f 
            . . f f 4 4 f 1 e 4 e f f 
            . . . f 4 4 4 4 e f f f . 
            . . . f f e e e e 4 4 4 . 
            . . . f 7 7 7 7 e 4 4 e . 
            . . f f 6 6 6 6 f e e f . 
            . . f f f f f f f f f f . 
            . . . f f f . . . f f . . 
            `],
        100,
        true
        )
    }
    droite = false
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.floorMixed, function (sprite, location) {
    status_bar_healt.value += 100
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    enemy_bar.value += -10
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    statusbars.getStatusBarAttachedTo(StatusBarKind.Health, mySprite2).value += -1
})
let haskilledbossshark = false
let projectile: Sprite = null
let ghost_king: Sprite = null
let spike_of_death: Sprite = null
let slash_2: Sprite = null
let slash: Sprite = null
let haut = false
let mySprite5: Sprite = null
let enemy_bar: StatusBarSprite = null
let mySprite3: Sprite = null
let has_killed_boss_king = false
let deafeated_ghostking_and_got_the_sword = false
let boss_bar: StatusBarSprite = null
let bosshere = false
let boss: Sprite = null
let fireball: Sprite = null
let babysharknumber3: Sprite = null
let babysharknumber2: Sprite = null
let babyshark: Sprite = null
let mySprite: Sprite = null
let ghostkingbar: StatusBarSprite = null
let boss_shark: Sprite = null
let boss_shark_bar: StatusBarSprite = null
let hassword = false
let droite = false
let dialogue = false
let status_bar_healt: StatusBarSprite = null
let mySprite6: Sprite = null
let house: Sprite = null
let mySprite4: Sprite = null
let mySprite2: Sprite = null
scene.setBackgroundColor(15)
game.setDialogTextColor(1)
game.setDialogFrame(img`
    111ffff111111f1111111111
    1ff1111f111111fffffffff1
    1f111111ffffffffffffff11
    1fffffffffffffffffffff11
    1fffffffffffff111111ff11
    1ffffffffffffffffffffff1
    1ffffffffffffffffffffff1
    1ffffffffffffffffffffff1
    1ffffffffffffffffffffff1
    1ffffffffffffffffffffff1
    11fffffffffffffffffffff1
    11fffffffffffffffffffff1
    11fffffffffffffffffffff1
    11fffffffffffffffffffff1
    11fffffffffffffffffffff1
    11ffffffffffffffffff1ff1
    11ffffffffffffffffff1ff1
    11ffffffffffffffffff1ff1
    11ffffffffffffffffff11f1
    1ffffffffffffffffffff1f1
    1ffffffffffffffffffff1f1
    1ff11ffffffffffffffff1f1
    1fff11111111111ffffffff1
    111111111111111111111111
    `)
game.showLongText("-    la vie de pablo", DialogLayout.Full)
tiles.setCurrentTilemap(tilemap`map`)
mySprite2 = sprites.create(img`
    . . . . f f f f . . . . . 
    . . f f f f f f f f . . . 
    . f f f f f f c f f f . . 
    f f f f f f c c f f f c . 
    f f f c f f f f f f f c . 
    c c c f f f e e f f c c . 
    f f f f f e e f f c c f . 
    f f f b f e e f b f f f . 
    . f 4 1 f 4 4 f 1 4 f . . 
    . f e 4 4 4 4 4 4 e f . . 
    . f f f e e e e f f f . . 
    f e f b 7 7 7 7 b f e f . 
    e 4 f 7 7 7 7 7 7 f 4 e . 
    e e f 6 6 6 6 6 6 f e e . 
    . . . f f f f f f . . . . 
    . . . f f . . f f . . . . 
    `, SpriteKind.Player)
game.setGameOverEffect(false, effects.melt)
game.setGameOverMessage(true, "La fin.")
mySprite4 = sprites.create(img`
    4 4 4 5 5 4 4 4 4 4 4 4 4 4 4 4 
    4 4 4 4 4 5 5 2 2 2 2 2 2 2 2 2 
    4 4 2 5 5 5 2 2 2 2 2 2 2 2 2 4 
    4 4 4 5 2 2 5 5 5 5 5 5 5 4 4 4 
    5 5 5 f f f 2 2 2 f f f 4 5 5 5 
    4 4 4 f 4 f 5 5 5 f 2 f f 2 5 2 
    4 4 4 f f f 4 4 4 f 4 4 f 4 4 4 
    4 4 4 4 f 4 4 5 4 f f f f 5 2 4 
    4 2 2 5 5 4 4 4 4 5 5 5 5 5 4 4 
    4 5 4 4 5 5 5 5 5 5 5 5 4 2 2 4 
    2 2 4 4 4 4 4 4 2 2 4 2 f 4 4 2 
    5 4 f 4 4 5 4 4 4 4 4 4 f 2 4 4 
    2 2 f 4 4 4 4 4 5 5 5 f f 5 5 4 
    5 5 f f 4 2 2 5 2 2 f f 4 4 4 4 
    2 4 4 f f 4 f f f f f 4 4 4 4 4 
    2 2 2 2 2 2 2 2 2 4 4 4 4 4 4 4 
    `, SpriteKind.Enemy)
game.setGameOverMessage(false, "essai encore")
game.setGameOverEffect(true, effects.none)
house = sprites.create(img`
    ....................e2e22e2e....................
    .................222eee22e2e222.................
    ..............222e22e2e22eee22e222..............
    ...........e22e22eeee2e22e2eeee22e22e...........
    ........eeee22e22e22e2e22e2e22e22e22eeee........
    .....222e22e22eeee22e2e22e2e22eeee22e22e222.....
    ...22eeee22e22e22e22eee22eee22e22e22e22eeee22...
    4cc22e22e22eeee22e22e2e22e2e22e22eeee22e22e22cc4
    6c6eee22e22e22e22e22e2e22e2e22e22e22e22e22eee6c6
    46622e22eeee22e22eeee2e22e2eeee22e22eeee22e22664
    46622e22e22e22eeee22e2e22e2e22eeee22e22e22e22664
    4cc22eeee22e22e22e22eee22eee22e22e22e22eeee22cc4
    6c622e22e22eeee22e22e2e22e2e22e22eeee22e22e226c6
    466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
    46622e22eeee22e22e22e2e22e2e22e22e22eeee22e22664
    4cc22e22e22e22e22eeee2e22e2eeee22e22e22e22e22cc4
    6c622eeee22e22eeee22eee22eee22eeee22e22eeee226c6
    46622e22e22eeee22e22e2e22e2e22e22eeee22e22e22664
    466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
    4cc22e22eeee22e22e22e2e22e2e22e22e22eeee22e22cc4
    6c622e22e22e22e22e22eee22eee22e22e22e22e22e226c6
    46622eeee22e22e22eeecc6666cceee22e22e22eeee22664
    46622e22e22e22eeecc6666666666cceee22e22e22e22664
    4cceee22e22eeecc66666cccccc66666cceee22e22eeecc4
    6c622e22eeecc66666cc64444446cc66666cceee22e226c6
    46622e22cc66666cc64444444444446cc66666cc22e22664
    46622cc6666ccc64444444444444444446ccc6666cc22664
    4ccc6666ccc6444bcc666666666666ccb4446ccc6666ccc4
    cccccccc6666666cb44444444444444bc6666666cccccccc
    64444444444446c444444444444444444c64444444444446
    66cb444444444cb411111111111111114bc444444444bc66
    666cccccccccccd166666666666666661dccccccccccc666
    6666444444444c116eeeeeeeeeeeeee611c4444444446666
    666e2222222e4c16e4e44e44e44e44ee61c4e2222222e666
    666eeeeeeeee4c16e4e44e44e44e44ee61c4eeeeeeeee666
    666eddddddde4c66f4e4effffffe44ee66c4eddddddde666
    666edffdffde4c66f4effffffffff4ee66c4edffdffde666
    666edccdccde4c66f4effffffffffeee66c4edccdccde666
    666eddddddde4c66f4eeeeeeeeeeeeee66c4eddddddde666
    c66edffdffde4c66e4e44e44e44e44ee66c4edffdffde66c
    c66edccdccde4c66e4e44e44e44e44ee66c4edccdccde66c
    cc66666666664c66e4e44e44e44feeee66c46666666666cc
    .c66444444444c66e4e44e44e44ffffe66c44444444466c.
    ..c64eee4eee4c66f4e44e44e44f44fe66c4eee4eee46c..
    ...c4eee4eee4c66f4e44e44e44effee66c4eee4eee4c...
    ....644444444c66f4e44e44e44e44ee66c444444446....
    .....64eee444c66f4e44e44e44e44ee66c444eee46.....
    ......6ccc666c66e4e44e44e44e44ee66c666ccc6......
    `, SpriteKind.house)
mySprite6 = sprites.create(img`
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . f . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . f 
    `, SpriteKind.npc)
mySprite6.sayText("cheat|ne pas utiliser")
mySprite6.setPosition(0, -1)
mySprite4.setPosition(133, 97)
status_bar_healt = statusbars.create(20, 4, StatusBarKind.Health)
status_bar_healt.max = 90
status_bar_healt.value += 90
house.setPosition(75, 16)
mySprite4.sayText("je suis de la lave")
status_bar_healt.attachToSprite(mySprite2, 10, 4)
game.splash("ta maman ce fait capturer par un dinosaure du nom de rowser le cousin de bowser")
scene.cameraFollowSprite(mySprite2)
game.splash("toi:MAMAN NONNN")
game.splash("ton but est de trouver ta mère")
game.splash("pour progresser dans l'aventure tu doit trouver un cochon")
let mySprite7 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    3 3 3 . . . . . . . . . . . . . 
    f 3 3 . . . . . . . . . . . . . 
    3 3 3 . . . . . . . . . . . . . 
    f f 3 . . . . . . . . . . . . . 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 . . 
    . . 3 3 3 3 3 3 3 3 3 3 3 3 . . 
    . . 3 3 3 3 3 3 3 3 3 3 3 3 . . 
    . . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    . . 3 3 3 3 3 3 3 3 3 3 3 3 . . 
    . . 3 3 3 3 3 3 3 3 3 3 3 3 . . 
    . . 3 3 3 3 3 3 3 3 3 3 3 3 . . 
    . . 3 3 3 3 3 3 3 3 3 3 3 3 . . 
    . . 3 3 3 3 3 . . 3 3 3 3 3 . . 
    . . 3 3 3 3 3 . . 3 3 3 3 3 . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
mySprite7.sayText("salut je suis le super cochon pour avoir des informations à propo de ta mère va dans le lac en haut à droite et tue le requin sur sa carcasse il y aura des informations")
mySprite7.setPosition(1234, 1123)
dialogue = false
forever(function () {
    if (dialogue == false) {
        controller.moveSprite(mySprite2, 100, 100)
    } else if (dialogue == true) {
        controller.moveSprite(mySprite2, 0, 0)
    } else {
    	
    }
})
game.onUpdateInterval(30000, function () {
    mySprite3 = sprites.create(img`
        ......ffff..............
        ....fff22fff............
        ...fff2222fff...........
        ..fffeeeeeefff..........
        ..ffe222222eef..........
        ..fe2ffffff2ef..........
        ..ffffeeeeffff......ccc.
        .ffefbf44fbfeff....cddc.
        .ffefbf44fbfeff...cddc..
        .fee4dddddd4eef.ccddc...
        fdfeeddddd4eeffecddc....
        fbffee4444ee4fddccc.....
        fbf4f222222f1edde.......
        fcf.f222222f44ee........
        .ff.f445544f............
        ....ffffffff............
        .....ff..ff.............
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Enemy)
    mySprite3.setPosition(560, 456)
    enemy_bar = statusbars.create(20, 4, StatusBarKind.EnemyHealth)
    enemy_bar.attachToSprite(mySprite3, 10, 4)
    status_bar_healt.value += 5
})
game.onUpdateInterval(500, function () {
    scene.followPath(mySprite3, scene.aStar(tiles.locationOfSprite(mySprite3), tiles.locationOfSprite(mySprite2)), 100)
})
game.onUpdateInterval(100, function () {
    enemy_bar.attachToSprite(mySprite3, 10, 4)
})
