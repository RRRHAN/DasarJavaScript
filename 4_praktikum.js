let a = 4,
    rasio = 3,
    suku_saat_ini = a,
    jumlah = 0

for (let i = 1; i <= 10; i++) {
    console.log("suku ke " + i + " = " + suku_saat_ini)
    jumlah += suku_saat_ini
    suku_saat_ini *= rasio
}

console.log("\nJumlah 10 suku pertama = " + jumlah)