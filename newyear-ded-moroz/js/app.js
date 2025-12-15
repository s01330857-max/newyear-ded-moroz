function openBooking() {
  document.getElementById('booking').classList.remove('hidden');
}

function confirmBooking() {
  const booking = {
    date: date.value,
    time: time.value,
    address: address.value,
    name: name.value,
    phone: phone.value,
    child: child.value
  };

  let bookings = JSON.parse(localStorage.getItem('bookings')) || [];
  bookings.push(booking);
  localStorage.setItem('bookings', JSON.stringify(bookings));

  document.getElementById('booking').classList.add('hidden');
  document.getElementById('payment').classList.remove('hidden');
}
const qr = localStorage.getItem('qr');
if (qr) {
  document.getElementById('qrImage').src = qr;
}
