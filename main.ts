let count = 0
basic.forever(function () {
    fwdSensors.ledRing.fwdSetAllPixelsColour(0x7f00ff)
    if (fwdSensors.soilMoisture1.fwdIsMoistureLevelPastThreshold(50, fwdSensors.ThresholdDirection.Over)) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Sad)
        fwdMotors.pump.fwdTimedRun(500)
        count += 1
        basic.pause(500)
        basic.clearScreen()
    }
})
