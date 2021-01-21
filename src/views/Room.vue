<template>
  <div class="container justify-content-center">
    <div class="container w-50 my-5">
      <h1> Waiting Room </h1>
    </div>
    <div class="container my-2 d-flex">
      <div class="w-25 mx-auto">
        <input v-model="room" type="text" placeholder="Create Room" class="form-control my-3"/>
        <button @click="createRoom" class="btn btn-primary my-5">Create Room</button>
      </div>
      <div class="d-flex w-50 flex-column card p-5 shadow">
        <div class="mb-5">
            <button class="btn btn-danger">Available Room, please select</button>
        </div>
        <div class="d-flex flex-column container">
          <button class="btn btn-outline-danger my-1">Room Dayu</button>
          <button class="btn btn-outline-danger my-1">Room Romi</button>
          <button class="btn btn-outline-danger my-1">Room Rozak</button>
          <button class="btn btn-outline-danger my-1">Room Hamzah</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      user: '',
      room: ''
    }
  },
  methods: {
    createRoom () {
      console.log('>>> room : ', this.room)
    }
  }
}
</script>

<style scoped>
  button {
    border-radius: 20px;
  }

  card {
    border-radius: 20px;
  }
</style>
