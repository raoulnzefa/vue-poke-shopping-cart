<template>
  <nav class="navigation">
    <ul class="navigation_ul">
      <li>PokeShop</li>
      <li>
        <font-awesome-icon @click="changeShow" :icon="['fas','shopping-cart']" size="2x" />
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: { ...mapActions("cart", { changeShow: "changeShow" }) },
};
</script>

<style scoped>
.navigation {
  padding: 2rem;
  position: sticky;
  top: 0;
  z-index: 1;
  background: #fff;
}
.navigation_ul {
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
}
</style>
