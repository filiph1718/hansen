input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . # # # #
        . # . . #
        . # # # #
        . # . . #
        . # . . #
        `)
    basic.showLeds(`
        . # # # #
        . # . . .
        . # # # #
        . # . . .
        . # # # #
        `)
    basic.showIcon(IconNames.Rollerskate)
    basic.showString("Hello!")
    basic.showLeds(`
        . # # # #
        . # . . .
        . # # # #
        . # . . .
        . # . . .
        `)
    basic.showLeds(`
        . # . . .
        . . . . .
        . # . . .
        . # . . .
        . # . . .
        `)
    basic.showLeds(`
        . # . . .
        . # . . .
        . # . . .
        . # . . .
        . # # # #
        `)
    basic.showLeds(`
        . # . . .
        . . . . .
        . # . . .
        . # . . .
        . # . . .
        `)
    basic.showLeds(`
        . # # # #
        . # . . #
        . # # # #
        . # . . .
        . . . . .
        `)
    basic.showIcon(IconNames.Meh)
    basic.pause(2)
    basic.showLeds(`
        . # . # #
        . # . . #
        . # # # .
        . # . . .
        . . . . .
        `)
    basic.showIcon(IconNames.Rabbit)
    basic.showIcon(IconNames.Ghost)
    basic.showLeds(`
        # # # # #
        # # # # #
        . # # # .
        # # . # #
        # # # # #
        `)
    basic.showIcon(IconNames.Pitchfork)
    basic.showLeds(`
        # . . . .
        . # # # .
        . . . # #
        . . # # .
        # # # . .
        `)
    basic.showString("Hello!")
})
basic.showLeds(`
    . . # . .
    . . # . .
    . # # . #
    . # # # #
    . # # # .
    `)
basic.showLeds(`
    # # # # #
    # . # . #
    # # # # #
    # . # . #
    # # # # #
    `)
basic.showLeds(`
    . . # . .
    . . # . .
    . . # . .
    . . # . .
    . . # # .
    `)
basic.showIcon(IconNames.No)
basic.showIcon(IconNames.Snake)
basic.showIcon(IconNames.Chessboard)
basic.forever(function () {
    basic.showLeds(`
        . . . . .
        . # # # #
        . . . # .
        . . . # #
        . . . . #
        `)
    basic.showLeds(`
        . # . . .
        . # . . .
        . # . . .
        . # . . .
        . # . . .
        `)
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.showLeds(`
        # . . . .
        # . . . .
        # . . . .
        # . . . .
        # . . . .
        `)
    basic.showLeds(`
        . # . . .
        . # . . .
        . # . . .
        . # . . .
        . # . . .
        `)
    basic.showIcon(IconNames.EigthNote)
})
