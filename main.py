def on_sound_loud():
    global 亮度
    亮度 += 1
input.on_sound(DetectedSound.LOUD, on_sound_loud)

strip = neopixel.create(DigitalPin.P2, 24, NeoPixelMode.RGB)
亮度 = 0

def on_forever():
    strip.set_brightness(亮度)
    strip.show_rainbow(1, 0)
basic.forever(on_forever)
