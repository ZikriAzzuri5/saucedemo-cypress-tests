# Test Plan — SauceDemo Cypress Tests

## Tujuan

Menguji fungsi utama aplikasi SauceDemo (saucedemo.com) dari sisi UI dan sebagian API pendukung (JSONPlaceholder), meliputi alur autentikasi, transaksi, dan penanganan skenario khusus.

## Ruang Lingkup (In Scope)

| Area     | Skenario                                                                                                                                   |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| Login    | Sukses (standard_user), password salah, akun terkunci (locked_out_user), bug gambar (problem_user), login lambat (performance_glitch_user) |
| Cart     | Tambah produk, hapus produk, validasi badge jumlah item                                                                                    |
| Checkout | Isi data, validasi subtotal/tax/total, sampai konfirmasi pesanan                                                                           |
| Sorting  | A-Z, Z-A, harga rendah-tinggi, harga tinggi-rendah                                                                                         |
| Logout   | Kembali ke halaman login setelah logout                                                                                                    |
| API      | GET by id, POST create, GET 404 (JSONPlaceholder, untuk latihan API testing)                                                               |

## Di Luar Ruang Lingkup (Out of Scope)

- Uji visual/pixel-perfect (visual_user) — butuh tools khusus visual regression, belum dicakup di iterasi ini.
- Uji performa/load testing skala besar — di luar tujuan portfolio ini.
- Uji keamanan mendalam (penetration testing) — hanya dicek satu kasus dasar (akses halaman setelah logout).

## Tools

- Cypress 16 (E2E)
- Node.js 22 (CI), Node 20 (lokal)
- GitHub Actions (CI/CD)
- Pola: Custom Command (`cy.login`) dan Page Object Model (`cypress/pages/`)

## Strategi

- Setiap skenario menguji hasil akhir yang nyata (isi data, bukan cuma navigasi/URL).
- Skenario negatif dan edge case (locked_out_user, problem_user, performance_glitch_user) sengaja dites terpisah dari happy path.
- Semua test dijalankan otomatis di CI setiap push ke branch main.

## Cara Menjalankan

```bash
npm install
npx cypress open     # mode interaktif
npx cypress run      # mode headless (dipakai CI)
```
