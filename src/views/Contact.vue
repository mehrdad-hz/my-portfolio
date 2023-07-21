<template>
  <div class="contact-info">
    <a href="https://www.linkedin.com/in/mehrdad-habibzadeh-949746235/">
      <font-awesome-icon :icon="['fab', 'linkedin']" />
    </a>
    <a href="mailto:habibzadeh.mehrdaad@gmail.com">
      <font-awesome-icon :icon="['fas', 'envelope']" />
    </a>
    <a href="https://twitter.com/Mehrdad__hz">
      <font-awesome-icon :icon="['fab', 'twitter']" />
    </a>
    <a href="https://www.instagram.com/mehrdad.hbz/">
      <font-awesome-icon :icon="['fab', 'instagram']" />
    </a>
    <a href="https://github.com/mehrdad-hz">
      <font-awesome-icon :icon="['fab', 'github']" />
    </a>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { CSSRulePlugin } from "gsap/all";
export default {
  mounted() {
    let tl = gsap.timeline();
    let mediaQuery = gsap.matchMedia();
    gsap.registerPlugin(CSSRulePlugin);

    mediaQuery.add("(min-width: 768px)", () => {
      tl.to(".contact-info a", {
        duration: 0.3,
        delay: 0.1,
        opacity: 1,
        y: -40,
        stagger: 0.2,
        ease: "expo.inOut",
      });
    });
  },
};
</script>

<style scoped>
.contact-info {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #eee;
  margin-top: 65px;
  position: absolute;
  bottom: 5%;
  right: 5%;
  flex-direction: column;
}

.contact-info::after {
  content: "";
  position: absolute;
  width: 2px;
  background: rgb(100, 255, 218);
  bottom: -45px;
  height: 320px;
}

.contact-info a {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  z-index: 999;
  margin: 5px 0;
  background: #0a192f;
  padding: 1px;
}

.contact-info svg {
  font-size: 25px;
  color: rgba(100, 255, 218, 0.4);
}

.contact-info a:hover svg {
  color: rgba(100, 255, 218, 1);
  transition: 300ms;
}

.content p {
  margin-top: 0;
  text-align: left;
  color: #1b262c;
  font-weight: 400;
}
</style>
