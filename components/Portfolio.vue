<template>
  <section class="hero" id="portfolio">
    <b-row class="justify-content-center">
      <b-col lg="6" md="8" sm="10" cols="12">
        <p class="text-center title-text pb-3">{{ $t("portfolio.title") }}</p>
      </b-col>
    </b-row>
    <b-row class="d-flex justify-content-center">
      <b-col lg="4" md="6" sm="8" cols="10" class="d-flex align-items-center">
        <p class="font-weight-bold regular-text pb-2">
          {{ $t("portfolio.text") }}
        </p>
      </b-col>
    </b-row>
    <MDBRow
      :cols="['1', 'md-2']"
      class="d-flex align-items-center justify-content-center g-4 py-3 px-3"
    >
      <MDBCol class="d-flex align-items-center justify-content-center">
        <MDBCard>
          <MDBCardImg :src="story" top alt="..." />
          <MDBCardBody>
            <MDBCardTitle>{{ $t("portfolio.cards.card1.name") }}</MDBCardTitle>
            <MDBCardText>{{ $t("portfolio.cards.card1.text") }} </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol class="d-flex align-items-center justify-content-center">
        <MDBCard>
          <MDBCardImg :src="commercial" top alt="..." />
          <MDBCardBody>
            <MDBCardTitle>{{ $t("portfolio.cards.card2.name") }}</MDBCardTitle>
            <MDBCardText>{{ $t("portfolio.cards.card2.text") }} </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol class="d-flex align-items-center justify-content-center">
        <MDBCard>
          <MDBCardImg :src="product" top alt="..." />
          <MDBCardBody>
            <MDBCardTitle>{{ $t("portfolio.cards.card3.name") }}</MDBCardTitle>
            <MDBCardText> {{ $t("portfolio.cards.card3.text") }} </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol class="d-flex align-items-center justify-content-center">
        <MDBCard>
          <MDBCardImg :src="product" top alt="..." />
          <MDBCardBody>
            <MDBCardTitle>{{ $t("portfolio.cards.card4.name") }}</MDBCardTitle>
            <MDBCardText>{{ $t("portfolio.cards.card4.text") }}</MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
    <MDBRow center class="d-flex py-5">
      <MDBCol md="6">
        <div class="text-center py-3">
          <MDBBtn center outline="dark" rounded @click="goto">{{
            $t("portfolio.button")
          }}</MDBBtn>
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
  background-color: white;
  padding-bottom: 100px;
  padding-top: 100px;
}
</style>
