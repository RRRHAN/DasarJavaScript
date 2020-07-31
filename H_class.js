class persegiPanjang {

    constructor(p, l) {
        /*
        properti atau atribut dari sebuah objek
        didefinisikan di dalam method constructor
        */
        this.panjang = p
        this.lebar = l
    }

    luas = () => {
        return this.panjang * this.lebar
    }

    keliling = () => {
        return 2 * (this.panjang + this.lebar)
    }

}

let tanah = new persegiPanjang(10, 50)
console.log("luas tanah = " + tanah.luas());
console.log("keliling Tanah " + tanah.keliling());

// Inheritance (Pewarisan)
class balok extends persegiPanjang {

    constructor(p, l, t) {
        super(p, l)
        this.tinggi = t
    }

    luas = () => {
        return (2 * this.panjang * this.lebar) +
            (2 * this.panjang * this.tinggi) +
            (2 * this.tinggi * this.lebar)
    }

    volume = () => {
        return this.panjang * this.lebar * this.tinggi
    }
}

let lemari = new balok(10, 5, 2)
console.log("Luas Lemari = " + lemari.luas());
console.log("Volume Lemari = " + lemari.volume());