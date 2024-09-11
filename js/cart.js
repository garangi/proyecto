let cartProducts = [];
let products = [
  {
    id: 1,
    name: "Torta de chocolate",
    description: "Esta torta con helado de vainilla, hace una perfecta combinación.",
    price: "10.000",
    img: "/img/P-05.jpg",
  },
  {
    id: 2,
    name: "Pie de Maracuyá",
    description: "Pie bajo en azucar, con un delicioso esponjado.",
    price: "10.000",
    img: "/img/P-06.jpg",
  },
  {
    id: 3,
    name: "Oblea Don Verguenzas",
    description: "Deliciosa oblea con tres capas, fresa, durazno y crema chantilly.",
    price: "12.000",
    img: "/img/Producto-06.jpg",
  },
  {
    id: 3,
    name: "Picada Don Vergüenzas",
    description: "200 gr de un delicioso cerdo ahumado, bajo en grasa, listo para calentar y servir.",
    price: "40.000",
    img: "/img/P-04.jpg",
  },
  {
    id: 4,
    name: "Costillas BBQ",
    description: "200 gr de unas deliciosas costillas que han tenido 6 horas de preparación.",
    price: "35.000",
    img: "/img/P-02.jpg",
  },
  {
    id: 5,
    name: "Sandwich con tres carnes",
    description: "200 gr de un delicioso cerdo ahumado, bajo en grasa, listo para calentar y servir.",
    price: "19.000",
    img: "/img/P-03.jpg",
  },
];


function loadProducts(productsListParam) {
  productsListParam.forEach((product) => {
    document.getElementById(
      "products-section"
    ).innerHTML += `<div class="product">
        <div class="product-head">
          <img src="${product.img}" alt="" />
        </div>
        <div class="product-body">
          <h3>${product.name}</h3>
          <p>${product.description}</p>
          <div class="payment">
            <h2>$${product.price}</h2>
            <button onclick="addToCart(${product.id})">Agregar</button>
          </div>
        </div>
      </div>`;
  });
}

function addToCart(id) {
  const productFound = products.find((product) => product.id == id);
  addToWhatsapp(productFound);
  cartProducts.push(found);
  loadProductsToCart(cartProducts);
}
  
  function loadProductsToCart(productsListParam) {
    document.getElementById("cart").innerHTML = `<p class="icon">🛒</p>
    <button class="btn-clean" onclick="cleanCart()">🧹</button>`;
    productsListParam.forEach((product) => {
      document.getElementById("cart").innerHTML += `<div class="product">
            <div class="product-head">
              <img src="${product.img}" alt="" />
            </div>
            <div class="product-body">
              <h3>${product.name}</h3>
              <h2>$${product.price}</h2>
              <button class="btn-remove" 
              onclick="removeProductCart(${product.id})">🗑</button>
            </div>
          </div>`;
    });
  }
  
// whatsapp
function addToWhatsapp(product) {
  document.getElementById("whatsapp").href 
  += ",%20"+ product.name + "%20" + product.price;
}
function buy(){
  let mensaje ="Quiero%20comprar%20un%20";
  cartProducts.forEach(
    (product) => 
      (mensaje += product.name + "$20" + product.price + "%20,%20un%20"));
    document.getElementById("whatsapp").href="https://wa.me/573212906920?text=" + mensaje;
}

  function removeProductCart(productParamId) {
    cartProducts = cartProducts.filter(
      (product) => product.id !== productParamId
    );
    loadProductsToCart(cartProducts);
  }
  
  function cleanCart() {
    document.getElementById("cart").innerHTML = `<p class="icon">🛒</p>`;
    cartProducts = [];
  }
  
  loadProducts(products);
  