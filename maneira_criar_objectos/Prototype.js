// Prototype
function Microfone(color = "Black") {
    this.color = color;
    this.isOn = true;

    this;
}

Microfone.prototype.toggleOnOff = function () {
    if (this.isOn) {
        console.log("desligar");
    } else {
        console.log("ligar");
    }
    this.isOn = !this.isOn;
};

const microfone = new Microfone();
const microfone2 = new Microfone("White");
console.log(microfone);
console.log(microfone2);

microfone2.toggleOnOff();
microfone2.toggleOnOff();
microfone2.toggleOnOff();
microfone2.toggleOnOff();
microfone2.toggleOnOff();