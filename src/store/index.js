import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    words: ["Mehrdad.", "A Front-end Developer."],
    skills: [
      {
        name: "hmtl",
        id: 1,
        percentage: 90,
        color: "rgba(227, 79, 38, 0.5)",
      },
      {
        name: "css",
        id: 2,
        percentage: 90,
        color: "rgba(38, 77, 228, 0.5)",
      },
      {
        name: "js",
        id: 3,
        percentage: 60,
        color: "rgba(247, 223, 30, 0.5)",
      },
      {
        name: "Vue",
        id: 4,
        percentage: 70,
        color: "rgba(66, 184, 131, 0.5)",
      },
      {
        name: "Angular",
        id: 5,
        percentage: 50,
        color: "rgba(181, 46, 49, 0.5)",
      },
      {
        name: "Bootstrap",
        id: 6,
        percentage: 80,
        color: "rgba(86, 61, 124, 0.5)",
      },
      {
        name: "Sass",
        id: 7,
        percentage: 85,
        color: "rgba(204, 102, 153, 0.5)",
      },
    ],
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
