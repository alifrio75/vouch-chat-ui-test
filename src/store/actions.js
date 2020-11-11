import response from '../assets/response.json'

export const getResponse = ({ commit }, topicId) => {
    commit('setBotReplying', true)
    const topicResponse = response.response.find(res => res.input === topicId)
    commit('addReply', { topics: topicId, thread: topicResponse.response })
}
