// Validasi Sederhana Form Hubungi Kami
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Terima kasih! Pesan Anda telah berhasil dikirim.');
        contactForm.reset();
    });
}