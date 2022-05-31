// ! JANGAN DIMOFIDIKASI
const dataBelanjaan = [
  {
    id: "D-10001",
    nama: "Minyak Goreng Delima",
    harga: 25000,
    kuantitas: 2,
  },
  {
    id: "D-10020",
    nama: "Beras Mamos",
    harga: 48000,
    kuantitas: 1,
  },
  {
    id: "F-00010",
    nama: "Larutan Cap Kaki Empat",
    harga: 7500,
    kuantitas: 8,
  },
];

const mockBelanjaan = [
  {
    nama: "Buku",
    harga: 10000,
    kuantitas: 2,
  },
  {
    nama: "Bimoli",
    harga: 49000,
    kuantitas: 1,
  },
  {
    nama: "Notepad",
    harga: 100000,
    kuantitas: 3,
  },
  {
    nama: "Mystery Box",
    harga: 5000,
    kuantitas: 4,
  },
];


// boleh dimodifikasi bila ingin menggunakan deklarasi fungsi yang normal
const listBelanjaan = (data) => 
{
  let nama = [];
  let kuantitas = [];
  let hasilPertama = [];

  for (let i = 0; i < 3; i++)
  {
      nama[i] = data[i]['nama'];
      kuantitas[i] = data[i]['kuantitas'];
      
      hasilPertama[i] = "- "+nama[i]+" x "+kuantitas[i];
  }

  return hasilPertama;
}

// boleh dimodifikasi bila ingin menggunakan deklarasi fungsi yang normal
const totalBelanjaan = (data) => 
{
    let total = 0;
    let harga = [];
    let kuantitas = [];
    let nominal = [];
    let hasilKedua = 0;

    for (let i = 0; i < 3; i++)
    {
        harga[i] = data[i]['harga'];
        kuantitas[i] = data[i]['kuantitas'];

        nominal[i] = harga[i]*kuantitas[i];

        total += nominal[i];
        
        hasilKedua = total;
    }

    return hasilKedua;
}


// ! JANGAN DIMODIFIKASI
const main = () => {
  console.log("Selamat datang customer");

  console.log("Belanjaan Anda adalah:");
  console.log(listBelanjaan?.(dataBelanjaan)?.join("\n"));
  console.log(
    "\nTotal Belanjaan Anda adalah Rp. " + totalBelanjaan?.(dataBelanjaan)
  );

  console.log("Selamat datang customer");

  console.log("Belanjaan Anda adalah:");
  console.log(listBelanjaan?.(mockBelanjaan)?.join("\n"));
  console.log(
    "\nTotal Belanjaan Anda adalah Rp. " + totalBelanjaan?.(mockBelanjaan)
  );
};

main();

module.exports = {
  dataBelanjaan,
  listBelanjaan,
  totalBelanjaan,
};
