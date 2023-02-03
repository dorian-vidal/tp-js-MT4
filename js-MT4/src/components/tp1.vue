<script>
import axios from "axios ";

export default {
  data() {
    return {
      values: [],

      posts: null,
      value: null,
      post_slices: null,
    };
  },
  methods: {
    handleForm(e) {
      e.preventDefault();
      this.post_slices = this.posts.slice(0, this.value);

      this.values.push(this.value);
      this.value = 0;
    },
  },
  computed: {
    average() {
      return this.values.length ? this.sum / this.values.length : 0;
    },
    sum() {
      return this.values.reduce((total, value) => total + value, 0);
    },
  },
  mounted() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      this.posts = response.data;
      this.post_slices = this.posts;
    });
  },
};
</script>

<template>
  <div>
    <div>
      <h1 class="mt-2 text-center">Nombre de e dans chaque titre de post</h1>

      <div class="w-50 p-3 mx-auto input-group mb-3">
        <input
          type="number"
          v-model="value"
          class="form-control"
          placeholder="Number posts"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
        />
        <div class="input-group-append">
          <button
            @click="handleForm"
            class="btn btn-outline-primary"
            type="button"
            id="button-addon2"
          >
            Valider
          </button>
        </div>
      </div>
      <p class="text-center">Voici la moyenne de e : {{ average }}</p>

      <div class="card-deck mr-3 ml-3">
        <div
          class="card m-3 card-parents"
          v-for="item in post_slices"
          :name="item.name"
          :key="item.id"
        >
          <div class="card-body">
            <h5 class="card-title">{{ item.title }}</h5>
            <p class="card-text">{{ item.body }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-parents {
  min-width: 250px;
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175) !important;
}
</style>
