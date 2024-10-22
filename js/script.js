function changeTab(tab) {
  // Sembunyikan semua konten tab
  const tabContents = document.querySelectorAll('.tab-content');
  tabContents.forEach(content => {
    content.classList.remove('active');
  });

  // Tampilkan tab yang dipilih
  document.getElementById(tab).classList.add('active');

  // Atur semua tombol tab menjadi tidak aktif
  const tabButtons = document.querySelectorAll('.tab-button');
  tabButtons.forEach(button => {
    button.classList.remove('active');
  });

  // Set tombol tab yang dipilih menjadi aktif
  const activeButton = [...tabButtons].find(button => button.textContent.toLowerCase() === tab);
  if (activeButton) {
    activeButton.classList.add('active');
  }
}

// Inisialisasi dengan menampilkan tab "about"
changeTab('about');


// Inisialisasi EmailJS
(function(){
  emailjs.init("uWQ4lPN2FuD9EJFQ2"); // Ganti dengan public key Anda
})();

// Fungsi untuk mengirim email
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Mencegah pengiriman default

  // Mengambil nilai input dari formulir
  const toEmail = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Mengirim email
  emailjs.send('service_1jj6fpi', 'template_bfecw5c', {
    to_email: toEmail,
    message: message,
  }).then(function() {
    alert('Pesan Anda telah dikirim!');
    document.getElementById('contactForm').reset(); // Reset formulir
  }, function(error) {
    alert('Gagal mengirim pesan: ' + JSON.stringify(error));
  });
});
