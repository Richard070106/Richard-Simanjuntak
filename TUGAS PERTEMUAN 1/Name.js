const prompt = require("prompt-sync")();

// Input dari user
let firstName = prompt("Masukkan nama depan: ");
let lastName = prompt("Masukkan nama belakang: ");
let age = prompt("Masukkan umur: ");

// Output
console.log("\n=== Data Diri ===");
console.log("Nama Lengkap : " + firstName + " " + lastName);
console.log("Umur         : " + age + " tahun");
