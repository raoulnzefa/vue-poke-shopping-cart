export default {
  checkoutProcess(pokemons, cb, cbFail) {
    setTimeout(Math.random() > 0.5 ? cb(pokemons) : cbFail(), 1000);
  },
};
