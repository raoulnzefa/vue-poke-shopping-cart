import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faHeart as solidHeart,
  faEye as solidEye,
  faShoppingCart,
} from '@fortawesome/free-solid-svg-icons';
import {
  faHeart as regularHeart,
  faEye as regularEye,
  faChartBar,
} from '@fortawesome/free-regular-svg-icons';

library.add([
  solidHeart,
  regularHeart,
  solidEye,
  regularEye,
  faChartBar,
  faShoppingCart,
]);

Vue.component('font-awesome-icon', FontAwesomeIcon);
