<template>
  <section class="hero is-black is-fullheight">
  <!-- Hero head: will stick at the top -->
  <div class="hero-head">
    <navbar />
  </div>

  <!-- Hero content: will be in the middle -->
  <div class="hero-body">
      <router-view />
  </div>

  <!-- Hero footer: will stick at the bottom -->
  <div class="hero-foot">
    <Footer />
  </div>
</section>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Navbar,
    Footer
  }
};
</script>


<style lang="sass">
@import '~bulma';
</style>
