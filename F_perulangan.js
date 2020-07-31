// for loop
for (let index = 1; index <= 10; index++) {
    console.log("perulangan ke-" + index);
}

// for/in loop
let siswa = {
    nama: "kusuma seta",
    gender: "wanita",
    jurusan: "RPL",
    usia: "300",
    alamat: "ngantru"
}

for (key in siswa) {
    console.log(key);
}

// for/of loop
let presiden = ["soekarno", "soeharto", "habibie", "gus dur", "megawati", "SBY", "Jokowi"]
for (pres of presiden) {
    console.log(pres);
}

// while loop
let laptop = ["lenovo", "HP", "Acer", "Asus"],
    i = 0
while (laptop[i]) {
    console.log(laptop[i]);
    i++
}

// Do.. while loop
let gadget = ["xiaomi", "samsung", "Motorola", "Sony Ericson"]
i = 0
do {
    console.log(gadget[i]);
    i++
} while (gadget[i])