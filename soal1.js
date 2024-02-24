const shapes = require('./rumus')

const sisiPersegi =  5;
console.log("Luas Persegi: ", shapes.luasPersegi(sisiPersegi));
console.log("Keliling Persegi:", shapes.kelilingPersegi(sisiPersegi))

const panjangPersegiPanjang = 7;
const lebarPersegiPanjang = 9;

console.log("Luars Persegi Panjang :", shapes.luasPersegiPanjang(panjangPersegiPanjang,lebarPersegiPanjang));

console.log("Keliling Persegi Panjang :", shapes.kelilingPersegiPanjaang(panjangPersegiPanjang, lebarPersegiPanjang));

