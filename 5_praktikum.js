class lingkaran {

    constructor(r) {
        this.jari_jari = r
    }
    luas = () => {
        return Math.PI * (this.jari_jari ** 2)
    }
    keliling = () => {
        return Math.PI * (this.jari_jari * 2)
    }
}

class bola extends lingkaran {

    constructor(r) {
        super(r)
    }

    Volume = () => {
        return (4 / 3) * Math.PI * (this.jari_jari ** 3)
    }
    luasPermukaan = () => {
        return 4 * Math.PI * (this.jari_jari ** 2)
    }

}

let bolaku = new bola(15)
console.log("===================================")
console.log("volume bolaku = " + bolaku.Volume())
console.log("Luas permukaan bolaku = " + bolaku.luasPermukaan())
console.log("===================================")

class tabung extends lingkaran {

    constructor(r, t) {
        super(r)
        this.tinggi = t
    }

    Volume = () => {
        return this.luas() * this.tinggi
    }
    luasPermukaan = () => {
        return (this.keliling() * this.tinggi) + this.luas()
    }
}

let tong = new tabung(70, 150)
console.log("\n===================================")
console.log("volume tong = " + tong.Volume())
console.log("Luas permukaan tong = " + tong.luasPermukaan())
console.log("===================================")

class kerucut extends lingkaran {

    constructor(r, t) {
        super(r)
        this.tinggi = t
    }

    Volume = () => {
        return (1 / 3) * Math.PI * (this.jari_jari ** 2) * this.tinggi
    }
    luasPermukaan = () => {
        return Math.PI * this.jari_jari * (this.jari_jari +
            Math.sqrt((this.jari_jari ** 2) + (this.tinggi ** 2)))
    }
}

let topi_ulang_tahun = new kerucut(10, 30)
console.log("\n===================================")
console.log("volume topi ulang tahun = " + topi_ulang_tahun.Volume())
console.log("Luas permukaan topi ulang tahun = " + topi_ulang_tahun.luasPermukaan())
console.log("===================================")