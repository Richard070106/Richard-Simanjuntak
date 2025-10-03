class Kubus {
  constructor(sisi) {
    this.sisi = sisi;
  }

  luasKubus() {
    return 6 * (this.sisi ** 2);
  }
}


const kubus = new Kubus(25);
console.log('Luas kubus:', kubus.luasKubus()); 