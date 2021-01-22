import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    test: '',
    username: '',
    players: [],
    room: '',
    rooms: []
  },
  mutations: {
    SOCKET_roomCreated (state, roomId) {
      console.log(roomId, '<<<< room id')
      state.playerId = 1
      state.roomId = roomId
      // router.push('/game')
    },
    SOCKET_createRoom (state, room) {
      // console.log(room)
      console.log('masuk')
      // this.$socket.emit('createRoom', room)
    },
    SOCKET_connect () {
      console.log('connect')
    },
    SOCKET_updateCurrRoom (state, payload) {
      console.log('update curr room')
      console.log(payload, '<<<< payload')
      state.room = payload
      console.log(state.room)
      router.push({ name: 'Game' })
    },
    SOCKET_isFull (state, room) {
      state.rooms.forEach(room => {
        room.isFull = true
      })
    }
  },
  actions: {
  },
  modules: {
  }
})
