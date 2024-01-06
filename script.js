function sendWhatsApp() {
    var phoneNumber = "6288973121602"; // Ganti dengan nomor WhatsApp yang diinginkan
    var message = ""; // Ganti dengan pesan yang diinginkan
    var url = "https://api.whatsapp.com/send?phone=" + phoneNumber + "&text=" + encodeURIComponent(message);
    window.open(url);
  }