import checkoutAPI from '@/checkout';
export default {
  namespaced: true,
  state: { items: [], show: false, checkResult: null },
  mutations: {
    pushItem(state, newCartItem) {
      state.items.push(newCartItem);
    },
    addQuantity(state, cartItem) {
      cartItem.quantity++;
    },
    changeStateShow(state) {
      state.show = !state.show;
    },
    setCheckoutResult(state, result) {
      state.checkResult = result;
    },
    cleanCart(state) {
      state.items = [];
    },
  },
  actions: {
    addPokemonToCart({ commit, dispatch, state, rootGetters }, pokemon) {
      if (rootGetters['pokemons/isInStock'](pokemon)) {
        const cartItem = state.items.find((item) => item.id === pokemon.id);
        if (!cartItem) {
          commit('pushItem', { id: pokemon.id, quantity: 1 });
        } else {
          commit('addQuantity', cartItem);
        }
        dispatch('pokemons/decrementPokemonStock', pokemon, { root: true });
      }
    },
    changeShow({ commit }) {
      commit('changeStateShow');
    },
    checkout({ commit }, pokemons) {
      const cbSuccess = () => {
        commit('setCheckoutResult', 'Success');
        commit('cleanCart');
        setTimeout(() => commit('setCheckoutResult', null), 2000);
      };
      const cbFail = () => commit('setCheckoutResult', 'Fail');
      checkoutAPI.checkoutProcess(pokemons, cbSuccess, cbFail);
    },
  },
  getters: {
    showCart(state) {
      return state.show;
    },
    cartItems(state, getters, rootState) {
      return state.items.map((item) => {
        let cartItem = rootState.pokemons.pokeball.find(
          (pokemon) => item.id === pokemon.id,
        );
        return {
          name: cartItem.name,
          cost: cartItem.cost,
          quantity: item.quantity,
        };
      });
    },
    totalCart(state, getters) {
      return getters.cartItems.reduce(
        (acu, item) => acu + item.cost * item.quantity,
        0,
      );
    },
    totalCartItems(state) {
      return state.items.length;
    },
    checkoutResult(state) {
      return state.checkResult;
    },
  },
  //   modules: {},
};
