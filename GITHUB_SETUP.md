# 📚 Panduan Upload ke GitHub

Panduan lengkap untuk mengupload portfolio Anda ke GitHub.

## 🎯 Langkah 1: Persiapan GitHub

### Buat Repository Baru di GitHub

1. Buka [GitHub.com](https://github.com) dan login
2. Klik tombol **"+"** di pojok kanan atas, pilih **"New repository"**
3. Isi detail repository:
   - **Repository name:** `portfolio-website` (atau nama yang Anda inginkan)
   - **Description:** "Personal portfolio website built with Next.js"
   - **Visibility:** Pilih **Public** (agar bisa di-deploy gratis) atau **Private**
   - ❌ **JANGAN** centang "Add a README file" (karena sudah ada)
   - ❌ **JANGAN** centang "Add .gitignore" (karena sudah ada)
4. Klik **"Create repository"**

## 🎯 Langkah 2: Setup Git (Jika Belum Ada)

### Cek apakah Git sudah terinstall:

```bash
git --version
```

Jika belum ada, download di: https://git-scm.com/downloads

### Setup Git config (jika belum):

```bash
git config --global user.name "Nama Anda"
git config --global user.email "email-anda@example.com"
```

## 🎯 Langkah 3: Push ke GitHub

### Opsi A: Menggunakan Command Line (Terminal)

Jalankan perintah berikut di folder project Anda:

```bash
# 1. Inisialisasi git repository
git init

# 2. Tambahkan semua file
git add .

# 3. Buat commit pertama
git commit -m "Initial commit: Portfolio website"

# 4. Tambahkan remote repository (ganti dengan URL repo Anda)
git remote add origin https://github.com/USERNAME/REPO_NAME.git

# 5. Push ke GitHub
git branch -M main
git push -u origin main
```

**Catatan:** Ganti `USERNAME` dengan username GitHub Anda dan `REPO_NAME` dengan nama repository yang Anda buat.

### Opsi B: Menggunakan GitHub Desktop (Lebih Mudah)

1. Download [GitHub Desktop](https://desktop.github.com/)
2. Login dengan akun GitHub Anda
3. Klik **File > Add Local Repository**
4. Pilih folder portfolio Anda
5. Klik **Publish repository**
6. Pilih nama dan visibility, lalu klik **Publish**

## 🎯 Langkah 4: Verifikasi Upload

1. Buka browser dan kunjungi: `https://github.com/USERNAME/REPO_NAME`
2. Pastikan semua file sudah terupload
3. README.md akan tampil di halaman utama repository

## 🚀 Langkah 5: Deploy ke Vercel (Opsional)

Setelah code ada di GitHub, Anda bisa deploy dengan mudah:

### Deploy dengan Vercel (GRATIS & RECOMMENDED):

1. Buka [vercel.com](https://vercel.com)
2. Klik **"Sign Up"** dan login dengan GitHub
3. Klik **"Add New Project"**
4. Pilih repository portfolio Anda
5. Klik **"Deploy"**
6. Tunggu beberapa menit (biasanya 2-3 menit)
7. Portfolio Anda akan live dengan URL: `https://portfolio-username.vercel.app`

**Keuntungan Vercel:**
- ✅ Gratis unlimited
- ✅ Auto deploy setiap kali push ke GitHub
- ✅ HTTPS otomatis
- ✅ Domain custom (opsional)
- ✅ Optimasi Next.js built-in

## 📝 Update Portfolio di Masa Depan

Setiap kali Anda update portfolio:

```bash
# 1. Lihat perubahan
git status

# 2. Tambahkan perubahan
git add .

# 3. Commit dengan pesan yang jelas
git commit -m "Update: menambahkan project baru"

# 4. Push ke GitHub
git push
```

Jika sudah connect ke Vercel, website akan otomatis update!

## 🔑 Tips Penting

1. **Jangan upload file sensitive:**
   - `.env` file (sudah di .gitignore)
   - API keys atau passwords
   - node_modules (sudah di .gitignore)

2. **Gunakan commit message yang jelas:**
   - ✅ "Add new project: E-commerce website"
   - ✅ "Update skills section"
   - ✅ "Fix responsive design on mobile"
   - ❌ "update"
   - ❌ "fix bug"

3. **Branch strategy (untuk advanced):**
   - `main` - production code
   - `develop` - development code
   - `feature/nama-fitur` - fitur baru

## 🆘 Troubleshooting

### Error: "fatal: not a git repository"
```bash
git init
```

### Error: "remote origin already exists"
```bash
git remote remove origin
git remote add origin https://github.com/USERNAME/REPO_NAME.git
```

### Error saat push pertama kali
```bash
git push -u origin main --force
```

### Lupa password GitHub
- Gunakan **Personal Access Token** (bukan password)
- Buat di: Settings > Developer settings > Personal access tokens > Tokens (classic)
- Pilih scope: `repo` (full control)

## 📞 Butuh Bantuan?

Jika ada error atau bingung, kirim screenshot error-nya!

---

Selamat! Portfolio Anda sekarang sudah online! 🎉
