<template>
    <section
      class="skills-container w-75 vh-30 m-auto d-flex align-items-center justify-content-center"
    >
      <ClientOnly fallbackTag="div">
        <MDBCarousel v-model="carousel1" :items="items1" fade innerClass="rounded-5 shadow-4-strong" />
        <template #fallback>
          <MDBSpinner />
        </template>
      </ClientOnly>
    </section>
  </template>

<script setup lang="ts">
  import { ref } from "vue";
  import { MDBCarousel } from "mdb-vue-ui-kit";
  import story from "@/assets/images/story.jpg";
  import commercial from "@/assets/images/commercial.jpg";
  import product from "@/assets/images/product.jpg";

  const items1 = [
    {
      src: story,
      alt: "...",
      label: "Story",
      caption: "Creating individual stories of events"
    },
    {
      src: commercial,
      alt: "...",
      label: "Commercial",
      caption: "Creating individual commercials for events or products"
    },
    {
      src: product,
      alt: "...",
      label: "Product",
      caption:
        "Present your product in the best way possible"
    }
  ];

  const carousel1 = ref(0);
</script>

<style scoped>
.skills-container {
  padding-bottom: 100px;
}
</style>