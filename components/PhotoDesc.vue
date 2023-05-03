<template>
  <section class="description" id="about">
    <p class="text-center title-text text-white">
      {{ $t("about-me.title") }}
    </p>
    <MDBRow class="d-flex justify-content-center">
      <MDBCol
        lg="3"
        md="5"
        sm="6"
        cols="6"
        class="d-flex justify-content-center justify-content-md-end py-4"
      >
        <PhotoDescImage />
      </MDBCol>
      <MDBCol lg="4" md="6" sm="8" cols="10" class="d-flex align-items-center">
        <p class="font-weight-bold text-white regular-text p-5">
          {{ $t("about-me.text") }}
        </p>
      </MDBCol>
    </MDBRow>
    <MDBRow center class="d-flex">
      <MDBCol md="6">
        <div class="text-center py-2">
          <MDBBtn center outline="light" rounded @click="goto"
            >{{ $t("about-me.button") }}</MDBBtn
          >
        </div>
      </MDBCol>
    </MDBRow>
  </section>
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
      const el = document.getElementById("portfolio");
      el.scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>

<style scoped>
.description {
  background-color: black;
  padding: 100px 0 100px;
}
</style>
