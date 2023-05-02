<template>
  <MDBFooter bg="dark" :text="['center', 'white']">
    <!-- Grid container -->
    <MDBContainer class="p-4 pb-0">
      <!-- Section: Social media -->
      <section class="mb-4">
        <!-- Facebook -->
        <MDBBtn
          tag="a"
          outline="light"
          href="https://www.facebook.com/julius.stammler/"
          floating
          class="m-1"
        >
          <MDBIcon iconStyle="fab" icon="facebook-f"></MDBIcon>
        </MDBBtn>
        <!-- Instagram -->
        <MDBBtn
          tag="a"
          outline="light"
          href="https://www.instagram.com/juliusstammler/"
          floating
          class="m-1"
        >
          <MDBIcon iconStyle="fab" icon="instagram"></MDBIcon>
        </MDBBtn>
        <!-- Linkedin -->
        <MDBBtn
          tag="a"
          outline="light"
          href="https://www.linkedin.com/in/julius-stammler-2596ba226/"
          floating
          class="m-1"
        >
          <MDBIcon iconStyle="fab" icon="linkedin-in"></MDBIcon>
        </MDBBtn>
      </section>
      <!-- Section: Social media -->
    </MDBContainer>
    <!-- Grid container -->
    <!-- Copyright -->
    <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2)">
      © 2023 Copyright:
      <a class="text-white" href="https://mxrcx.github.io/Nuxt-Portfolio/"
        >Julius Stammler</a
      >
    </div>
    <div class="text-center pb-3" style="background-color: rgba(0, 0, 0, 0.2)">
      Made by
      <a
        class="text-white"
        style="text-decoration: underline"
        href="https://www.linkedin.com/in/marco-schaarschmidt/"
        >Marco Schaarschmidt</a
      >
    </div>
    <!-- Copyright -->
  </MDBFooter>
</template>

<script>
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBIcon,
} from "mdb-vue-ui-kit";

export default {
  components: {
    MDBFooter,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBBtn,
    MDBIcon,
  },
};
</script>
