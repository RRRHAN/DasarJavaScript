let barang = [{
        nama: "beras",
        harga: 10000,
        jumlah: 5
    },
    {
        nama: "Gula",
        harga: 14000,
        jumlah: 5
    },
    {
        nama: "telur",
        harga: 20000,
        jumlah: 2
    },
    {
        nama: "Minyak Goreng",
        harga: 9000,
        jumlah: 10
    }
]

let total = 0
for (b of barang) {
    total += (b.harga * b.jumlah)
}
console.log(barang)
console.log("\nTotal Belanja = " + total)