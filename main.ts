/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Frank
 * Created on: Oct 2025
 * This program grabs le distance
*/

// variables
let grabLeDistance: number = 0

//  clean
basic.clearScreen()
basic.showIcon(IconNames.Happy)

// getting distance
input.onButtonPressed(Button.A, function() {
    grabLeDistance = sonar.ping(
        DigitalPin.P8,
        DigitalPin.P12,
        PingUnit.Centimeters
    )
    basic.clearScreen()
    basic.showNumber(grabLeDistance)
})
