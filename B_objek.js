// variable biasa
let nama_siswa1 = "aku";
let nis_siswa1 = 101;
let jurusan_siswa1 = "RPL";

let nama_siswa2 = "kamu";
let nis_siswa2 = 102;
let jurusan_siswa2 = "TKJ";

// object
let siswa1 = {
    nama: "aku",
    nis: 101,
    jurusan: "RPL"
}

let siswa2 = {
    nama: "kamu",
    nis: 102,
    jurusan: "TKJ"
}

console.log("Nama siswa sebelum di ubah : " + siswa1.nama);
console.log("----------");

siswa1.nama = "Raihan"

console.log("Nama siswa setelah di ubah : " + siswa1.nama);