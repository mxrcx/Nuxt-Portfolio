<template>
  <b-button :variant="variantColor" class="mx-auto d-flex justify-content-center link-text text font-weight-bold" @click="scroll(descendTo)">
    {{ desc }}
  </b-button>
</template>

<script>
export default {
  props: {
    desc: String,
    descendTo: String,
    variantColor: String
  },
  methods: {
    scroll(descendTo) {
      document.getElementById(descendTo).scrollIntoView({
        behavior: 'smooth',
      })
    },
  },
}
</script>

<style>

</style>