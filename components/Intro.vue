<template>
  <header class="intro-container" id="intro">
    <MDBRow center class="d-flex">
      <MDBCol md="6">
        <div class="text-center py-5">
          <p class="name-container py-2">
            Hi, {{ $t('intro.text.my-name-is') }} <span class="dark-red">Julius</span>, {{ $t('intro.text.content-creator') }}.
          </p>
          <MDBBtn center outline="dark" rounded @click="goto"
            >{{ $t('intro.button') }}</MDBBtn
          >
        </div>
      </MDBCol>
    </MDBRow>
  </header>
</template>

<script>
import { MDBBtn, MDBCol, MDBRow } from "mdb-vue-ui-kit";

export default {
  components: {
    MDBBtn,
    MDBRow,
    MDBCol,
  },
  methods: {
    goto() {
      const el = document.getElementById("about");
      el.scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>

<style scoped>
.name-container {
  font-family: "Arvo";
  font-size: 250%;
}
.intro-container {
  padding: 0px 0 0px;
  background-color: white;
}
</style>
