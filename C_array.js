// Array String
let jurusan = ["Rekayasa Perangkat Lunak", "Teknik Komputer Dan Jaringan"];

// array numerik
let tingkatan_kelas = [10, 11, 12];

// array object
let siswa = [
    // object pertama
    {
        nama: "yaya",
        jurusan: "RPL"
    },
    // object kedua
    {
        nama: "ying",
        jurusan: "TKJ"
    },
    // object ketiga
    {
        nama: "Gopal",
        jurusan: "RPL"
    }
];

// 1.	Mendapatkan jumlah data yang tersimpan pada array
console.log("\n1.	Mendapatkan jumlah data yang tersimpan pada array");
console.log("jumlah elemen array jurusan = " + jurusan.length);
console.log("jumlah elemen array tingkatan_kelas = " + tingkatan_kelas.length);
console.log("jumlah elemen array siswa = " + siswa.length);

// 2.	Menambahkan / memasukkan data pada array
console.log("\n2.	Menambahkan / memasukkan data pada array");

let kota = ["Malang", "Surabaya", "Tulungagung"];

console.log("isi array kota");
console.log(kota);
console.log("jumlah data = " + kota.length);

console.log("=============");

// tambah data kota baru
kota.push("banyuwangi");

console.log("isi array kota saat ini");
console.log(kota);
console.log("jumlah data saat ini = " + kota.length);

let barang = [{
        nama: "Rinsoo",
        harga: 5000
    },
    {
        Nama: "Moonlight",
        harga: 4000
    }
]

console.log("isi array barang");
console.log(barang);
console.log("jumlah data = " + barang.length);

console.log("--------------");

// tambah data barang baru
barang.push({
    nama: "mloto",
    harga: 1000
})

console.log("isi array barang saat ini");
console.log(barang);
console.log("jumlah data saat ini = " + barang.length);

console.log("\n3.	Menghapus data pada array");
// menghapus data pada array
let nama = ['ana', 'sulaiman', 'putri', 'gatot', 'adit', 'gico']
console.log(nama);
console.log("jumlah data saat ini = " + nama.length);

nama.slice(2, 1)

console.log("isi array barang saat ini");
console.log(nama);
console.log("jumlah data saat ini = " + nama.length);

console.log("\n4.	Menampilkan data pada array object");
siswa = [{
        nama_depan: "jack",
        nama_belakang: "ma"
    },
    {
        nama_depan: "jhonny",
        nama_belakang: "english"
    },
    {
        nama_depan: "john",
        nama_belakang: "cena"
    }
]

// menampilkan nama lengkap dari array
siswa.map(
    (sis, index) => {
        console.log(sis.nama_depan + " " + sis.nama_belakang);
    }
)