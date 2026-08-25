// Обработка формы RSVP (имитация отправки)
document.getElementById('rsvp-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Здесь можно добавить реальную отправку через Web3Forms или почту
    // Пока просто скрываем форму и показываем успех
    this.style.display = 'none';
    document.getElementById('rsvp-success').style.display = 'block';
});

// Небольшая анимация для полароидов при наведении (уже в CSS)
// Но можно добавить лёгкий параллакс для календаря
document.addEventListener('mousemove', function(e) {
    // Здесь можно добавить эффект, но для простоты оставляем как есть
});
