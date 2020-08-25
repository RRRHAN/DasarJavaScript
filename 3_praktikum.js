let berat = 90,
    tinggi = 1.7,
    bmi = berat / (tinggi ** 2),
    status
if (bmi < 18.5) {
    status = "kekurangan berat badan"
} else if (bmi > 18.5 && bmi < 24.9) {
    status = "normal (ideal)"
} else if (bmi > 25 && bmi < 29.9) {
    status = "kelebihan berat badan"
} else if (bmi > 30) {
    status = "kegemukan (obesitas)"
}

console.log("berat = " + berat)
console.log("tinggi = " + tinggi)
console.log("index bmi = " + bmi)
console.log("status = " + status)