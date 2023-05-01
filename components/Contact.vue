<template>
  <section class="contact-container" id="contact">
    <p class="text-center title-text text-white">Contact</p>
    <b-row class="d-flex justify-content-center">
      <b-col lg="4" md="6" sm="8" cols="10" class="d-flex align-items-center">
        <p class="font-weight-bold text-white regular-text">Write me a message if you want to work with me or have questions!</p>
      </b-col>
    </b-row>
    <b-row class="d-flex justify-content-center">
        <form>
          <!-- Name input -->
          <div class="contact-fields">
            <MDBInput
              type="text"
              label="Name"
              id="form4Name"
              v-model="form4Name"
              wrapperClass="mb-4"
            />
          </div>

          <!-- Email input -->
          <div class="contact-fields">
            <MDBInput
              type="email"
              label="Email address"
              id="form4Email"
              v-model="form4Email"
              wrapperClass="mb-4"
            />
          </div>

          <!-- Message input -->
          <div class="contact-fields">
            <MDBTextarea
              label="Message"
              id="form4Textarea"
              v-model="form4Textarea"
              wrapperClass="mb-4"
            />
          </div>

          <!-- Checkbox -->
          <div class="form-check d-flex justify-content-center mb-4">
            <MDBCheckbox
              label="Send me a copy of this message"
              id="form4CopyCheck"
              v-model="form4CopyCheck"
            />
          </div>

          <!-- Submit button -->
          <MDBBtn color="primary" block class="mb-4"> Send </MDBBtn>
        </form>
    </b-row>
  </section>
</template>

<script>
import { MDBInput, MDBCheckbox, MDBBtn, MDBTextarea } from "mdb-vue-ui-kit";
import { ref } from "vue";

export default {
  components: {
    MDBInput,
    MDBCheckbox,
    MDBBtn,
    MDBTextarea,
  },
  setup() {
    const form4Name = ref("");
    const form4Email = ref("");
    const form4Password = ref("");
    const form4Textarea = ref("");
    const form4CopyCheck = ref(true);

    return {
      form4Name,
      form4Email,
      form4Password,
      form4Textarea,
      form4CopyCheck,
    };
  },
};
</script>

<style scoped>
.contact-fields {
  background-color: white;
}
.contact-container {
  background-color: orange;
  padding: 100px 0 100px;
}
</style>
