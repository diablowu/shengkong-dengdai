input.onSound(DetectedSound.Loud, function () {
    颜色 = neopixel.rgb(randint(0, 255), randint(0, 255), randint(0, 255))
    亮度 += 20
    if (亮度 > 200) {
        亮度 = 0
        music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
    }
})
let 颜色 = 0
let 亮度 = 0
let strip = neopixel.create(DigitalPin.P2, 24, NeoPixelMode.RGB)
亮度 = 0
let 亮灯位置 = 0
basic.forever(function () {
    strip.setBrightness(亮度)
    strip.showRainbow(1, 360)
    strip.show()
})
