<template>
  <v-card flat outlined rounded="xl" class="bubble__chat" :style="{maxWidth: (loading ? 65 : maxWidth)+'px', marginTop: loading ? '20px' : null}">
    <v-img
      v-if="data.header"
      height="150"
      src="../assets/placeholder.svg"
    />
    <div class="bubble__text pa-3">
      <h3 class="bubble__text--title" v-text="data.title" />
      <Typing v-if="loading" class="bubble__text--loading" />
      <span v-else class="bubble__text--body" v-text="data.body" />
    </div>
    <div v-for="(item, index) in data.link" :key="index">
      <v-divider />
      <v-btn depressed block text color="primary">
        {{ item.text }}
      </v-btn>
    </div>
  </v-card>
</template>

<script>
import Typing from "./Typing"

export default {
  props: {
    data: {
          type: Object,
          default() {
              return {
                    user : false,
                    header: null,
                    title: null,
                    body: null,
                    link: null
                }
          } 
    },
    maxWidth: {
      default: 250,
    },
    loading: {
      default: false,
    }
  },
  components: {
    Typing
  }
};
</script>

<style lang="scss" scoped>
.bubble {
  &__chat {
    margin: 0 0 10px 10px;
    overflow: hidden;
    &:nth-child(1) {
      margin-left: 0;
    }
  }
  &__text {
    text-align: left;
    & > * {
      display: block;
    }
    &--loading {
      display: flex;
    }
  }
}
</style>