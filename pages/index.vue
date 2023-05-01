<template>
  <!-- Navbar -->
  <MDBNavbar
    style="
      backdrop-filter: blur(5px);
      background-color: rgba(0, 0, 0, 0.9);
      background: -webkit-linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.9),
        rgba(0, 0, 0, 0.1)
      );
      background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.9),
        rgba(0, 0, 0, 0.1)
      );
    "
    expand="lg"
    dark
    position="sticky"
    container="md"
    class="d-flex justify-content-between"
  >
    <MDBNavbarBrand href="#">
      <img
        src="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.webp"
        height="30"
        alt=""
        loading="lazy"
      />
      Julius Stammler Media
    </MDBNavbarBrand>
    <MDBNavbarToggler
      target="#navbarToggler"
      @click="collapseAction = !collapseAction"
    ></MDBNavbarToggler>
    <MDBCollapse v-model="collapseAction" id="navbarToggler">
      <MDBNavbarNav right class="mb-2 mb-lg-0">
        <MDBNavbarItem to="#intro"> Intro </MDBNavbarItem>
        <MDBNavbarItem to="#about"> About me </MDBNavbarItem>
        <MDBNavbarItem to="#portfolio"> Portfolio </MDBNavbarItem>
        <MDBNavbarItem to="#testimonials"> Testimonials </MDBNavbarItem>
        <MDBNavbarItem to="#contact"> Contact </MDBNavbarItem>
      </MDBNavbarNav>
    </MDBCollapse>
  </MDBNavbar>

  <!-- Main body -->
  <b-container tag="main" fluid class="px-0" style="overflow-x: hidden">
    <Intro />
    <SkillsCarousel />
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
  font-family: "Arvo";
}

.regular-text {
  font-family: "Open Sans";
}

.link-text {
  font-family: "Roboto Slab";
}

.purple {
  color: purple;
}
</style>

<script>
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBCollapse,
  MDBBtn,
} from "mdb-vue-ui-kit";

export default {
  name: "IndexPage",
  components: {
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBCollapse,
    MDBBtn,
  },
  setup() {
    const collapseAction = ref(false);

    return {
      collapseAction,
    };
  },
};
</script>
