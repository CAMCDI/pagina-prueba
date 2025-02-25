let currentSlide = 0;
const slides = document.querySelectorAll('.carousel .slide');
const totalSlides = slides.length;

function showSlide() {
  // Ocultar todas las diapositivas
  slides.forEach((slide, index) => {
    slide.style.display = 'none';
  });
  // Mostrar la diapositiva actual
  slides[currentSlide].style.display = 'block';
  // Cambiar a la siguiente diapositiva
  currentSlide = (currentSlide + 1) % totalSlides;
}

setInterval(showSlide, 3000);  // Cambiar la imagen cada 3 segundos
showSlide();  // Mostrar la primera imagen al cargar

document.querySelector('.contact-btn').addEventListener('click', function() {
    // Muestra una alerta como ejemplo. Puedes reemplazar esto con un redireccionamiento o abrir un formulario.
    alert('¡Gracias por querer contactarnos! Pronto te responderemos.');
    // O si quieres redirigir a una página de contacto
    // window.location.href = "contacto.html"; // Reemplaza 'contacto.html' con tu archivo de contacto.
});

// Obtener el modal
var modal = document.getElementById("contactModal");

// Obtener el botón de contacto
var contactBtn = document.querySelector(".contact-btn");

// Obtener el botón de cerrar (×)
var closeBtn = document.querySelector(".close-btn");

// Cuando el usuario haga clic en "Contáctanos", abrir el modal
contactBtn.addEventListener("click", function() {
    modal.style.display = "block";
});

// Cuando el usuario haga clic en el botón de cerrar, cerrar el modal
closeBtn.addEventListener("click", function() {
    modal.style.display = "none";
});

// Cuando el usuario haga clic fuera del modal, también lo cierra
window.addEventListener("click", function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

// Get modal and button elements
const loginModal = document.getElementById('loginModal');
const loginBtn = document.querySelector('.login-btn');
const closeLogin = document.getElementById('closeLogin');
const showRegister = document.getElementById('showRegister');
const showLogin = document.getElementById('showLogin');

// Show the modal
loginBtn.onclick = function() {
  loginModal.style.display = 'block';
}

// Close the modal
closeLogin.onclick = function() {
  loginModal.style.display = 'none';
}

// Show the register form
showRegister.onclick = function() {
  document.getElementById('loginForm').style.display = 'none';
  document.getElementById('registerForm').style.display = 'block';
}

// Show the login form
showLogin.onclick = function() {
  document.getElementById('registerForm').style.display = 'none';
  document.getElementById('loginForm').style.display = 'block';
}

// Close modal if clicked outside the content
window.onclick = function(event) {
  if (event.target == loginModal) {
    loginModal.style.display = 'none';
  }
}

