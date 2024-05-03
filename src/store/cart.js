import { computed, reactive } from "vue";

const cart = reactive({
  items: {},
  totalCartItems: computed(() => {
    let total = 0;
    for (let id in cart.items) {
      total += cart.items[id].quantity;
    }
    return total;
  }),

  totalPrice: computed(() => {
    let total = 0;
    for (let id in cart.items) {
      total += cart.items[id].product.price * cart.items[id].quantity;
    }
    return parseFloat(total.toFixed(2));
  }),

  addItem(product) {
    if (this.items[product.id]) {
      this.items[product.id].quantity++;
    } else {
      this.items[product.id] = {
        product,
        quantity: 1,
      };
    }

    this.saveCartInLocalStorage();
  },
  increaseQuantity(product) {
    this.items[product.id].quantity++;
    this.saveCartInLocalStorage();
  },
  decreaseQuantity(product) {
    this.items[product.id].quantity--;
    this.saveCartInLocalStorage();
  },

  removeItem(product) {},

  // Save in LocalStorage
  saveCartInLocalStorage() {
    localStorage.setItem("cart", JSON.stringify(this.items));
  },
  getCartFromLocalStorage() {
    this.items = JSON.parse(localStorage.getItem("cart")) || {};
  },
});

cart.getCartFromLocalStorage();
export default cart;
