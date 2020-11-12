<template>
  <v-app app>
    <v-app-bar color="primary" flat app>
      <v-spacer />
      <v-toolbar-title class="white--text">Pan Pacific Singapore</v-toolbar-title>
      <v-spacer />
      <v-app-bar-nav-icon>
        <v-icon color="white">fa-times</v-icon>    
      </v-app-bar-nav-icon>
    </v-app-bar>
    <v-container v-if="sessionStarted" class="py-0">
        <v-row>
            <v-col cols="3" v-if="!isMobile">
                <v-tabs vertical v-model="tab" icons-and-text>
                    <v-tabs-slider color="secondary" />
                    <v-tab v-for="item in topics" :key="'side'+item.id">
                        {{ item.title }}
                        <v-icon>{{item.icon}}</v-icon>
                    </v-tab>
                </v-tabs>
            </v-col>
            <v-col :cols="isMobile ? 12 : 9" class="pa-0">
                <v-tabs-items v-model="tab">
                    <v-tab-item v-for="item in topics" :key="item.id">
                        <v-card flat>
                            <Chat :topic="item.id" :thread="item.thread" ref="chatRef"/>
                        </v-card>
                    </v-tab-item>
                </v-tabs-items>
            </v-col>
            <v-col v-if="!isMobile" cols="12" class="pa-0">
                <v-text-field
                    outlined
                    hide-details
                    class="mb-4 mx-8 rounded-xl primary-text input-chat"
                    color="primary"
                    v-model="userInput"
                    @keydown.enter="sendMessage"
                >
                <template v-slot:append>
                    <v-icon @click="sendMessage" color="primary">fa-caret-right</v-icon>
                </template>
                </v-text-field>
            </v-col>
        </v-row>
        <v-row ></v-row>
    </v-container>
    <v-footer v-if="sessionStarted && isMobile" class="pa-0 white" fixed>
        <v-row>
            <v-col cols="12" class="pa-0">
                <v-text-field
                    outlined
                    hide-details
                    class="mb-4 mx-8 rounded-xl primary-text input-chat"
                    color="primary"
                    append-icon="fa-caret-right"
                    v-model="userInput"
                    @keydown.enter="sendMessage"
                >
                <template v-slot:append>
                    <v-icon @click="sendMessage" color="primary">fa-caret-right</v-icon>
                </template>
                </v-text-field>
            </v-col>
            <v-col cols="12" class="pa-0">
                <v-tabs v-model="tab" icons-and-text class="bottom-bar">
                    <v-tab v-for="item in topics" :key="'bot'+item.id">
                        <p style="font-size: 10px">{{ item.title }}</p>
                        <v-icon>{{item.icon}}</v-icon>
                    </v-tab>
                </v-tabs>
            </v-col>
        </v-row>
    </v-footer>
    <Welcome v-if="!sessionStarted" @continue="startSession"/>
  </v-app>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Welcome from './Welcome'
import Chat from './Chat'

export default {
    components: {
        Chat,
        Welcome
    },
  data() {
    return {
      tab: null,
      userInput: "",
      sessionStarted: false,
    };
  },
    computed: {
        ...mapState(['topics']),
        isMobile() {
            return this.$vuetify.breakpoint.xs
        }
    },
    methods: {
        ...mapActions({
            findResponse: 'getResponse'
        }),
        startSession(val){
            this.sessionStarted = val
        },
        sendMessage() {
            if (!this.userInput) return
            const payload =  {
                    "block": [{
                        "user": true,
                        "header": null,
                        "title": null,
                        "body": this.userInput,
                        "link": null
                    }],
                    "timestamp": null
                }
            this.$store.commit('addUserReply', { topicsIndex: this.tab, blocks: payload })
            this.userInput = ""
        },
    },
    mounted() {
    },
};
</script>

<style>
.bottom-bar .v-slide-group__prev.v-slide-group__prev--disabled {
    display: none!important;
}
.bottom-bar .v-slide-group__content.v-tabs-bar__content {
    width: 100%;
}
.bottom-bar .v-tab {
    min-width: unset!important;
    padding: 0!important;
}
.bottom-bar .v-slide-group__content.v-tabs-bar__content > .v-tab[role=tab] {
    flex: 1;
}
.input-chat fieldset {
    border-color: var(--v-primary-base)!important;
}
</style>
