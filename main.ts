function rainbowLight () {
    for (let index = 0; index <= 7; index++) {
        ring.setPixelColor(index, neopixel.colors(NeoPixelColors.Blue))
        ring.show()
        basic.pause(20)
        ring.setPixelColor(index, neopixel.rgb(16, 16, 16))
        ring.show()
    }
}
function growLight () {
    for (let index = 0; index <= 7; index++) {
        ring.setPixelColor(index, neopixel.colors(NeoPixelColors.Indigo))
        ring.show()
        basic.pause(50)
    }
}
input.onButtonPressed(Button.A, function () {
    currentSetting = 0
})
input.onButtonPressed(Button.B, function () {
    currentSetting = 1
})
let currentSetting = 0
let ring: neopixel.Strip = null
ring = neopixel.create(DigitalPin.P0, 7, NeoPixelMode.RGB)
currentSetting = 0
basic.forever(function () {
    if (currentSetting == 0) {
        growLight()
    }
    if (currentSetting == 1) {
        rainbowLight()
    }
})
