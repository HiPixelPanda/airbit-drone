input.onButtonPressed(Button.AB, function () {
	
})
radio.setGroup(7)
basic.forever(function () {
    AirBit.FlightControl(
    0,
    0,
    0,
    0,
    0,
    0,
    0
    )
    radio.sendNumber(0)
})
