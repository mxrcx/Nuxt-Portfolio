import { BIcon, BIconArrowUp, BIconArrowDown } from 'bootstrap-vue'

<template>
  <footer class="footer">
    <b-row class="justify-content-center">
      <b-col class="d-flex justify-content-center">
        <div class="py-5">
          <div @click="scroll()">
            <div class="h2 mb-0">
                <b-icon-chevron-double-up></b-icon-chevron-double-up>
            </div>
          </div>
        </div>
      </b-col>
    </b-row>
    <b-row class="justify-content-center">
      <b-col class="d-flex justify-content-center">
        <!--- <div>
          <a
            :href="bottomLink.href"
            target="_blank"
            v-for="bottomLink in bottomLinks"
            :key="bottomLink.title"
            ><img
              class="px-lg-5 px-2"
              :src="require(`../assets/images/${bottomLink.srcImage}.jpg`)"
              :title="bottomLink.title"
          /></a>
        </div> --->
      </b-col>
    </b-row>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      bottomLinks: [
        {
          title: 'Github',
          srcImage: 'github',
          href: 'https://github.com/username',
        },
        {
          title: 'Resumé',
          srcImage: 'cv',
          href: 'resume link here',
        },
        {
          title: 'LinkedIn',
          srcImage: 'linkedin',
          href: 'https://www.linkedin.com/in/username',
        },
      ],
    }
  },
  methods: {
    scroll() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    },
  },
}
</script>

<style scoped>
.footer {
  background-color: black;
}

.footer-icons {
  cursor: pointer;
}
</style>