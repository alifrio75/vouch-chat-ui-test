export default {
    setBotReplying(state, status) {
        state.botReplying = status
    },
    addReply(state, reply) {
        const topicKey = state.topics.findIndex(item => item.id === reply.topics)
        state.topics[topicKey].thread = reply.thread
    },
    addBotReply(state, reply) {
        const topicKey = state.topics.findIndex(item => item.id === reply.topic)
        state.topics[topicKey].thread.push(reply.thread)
    },
    addUserReply(state, reply) {
        const { topicsIndex, blocks } = reply
        state.topics[topicsIndex].thread.push(blocks)
    },
}