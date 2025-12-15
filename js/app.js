// ===== SLOTS =====
let slots = 7;

function updateSlots() {
  const el = document.getElementById("slotsInfo");
  if (el) {
    el.innerHTML = `⏳ Осталось <strong>${slots}</strong> свободных слотов`;
  }
}

updateSlots();

// ===== BOOKING =====
function startBooking() {
  const card = document.getElementById("bookingCard");
  if (!card) return;

  card.classList.remove("hidden");
  card.scrollIntoView({ behavior: "smooth" });

  const sound = document.getElementById("bgSound");
  if (sound) {
    sound.volume = 0.15;
    sound.play().catch(() => {});
  }
}

function confirmBooking() {
  const bookingCard = document.getElementById("bookingCard");
  const paymentCard = document.getElementById("paymentCard");

  if (bookingCard) bookingCard.classList.add("hidden");
  if (paymentCard) paymentCard.classList.remove("hidden");

  if (slots > 0) {
    slots--;
    updateSlots();
  }

  // сохранение заявки (опционально)
  const booking = {
    date: document.getElementById("date")?.value,
    time: document.getElementById("time")?.value,
    address: document.getElementById("address")?.value,
    name: document.getElementById("name")?.value,
    phone: document.getElementById("phone")?.value,
    child: document.getElementById("child")?.value
  };

  const bookings = JSON.parse(localStorage.getItem("bookings")) || [];
  bookings.push(booking);
  localStorage.setItem("bookings", JSON.stringify(bookings));
}

// ===== QR FROM ADMIN =====
const qr = localStorage.getItem("qr");
if (qr) {
  const qrImage = document.getElementById("qrImage");
  if (qrImage) qrImage.src = qr;
}
