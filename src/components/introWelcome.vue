<template>
  <div class="overlay" v-if="!animationCompleted">
    <h1 class="screen">
      <span class="box"></span>
      <span class="hi">Hi, I'm</span>
      <span class="text"></span>
      <span class="cursor">_</span>
    </h1>
    <div class="intro">
      <router-link
        :to="{ name: 'home' }"
        @click.native="fadeOut()"
        class="myBtn"
        >ENTER</router-link
      >
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { mapState } from "vuex";
import { RoughEase } from "gsap/EasePack";
import { TextPlugin } from "gsap/TextPlugin";
import { CustomEase } from "gsap/all";
export default {
  data() {
    return {
      animationCompleted: false,
    };
  },
  mounted() {
    let masterTl = gsap.timeline({ repeat: -1 }).pause();
    let boxTl = gsap.timeline({ delay: 0.2 });

    gsap.registerPlugin(TextPlugin, RoughEase, CustomEase);

    gsap.to(".cursor", { opacity: 0, ease: "power2.inOut", repeat: -1 });

    boxTl
      .to(".box", {
        duration: 1,
        width: "17.8vw",
        delay: 0.3,
        ease: "power4.inOut",
      })
      .from(".hi", { duration: 1, y: "7vw", ease: "power3.out" })
      .to(".box", {
        duration: 0.2,
        height: "7vw",
        ease: "elastic.out",
        onComplete: () => masterTl.play(),
      })
      .to(".hi", {
        y: "0vw",
      })
      .to(".box", {
        duration: 2,
        autoAlpha: 0.7,
        yoyo: true,
        repeat: -1,
        ease: "rough({ template: none.out, strength:  1, points: 20, taper: 'none', randomize: true, clamp: false})",
      });

    this.words.forEach((word) => {
      let tl = gsap.timeline({
        repeat: 1,
        yoyo: true,
        delay: 1,
        repeatDelay: 0,
      });
      tl.to(".text", 1, { duration: 1, text: word });
      masterTl.add(tl);
    }, "1500");
  },
  methods: {
    fadeOut() {
      gsap.to(".myBtn", {
        transition: "0.6s cubic-bezier(0.01, 1.69, 0.99, 0.94)",
      });

      gsap.to(".screen", {
        y: -400,
        opacity: 0,
        duration: 2,
        ease: "power2.inOut",
        delay: 2,
      });

      gsap.from(".overlay", {
        duration: 1,
        ease: "power2.inOut",
        scale: 0.6,
        backgroundColor: "#112240",
      });

      gsap.to(".overlay", {
        delay: 0.5,
        scale: 0.8,
        duration: 0.6,
        top: "-110%",
        ease: "expo.inOut",
        backgroundColor: "#112240",
      });
      this.animationCompleted = !this.animationCompleted;
    },
  },
  computed: {
    ...mapState(["skills", "words"]),
  },
};
</script>

<style scoped>
.screen {
  position: absolute;
  font-size: 6vw;
  font-weight: bold;
  overflow: hidden;
  top: 25%;
  left: 10%;
}

.myBtn {
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.myBtn {
  text-decoration: none;
  display: block;
  padding: 24px 33px;
  font-weight: 700;
  font-size: 17px;
  letter-spacing: 6px;
  color: #fff;
  border: 5px solid #64ffda;
  text-transform: uppercase;
  outline: none;
  overflow: hidden;
  background: none;
  z-index: 1;
  transition: 0.5s ease-out;
}

.myBtn:hover {
  color: #fff;
  letter-spacing: 15px;
}

.myBtn:before {
  content: "";
  position: absolute;
  background: rgba(100, 255, 218, 0.1);
  bottom: 0;
  left: 0;
  right: 0;
  top: 100%;
  z-index: -1;
  transition: top 0.5s ease-out;
}

.myBtn:hover:before {
  top: 0;
}

h1 .box {
  position: absolute;
  bottom: 0;
  display: inline-block;
  background: #64ffda;
  height: 1vw;
  z-index: -1;
}
h1 .hi {
  display: inline-block;
  color: #333;
}

h1 .text {
  font-weight: normal;
  padding-left: 1.2vw;
  color: #fff;
}
</style>
