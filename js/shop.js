let cart = 0;

function addToCart() {
  cart++;
  document.getElementById("cart").innerText = "🛒 " + cart;
}

document.getElementById("design").addEventListener("change", (e) => {
  document.getElementById("brush-img").src =
    "images/toothbrush-" + e.target.value + ".jpg";
});
