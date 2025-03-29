// Espera a que el DOM cargue
document.addEventListener('DOMContentLoaded', () => {
  console.log('✅ Sitio cargado correctamente');

  // Ejemplo de función para mostrar un mensaje de bienvenida
  mostrarBienvenida();

  // Aquí puedes preparar futuras funciones como:
  // inicializarCarrito();
  manejarMenuResponsive();
});

// 💬 Mostrar mensaje de bienvenida en consola
function mostrarBienvenida() {
  console.log('Bienvenido a Infortech - Tu tienda de tecnología');
}

// 🛒 Función base para el carrito (se desarrollará más adelante)
function inicializarCarrito() {
  let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  console.log('Carrito inicializado:', carrito);
}

// 📱 Menú responsive (opcional si haces menú hamburguesa después)
function manejarMenuResponsive() {
  const toggle = document.querySelector('#menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
      navLinks.classList.toggle('activo');
    });
  }
}
