<template>
  <div class="home">
    <!-- <div class="content"></div> -->
    <div class="avatar-row">
      <div class="avatar">
        <img src="../assets/avatar.png" alt="" />
      </div>
      <div class="my-info">
        <h1>
          turning ideas into<br />
          real life products <br />
          is my calling.
        </h1>
        <p>UI/UX Designer & Front-end Engineer</p>
      </div>
    </div>
    <div class="contact-info">
      <a href="https://www.linkedin.com/in/mehrdad-habibzadeh-949746235/">
        <font-awesome-icon :icon="['fab', 'linkedin']" />
      </a>
      <a href="mailto:habibzadeh.mehrdaad@gmail.com">
        <font-awesome-icon :icon="['fas', 'envelope']" />
      </a>
      <a href="#">
        <font-awesome-icon :icon="['fab', 'twitter']" />
      </a>
      <a href="#">
        <font-awesome-icon :icon="['fab', 'instagram']" />
      </a>
      <a href="https://github.com/mehrdad-hz">
        <font-awesome-icon :icon="['fab', 'github']" />
      </a>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import gsap from "gsap";
import { CSSRulePlugin } from "gsap/all";

export default {
  name: "HomeView",
  components: {
    Navbar,
  },
  data() {
    return {
      tab: 1,
      showNav: false,
    };
  },
  mounted() {
    let tl = gsap.timeline();
    let mediaQuery = gsap.matchMedia();
    gsap.registerPlugin(CSSRulePlugin);

    mediaQuery.add("(min-width: 768px)", () => {
      tl.to(".avatar", {
        delay: 0.5,
        opacity: 1,
        duration: 0.3,
        top: "30%",
        animation: "scale 1.5s",
      });

      tl.to(".my-info", {
        delay: 0.1,
        opacity: 1,
        duration: 0.3,
        top: "25%",
      });

      var rule = CSSRulePlugin.getRule(".contact-info:after");
      tl.fromTo(
        rule,
        {
          cssRule: {
            height: "0",
          },
        },
        {
          duration: 0.5,
          cssRule: {
            height: "380px",
          },
          delay: 0,
          ease: "expo.inOut",
        }
      );

      tl.to(".contact-info a", {
        duration: 0.3,
        delay: 0.1,
        opacity: 1,
        y: -40,
        stagger: 0.2,
        ease: "expo.inOut",
      });
    });

    mediaQuery.add("(max-width: 768px)", () => {
      tl.to(".avatar", {
        delay: 0.5,
        opacity: 1,
        duration: 0.3,
        top: "20%",
        animation: "scale 1.5s",
      });
      tl.to(".my-info", {
        delay: 0.1,
        opacity: 1,
        duration: 0.3,
        top: "50%",
      });
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

<style>
html,
body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  background-size: auto;
  background-position: center center;
  background-repeat: no-repeat;
  background-color: #0a192f;
}
.cursor {
  color: #eee;
}

.content {
  width: 0;
  height: 1vw;
  background-color: #112240;
  position: absolute;
  top: 30px;
  left: 30px;
  text-align: center;
  display: inline-block;
  backdrop-filter: blur(30px);
  box-shadow: 0 10px 30px -15px rgb(2 12 27 / 70%);
}

.avatar {
  position: absolute;
  width: 250px;
  height: 250px;
  opacity: 0;
  color: #eee;
  top: 50%;
  left: 8%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  font-size: 130px;
  -webkit-backdrop-filter: blur(15px);
  backdrop-filter: blur(15px);
}

.avatar img {
  width: 230px;
  margin-top: -30px;
}

.avatar::before,
.avatar::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: #0a304a;
  z-index: -1;
  animation: bo 1.3s infinite ease;
}

.avatar::after {
  z-index: -2;
  animation-delay: 1s;
}

.avatar svg {
  padding: 85px 95px;
  background: #1b262c;
}

.my-info {
  top: 18%;
  position: absolute;
  left: 26%;
  opacity: 0;
}

.my-info h1 {
  font-size: 86px;
  color: #eee;
  text-transform: capitalize;
}

.my-info p {
  color: #64ffda;
  font-size: 23px;
  text-align: left;
  padding: 10px;
  background: rgba(0, 0, 0, 0.2);
  width: fit-content;
  margin-top: 20px;
}

.my-info::before {
  content: "";
  background: #080730;
  width: 100px;
  height: 30px;
}

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
  height: 0px;
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

.overlay {
  z-index: 999;
  position: absolute;
  width: 100%;
  height: 100vh;
  background: #0a192f;
}

.overlay p {
  font-size: 300px;
  font-weight: 800;
}

@media screen and (min-width: 320px) and (max-width: 768px) {
  .avatar {
    width: 200px;
    height: 200px;
    left: 25%;
  }

  .avatar img {
    width: 195px;
  }
  .my-info {
    top: 38%;
    left: 12%;
  }
  .my-info h1 {
    font-size: 35px;
  }
  .my-info p {
    font-size: 16px;
  }

  .contact-info {
    bottom: 0;
    flex-direction: row;
    right: 70px;
  }
  .contact-info::after {
    width: 320px;
    bottom: 67px;
    height: 3px;
    right: -35px;
  }
}

@keyframes bo {
  to {
    transform: scale(1.4);
    opacity: 0;
  }
}
@keyframes scale {
  30% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes gellyBounce {
  from,
  to {
    transform: scale(1, 1);
  }
  25% {
    transform: scale(0.9, 1.1);
  }
  50% {
    transform: scale(1.1, 0.9);
  }
  75% {
    transform: scale(0.95, 1.05);
  }
}
</style>
