const prompt = require("prompt-sync")();

let T = parseFloat(prompt("Masukkan tinggi tabung (T): "));
let r = parseFloat(prompt("Masukkan jari-jari tabung (r): "));

let Lp = 2 * Math.PI * r * (r + T);

console.log("\n=== Hasil Perhitungan ===");
console.log("Luas permukaan tabung = " + Lp.toFixed(2));
