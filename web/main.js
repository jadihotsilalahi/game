// Contoh fungsi pengalihan setelah login
function redirectToGame() {
    // Cek apakah pengguna sudah login (gunakan mekanisme otentikasi)
    var isLoggedIn = true; // Gantilah dengan logika otentikasi yang sesuai

    if (isLoggedIn) {
        // Redirect ke halaman game
        window.location.href = "halaman-game.html";
    } else {
        alert("Login gagal. Coba lagi.");
    }
}
