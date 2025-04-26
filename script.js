let cartbox = document.getElementById("cartbox");
let cart_box1 = document.getElementById("cart_box1");
let feedback = document.getElementById("feedback");
// let cart = document.getElementById("cartbtn");

const products = [
  {
    id: 1,
    name: "laptop",
    price: 38000,
    image: "./images/d1.jpg",
  },
  { id: 2, name: "Mobile", price: 4500, image: "./images/d2.jpg" },
  { id: 3, name: "Clock", price: 3000, image: "./images/d3.jpg" },
  { id: 4, name: "Shoes", price: 3400, image: "./images/d4.jpg" },
  { id: 5, name: "Sun glass", price: 2300, image: "./images/d5.jpg" },
  { id: 6, name: "Smart watch", price: 38000, image: "./images/d6.jpg" },
  { id: 7, name: "Head phones", price: 38000, image: "./images/d7.jpg" },
  { id: 8, name: "Tablete", price: 38000, image: "./images/d8.jpg" },
];
let cart = [];
products.forEach(function (product) {
  const cartdiv = `<div class="cart-grid"">
              <div class="img">
                <img src="${product.image}" alt="img" />
              </div>
              <ul class="info">
                <li class="left-text">${product.name}</li>
                <li class="">${product.price}</li>
                    <button onclick="addtocart(${product.id})" class="button w3l-cart">
                  add to cart
                </button>
              </ul>
          </div>`;
  cartbox.insertAdjacentHTML("beforeend", cartdiv);
  // let cartbox = document.getElementById("cartbox");
  // let div = document.createElement("div");
  // div.className = "info info1";
  // div.innerHTML = `<img src="${product.image}" alt="${product.name}" width="100" />
  // <p>${product.name} - Rs. ${product.price}</p>
  // <button>add to cart</button>`;
  // cartbox.appendChild(div);
});
function addtocart(id) {
  //console.log("add to cart", id);
  const isproductavaible = cart.some(function (product) {
    return product.id === id;
  });
  //console.log(isproductavaible);
  if (isproductavaible) {
    updatefeedback("already added in the cart", "error");
    //feedback.textContent = `already added in the cart`;
    return;
  }
  const cartItem = products.find(function (product) {
    return product.id === id;
  });
  //console.log(cartItem);

  cart.push(cartItem);
  //console.log(cart);
  rendercart();

  //feedback.textContent = `${name} add to the cart`;
  updatefeedback(`${name} add to the cart`, "success");
}
function rendercart() {
  cart_box1.innerHTML = "";
  cart.forEach(function (product) {
    const { id, name, price, image } = product;
    const cartitemdiv = ` <div class="cart-gridview">
          <div class="img">
             <img src="${image}" alt="img" />
          </div>
          <ul class="info2">
            <li class="productName">${name}</li>
                <li class="">${price}</li>
            <button  class="button remove" onclick="removecart(${id})">Remove</button>
          </ul>
          <div class="clear"></div>
        </div>`;
    cart_box1.insertAdjacentHTML("beforeend", cartitemdiv);
  });
  let totalprice = 0;
  for (i = 0; i > cart.length; i++) {
    totalprice = totalprice + cart[1].price;
  }
  console.log(totalprice);
}
function removecart(id) {
  console.log(id);
  let updatecart = cart.filter(function (product) {
    return product.id !== id;
  });
  console.log(updatecart);
}

let timer;
function updatefeedback(msg, type) {
  clearTimeout(timer);
  feedback.style.display = "block";
  if (type === "success") {
    feedback.style.backgroundColor = "green";
  }
  if (type === "error") {
    feedback.style.backgroundColor = "red";
  }
  feedback.textContent = msg;

  timer = setTimeout(function () {
    feedback.style.display = "none";
  }, 3000);
}
