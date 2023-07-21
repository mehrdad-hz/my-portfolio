import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import About from "../views/About.vue";
import Contact from "../views/Contact.vue";
import Portfolio from "../views/Portfolio.vue";
import introWelcome from "../components/introWelcome.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "intro",
    component: introWelcome,
  },
  {
    path: "/home",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
  {
    path: "/contact",
    name: "contact",
    component: Contact,
  },
  {
    path: "/portfolio",
    name: "portfolio",
    component: Portfolio,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
