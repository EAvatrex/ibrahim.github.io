document.addEventListener('DOMContentLoaded', () => {
    // Remove Loading Screen After 3 Seconds
    setTimeout(() => {
        document.querySelector('.loading-screen').style.display = 'none';
        document.body.classList.add('loaded'); // Optional: To handle body overflow if modified
    }, 3000);

    // Handwriting Effect Texts
    const texts = ["designing", "programming", "web developing", "streaming"];
    const dynamicText = document.getElementById('dynamic-text');
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        if (!isDeleting && charIndex < texts[textIndex].length) {
            dynamicText.textContent += texts[textIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeEffect, 150);
        } else if (isDeleting && charIndex > 0) {
            dynamicText.textContent = texts[textIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(typeEffect, 100);
        } else {
            isDeleting = !isDeleting;
            if (!isDeleting) {
                textIndex = (textIndex + 1) % texts.length;
            }
            setTimeout(typeEffect, isDeleting ? 500 : 1000);
        }
    }

    // Start the typing effect
    typeEffect();
});
