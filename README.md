![Cypress Tests](https://github.com/ZikriAzzuri5/saucedemo-cypress-tests/actions/workflows/cypress.yml/badge.svg)

## Cakupan Test (16 test, 7 spec file)

- **Login**: sukses, password salah, akun terkunci, bug gambar, login lambat
- **Cart**: tambah & hapus produk
- **Checkout**: alur lengkap + validasi kalkulasi harga
- **Sorting**: 4 arah (A-Z, Z-A, harga rendah-tinggi, harga tinggi-rendah)
- **Logout**: validasi kembali ke halaman login
- **API**: GET, POST, dan skenario 404 (JSONPlaceholder)

## Struktur Proyek

cypress/
e2e/ → file test
pages/ → Page Object Model (checkoutPage.js, inventoryPage.js)
support/ → custom commands (cy.login)
docs/
test-plan.md
bug-report-example.md

## Dokumentasi

- [Test Plan](docs/test-plan.md)
- [Contoh Bug Report](docs/bug-report-example.md)
