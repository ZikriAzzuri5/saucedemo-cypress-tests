# Contoh Bug Report

**Judul:** Gambar produk duplikat pada akun `problem_user`

**Severity:** Medium
**Environment:** saucedemo.com, Chrome (headless via Cypress)
**Ditemukan oleh:** Automated test — `inventory.cy.js`

## Langkah Reproduksi

1. Buka https://www.saucedemo.com
2. Login dengan username `problem_user`, password `secret_sauce`
3. Amati gambar produk pada halaman inventory (daftar produk)

## Expected Result

Setiap produk menampilkan gambar yang unik dan sesuai dengan produknya masing-masing (6 produk = 6 gambar berbeda).

## Actual Result

Dari 12 elemen gambar yang tampil di halaman, hanya ditemukan 2 variasi gambar unik. Sebagian besar produk menampilkan gambar yang sama, tidak sesuai dengan produk aslinya.

## Bukti

Dibuktikan lewat automated test yang mengambil atribut `src` semua elemen gambar (`.inventory_item_img`), lalu membandingkan jumlah total dengan jumlah nilai unik:

```js
expect(uniqueSources.size).to.be.lessThan(sources.length);
```

Hasil: `sources.length = 12`, `uniqueSources.size = 2`.

## Catatan

Bug ini konsisten muncul setiap kali login sebagai `problem_user`, dan tidak muncul pada `standard_user`. Kemungkinan disengaja oleh SauceDemo sebagai skenario uji untuk mendeteksi masalah visual/data pada UI.
