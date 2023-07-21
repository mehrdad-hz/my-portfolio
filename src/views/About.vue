<template>
  <div class="container">
    <div class="about-row">
      <div class="title">
        <h2>Mehrdad Habibzadeh</h2>
        <span>UI/UX Designer & Front-end Developer</span>
      </div>
      <div class="resume">
        <p>
          Since beginning my journey as a self-taught front-end developer over 6
          years ago, I've done work for agencies, and collaborated with talented
          people to create digital products for both business and consumer use.
        </p>
        <p>
          I'm quietly confident, naturally curious, and passionate about
          crafting beautiful and intuitive interfaces that enhance user
          experience.
        </p>
        <p>
          With expertise in various front-end frameworks and libraries such as
          vue.js and angular.js,
        </p>
        <p>
          I have the skills needed to transform designs into responsive and
          functional websites.
        </p>
        <p>
          I'm committed to staying up-to-date with the latest industry trends
          and technologies and thrive on collaborating with cross-functional
          teams to deliver innovative solutions.
        </p>
        <p>
          Whether I am developing new projects or improving existing ones, my
          goal is to create a seamless and enjoyable user experience.
        </p>
        <p>
          along the way I’ve used these technologies, tools, languages and
          methods :
        </p>
        <ul class="skill-list">
          <li>HTML5, PUG</li>
          <li>CSS3, SCSS, SASS, LESS, Bootstrap</li>
          <li>Javascript, Typescript, JQuery, Firebase</li>
          <li>Vue.js, Angular.js, Angular</li>
          <li>Greensock(GSAP), Vuetify, Anime.js</li>
          <li>Vuex, Vue Router, Vue Dev Tools</li>
          <li>Git, NPM, Yarn, SVN</li>
          <li>
            Adobe Photoshop, Adobe XD, Figma, VSCode, SublimeText, Terminal
          </li>
        </ul>
      </div>
    </div>
    <div class="skill-row">
      <div class="skills">
        <font-awesome-icon
          class="skill-item"
          :icon="['fab', 'html5']"
          style="color: #e34f26"
        />
        <font-awesome-icon
          class="skill-item"
          :icon="['fab', 'css3']"
          style="color: #264de4"
        />
        <font-awesome-icon
          class="skill-item"
          :icon="['fab', 'js']"
          style="color: #f7df1e"
        />
        <font-awesome-icon
          class="skill-item"
          :icon="['fab', 'vuejs']"
          style="color: #42b883"
        />
        <font-awesome-icon
          class="skill-item"
          :icon="['fab', 'angular']"
          style="color: #b52e31"
        />
        <font-awesome-icon
          class="skill-item"
          :icon="['fab', 'bootstrap']"
          style="color: #563d7c"
        />
        <font-awesome-icon
          class="skill-item"
          :icon="['fab', 'sass']"
          style="color: #cc6699"
        />
      </div>
      <div class="skills-fillbar">
        <span class="progress" v-for="skill in skills" :key="skill.id">
          <span
            class="fillbar"
            :id="`fillbar${skill.id}`"
            :style="{ width: skill.percentage + '%' }"
          >
            <span class="percentage">{{ skill.percentage + "%" }}</span>
          </span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Navbar from "@/components/Navbar.vue";
import { gsap } from "gsap";
export default {
  components: {
    Navbar,
  },
  computed: {
    ...mapState(["skills"]),
  },
  mounted() {
    let tl = gsap.timeline({ duration: 1, delay: 0.001 });
    tl.fromTo(
      ".skill-item",
      {
        opacity: 0,
        bottom: "-25%",
        ease: "expo.inOut",
      },
      {
        bottom: 0,
        opacity: 1,
        duration: 0.03,
        stagger: 0.1,
        animation: "gellyBounce 1.5s",
      }
    );
    tl.fromTo(
      ".progress",
      {
        width: 0,
      },
      {
        width: "100%",
      }
    );
    this.skills.forEach((item) => {
      tl.fromTo(
        "#fillbar" + item.id,
        {
          width: 0,
          opacity: 0,
          duration: 0.1,
        },
        {
          width: item.percentage + "%",
          opacity: 1,
          duration: 0.1,
          backgroundColor: "rgba(100, 255, 218, 0.5)",
        }
      );
    });
  },
};
</script>

<style scoped>
.container {
  width: 80%;
  min-height: 100vh;
  margin: auto;
  position: relative;
}
.about-row {
  width: 50%;
  position: absolute;
  top: 15%;
  left: 0;
}
.title h2 {
  font-size: 45px;
  margin-bottom: 15px;
  color: #fff;
}

.title span {
  background: rgba(0, 0, 0, 0.6);
  padding: 10px 15px;
  font-size: 20px;
  color: #64ffda;
}

.resume {
  margin-top: 30px;
}

.resume p {
  color: #eee;
  margin-bottom: 10px;
  line-height: 23px;
  text-align: justify;
}

.resume .skill-list {
  margin: 15px 0 0 30px;
  list-style: square;
  color: #fff;
  line-height: 30px;
  font-weight: 600;
}

.skill-row {
  position: absolute;
  width: 45%;
  top: 30%;
  left: 60%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.skills {
  width: 10%;
  height: 43vh;
  color: #eee;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 40px;
  margin-right: 55px;
}

.skills .skill-item {
  position: relative;
  opacity: 0;
  width: 40px;
}

.skills-fillbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  height: 40.4vh;
  width: 100%;
}

.skills-fillbar .progress {
  background-color: #333;
  position: relative;
  height: 15px;
}

.skills-fillbar .fillbar {
  position: absolute;
  height: 15px;
  box-shadow: 0 0px 15px -5px #000;
  font-size: 14px;
  font-weight: 600;
  opacity: 0;
}

.skills-fillbar .fillbar .percentage {
  position: absolute;
  left: -50px;
  color: #fff;
}

@media screen and (max-width: 768px) {
  .container {
    width: 90%;
  }
  .about-row {
    width: 100%;
    top: 65%;
    left: 0;
    padding-bottom: 50px;
  }
  .skill-row {
    width: 100%;
    top: 15%;
    left: 0;
  }
  .skills-fillbar .fillbar .percentage {
    left: -40px;
  }
  .title span {
    font-size: 14px;
  }
}
</style>
