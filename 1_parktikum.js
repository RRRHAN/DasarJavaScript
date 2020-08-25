let lebar = 20.5,
    panjang = 30,
    harga = 1500000,
    ppn = 15 / 100,
    luas = lebar * panjang

total = (luas * harga) + (luas * harga * ppn)

console.log("lebar = " + lebar)
console.log("panjang = " + panjang)
console.log("luas = " + luas)
console.log("harga per meter = " + harga)
console.log("ppn = " + ppn * 100 + "%")

console.log("\ntotal harga yang harus di bayar =" + total)