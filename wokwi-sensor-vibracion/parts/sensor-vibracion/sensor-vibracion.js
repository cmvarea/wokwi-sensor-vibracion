export class CustomPart {
  constructor({ pinManager, part }) {
    this.outPin = pinManager.getPin("OUT");
    this.estado = false;

    part.addEventListener("click", () => {
      this.estado = true;
      this.update();
      setTimeout(() => {
        this.estado = false;
        this.update();
      }, 300);
    });
  }

  update() {
    this.outPin.level = this.estado ? 1 : 0;
  }
}