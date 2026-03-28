<template>
  <section class="home">
    <img src="/name_header.png" class="header-logo" />

    <p>
      This page was created and published using Vue. For my react page, please go
      <a href="https://lpfader.github.io/lewis_page/" target="_blank">here</a>.
    </p>

    <router-link to="/calendar" class="calendar-link">
      Calendar of family events
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
  max-width: 320px;   /* controls size */
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
