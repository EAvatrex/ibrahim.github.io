document.addEventListener('DOMContentLoaded', () => {
    // Remove Loading Screen After 3 Seconds
    setTimeout(() => {
        document.querySelector('.loading-screen').style.display = 'none';
    }, 3000);
});

// Toggle Paragraph Language
document.addEventListener('DOMContentLoaded', () => {
    // Remove Loading Screen After 3 Seconds
    setTimeout(() => {
        document.querySelector('.loading-screen').style.display = 'none';
    }, 3000);
});

// Toggle Paragraph Language
function toggleLanguage() {
    const aboutText = document.getElementById('about-text');
    const translateBtn = document.querySelector('.translate-btn');

    const englishText = `
        My name is Ibrahim, and I am a Tunisian student with a deep admiration for Russian culture and language.
        Despite coming from a modest background, I have always excelled academically and am eager to unlock my full potential.
        I am currently learning Russian, driven by my passion for your culture, history, and traditions.
        My dream is to contribute to your esteemed university as a dedicated and hardworking student.
    `;
    const russianText = `
        Меня зовут Ибрагим, я студент из Туниса с глубоким восхищением русской культурой и языком.
        Несмотря на скромное происхождение, я всегда преуспевал в учебе и стремлюсь раскрыть свой потенциал.
        В настоящее время я изучаю русский язык, вдохновленный своей страстью к вашей культуре, истории и традициям.
        Моя мечта — внести свой вклад в ваш престижный университет как преданный и трудолюбивый студент.
    `;

    // Toggle text and button label
    if (aboutText.textContent.trim() === englishText.trim()) {
        aboutText.textContent = russianText;
        translateBtn.textContent = "Translate to English";
    } else {
        aboutText.textContent = englishText;
        translateBtn.textContent = "Translate to Russian";
    }
}

