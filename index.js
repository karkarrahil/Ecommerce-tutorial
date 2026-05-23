import productData from './productData.js';


const productList = document.getElementById('product-list');
const cartItems = document.getElementById("cart-items");


const cartItemsData = [{
  "id": 1,
  "name": "Air Wave Runners",
  "category": "Footwear",
  "price": 129,
  "emoji": "👟",
  "badge": "New"
},];

//listing of product is complete
const productGrid = productData.map((product) => {
  return `
        <div class="product-card bg-[#171717] border border-white/8 rounded-2xl overflow-hidden flex flex-col">
          <div class="bg-[#1e1e1e] aspect-square flex items-center justify-center relative overflow-hidden">
            <!-- Replace this placeholder with an <img> tag -->
            <div class="w-16 h-16 rounded-full bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center text-yellow-400 text-3xl">${product.emoji}</div>
            ${product.badge ? `<span class="absolute top-2 left-2 tag bg-yellow-400 text-black px-2 py-0.5 rounded-full font-semibold uppercase">${product.badge}</span>` : ""}
          </div>
          <div class="p-3 flex flex-col gap-2 flex-1">
            <div>
              <p class="text-white/40 text-xs mb-0.5">${product.category}</p>
              <h3 class="font-medium text-sm leading-tight">${product.name}</h3>
            </div>
            <div class="flex items-center justify-between mt-auto">
              <span class="price-tag text-yellow-400 text-lg">$${product.price.toFixed(2)}</span>
              <!-- Wire up this button with JS: add item to cart -->
              <button class="add-btn bg-yellow-400 hover:bg-yellow-300 text-black text-xs font-semibold px-3 py-1.5 rounded-full">
                + Add
              </button>
            </div>
          </div>
        </div>`
})

productList.innerHTML = productGrid.join("")

const cartItemsGrid = cartItemsData.map((item) => `
   <div class="cart-item bg-[#171717] border border-white/8 rounded-2xl p-3 flex gap-3 items-center">
          <!-- Thumbnail -->
          <div class="w-14 h-14 rounded-xl bg-[#1e1e1e] flex items-center justify-center text-2xl shrink-0">👟</div>
          <!-- Info -->
          <div class="flex-1 min-w-0">
            <p class="text-sm font-medium leading-tight truncate">Air Wave Runners</p>
            <p class="text-yellow-400 price-tag text-base mt-0.5">$129</p>
          </div>
          <!-- Quantity Controls -->
          <div class="flex items-center gap-1.5 shrink-0">
            <!-- Wire decrement button with JS -->
            <button class="qty-btn w-7 h-7 rounded-full bg-white/8 border border-white/10 text-sm flex items-center justify-center font-bold">−</button>
            <!-- Update this quantity with JS -->
            <span class="qty w-6 text-center text-sm font-semibold">1</span>
            <!-- Wire increment button with JS -->
            <button class="qty-btn w-7 h-7 rounded-full bg-white/8 border border-white/10 text-sm flex items-center justify-center font-bold">+</button>
          </div>
          <!-- Remove -->
          <!-- Wire this button to remove item from cart -->
          <button class="text-white/20 hover:text-red-400 transition ml-1 text-lg leading-none">✕</button>
        </div>
`);

cartItems.innerHTML = cartItemsGrid.join("")