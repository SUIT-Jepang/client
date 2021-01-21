<template>
    <div class="container justify-content-center mt-5">
        <div class="row justify-content-center">
            <div class="col-5 mt-1 img">
              <img src="https://media1.tenor.com/images/b2a284afcda426722f679d3298566ced/tenor.gif" alt="" srcset="">
            </div>
            <div class="col-5 mt-1 login">
                <div class="shadow-md p-5 mb-5 bg-black rounded">
                    <h5 class="mb-4 text-center"><strong>BATU GUNTING KERTAS</strong></h5>
                    <form @submit.prevent="login">
                    <div class="form-group">
                        <input type="text" class="form-control rounded-pill" v-model="name" id="login-name" placeholder="Your Name">
                    </div>
                    <button type="submit" class="btn btn-primary btn-block mt-5 rounded-pill">MASUK</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      name: ''
    }
  },
  methods: {
    login () {
      localStorage.setItem('name', this.name)
    }
  }
}
</script>

<style>

</style>
