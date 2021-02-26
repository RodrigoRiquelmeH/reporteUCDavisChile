import Vue from 'vue'
import App from './App.vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import VueSilentbox from 'vue-silentbox'
import { VueMasonryPlugin } from 'vue-masonry';
import WOW from 'wow.js/dist/wow.js';

Vue.use(VueMasonryPlugin)
Vue.use(VueSilentbox)
Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(VueAwesomeSwiper)

import 'bootstrap/dist/css/bootstrap.css'
import '../src/assets/css/fontawesome-all.min.css'
import 'swiper/dist/css/swiper.css'
import 'animate.css/animate.min.css'
import '../src/assets/scss/style.scss'
import 'slick-carousel/slick/slick.css'


Vue.config.productionTip = false
Vue.config.productionSourceMap = false

import { routes } from './router/index'

const router = new VueRouter({
    routes,
    mode: 'history',
    scrollBehavior(to, from, savedPosition) {

        if (savedPosition) {
            return savedPosition;
        } else {
            const position = {};
            let top = 0;
            if (to.name === "Presentacion") {
                top = document.querySelector("#presentacion").offsetTop;
                return position.offset = { y: top };
            }
            if (to.name === "UCDavisEEEUU") {
                top = document.querySelector("#uc-devis-us").offsetTop;
                return position.offset = { y: top };
            }
            if (to.name === "RelacionHistorica") {
                top = document.querySelector("#relacion-historica").offsetTop;
                return position.offset = { y: top };
            }
            if (to.name === "UCDavisChile") {
                top = document.querySelector("#uc-davis-chile").offsetTop;
                return position.offset = { y: top };
            }
            if (to.name === "Mision") {
                top = document.querySelector("#mision").offsetTop;
                return position.offset = { y: top };
            }
            if (to.name === "Impacto") {
                top = document.querySelector("#impacto").offsetTop;
                return position.offset = { y: top };
            }
            if (to.name === "QuienesSomos") {
                top = document.querySelector("#quienes-somos").offsetTop;
                return position.offset = { y: top };
            }
            if (to.name === "AreasTrabajo") {
                top = document.querySelector("#areas-trabajo").offsetTop;
                return position.offset = { y: top };
            }
            if (to.name === "Proyectos") {
                top = document.querySelector("#proyectos").offsetTop;
                return position.offset = { y: top };
            }
            if (to.name === "Cifras") {
                top = document.querySelector("#cifras").offsetTop;
                return position.offset = { y: top };
            }
            if (to.name === "AporteSimetrico") {
                top = document.querySelector("#aporte-simetrico").offsetTop;
                return position.offset = { y: top };
            }
            return { x: 0, y: 0 }
        }
    }
})


new Vue({
    render: h => h(App),
    router,
    mounted() {
        new WOW().init();
    }
}).$mount('#app')
