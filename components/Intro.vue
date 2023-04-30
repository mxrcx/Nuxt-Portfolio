<template>
  <header>
    <MDBRow center class="d-flex">
      <MDBCol md="6">
        <div class="text-center py-5">
          <p class="name-container py-2">
            Hi, my name is <span class="purple">Julius</span>, content creator.
          </p>
          <MDBBtn center outline="dark" rounded @click="goto"
            >Would you like to know more?</MDBBtn
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
      const el = document.getElementById("skills");
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
</style>
