// Class 
class Microfone {
    constructor(color = "Black") {
        this.color = color;
        this.isOn = true;
    }

    toggleOnOff() {
        if (this.isOn) {
            console.log("desligar");
        } else {
            console.log("ligar");
        }
        this.isOn = !this.isOn;
    };
}

const microfone = new Microfone();
const microfone2 = new Microfone('White');
console.log(microfone);
console.log(microfone2);
microfone2.toggleOnOff();
microfone2.toggleOnOff();
microfone2.toggleOnOff();