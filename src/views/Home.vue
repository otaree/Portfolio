<template>
    <div class="container">
      <div class="me">
        <figure class="image is-128x128" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
          <img class="is-rounded" src="../assets/images/me.jpg">
        </figure>
        <h2 class="has-text-warning has-text-centered is-size-2 title hi">hi</h2>
        <div class="columns">
          <div class="column is-6 is-offset-3">
            <p class="has-text-centered	is-size-5"  data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500">my name is Dinabandhu Chakraborty,
I’m a Full Stack Web Developer based in Tezu, India. I have serious passion for creating intuitive, dynamic user experiences. 
</p>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  components: {}
};
</script>

<style scoped>
.me {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
}
.hi {
  margin-top: 2%;
}
</style>
