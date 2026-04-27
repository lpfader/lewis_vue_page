<template>
  <section class="home">
    <img src="/name_header.png" class="header-logo" />
    <p style="text-align:left;">This is my Vue project. It started as a chance to connect with other parents at my kid's school but my React page turned out a little better.</p>
    <hr>
    
    <p style="text-align:left;">
      This page was created and published using Vue. For my react page, please go
      <a href="https://lpfader.github.io/lewis_page/" target="_blank">here</a>. This contains my resume and professional portfolio. Please contact me for further examples or information.</p>
    <hr>
    <router-link to="/calendar" class="calendar-link">
      Calendar of activities
    </router-link>
  </section>
</template>
<!-- force rebuild -->

<script>
export default {
  name: "Home",
  methods: {
    sayHello() {
      alert("Greetings")
    }
  }
}
</script>

<style scoped>
.home {
  text-align: center;
  padding: 2rem;
}
.header-logo {
  display: block;
  margin: 0 auto 1.5rem;
  max-width: 340px;   /* controls size */
  width: 100%;        /* scales responsively */
  height: auto;       /* keeps proportions */
}
.calendar-link {
  display: inline-block;
  margin-top: 1.2rem;
  color: #a06ba5; /* your mauve tone */
  font-weight: bold;
  text-decoration: none;
  font-size: 1.1rem;
}

.calendar-link:hover {
  text-decoration: underline;
  opacity: 0.85;
}
</style>
