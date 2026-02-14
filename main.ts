input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    count = randint(1, 2)
})
let count = 0
count = 0
basic.forever(function () {
    if (count == 1) {
        basic.showString("Yes")
    }
    if (count == 2) {
        basic.showString("No")
    }
})
