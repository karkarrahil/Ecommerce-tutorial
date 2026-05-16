import productData from './productData.js';


const productList = document.getElementById('product-list');


//listing of product is complete
const productGrid = productData.map((product) => {
    return `
        <div class="product-card bg-[#171717] border border-white/8 rounded-2xl overflow-hidden flex flex-col">
          <div class="bg-[#1e1e1e] aspect-square flex items-center justify-center relative overflow-hidden">
            <!-- Replace this placeholder with an <img> tag -->
            <div class="w-16 h-16 rounded-full bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center text-yellow-400 text-3xl">${product.emoji}</div>
            ${product.badge ? `<span class="absolute top-2 left-2 tag bg-yellow-400 text-black px-2 py-0.5 rounded-full font-semibold uppercase">${product.badge}</span>`: ""}
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

