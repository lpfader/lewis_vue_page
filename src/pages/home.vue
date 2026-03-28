<template>
  <section class="home">
    <img src="/name_header.png" alt="Lewis Fader header" class="header-logo" />
    <p>This page was created and published using Vue. For my react page, please go <a href="https://lpfader.github.io/lewis_page/" target="_blank">here</a>.</p>
     </section>
</template>

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
button {
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background: #d8b4dd;
  border: none;
  border-radius: 6px;
  color: white;
  font-weight: bold;
  cursor: pointer;
}
.header-logo {
  display: block;
  margin: 0 auto 1.5rem;
  max-width: 320px;
  height: auto;
}
</style>
