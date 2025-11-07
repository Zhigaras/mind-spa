import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Аренда медицинских средств реабилитации</h1>
    <p>Мы предлагаем широкий ассортимент оборудования для реабилитации в аренду с удобной доставкой по всей территории России. Наше оборудование помогает в восстановлении после травм и операций, обеспечивая комфорт и эффективность реабилитационного процесса. Вы можете выбрать подходящее средство и оформить аренду онлайн, с гарантией качества и своевременной доставки.</p>
    <h2>Перечень оборудования</h2>
    <ul>
      <li style="display: flex; gap: 20px; align-items: center;">
        <div style="display: flex; flex-direction: column; align-items: center;">
          <h3 style="margin: 0 0 10px 0;">Soundsory</h3>
          <img src="src/sounsory.png" alt="Soundsory" style="max-width: 200px; height: auto;">
        </div>
        <p style="margin: 0; flex: 1; text-align: left;">Показания к применению SOUNDSORY®<br>
<br>• Нарушения опорно-двигательного аппарата, равновесия и координации:<br>
Плохая осанка, неуклюжие, нескоординированные движения, слабое чувство ритма, корявый почерк, неорганизованность, путаница "левого" и "правого" пространства, слабое физическое развитие.<br>
• Нарушения развития когнитивной сферы и расстройствами аутистического спектра:<br>
Недостаток фиксации внимания, рассеянность, "нечувствительность" к определённым звукам, неверное истолкование вопросов, путаница слов похожих по звучанию, потребность в частном повторении отдельных слов или фраз, неспособность выполнять последовательные команды.<br>
• Сенсорные и слуховые нарушения обработки информации:<br>
Контроль над эмоциями, неуклюжие, неуверенность в себе, застенчивость, отсутствие друзей, обособленность (тенденция избегать других), раздражительность, незрелость, отсутствие интереса к учебе/работе, отрицательное отношение к учебе/работе.<br>
• СДВГ, беспокойное поведение и многое другое</p>
      </li>
    </ul>
    <h2>Форма обратной связи</h2>
    <form id="contact-form">
      <label for="phone">Номер телефона:</label>
      <input type="tel" id="phone" name="phone" required><br><br>
      <label for="city">Город доставки:</label>
      <input type="text" id="city" name="city" required><br><br>
      <label for="equipment">Оборудование:</label>
      <select id="equipment" name="equipment" required>
        <option value="">Выберите оборудование</option>
        <option value="Soundsory">Soundsory</option>
      </select><br><br>
      <label for="message">Дополнительная информация:</label><br>
      <textarea id="message" name="message" rows="4" cols="50"></textarea><br><br>
      <button type="submit">Отправить</button>
    </form>
  </div>
`

// Инициализация EmailJS
declare var emailjs: any;

emailjs.init('dU91bZJQ4hd1CPzEs');

document.getElementById('contact-form')!.addEventListener('submit', function(event) {
  event.preventDefault();

  const form = event.target as HTMLFormElement;
  const formData = new FormData(form);

  const templateParams = {
    phone: formData.get('phone'),
    city: formData.get('city'),
    equipment: formData.get('equipment'),
    message: formData.get('message')
  };

  emailjs.send('service_x2aa4ya', 'template_b5ar4yp', templateParams)
    .then(function() {
      alert('Сообщение отправлено успешно!');
      form.reset();
    }, function(error: any) {
      alert('Ошибка при отправке: ' + JSON.stringify(error));
    });
});
