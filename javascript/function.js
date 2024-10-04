document.addEventListener('DOMContentLoaded', function () {
    const theme = document.getElementById('theme');
    const bgColor = document.getElementById('bgColor');
    const name = document.getElementById('name');
    const title = document.getElementById('title');
    const message = document.getElementById('message');
    const generateBtn = document.getElementById('generate');
    const selectedImage = document.getElementById('selectedImage');
    const selectedFrame = document.getElementById('selectedFrame');
    const cardTitle = document.getElementById('cardTitle');
    const cardMessage = document.getElementById('cardMessage');
    const cardName = document.getElementById('cardName');
  
    let selectedImgSrc = '';
    let selectedFrameClass = '';
  
    const imagesData = {
      valentine: ['./images/Botella.jpg', './images/Corazon.jpg', './images/Corazon1.jpg', './images/Bici.jpg'],
      birthday: ['./images/PayCumple.jpeg', './images/Pastel.jpeg','./images/Feliz.png', './images/Cum.jpg'],
      navidad: ['./images/VillaNavidad.jpg', './images/TarjetaNavidad.jpg', './images/NavidadSanta.jpeg', './images/ArbolNavidad.jpg']
    };
  
    const imageOptions = document.querySelector('.image-options');
    const frameOptions = document.querySelectorAll('.frame');
  
    theme.addEventListener('change', function () {
      const selectedTheme = theme.value;
      imageOptions.innerHTML = ''; 
      imagesData[selectedTheme].forEach(src => {
        const imgElement = document.createElement('img');
        imgElement.src = src;
        imgElement.addEventListener('click', function () {
          document.querySelectorAll('.image-options img').forEach(img => img.classList.remove('selected'));
          this.classList.add('selected');
          selectedImgSrc = this.src;
        });
        imageOptions.appendChild(imgElement);
      });
    });
  
    theme.dispatchEvent(new Event('change'));
  
    frameOptions.forEach(frame => {
      frame.addEventListener('click', function () {
        frameOptions.forEach(f => f.classList.remove('selected'));
        this.classList.add('selected');
        selectedFrameClass = this.id; 
      });
    });
  
    generateBtn.addEventListener('click', function () {
      if (selectedImgSrc && name.value && title.value && message.value && selectedFrameClass) {
        selectedImage.src = selectedImgSrc;
        cardTitle.textContent = title.value;
        cardMessage.textContent = message.value;
        cardName.textContent = 'Por ' + name.value;
        selectedFrame.className = selectedFrameClass;
        selectedFrame.style.backgroundColor = bgColor.value;
      } else {
        alert('Por favor, completa todos los campos.');
      }
    });
  });
