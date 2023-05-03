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
      <MDBIcon icon="camera-retro" style="padding-right: 10px" />
      Julius Stammler Media
    </MDBNavbarBrand>
    <MDBNavbarToggler
      target="#navbarToggler"
      @click="collapseAction = !collapseAction"
    ></MDBNavbarToggler>
    <MDBCollapse v-model="collapseAction" id="navbarToggler">
      <MDBNavbarNav right class="mb-2 mb-lg-0">
        <MDBNavbarItem to="#intro"> {{ $t("navbar.intro") }} </MDBNavbarItem>
        <MDBNavbarItem to="#about"> {{ $t("navbar.about-me") }} </MDBNavbarItem>
        <MDBNavbarItem to="#portfolio">
          {{ $t("navbar.portfolio") }}
        </MDBNavbarItem>
        <MDBNavbarItem to="#testimonials">
          {{ $t("navbar.testimonials") }}
        </MDBNavbarItem>
        <MDBNavbarItem to="#contact">
          {{ $t("navbar.contact") }}
        </MDBNavbarItem>

        <!-- Language selection dropdown -->
        <ClientOnly fallbackTag="div">
          <MDBDropdown class="nav-item" v-model="languageDropdown">
            <MDBDropdownToggle
              tag="a"
              class="nav-link"
              @click="languageDropdown = !languageDropdown"
            >
              <MDBIcon :flag="languageFlagUsed" class="m-0"></MDBIcon>
            </MDBDropdownToggle>
            <MDBDropdownMenu>
              <MDBDropdownItem href="#"
                ><MDBIcon :flag="languageFlagUsed" />
                <div
                  class="language-div"
                  v-if="this.languageFlagUsed == 'germany'"
                >
                  Deutsch
                </div>
                <div class="language-div" v-else>English</div>
                <MDBIcon icon="check" class="text-success ms-2"></MDBIcon>
              </MDBDropdownItem>
              <MDBDropdownItem divider />
              <MDBDropdownItem
                href="#"
                @click="
                  this.languageFlagUsed === 'germany'
                    ? $i18n.setLocale('en')
                    : $i18n.setLocale('de');
                  this.languageFlagUsed = [
                    this.languageFlagAlt,
                    (this.languageFlagAlt = this.languageFlagUsed),
                  ][0];
                "
                ><MDBIcon :flag="languageFlagAlt" />
                <div
                  class="language-div"
                  v-if="this.languageFlagAlt == 'germany'"
                >
                  Deutsch
                </div>
                <div class="language-div" v-else>English</div>
              </MDBDropdownItem>
            </MDBDropdownMenu>
          </MDBDropdown>
        </ClientOnly>
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

.dark-red {
  color: darkred;
}
.language-div {
  display: inline-block;
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
  MDBIcon,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
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
    MDBIcon,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
  },
  setup() {
    const collapseAction = ref(false);
    const languageDropdown = ref(false);
    const languageFlagUsed = ref("united-kingdom");
    const languageFlagAlt = ref("germany");

    return {
      collapseAction,
      languageDropdown,
      languageFlagUsed,
      languageFlagAlt,
    };
  },
};
</script>
