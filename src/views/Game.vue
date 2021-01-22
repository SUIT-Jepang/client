<template>
    <div class="" id="layout">
        <div class="container my-5">
            <h1>Welcome to Gunting Batu Kertas, {{user}}</h1>
            <h4>{{userChoose}}</h4>
        </div>
        <div class="container d-flex justify-content-around my-5">
            <button @click="choose('batu')" class="btn"><img src="../assets/rock.png" width="100"/> </button>
            <button @click="choose('gunting')" class="btn"><img src="../assets/scissor.png" width="100"/> </button>
            <button @click="choose('kertas')" class="btn"><img src="../assets/paper.png" width="100"/> </button>
        </div>
        <button v-if="userChoose.length > 0" @click="submit" class="btn btn-primary">Adu !</button>
    </div>
</template>

<script>
export default {
    data () {
        return {
            userChoose : '',
            user: localStorage.getItem('name'),
            games: [],
            totalCounter: { gunting: 10, kertas: 20, batu: 5 }
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
        console.log(totalCounter)
        this.userChoose = choose
      },
      submit(){
        this.$socket.emit
        this.games.push({ player: this.user, weapon:this.userChoose })
        this.userChoose = ''
        console.log('>>> submit',this.userChoose)
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
