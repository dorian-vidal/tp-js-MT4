<script>
import axios from "axios ";

export default {
  data() {
    return {
      posts: null,
      value: null,
      post_slices: null,
    };
  },
  methods: {
    handleForm(e) {
      e.preventDefault();
      this.post_slices = this.posts.slice(0, this.value);
    },
  },
  mounted() {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      this.posts = response.data;
      console.log(response.data);
      this.post_slices = this.posts;
    });
  },
};
</script>

<template>
  <div>
    <h1 class="mt-2 text-center">Nombre de e dans chaque titre de post</h1>

    <div
      v-for="item in post_slices"
      :name="item.name"
      :key="item.id"
      class="btn btn-primary"
      type="button"
      data-toggle="collapse"
      data-target="#collapseExample"
      aria-expanded="false"
      aria-controls="collapseExample"
    >
      {{ item.name }}
    </div>
    <div
      v-for="item in post_slices"
      :name="item"
      :key="item.id"
      class="collapse"
      id="collapseExample"
    >
      <div class="card card-body">
        {{ item }}
      </div>
    </div>
  </div>
</template>

<style scoped></style>
