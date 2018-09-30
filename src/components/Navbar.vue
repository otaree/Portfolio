<template>
    <header class="navbar">
      <div class="container">
        <div class="navbar-brand">
          <a @click="navigateTo('home')" class="navbar-item">
            <img src="../assets/images/dina.png" alt="Logo">
          </a>
          <span class="navbar-burger burger" data-target="navbarMenuHeroC">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div class="navbar-menu">
          <div class="navbar-end">
            <a class="navbar-item" @click="navigateTo('home')"  :class="homeActive" >
              Home
            </a>
            <a class="navbar-item" @click="navigateTo('about')" :class="aboutActive">
              About
            </a>
            <a class="navbar-item"  @click="navigateTo('projects')"  :class="projectsActive">
              Projects
            </a>
            <a class="navbar-item" @click="navigateTo('contact')"  :class="contactActive">
              Contact
            </a>
          </div>
        </div>
      </div>
    </header>
</template>

<script>
export default {
  data() {
    return {
      active: "home"
    };
  },
  computed: {
    homeActive() {
      return { "is-active": this.active === "home" };
    },
    aboutActive() {
      return { "is-active": this.active === "about" };
    },
    projectsActive() {
      return { "is-active": this.active === "projects" };
    },
    contactActive() {
      return { "is-active": this.active === "contact" };
    }
  },
  methods: {
    navigateTo(name) {
      this.active = name;
      this.$router.push({ name });
    }
  },
  mounted() {
    if (!this.$router.currentRoute.name) {
      this.navigateTo("home");
    }
  }
};
</script>
