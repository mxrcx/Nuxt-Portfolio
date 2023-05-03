<template>
  <section class="testimonials-container" id="testimonials">
    <b-row class="justify-content-center">
      <b-col lg="6" md="8" sm="10" cols="12">
        <p class="text-center title-text text-white pb-2">
          {{ $t("testimonials.title") }}
        </p>
      </b-col>
    </b-row>
    <b-row class="d-flex justify-content-center">
      <b-col lg="4" md="6" sm="8" cols="10" class="d-flex align-items-center">
        <p class="font-weight-bold text-white regular-text pb-2">
          {{ $t("testimonials.text") }}
        </p>
      </b-col>
    </b-row>
    <MDBRow
      :cols="['1', 'md-3']"
      class="d-flex align-items-center justify-content-center g-4 py-3 px-3"
    >
      <!-- Card 1 -->
      <MDBCol class="d-flex align-items-center justify-content-center">
        <MDBCard style="width: 18rem">
          <div class="text-center">
            <MDBCardImg
              top
              :src="profile"
              class="thumbnail img-fluid z-depth-1 rounded-circle py-3"
              style="height: 60%; width: 60%"
              alt="..."
            />
            <MDBCardBody>
              <MDBCardTitle>{{
                $t("testimonials.cards.card1.name")
              }}</MDBCardTitle>
              <hr class="hr hr-blurry" />
              <MDBCardText>{{
                $t("testimonials.cards.card1.text")
              }}</MDBCardText>
            </MDBCardBody>
          </div>
        </MDBCard>
      </MDBCol>

      <!-- Card 2 -->
      <MDBCol class="d-flex align-items-center justify-content-center">
        <MDBCard style="width: 18rem">
          <div class="text-center">
            <MDBCardImg
              top
              :src="profile"
              class="thumbnail img-fluid z-depth-1 rounded-circle py-3"
              style="height: 60%; width: 60%"
              alt="..."
            />
            <MDBCardBody>
              <MDBCardTitle>{{
                $t("testimonials.cards.card2.name")
              }}</MDBCardTitle>
              <hr class="hr hr-blurry" />
              <MDBCardText>{{
                $t("testimonials.cards.card2.text")
              }}</MDBCardText>
            </MDBCardBody>
          </div>
        </MDBCard>
      </MDBCol>

      <!-- Card 3 -->
      <MDBCol class="d-flex align-items-center justify-content-center">
        <MDBCard style="width: 18rem">
          <div class="text-center">
            <MDBCardImg
              top
              :src="profile"
              class="thumbnail img-fluid z-depth-1 rounded-circle py-3"
              style="height: 60%; width: 60%"
              alt="..."
            />
            <MDBCardBody>
              <MDBCardTitle>{{
                $t("testimonials.cards.card3.name")
              }}</MDBCardTitle>
              <hr class="hr hr-blurry" />
              <MDBCardText
                >{{ $t("testimonials.cards.card3.text") }}
              </MDBCardText>
            </MDBCardBody>
          </div>
        </MDBCard>
      </MDBCol>
    </MDBRow>
    <MDBRow center class="d-flex py-5">
      <MDBCol md="6">
        <div class="text-center py-3">
          <MDBBtn center outline="light" rounded @click="goto">{{
            $t("testimonials.button")
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
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardLink,
  MDBCardImg,
  MDBListGroup,
  MDBListGroupItem,
} from "mdb-vue-ui-kit";
import profile from "@/assets/images/julius-profile.jpg";

export default {
  components: {
    MDBBtn,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardLink,
    MDBCardImg,
    MDBListGroup,
    MDBListGroupItem,
  },
  methods: {
    goto() {
      const el = document.getElementById("contact");
      el.scrollIntoView({ behavior: "smooth" });
    },
  },
  data: function () {
    return {
      profile: profile,
    };
  },
};
</script>

<style scoped>
.testimonials-container {
  padding: 100px 0 100px;
  background-color: black;
}
</style>
