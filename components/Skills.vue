<template>
  <section class="skills-container">
    <b-row>
      <b-col class="text-center">
        <p class="title-text pb-3" id="skills">Content Creation</p>
        <p class="regular-text p-2">
          I'll provide support and guidance as you navigate your own journey:
        </p>
      </b-col>
    </b-row>
    <b-row class="justify-content-center">
      <b-col lg="6" md="8" sm="10" cols="12" class="text-center">
        <div class="d-flex flex-wrap">
          <div v-for="skill in skills" :key="skill.title" class="m-auto">
            <b-link target="_blank" class="p-3" :href="skill.web">
              <b-img
                height="100"
                weight="100"
                :src="`/assets/images/${skill.title}.jpg`"
                :alt="skill.alt"
                :title="skill.alt"
              />
            </b-link>
            <p class="p-2 font-weight-bold">{{ skill.alt }}</p>
          </div>
        </div>
        <BaseScrollTo desc="Who Am I?" variantColor="outline-dark" descendTo="photo" />
      </b-col>
    </b-row>
  </section>
</template>

<script>
export default {
  data() {
    return {
      skills: [
        { title: 'story', alt: 'Narrate your personal story', web: 'https://vuejs.org/v2/guide/' },
        { title: 'product', alt: 'Showcase your products', web: 'https://bootstrap-vue.org/' },
        { title: 'commercial', alt: 'Create impressive commercials', web: 'https://git-scm.com/' },
      ],
    }
  },
}
</script>

<style scoped>
.skills-container {
  background-color: orange;
  padding: 200px 0 100px;
  -webkit-clip-path: polygon(0 12%, 100% 0%, 100% 100%, 0 100%);
  clip-path: polygon(0 12%, 100% 0%, 100% 100%, 0 100%);
}
</style>