function startBooking() {
  document.getElementById("bookingCard").classList.remove("hidden");
  document.getElementById("bookingCard").scrollIntoView({ behavior: "smooth" });
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

  let bookings = JSON.parse(localStorage.getItem("bookings")) || [];
  bookings.push(booking);
  localStorage.setItem("bookings", JSON.stringify(bookings));

  document.getElementById("bookingCard").classList.add("hidden");
  document.getElementById("paymentCard").classList.remove("hidden");
}

const qr = localStorage.getItem("qr");
if (qr) {
  document.getElementById("qrImage").src = qr;
}
