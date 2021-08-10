// Factory

function createMicrofone(color = "Black") {
    let isOn = true;
    function toggleOnOff() {
        if (isOn) {
            console.log("desligar");
        } else {
            console.log("ligar");
        }
        isOn = !isOn;
    }
    return {color, toggleOnOff };
}

