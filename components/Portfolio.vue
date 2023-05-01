<template>
  <section class="hero" id="portfolio">
    <b-row class="justify-content-center">
      <b-col lg="6" md="8" sm="10" cols="12">
        <p class="text-center title-text text-white pb-3">
          Portfolio
        </p>
      </b-col>
    </b-row>
    <b-row class="d-flex justify-content-center">
      <b-col lg="4" md="6" sm="8" cols="10" class="d-flex align-items-center">
        <p class="font-weight-bold text-white regular-text">Learn more about my recent projects:</p>
      </b-col>
    </b-row>
    <MDBRow :cols="['1', 'md-2']" class="g-4 py-3">
      <MDBCol>
        <MDBCard>
          <MDBCardImg :src="story" top alt="..." />
          <MDBCardBody>
            <MDBCardTitle>Biathlon Olympics</MDBCardTitle>
            <MDBCardText>
              I covered the Biathlon Olympics in Oberhof, Thuringia in the year
              2022/2023. This was my first big project working alongside a
              professional TV production team.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard>
          <MDBCardImg :src="commercial" top alt="..." />
          <MDBCardBody>
            <MDBCardTitle>Berlin Thunders</MDBCardTitle>
            <MDBCardText>
              I filmed several American football games for the German football
              team Berlin Thunders, setting up multiple cameras to capture all
              the plays from different angles.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard>
          <MDBCardImg :src="product" top alt="..." />
          <MDBCardBody>
            <MDBCardTitle>FPV Drone</MDBCardTitle>
            <MDBCardText>
              I produced an unboxing video of the new DJI FPV Drone. This project taught me how to present and promote products.            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard>
          <MDBCardImg :src="product" top alt="..." />
          <MDBCardBody>
            <MDBCardTitle>FPV Drone</MDBCardTitle>
            <MDBCardText>
              I produced an unboxing video of the new DJI FPV Drone. This project taught me how to present and promote products.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
    <MDBRow center class="d-flex py-5">
      <MDBCol md="6">
        <div class="text-center py-3">
          <MDBBtn center outline="light" rounded @click="goto"
            >Check out my testimonials</MDBBtn
          >
        </div>
      </MDBCol>
    </MDBRow>
  </section>
</template>

<script>
import {
  MDBBtn,
  MDBCol,
  MDBRow,
  MDBCardGroup,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImg,
} from "mdb-vue-ui-kit";
import story from "@/assets/images/story.jpg";
import commercial from "@/assets/images/commercial.jpg";
import product from "@/assets/images/product.jpg";

export default {
  components: {
    MDBBtn,
    MDBCol,
    MDBRow,
    MDBCardGroup,
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImg,
  },
  methods: {
    goto() {
      const el = document.getElementById("testimonials");
      el.scrollIntoView({ behavior: "smooth" });
    },
  },
  data: function () {
    return {
      story: story,
      commercial: commercial,
      product: product,
    };
  },
};
</script>

<style scoped>
.font-size-biggish {
  font-size: 1.3rem;
}
.hero {
  background-color: black;
  padding-bottom: 100px;
  padding-top: 100px;
}
</style>
