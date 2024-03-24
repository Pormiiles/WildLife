const sliderImages = document.querySelectorAll('.main-slider');
const btnPrev = document.getElementById('main-prev-button');
const btnNext = document.getElementById('main-next-button');
const animalTexts = document.querySelectorAll('.main-container-animal');

let currentSlide = 0;

function hideSlider(){
    sliderImages.forEach(item => item.classList.remove('on'));
    animalTexts.forEach(item => item.classList.remove('selected'));
}

function showSlider(){
    sliderImages[currentSlide].classList.add('on');
    animalTexts[currentSlide].classList.add('selected');
}

function nextSlider() {
    hideSlider();
    if(currentSlide === sliderImages.length -1){
        currentSlide = 0;
    } else {
        currentSlide++;
    }
    showSlider();
}

function prevSlider() {
    hideSlider();
    if(currentSlide === 0){
        currentSlide = sliderImages.length -1;
    } else {
        currentSlide--;
    }
    showSlider();
}

btnNext.addEventListener('click', nextSlider);
btnPrev.addEventListener('click', prevSlider);

showSlider();

// codigo do botao swicht
document.getElementById("mySwitch").addEventListener("change", function() {
    if(this.checked) {
      window.location.href = "pag2.html"; // Altere "pagina1.html" para o caminho da sua página destino
    } else {
      window.location.href = "index.html"; // Altere "pagina2.html" para o caminho da sua outra página destino
    }
});