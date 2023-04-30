<template>
  <b-container tag="main" fluid class="px-0" style="overflow-x: hidden">
    <Intro />
    <SkillsCarousel />
    <Skills />
    <PhotoDesc />
    <Portfolio />
    <Testimonials />
    <Contact />
    <Footer />
  </b-container>
</template>

<style>

.title-text {
  font-size: 3rem;
  font-family: 'Arvo';
}

.regular-text {
  font-family: 'Open Sans';
}

.link-text {
  font-family: "Roboto Slab";
}

.purple {
  color: purple;
}

</style>

<script>
export default {
  name: 'IndexPage'
}
</script>
