<template>
  <div class="menu-row">
    <div class="menu">
      <ul class="navbar">
        <li>
          <router-link :to="{ name: 'home' }"
            ><span class="num">01.</span> Home</router-link
          >
        </li>
        <li>
          <router-link :to="{ name: 'about' }"
            ><span class="num">02.</span>About</router-link
          >
        </li>
        <li>
          <router-link :to="{ name: 'intro' }" href=""
            ><span class="num">03.</span>Portfolio</router-link
          >
        </li>
        <li>
          <router-link :to="{ name: 'contact' }"
            ><span class="num">04.</span>Contact</router-link
          >
        </li>
      </ul>
    </div>
    <div class="mobile-menu">
      <ul class="main-menu">
        <li
          :style="[
            tab == 1 ? { opacity: '1', marginTop: '45px' } : { opacity: '1' },
          ]"
        >
          <router-link
            @click.native="changeTab(1)"
            :to="{ name: 'home' }"
            :style="[tab == 1 ? { color: '#0a192f' } : { color: '#2e7573' }]"
            ><font-awesome-icon :icon="['fas', 'house']"
          /></router-link>
        </li>
        <li
          :style="[
            tab == 2 ? { opacity: '1', marginTop: '45px' } : { opacity: '1' },
          ]"
        >
          <router-link
            @click.native="changeTab(2)"
            :to="{ name: 'about' }"
            :style="[tab == 2 ? { color: '#0a192f' } : { color: '#2e7573' }]"
            ><font-awesome-icon :icon="['fas', 'briefcase']"
          /></router-link>
        </li>
        <li
          :style="[
            tab == 3 ? { opacity: '1', marginTop: '46px' } : { opacity: '1' },
          ]"
        >
          <router-link
            :to="{ name: 'intro' }"
            @click.native="changeTab(3)"
            :style="[tab == 3 ? { color: '#0a192f' } : { color: '#2e7573' }]"
            ><font-awesome-icon :icon="['fas', 'file-lines']"
          /></router-link>
        </li>
        <li
          :style="[
            tab == 4 ? { opacity: '1', marginTop: '45px' } : { opacity: '1' },
          ]"
        >
          <router-link
            @click.native="changeTab(4)"
            :to="{ name: 'contact' }"
            :style="[tab == 4 ? { color: '#0a192f' } : { color: '#2e7573' }]"
            ><font-awesome-icon :icon="['fas', 'id-badge']"
          /></router-link>
        </li>
      </ul>
      <div
        class="tab-ctr"
        :style="[
          tab == 1
            ? { left: '4.3%' }
            : tab == 2
            ? { left: '26.3%' }
            : tab == 3
            ? { left: '48.5%' }
            : tab == 4
            ? { left: '70.4%' }
            : null,
        ]"
      >
        <svg viewBox="0 0 1100 600">
          <path
            d="M 0 0 C 150 0 150 350 300 450 C 450 550 650 550 800 450 C 950 350 950 0 1100 0 "
            fill="#0a192f"
          />
          <circle id="sphere" cx="550" cy="125" r="300" fill="#64ffda" />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
export default {
  data() {
    return {
      tab: 1,
    };
  },
  mounted() {
    let tl = gsap.timeline({ duration: 1, delay: 0.1 });
    tl.to(".menu .navbar li a", {
      duration: 0.3,
      delay: 0.1,
      opacity: 1,
      x: -25,
      stagger: 0.2,
      ease: "expo.inOut",
    });
  },
  methods: {
    changeTab(num) {
      this.tab = num;

      let tl = gsap.timeline();
      tl.to("#sphere", {
        cy: "625",
        duration: 0.02,
      }).to("#sphere", { cy: "125", duration: 0.02 }, ">0.3");
    },
  },
};
</script>

<style>
.menu {
  position: absolute;
  width: 25vw;
  right: 5%;
  top: 10%;
  z-index: 99;
}

.menu .navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style-type: none;
}

.menu .navbar li a {
  text-decoration: none;
  color: #eee;
  opacity: 0;
  display: flex;
  align-items: center;
  font-weight: 500;
}

.menu .navbar li a span {
  color: #64ffda;
}
.mobile-menu {
  display: none;
}

@media screen and (max-width: 768px) {
  .menu {
    display: none;
  }

  .mobile-menu {
    display: block;
  }
  .mobile-menu ul {
    position: absolute;
    background: #1a2c45;
    width: 100%;
    height: 8%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    list-style-type: none;
    padding: 20px 0;
  }

  .mobile-menu ul li {
    width: 40px;
    min-width: 20px;
    max-width: 40px;
    height: 50px;
    min-height: 20px;
    max-height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 0;
    z-index: 99;
    transition: opacity 0.25s ease 0.075s;
  }

  .mobile-menu ul li a {
    font-size: 30px;
    color: #bbb;
    text-decoration: none;
    text-align: center;
    cursor: unset;
  }

  .tab-ctr {
    position: absolute;
    width: 25%;
    top: 15px;
    transition: all 0.4s ease;
  }
  .tab-ctr > svg {
    width: 100%;
    height: 65%;
    overflow: visible;
    transform: rotate(180deg);
  }
}
</style>
