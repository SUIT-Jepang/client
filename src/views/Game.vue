<template>
    <div class="" id="layout">
        <div class="container my-5">
            <h1>Welcome to Gunting Batu Kertas, {{user}}</h1>
            <h4>{{ winner }}</h4>
        </div>
        <div class="container d-flex justify-content-around my-5">
            <div>
                <h1> {{ totalCounter.batu }} </h1>
                <button @click="choose('batu')" class="btn"> 
                    <img src="../assets/rock.png" width="100"/> 
                </button>
            </div>
            <div>
                <h1>{{ totalCounter.gunting }}</h1>
                <button @click="choose('gunting')" class="btn">
                    <img src="../assets/scissor.png" width="100"/> 
                </button>
            </div>
            <div>
                <h1> {{ totalCounter.kertas }} </h1>
                <button @click="choose('kertas')" class="btn">
                    <img src="../assets/paper.png" width="100"/>
                </button>
            </div>
        </div>
        <button @click="reset" class="btn btn-danger">Mulai dari 0 !</button>
    </div>
</template>

<script>
export default {
    data () {
        return {
            userChoose : '',
            user: localStorage.getItem('name'),
            games: [],
            totalCounter: { gunting: 0, kertas: 0, batu: 0 },
            winner: ''
        }
    },
    methods: {
      choose (choose) {
        if (choose == 'batu') {
            this.totalCounter.batu++
        } else if (choose == 'gunting') {
            this.totalCounter.gunting++
        } else if (choose == 'kertas') {
            this.totalCounter.kertas++
        }
        this.currentWinner()
        console.log(this.totalCounter)
        this.userChoose = choose
      },
      reset () {
        this.totalCounter = { gunting: 0, kertas: 0, batu: 0 }
        this.currentWinner()
      },
      currentWinner () {
          let { batu, gunting, kertas } = this.totalCounter
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
    created() {
        this.currentWinner()
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
