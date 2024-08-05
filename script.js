document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("nav ul li a");
  const mainContent = document.getElementById("main-content");

  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const content = event.target.getAttribute("data-content");
      loadContent(content);
    });
  });

  function loadContent(content) {
    switch (content) {
      case "Catalogo":
        mainContent.innerHTML =
        `
          <div id="catalogo">
          <h2>Catálogo de Productos</h2>
          <div class="producto">
              <div class="item">
                  <img src="camisa1.jpg" alt="Camisa Estilo 1"> <!-- Reemplaza con la URL de la imagen del producto -->
                  <h3>Camisa Estilo 1</h3>
                  <p>Una camisa cómoda y elegante, perfecta para cualquier ocasión.</p>
                  <p class="precio">$29.99</p>
              </div>
              <div class="item">
                  <img src="pantalon1.jpg" alt="Pantalón Estilo 1"> <!-- Reemplaza con la URL de la imagen del producto -->
                  <h3>Pantalón Estilo 1</h3>
                  <p>Pantalón de alta calidad con un ajuste moderno.</p>
                  <p class="precio">$49.99</p>
              </div>
              <div class="item">
                  <img src="chaqueta1.jpg" alt="Chaqueta Estilo 1"> <!-- Reemplaza con la URL de la imagen del producto -->
                  <h3>Chaqueta Estilo 1</h3>
                  <p>Chaqueta duradera y estilosa para el clima frío.</p>
                  <p class="precio">$89.99</p>
              </div>
              <!-- Añadir más productos aquí -->
          </div>
      </div>`
        break;
      case "Home":
        mainContent.innerHTML =
          `<div id="introduccion">
        <h2>Sobre Stile</h2>
        <p>
            En <span class="highlight">Stile</span>, dos mentes creativas se unen para dar vida a una visión única en el mundo de la moda. Apasionadas por el diseño y la innovación, creamos prendas que no solo te hacen sentir bien, sino que también reflejan tu personalidad y estilo.
        </p>
        <p>
            Nuestra misión es empoderar a través de la moda, ofreciendo piezas que te permitan expresarte con confianza y autenticidad.
        </p>
    </div>`
        break;
      case "About":
        mainContent.innerHTML =
          ` <div id="sobre-nosotros">
        <h2>Sobre Nosotras</h2>
        <p>
            Somos <span class="highlight">Sara y María</span>, dos apasionadas de la moda que unimos nuestras fuerzas para crear <span class="highlight">(Stile)</span>, una marca que busca revolucionar el mundo de la ropa.
        </p>
        <p>
            Con ganas de innovar y progresar, nos esforzamos por diseñar prendas que no solo sean cómodas y de alta calidad, sino también únicas y atrevidas. Nuestra misión es inspirar a nuestros clientes a expresarse a través de la moda y a no tener miedo de ser ellos mismos.
        </p>
        <p>
            ¡Únete a nosotros en este viaje de creatividad y estilo!
        </p>
    </div>`;
          
        break;
      case "Contact":
        mainContent.innerHTML =
          `<div id="contacto">
        <h2>Contáctanos</h2>
        <div class="telefono">
            <p>Teléfono: <a href="tel:+1234567890">+123 456 7890</a></p> <!-- Reemplaza con tu número de teléfono -->
        </div>
        <div class="sociales">
            <a href="https://www.facebook.com/tuempresa" target="_blank" title="Síguenos en Facebook">
                <img src="facebook-icon.png" alt="Facebook"> <!-- Reemplaza con la URL del icono de Facebook -->
            <li>
            <a href="https://twitter.com/tuempresa" target="_blank" title="Síguenos en Twitter">
                <img src="twitter-icon.png" alt="Twitter"> <!-- Reemplaza con la URL del icono de Twitter -->
            <li>
            <a href="https://www.instagram.com/tuempresa" target="_blank" title="Síguenos en Instagram">
                <img src="instagram-icon.png" alt="Instagram"> <!-- Reemplaza con la URL del icono de Instagram -->
            <li>
            <a href="https://www.linkedin.com/company/tuempresa" target="_blank" title="Síguenos en LinkedIn">
                <img src="linkedin-icon.png" alt="LinkedIn"> <!-- Reemplaza con la URL del icono de LinkedIn -->
            <li>
    </div>`
        break;
        case "Formasdepago":
        mainContent.innerHTML =
        `<div id="formas-de-pago">
        <h2>Formas de Pago</h2>
        <ul>
            <li>Tarjeta de crédito</li>
            <li>Tarjeta de débito</li>
            <li>Transferencia bancaria</li>
            <li>Pago en efectivo</li>
            <li>Pago mediante PayPal</li>
            <li>Financiamiento a través de nuestra tienda</li>
        </ul>
    </div>`
    ;
        break;
        case "productos":
          mainContent.innerHTML =
          `<div id="productos">
          <h2>Productos de Ropa Llamativos</h2>
          <ul>
              <li>
                  <img src="zapa....jpg" alt="Sneakers Chunky">
                  <div class="producto-info">
                      <div class="producto-nombre">Sneakers Chunky</div>
                      <div class="producto-precio">$79.99</div>
                  </div>
              </li>
              <li>
                  <img src="VESTIDO.webp" alt="Vestido Midi Estampado">
                  <div class="producto-info">
                      <div class="producto-nombre">Vestido Midi Estampado</div>
                      <div class="producto-precio">$69.99</div>
                  </div>
              </li>
              <li>
                  <img src="CAMISA.jpg" alt="Camiseta Oversize">
                  <div class="producto-info">
                      <div class="producto-nombre">Camiseta Oversize con Diseño Gráfico</div>
                      <div class="producto-precio">$35.99</div>
                  </div>
              </li>
              <!-- Continúa con los demás productos -->
          </ul>
      </div>`
      ;
          break;
          case "Ubicacion":
            mainContent.innerHTML =
            `<div id="formas-de-pago">
            <h2>Ubicacion</h2>
            <ul>
                En medellin:centro comercial mayorca #47-57, sabaneta, Antioquia Colombia en Envigado.
            </ul>
        </div>
        <div id="formas-de-pago">
            <h2>Ubicacion</h2>
            <ul>
                En bogota: centro comercial santa fe:calle 183 No. 45-03.
            </ul>
        </div>`
        ;
            break;
    }
  }
});
