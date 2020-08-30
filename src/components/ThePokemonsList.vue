<template>
  <div class="pokemons__container">
    <div
      v-for="(pokemon, index) of pokemons"
      :key="index"
      class="pokemons__container-card"
    >
      <img
        class="pokemons__container-card-img"
        :src="pokemon.image"
        :alt="pokemon.name"
      />
      <div class="pokemons__container-card-description">
        <font-awesome-icon
          @click="changeFavorite(index)"
          :class="['pokemons__container-card-description-heart']"
          :icon="[pokemon.isFavorite ? 'fas' : 'far', 'heart']"
          size="3x"
        />
        <p class="pokemons__container-card-description-name ">
          {{ pokemon.name }}
        </p>
        <p class="pokemons__container-card-description-cost">
          {{ pokemon.cost }}
        </p>
        <button class="pokemons__container-card-button">Add to cart</button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  methods: {
    ...mapActions('pokemons', {
      fetchPokemons: 'fetchPokemons',
      changeFavorite: 'changeFavorite',
    }),
  },
  computed: { ...mapGetters('pokemons', { pokemons: 'pokemonsInfo' }) },
  created() {
    this.fetchPokemons();
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Martel:wght@200;300;400;600&display=swap');
* {
  font-family: 'Press Start 2P';
}

.pokemons__container {
  margin: auto;
  width: 80%;
  position: relative;
}
.pokemons__container-card {
  box-shadow: 0 0 8px 1px gray;
  margin-bottom: 1rem;
  border-radius: 8px;
  display: flex;
  transition: all 0.3s ease-in;
}
.pokemons__container-card:hover {
  box-shadow: 0 0 9px 2px pink;
}
.pokemons__container-card-img {
  width: 40%;
}
.pokemons__container-card-description {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(5, 20%);
  width: 60%;
  padding: 1rem;
  font-size: 0.5rem;
  text-align: center;
}
.pokemons__container-card-description-name {
  grid-column: 1 / end;
  grid-row: 1;
  font-size: 0.8rem;
  place-self: center;
}
.pokemons__container-card-description-cost {
  grid-column: 1 / end;
  font-size: 0.8rem;
  grid-row: 3;
  place-self: center;
}
.pokemons__container-card-description-heart {
  grid-column: 7 / end;
  grid-row: 5;
  place-self: center;
  color: red;
}
.pokemons__container-card-button {
  position: relative;
  font-size: 0.5rem;
  font-size: 0.4rem;
  /* font-family: 'Martel'; */
  font-weight: 600;
  grid-column: 1 / 7;
  grid-row: 4 / 6;
  padding: 0.3rem;
  place-self: center;
  background-color: transparent;
  border: solid 2px blue;
  background: cornflowerblue;
  border-radius: 5%;
  color: #fff;
}
</style>
