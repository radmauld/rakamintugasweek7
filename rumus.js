function luasPersegi(sisi) {
  return sisi * sisi;
}

function kelilingPersegi(sisi) {
  return 4 * sisi;
}

function luasPersegiPanjang(panjang, lebar) {
  return panjang * lebar;
}

function kelilingPersegiPanjaang(panjang, lebar) {
  return 2 * (panjang + lebar);
}

module.exports = {
  luasPersegi,
  kelilingPersegi,
  luasPersegiPanjang,
  kelilingPersegiPanjaang,
};
