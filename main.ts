let temp = 0
basic.forever(function () {
    temp = input.temperature() * 1.8 + 32
    if (temp >= 104 && input.lightLevel() >= 130) {
        basic.showNumber(temp)
        basic.showNumber(input.lightLevel())
        basic.showIcon(IconNames.Heart)
    } else if (temp < 104 && temp >= 86 || input.lightLevel() < 130 && input.lightLevel() > 80) {
        basic.showNumber(temp)
        basic.showNumber(input.lightLevel())
        basic.showIcon(IconNames.Duck)
    } else {
        basic.showIcon(IconNames.House)
    }
})
