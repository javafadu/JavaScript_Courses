const urunler = [
  { urun_id: "KL111", urun_adi: "Klavye", fiyat: 250 },
  { urun_id: "MN111", urun_adi: "Monitör", fiyat: 2250 },
  { urun_id: "MS111", urun_adi: "Mouse", fiyat: 150 },
  { urun_id: "PR111", urun_adi: "Printer", fiyat: 1250 },
  { urun_id: "SC111", urun_adi: "Tarayıcı", fiyat: 750 },
  { urun_id: "HP111", urun_adi: "Hoparlör", fiyat: 450 },
];

const urunlerYukle = () => {
  let satirlar = "";
  for (let urun of urunler) {
    satirlar += `
        <tr>
        <td>${urun.urun_id}</td>
        <td>${urun.urun_adi}</td>
        <td>${urun.fiyat}</td>
        </tr>
        `;
  }
  console.log(satirlar);
  document.querySelector("#tblSatislar tbody").innerHTML = satirlar;
  let toplamTutar = urunler.reduce((x, y) => x + y.fiyat, 0);

  document.querySelector("#tblSatislar tfoot .toplamTutar").innerHTML =
    toplamTutar;
};

urunlerYukle();

document.querySelectorAll("#tblSatislar tbody tr").forEach((satir) => {
  satir.addEventListener("click", () => {
    let urunId = satir.querySelector("td:first-child").innerText;
    urunYukle(urunId);
  });
});

const urunYukle = (urunId) => {
  const urun = urunler.filter((item) => item.urun_id == urunId)[0];
  const urunHtml = `
    <div class="card-body">
        <div class="row">
            <div class="col-md-6">
            Urun Adi: ${urun.urun_adi}
            </div>
            <div class="col-md-6">
            Urun Fiyat : ${urun.fiyat}
            </div>
        </div>
    </div>        
            `;

    document.querySelector("#satis").innerHTML=urunHtml;
};
