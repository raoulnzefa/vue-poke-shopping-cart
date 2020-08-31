export default {
  namespaced: true,
  state: { pokeball: [] },
  mutations: {
    pushPokemons(state, pokemons) {
      state.pokeball = pokemons;
    },
    makeFavorite(state, pokemon) {
      pokemon.isFavorite = !pokemon.isFavorite;
    },

    decrementStock(state, pokemon) {
      pokemon.stock--;
    },
  },
  actions: {
    fetchPokemons({ commit }) {
      fetch('https://pokeapi.co/api/v2/pokemon/')
        .then((res) => res.json())
        .then(({ results }) => results.map(({ url }) => fetch(url)))
        .then((requests) => Promise.all(requests))
        .then((responses) =>
          Promise.all(responses.map((response) => response.json())),
        )
        .then((pokemons) =>
          commit(
            'pushPokemons',
            pokemons.map((pokemon) => ({
              ...pokemon,
              ...{
                cost: Math.floor(Math.random() * 1000),
                isFavorite: false,
                stock: Math.floor(Math.random() * 8),
              },
            })),
          ),
        );
    },
    changeFavorite({ commit }, pokemon) {
      commit('makeFavorite', pokemon); //TODO change to makeFavorite pokemons not in pokeball, because pokeball is  pokemon's main storer and I think the favorite property have tolive in othe place, like and array with its own getters
    },
    decrementPokemonStock({ commit }, pokemon) {
      commit('decrementStock', pokemon);
    },
  },

  getters: {
    pokemonsInfo(state) {
      return state.pokeball.map((pokemon) => ({
        id: pokemon.id,
        name: pokemon.name,
        image: pokemon.sprites.other['official-artwork'].front_default,
        cost: pokemon.cost,
        isFavorite: pokemon.isFavorite,
      }));
    },
    isInStock() {
      return (pokemon) => pokemon.stock > 0;
    },
  },
  modules: {},
};
