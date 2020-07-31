// bentuk if
let tahun = 2020
if (tahun % 4 == 0) {
    console.log(tahun + " adalah tahun kabisat");
}

// bentuk if.. else..
tahun = 2020
if (tahun % 4 == 0) {
    console.log(tahun + " adalah tahun kabisat");
} else {
    console.log(tahun + " Bukan tahun kabisat");
}

// bentuk if.. else if.. else..
let nilai = 80
if (nilai > 80) {
    console.log("excellent");
} else if (nilai <= 80) {
    console.log("good");
} else if (nilai <= 70) {
    console.log("not bad");
} else {
    console.log("so bad");
}