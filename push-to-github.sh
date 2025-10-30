#!/bin/bash

# Script untuk upload portfolio ke GitHub
# Jalankan dengan: bash push-to-github.sh

echo "🚀 Portfolio GitHub Setup Script"
echo "================================"
echo ""

# Warna untuk output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Fungsi untuk print dengan warna
print_success() {
    echo -e "${GREEN}✓ $1${NC}"
}

print_info() {
    echo -e "${BLUE}ℹ $1${NC}"
}

print_error() {
    echo -e "${RED}✗ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠ $1${NC}"
}

# Cek apakah git terinstall
if ! command -v git &> /dev/null; then
    print_error "Git tidak ditemukan. Silakan install Git terlebih dahulu."
    echo "Download: https://git-scm.com/downloads"
    exit 1
fi

print_success "Git ditemukan: $(git --version)"
echo ""

# Cek apakah sudah ada git config
if [ -z "$(git config --global user.name)" ] || [ -z "$(git config --global user.email)" ]; then
    print_warning "Git config belum diatur."
    echo ""
    read -p "Masukkan nama Anda: " git_name
    read -p "Masukkan email Anda: " git_email
    
    git config --global user.name "$git_name"
    git config --global user.email "$git_email"
    
    print_success "Git config berhasil diatur"
    echo ""
fi

# Input URL repository
print_info "Silakan buat repository baru di GitHub terlebih dahulu"
print_info "https://github.com/new"
echo ""
read -p "Masukkan URL repository GitHub Anda (contoh: https://github.com/username/portfolio): " repo_url

if [ -z "$repo_url" ]; then
    print_error "URL repository tidak boleh kosong!"
    exit 1
fi

echo ""
print_info "Memulai proses upload..."
echo ""

# Inisialisasi git (jika belum)
if [ ! -d ".git" ]; then
    print_info "Menginisialisasi git repository..."
    git init
    print_success "Git repository diinisialisasi"
else
    print_success "Git repository sudah ada"
fi

# Add semua file
print_info "Menambahkan semua file..."
git add .
print_success "File ditambahkan"

# Commit
read -p "Masukkan pesan commit (default: 'Initial commit'): " commit_message
commit_message=${commit_message:-"Initial commit: Portfolio website"}

print_info "Membuat commit..."
git commit -m "$commit_message"
print_success "Commit berhasil"

# Set remote origin
print_info "Menambahkan remote repository..."
git remote remove origin 2>/dev/null
git remote add origin "$repo_url"
print_success "Remote repository ditambahkan"

# Push ke GitHub
print_info "Upload ke GitHub..."
git branch -M main
git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    print_success "================================================"
    print_success "  Portfolio berhasil diupload ke GitHub! 🎉"
    print_success "================================================"
    echo ""
    print_info "Repository URL: $repo_url"
    echo ""
    print_info "Langkah selanjutnya:"
    echo "  1. Buka repository Anda di browser"
    echo "  2. Deploy ke Vercel: https://vercel.com"
    echo "  3. Atau deploy ke Netlify: https://netlify.com"
    echo ""
else
    echo ""
    print_error "================================================"
    print_error "  Upload gagal! ❌"
    print_error "================================================"
    echo ""
    print_warning "Kemungkinan penyebab:"
    echo "  - URL repository salah"
    echo "  - Tidak punya akses ke repository"
    echo "  - Perlu Personal Access Token untuk authentication"
    echo ""
    print_info "Cara membuat Personal Access Token:"
    echo "  1. Buka: https://github.com/settings/tokens"
    echo "  2. Click 'Generate new token (classic)'"
    echo "  3. Pilih scope 'repo'"
    echo "  4. Gunakan token sebagai password saat diminta"
    echo ""
fi
