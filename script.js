// Enviar mensaje por WhatsApp
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const nombre = this.nombre.value;
  const telefono = this.telefono.value;
  const mensaje = this.mensaje.value;
  const numeroWhatsApp = '525588665380';

  if (!/^\d{10,15}$/.test(numeroWhatsApp)) {
    alert('El número de WhatsApp no es válido. Debe tener entre 10 y 15 dígitos.');
    return;
  }

  const texto = `Hola, soy ${nombre}. Mi teléfono es ${telefono}. Quiero preguntar: ${mensaje}`;
  const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`;

  alert(`Enviando mensaje a WhatsApp: ${numeroWhatsApp}`);
  window.open(url, '_blank');
});

// Menú hamburguesa
document.querySelector('.menu-toggle').addEventListener('click', () => {
  document.querySelector('.navbar ul').classList.toggle('show');
});


