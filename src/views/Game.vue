<template>
  <div class="" id="layout">
    <div class="container my-5">
      <h1>Welcome to Gunting Batu Kertas, {{ user }}</h1>
      <h4>{{ winner }}</h4>
    </div>
    <div class="container d-flex justify-content-around my-5">
      <div>
        <h1>{{ totalCounter.batu }}</h1>
        <button @click="choose('batu')" class="btn">
          <img src="../assets/rock.png" width="100" />
        </button>
      </div>
      <div>
        <h1>{{ totalCounter.gunting }}</h1>
        <button @click="choose('gunting')" class="btn">
          <img src="../assets/scissor.png" width="100" />
        </button>
      </div>
      <div>
        <h1>{{ totalCounter.kertas }}</h1>
        <button @click="choose('kertas')" class="btn">
          <img src="../assets/paper.png" width="100" />
        </button>
      </div>
    </div>
    <button @click="reset" class="btn btn-outline-danger mr-3">Mulai dari 0 !</button>
    <button class="btn btn-outline-danger" @click="leaveRoom">Back To Loby</button>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
export default {
  data () {
    return {
      userChoose: '',
      user: localStorage.user,
      games: [],
      totalCounter: { gunting: 0, kertas: 0, batu: 0 },
      winner: ''
    }
  },
  sockets: {
    init (payload) {
      console.log(payload)
    },
    choose (payload) {
      this.totalCounter = payload
      this.currentWinner()
    }
  },
  methods: {
    leaveRoom () {
      this.$socket.emit('leaveRoom', this.room)
      this.$router.push({ name: 'Room' })
    },
    choose (choose) {
      if (choose === 'batu') {
        this.totalCounter.batu++
      } else if (choose === 'gunting') {
        this.totalCounter.gunting++
      } else if (choose === 'kertas') {
        this.totalCounter.kertas++
      }
      this.currentWinner()
      this.$socket.emit('choose', this.totalCounter)

      // console.log(this.totalCounter)
      this.userChoose = choose
    },
    reset () {
      this.totalCounter = { gunting: 0, kertas: 0, batu: 0 }
      this.$socket.emit('choose', this.totalCounter)
      this.currentWinner()
    },
    currentWinner () {
      const { batu, gunting, kertas } = this.totalCounter
      if (batu > kertas && batu > kertas) {
        this.winner = 'Batu menang'
      } else if (kertas > batu && kertas > gunting) {
        this.winner = 'Kertas menang'
      } else if (gunting > batu && gunting > kertas) {
        this.winner = 'Gunting menang'
      } else {
        if (!batu && !kertas && !gunting) {
          this.winner = 'Main dulu bro'
        } else {
          this.winner = 'Main lagi, seri bro'
        }
      }
    }
  },
  created () {
    this.currentWinner()
    console.log(localStorage.user)
  },
  watch: {
    totalCounter (payload) {
      console.log(payload)

      const { batu, gunting, kertas } = payload

      if (batu >= 20 || kertas >= 20 || gunting >= 20) {
        console.log('ada yg menang')
        const winner = this.winner
        this.reset()

        Swal.fire({
          title: `The winner is ${winner} !`,
          text: 'Do you want to play again ?',
          icon: 'success',
          confirmButtonText: 'Yes, of course'
        })
      }
    }
  },
  socket: {
    init (payload) {
      this.games = payload
    }
  }
}
</script>

<style scoped>
#layout {
  height: 100vh;
  width: 100vw;
}
</style>
