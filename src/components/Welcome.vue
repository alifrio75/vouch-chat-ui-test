<template>
  <v-container class="welcome">
    <div>
      <Bot large/>
      <h3>Welcome To</h3>
      <h1 class="primary--text">Pan Pacific Singapore</h1>
    </div>
    <div>
      <p class="grey--text">By continuing, you agree to our <a href="#" class="primary--text">Privacy Policy</a> and <a href="#">Term of Use</a>.</p>
      <v-btn color="primary" block depressed rounded @click="$emit('continue', true)">Get Started</v-btn>
    </div>
  </v-container>
</template>

<script>
import Bot from './Bot.vue';

export default {
  components: {
    Bot
  }
}
</script>

<style scoped lang="scss">
.welcome {
  max-width: 300px;
  margin: auto;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h1 {
    font-size: 29px;
  }
}
</style>
