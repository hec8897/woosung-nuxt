import Vue from 'vue'
import axios from 'axios'
import VueCarousel from 'vue-carousel';
import VueMoment from 'vue-moment';

Vue.use(VueCarousel);
Vue.use(VueMoment);

Vue.prototype.$Axios = axios;
