<template>
  <div class="home">
    <h1>Wellcome to Pokemon Shop</h1>
    <ThePokemonsList />
  </div>
</template>

<script>
import ThePokemonsList from "@/components/ThePokemonsList";

export default {
  name: "Home",
  components: { ThePokemonsList },
};
</script>
<style>
h1 {
  padding: 1rem;
  text-align: center;
  font-size: 0.8rem;
}
@media (min-width: 640px) {
  h1 {
    font-size: 2rem;
    padding: 2rem;
  }
}
</style>
