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
            user: 'Rozak'
        }
    },
    methods: {
      choose (choose) {
          console.log('>>> click', choose)
          this.userChoose = choose
      },
      submit(){
        console.log('>>> submit',this.userChoose)
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