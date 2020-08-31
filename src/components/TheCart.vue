<template>
  <div v-show="showCart" class="cart">
    <div v-if="checkoutResultIsSuccess">
      <p>Gracias por tu compra.</p>
    </div>
    <div v-else-if="!totalCartItems">
      <p>Agrega tus pokemons!</p>
    </div>
    <div v-else-if="totalCartItems > 0">
      <table class="cart_table">
        <tr class="cart_table-tr">
          <th class="cart_table-th">Name</th>
          <th class="cart_table-th">Qty</th>
          <th class="cart_table-th">Cost</th>
        </tr>
        <tr class="cart_table-tr" v-for="(cartItem, index) of cartItems" :key="index">
          <td class="cart_table-td">{{cartItem.name}}</td>
          <td class="cart_table-td">{{cartItem.quantity}}</td>
          <td class="cart_table-td">{{cartItem.cost}}</td>
        </tr>
      </table>
      <p class="cart_total">Total: {{totalCart}}</p>
      <button @click="checkout" class="cart_button-checkout">Checkout</button>
      <p
        :class="['cart_button-checkout-result', {'cart_button-checkout-result-fail':checkoutResultIsFail }]"
        v-show="checkoutResultIsFail"
      >{{checkoutResult}}</p>
    </div>
  </div>
</template>



<script>
import { mapActions, mapGetters } from "vuex";
export default {
  methods: {
    ...mapActions("cart", { checkout: "checkout" }),
  },
  computed: {
    ...mapGetters("cart", {
      showCart: "showCart",
      cartItems: "cartItems",
      totalCart: "totalCart",
      totalCartItems: "totalCartItems",
      checkoutResult: "checkoutResult",
    }),
    checkoutResultIsFail() {
      return this.checkoutResult === "Fail";
    },
    checkoutResultIsSuccess() {
      return this.checkoutResult === "Success";
    },
  },
};
</script>



<style scoped>
.cart {
  position: fixed;
  right: 0;
  height: auto;
  width: 100%;
  border: solid;
  padding: 2rem;
  z-index: 1;
  background-color: #fff;
}

.cart_table {
  width: 100%;
}

.cart_table-th,
.cart_table-td {
  text-align: center;
  width: 33%;
  font-size: 0.7rem;
}
.cart_total {
  text-align: right;
  padding: 2rem;
}
.cart_button-checkout {
  padding: 1rem;
  border-radius: 5%;
}
.cart_button-checkout-result {
  text-align: center;
  padding: 1rem;
}

.cart_button-checkout-result-fail {
  color: red;
}
@media (min-width: 640px) {
  .cart {
    width: 60%;
    max-width: 450px;
    right: 0;
  }
}
</style>