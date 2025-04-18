radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 2.1) {
        kitronik_simple_servo.setServoAngle(kitronik_simple_servo.ServoChoice.servo1, i)
        i += 30
        if (i == 360) {
            i = 0
        }
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(0)
    kitronik_simple_servo.servoRunPercentage(kitronik_simple_servo.ServoChoice.servo1, kitronik_simple_servo.ServoDirection.CW, 50)
})
input.onButtonPressed(Button.B, function () {
    kitronik_simple_servo.servoStop(kitronik_simple_servo.ServoChoice.servo1)
})
let i = 0
radio.setGroup(2)
i = 0
basic.showIcon(IconNames.Heart)
kitronik_simple_servo.servoRunPercentage(kitronik_simple_servo.ServoChoice.servo2, kitronik_simple_servo.ServoDirection.CCW, 50)
basic.forever(function () {
	
})
