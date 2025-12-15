function startBooking() {
  document.getElementById("bookingCard").classList.remove("hidden");
  document.getElementById("bookingCard")
    .scrollIntoView({ behavior: "smooth" });

  const sound = document.getElementById("bgSound");
  sound.volume = 0.15;
  sound.play().catch(() => {});
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

  const bookings = JSON.parse(localStorage.getItem("bookings")) || [];
  bookings.push(booking);
  localStorage.setItem("bookings", JSON.stringify(bookings));

  document.getElementById("bookingCard").classList.add("hidden");
  document.getElementById("paymentCard").classList.remove("hidden");
}

const qr = localStorage.getItem("qr");
if (qr) document.getElementById("qrImage").src = qr;

let slots = 7;

function updateSlots() {
  const el = document.getElementById("slotsInfo");
  if (el) el.innerHTML = `⏳ Осталось <strong>${slots}</strong> свободных слотов`;
}

updateSlots();

function confirmBooking() {
  if (slots > 0) slots--;
  updateSlots();

  // существующий код бронирования ниже
}
