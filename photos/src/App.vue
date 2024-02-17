<template>
  <div>
    <div class="text-3xl">
      <div>Path: /photos</div>
      <div>Page: Photos</div>
      <div>Framework: vue3</div>
      <div>Language: JavaScript</div>
      <div>CSS: Tailwind</div>
    </div>
    <div class="mt-5 grid grid-cols-3 gap-3">
      <card-photo v-for="photo in photos" :key="photo" :item="photo" />
    </div>
  </div>
</template>

<script>
import CardPhoto from './CardPhoto.vue'
export default {
  components: { CardPhoto },
  name: 'App',
  data: () => {
    return {
      photos: [],
    }
  },
  mounted() {
    this.fetchPhotos()
  },
  methods: {
    fetchPhotos() {
      fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(json => this.photos = json.splice(0, 11))
    }
  },
}
</script>