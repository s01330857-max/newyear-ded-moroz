document.getElementById('bookings').innerText =
  localStorage.getItem('bookings') || 'Пока нет заказов';

document.getElementById('qrUpload').addEventListener('change', function(e) {
  const reader = new FileReader();
  reader.onload = function() {
    localStorage.setItem('qr', reader.result);
    alert('QR обновлён');
  };
  reader.readAsDataURL(e.target.files[0]);
});
