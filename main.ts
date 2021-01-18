pins.digitalWritePin(DigitalPin.P0, 0)
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P0, 1)
    pins.digitalWritePin(DigitalPin.P0, 0)
})
