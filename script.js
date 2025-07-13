// Datos de productos
const productos = [
  { id: 1, nombre: "Cemento", precio: 29.5, imagen: "https://www.loencuentras.com.co/734/cemento-gris-argos-425kg.jpg" },
  { id: 2, nombre: "Arena", precio: 70, imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyGcj8CoQju46uDNbceYIgT6MNgW2oIgUCzxZ5-2YZetvgYzDDzWsm7vtTUnmJ1JbPnhI&usqp=CAU" },
  { id: 3, nombre: "Balastro", precio: 70, imagen: "https://www.materialesparaconstruccion.com.mx/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2020/07/Balastro.jpg.webp" },
  { id: 4, nombre: "Panel", precio: 49, imagen: "https://panelsandwich.co/assets/libres/panel-tapajuntas.webp" },
  { id: 5, nombre: "Superboard m²", precio: 28, imagen: "https://www.grupopintaplast.com/wp-content/uploads/2022/07/placa-superboard.png" },
  { id: 6, nombre: "Ladrillo Bloquelón", precio: 1.7, imagen: "https://ferreteriajamundi.co/wp-content/uploads/2020/04/bloquelones2.png" },
];

const listaProductos = document.getElementById("lista-productos");
const carritoContador = document.getElementById("contador");
const itemsCarrito = document.getElementById("items-carrito");
const totalCarrito = document.getElementById("total");
const carritoPanel = document.getElementById("carrito");
let carrito = [];

// Mostrar productos dinámicamente
function mostrarProductos() {
  productos.forEach(prod => {
    const div = document.createElement("div");
    div.classList.add("producto");
    div.innerHTML = `
      <img src="${prod.imagen}" alt="${prod.nombre}">
      <h3>${prod.nombre}</h3>
      <p>$${prod.precio.toFixed(3)}</p>
      <button onclick="agregarAlCarrito(${prod.id})">Agregar al carrito</button>
    `;
    listaProductos.appendChild(div);
  });
}

// Agregar producto al carrito
function agregarAlCarrito(id) {
  const producto = productos.find(p => p.id === id);
  carrito.push(producto);
  actualizarCarrito();
}

// Actualizar carrito
function actualizarCarrito() {
  itemsCarrito.innerHTML = "";
  let total = 0;

  carrito.forEach((item, index) => {
    total += item.precio;
    const div = document.createElement("div");
    div.textContent = `${item.nombre} - $${item.precio.toFixed(2)}`;
    itemsCarrito.appendChild(div);
  });

  totalCarrito.textContent = total.toFixed(2);
  carritoContador.textContent = carrito.length;
}

// Mostrar/ocultar carrito
document.getElementById("ver-carrito").addEventListener("click", () => {
  carritoPanel.classList.toggle("visible");
});


// Vaciar carrito
document.getElementById("vaciar-carrito").addEventListener("click", () => {
  carrito = [];
  actualizarCarrito();
});

// Cerrar el carrito al hacer clic fuera de él
document.addEventListener("click", function (event) {
  const esCarrito = carritoPanel.contains(event.target);
  const esBotonCarrito = event.target.closest("#ver-carrito");

  if (!esCarrito && !esBotonCarrito) {
    carritoPanel.classList.remove("visible");
  }
});

// Enviar formulario de contacto
document.getElementById("formulario-contacto").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Gracias por contactarnos. Te responderemos pronto.");
  this.reset();
});

// Menú hamburguesa responsive
document.getElementById("menu-toggle").addEventListener("click", function() {
  const menu = document.querySelector(".menu ul");
  menu.classList.toggle("show");
});

// Inicializar
mostrarProductos();
