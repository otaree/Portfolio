<template>
  <div class="container">
      <h1 class="title has-text-centered" data-aos="fade-right">About</h1>
      <hr data-aos="fade-left">
        <div class="intro content" data-aos="fade-right">
          <p class="is-size-5 has-text-centered has-text-info has-text-weight-light ">A self-taught developer, I started coding more than 2 years ago. It quickly grew into a passion.</p>
          <p class="is-size-5 has-text-centered has-text-info has-text-weight-light ">I love challenges, new projects, and solving problems.</p>
      </div>
    

      <h3 class="has-text-centered is-size-5 has-text-weight-bold">Tools & frameworks I love to use</h3>


    <div class="about-tool-framework">
      <div class="columns">
        <div class="column is-hidden-mobile">
           <ul data-aos="fade-left">
              <li><strong>HTML5 / CSS3</strong></li>
              <li><strong>Javascript (ES6)</strong></li>
              <li><strong>jQuery</strong></li>
              <li><strong>VueJS</strong></li>
              <li><strong>React</strong></li>
              <li><strong>React Native</strong></li>
              <li><strong>Bootstrap / Bulma</strong></li>
              <li>Sass</li>
            </ul>
        </div>
        <div class="column is-hidden-mobile">
          <ul data-aos="fade-left">
            <li><strong>NodeJs</strong></li>
            <li><strong>Express</strong></li>
            <li><strong>Mongodb</strong></li>
            <li><strong>Socket.io</strong></li>
            <li>Git</li>
            <li>NPM / Yarn</li>
            <li>Jade (Pug)</li>
            <li>Prettier</li>
          </ul>
        </div>
         <div class="column is-mobile-block is-hidden-desktop is-hidden-tablet">
           <ul data-aos="fade-left">
              <li><strong>HTML5 / CSS3</strong></li>
              <li><strong>Javascript (ES6)</strong></li>
              <li><strong>jQuery</strong></li>
              <li><strong>VueJS</strong></li>
              <li><strong>React</strong></li>
              <li><strong>React Native</strong></li>
              <li><strong>Bootstrap / Bulma</strong></li>
              <li>Sass</li>
              <li>Prettier</li>
              <li><strong>NodeJs</strong></li>
              <li><strong>Express</strong></li>
              <li><strong>Mongodb</strong></li>
              <li><strong>Socket.io</strong></li>
              <li>Git</li>
              <li>NPM / Yarn</li>
              <li>Jade (Pug)</li>
            </ul>
         </div>
      </div>   

            
      <!-- <font-awesome-icon icon="coffee" />
      <font-awesome-icon icon="arrow-alt-circle-right" /> -->
    </div>

    <h2 class="has-text-centered is-size-3 has-text-weight-bold">What i do</h2>

      <div class="columns">
        <div class="column is-hidden-mobile">
          <div data-aos="zoom-in-up" class="box has-background-info has-text-light">
            <div class="content">
              <h4 class="has-text-centered has-text-light has-text-weight-light is-size-3">Frontend</h4>
              <p>I do <strong>Frontend integration</strong>, in a <strong>Mobile First strategy</strong>. And I have a Strong preference for easy to use, intuitive UX/UI.</p>
            </div>
          </div>
        </div>
        <div class="column is-hidden-mobile">
          <div data-aos="zoom-in-up" class="box backend has-background-info has-text-light">
            <div class="content">
              <h4 class="has-text-centered has-text-light has-text-weight-light is-size-3">Backend</h4>
              <p> I develop website logics and information systems. I design the database system. And design clean API for the frontend to connect.</p>
            </div>
          </div>
        </div>
        <div class="column is-hidden-mobile">
         <div data-aos="zoom-in-up" class="box mobile has-background-info has-text-light">
            <div class="content">
              <h4 class="has-text-centered  has-text-light has-text-weight-light is-size-3">Mobile</h4>
              <p>I do develop cross-platform mobile App, using the best of the cutting edge technologies available out there.</p>
            </div>
         </div>
        </div>

        <div class="column is-hidden-desktop is-hidden-tablet">
         <div data-aos="zoom-in-up" class="box has-background-info has-text-light">
            <div class="content">
               <h4 class="has-text-centered has-text-light has-text-weight-light is-size-3">Frontend</h4>
              <p>I do <strong>Frontend integration</strong>, in a <strong>Mobile First strategy</strong>. And I have a Strong preference for easy to use, intuitive UX/UI.</p>

              <h4 class="has-text-centered has-text-light has-text-weight-light is-size-3">Backend</h4>
              <p> I develop website logics and information systems. I design the database system. And design clean API for the frontend to connect.</p>              
              
              <h4 class="has-text-centered  has-text-light has-text-weight-light is-size-3">Mobile</h4>
              <p>I do develop cross-platform mobile App, using the best of the cutting edge technologies available out there.</p>
            </div>
         </div>
        </div>
      </div>

  </div>
</template>

<style  scoped>
h2,
h3 {
  margin-bottom: 1%;
}

/* .backend {
  padding-bottom: 11.5%;
} */

.about-tool-framework {
  max-width: 800px;
  margin: auto;
  clear: both;
  padding-left: 15%;
}

hr {
  border: 0;
  height: 3.5px;
  width: 20%;
  margin: 1% auto;
  background-image: hsl(0, 0%, 100%);
}

.about-tool-framework ul li {
  list-style-image: url("../assets/images/bullet.png");
}

.intro {
  margin-top: 5%;
  margin-bottom: 5%;
}
</style>
