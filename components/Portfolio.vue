<template>
  <section class="Portfolio px-5">
    <b-row class="justify-content-center">
      <b-col lg="6" md="8" sm="10" cols="12">
        <p class="text-center title-text pb-3" id="portfolio">
          Portfolio
        </p>
      </b-col>
    </b-row>
    <b-row v-for="box in boxes" :key="box.name" class="boxes pb-5 justify-content-center">
      <b-col lg="5" md="6" cols="12">
        <div class="font-size-biggish purple">
          {{ box.title }}
        </div>
        <div class="regular-text">
          <p>
            {{ box.desc }}
          </p>
          <p>
            Technologies used: <span> {{ box.tech }}</span>
          </p>
        </div>
        <div class="d-flex align-items-center">
          <div v-if="box.link">
            <b-button variant="outline-dark" class="link-text mr-2 mr-lg-5 purple" :href="box.link" target="_blank">Live demo</b-button>
          </div>
          <div v-if="box.source">
            <b-button variant="link" class="font-size-biggish link-text text-decoration-none" :href="box.source" target="_blank">
              Source Code
            </b-button>
          </div>
        </div>
      </b-col>
      <b-col lg="5" md="6" sm="12" cols="12" class="pt-3">
        <div class="">
          <a :href="box.link" target="_blank">
            <b-img
              fluid-grow
              rounded
              :src="`../assets/images/${box.name}.jpg`"
              alt=""
            />
          </a>
        </div>
      </b-col>
    </b-row>
  </section>
</template>

<script>
export default {
  data() {
    return {
      boxes: [
        {
          id: 1,
          name: 'recipe',
          title: 'Project 1',
          link: 'https://google.com',
          source: 'https://google.com',
          tech: 'VueJS, Firebase, Auth0',
          desc: 'Project 1 description',
        },
        {
          id: 2,
          name: 'reciperest',
          title: 'Project 2',
          link: 'https://google.com',
          source: 'https://google.com',
          tech: 'Django, Postgres, Rest',
          desc: 'Project 2 description',
        },
        {
          id: 3,
          name: 'portfolio',
          title: 'Project 3',
          link: 'https://google.com',
          source: 'https://google.com',
          tech: 'VueJS, Boostrap-vue',
          desc: 'Project 3 description',
        },
      ],
    }
  },
}
</script>

<style scoped>
.font-size-biggish {
  font-size: 1.3rem;
}
</style>