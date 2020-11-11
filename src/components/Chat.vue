<template>
  <div>
    <v-container class="fill-height py-0">
      <v-row class="chat__wrapper fill-height" align="end">
        <v-col class="pa-0">
          <transition-group name="list">
            <Bubble v-for="(blockData, index) in thread" :key="'buble'+index" :block="blockData.block"/>
          </transition-group>
        <Bubble v-if="botReplying" loading />
        </v-col>
      </v-row>
    </v-container>
  </div>    
</template>

<script>
import response from '../assets/response.json'
import { mapState } from 'vuex'
import Bubble from './Bubble.vue'

export default {
    components: {
        Bubble
    },
    props: {
        thread: {
            type: Array
        },
        topic: {
            type: String
        }
    },
    data() {
        return {
        };
    },
    computed: {
        ...mapState(['botReplying'])
    },
    methods: {
        scrollTo(){
            const el = this.$el.getElementsByClassName('chat__wrapper')[0]
            if (el) el.scrollTo({top: el.scrollHeight + 100, behavior: 'smooth'})
        },
        addBotResponse() {
            this.$store.commit('setBotReplying', true)
            const interval = 1500
            let loadingTime = 0
            const topicResponse = response.response.find(res => res.input === this.topic)
            topicResponse.response.forEach((res, index) => {
                loadingTime = index * interval
                setTimeout(() => {
                    const waitReply = () => this.$store.commit('addBotReply', {topic: this.topic , thread: res})
                    const scrollAfterBotReply = async () => {
                        const result = await waitReply()
                        result
                    }
                    scrollAfterBotReply()
                }, loadingTime);
            });
            setTimeout(() => {
                this.$store.commit('setBotReplying', false)
            }, loadingTime)
        },
    },
    mounted() {
        this.addBotResponse()
    },
    watch: {
        thread() {
            setTimeout(() => {
                this.scrollTo()
            }, 100);
        }
    },
}
</script>

<style lang="scss" scoped>
.chat__wrapper {
    max-height: calc(100vh - 200px);
    overflow: scroll;
    @media only screen and (min-width: 600px) {
        min-height: calc(100vh - 120px);
    }
}
.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active, .list-leave-active {
  transition: all .65s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(20px);
}
</style>