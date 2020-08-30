<template>
  <div class="home">
    Wellcome to Pokemon Shop
    <ThePokemonsList />
  </div>
</template>

<script>
import ThePokemonsList from '@/components/ThePokemonsList';

export default {
  name: 'Home',
  components: { ThePokemonsList },
};
</script>
