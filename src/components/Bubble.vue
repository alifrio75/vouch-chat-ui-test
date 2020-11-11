<template>
  <div
    class="bubble"
    :style="{
      flexDirection: data.user ? 'row-reverse' : 'row',
      marginLeft: data.user ? 'auto' : isBubbleGroup ? '20px' : 0,
      maxWidth: isBubbleGroup ? 'calc(100% - 56px)' : '70%'
    }"
  >
    <Bot v-if="!data.user" scale="0.08" size="50" />
    <template v-if="!isBubbleGroup && !loading">
      <div class="bubble__list ml-3" :style="{alignItems: data.user ? 'flex-end' : null, paddingRight: data.user ? '20px' : null}">
          <BubbleBody :data="data" />
      </div>
    </template>
    <template v-if="!isBubbleGroup && loading">
      <div class="bubble__list ml-3">
          <BubbleBody :loading="loading"/>
      </div>
    </template>
    <template v-if="isBubbleGroup">
      <v-slide-group class="ml-9">
        <v-slide-item v-for="(item, index) in data" :key="index">
            <BubbleBody :data="item"/>
        </v-slide-item>
      </v-slide-group>
    </template>
  </div>
</template>

<script>
import Bot from "./Bot"
import BubbleBody from "./BubbleBody"

export default {
  data() {
    return {};
  },
  props: {
      block: {
          type: Array,
          default() {
              return [
                {
                    user : false,
                    header: null,
                    title: null,
                    body: null,
                    link: null
                }
            ]
          } 
      },
      loading: {
          type: Boolean
      }
  },
  components: {
    Bot,
    BubbleBody
  },
  computed: {
    isBubbleGroup() {
      return this.block.length > 1
    },
    data() {
      return this.isBubbleGroup ? this.block : this.block[0];
    },
  },
};
</script>

<style lang="scss" scoped>
.bubble {
  display: flex;
  max-width: 70%;
  &__list {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
}
</style>