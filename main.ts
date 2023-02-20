let status = 0
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P0) == 0) {
        basic.pause(10)
        if (pins.digitalReadPin(DigitalPin.P0) == 0) {
            if (status == 0) {
                status = 1
            } else {
                status = 0
            }
            pins.digitalWritePin(DigitalPin.P1, status)
            while (pins.digitalReadPin(DigitalPin.P0) == 0) {
                basic.pause(10)
            }
        }
    }
})
