<template>
  <ul>
    <learning-resource
      v-for="r in resources"
      :key="r.id"
      :title="r.title"
      :description="r.description"
      :link="r.link"
      :id="r.id"
    ></learning-resource>
  </ul>
</template>

<script>
import LearningResource from './LearningResource.vue';

export default {
  components: {
    LearningResource,
  },
  inject: ['resources'],
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>
