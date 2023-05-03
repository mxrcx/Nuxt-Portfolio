<template>
  <section class="contact-container" id="contact">
    <b-row class="justify-content-center">
      <b-col lg="6" md="8" sm="10" cols="12">
        <p class="text-center title-text">{{ $t("contact.title") }}</p>
      </b-col>
    </b-row>
    <b-row class="d-flex justify-content-center">
      <b-col lg="4" md="6" sm="8" cols="10" class="d-flex align-items-center">
        <p class="font-weight-bold regular-text pb-2">
          {{ $t("contact.text") }}
        </p>
      </b-col>
    </b-row>
    <b-row class="d-flex justify-content-center">
      <form>
        <!-- Name input -->
        <div class="contact-fields">
          <MDBInput
            type="text"
            :label="$t('contact.form.name')"
            id="form4Name"
            v-model="form4Name"
            wrapperClass="mb-4"
          />
        </div>

        <!-- Email input -->
        <div class="contact-fields">
          <MDBInput
            type="email"
            :label="$t('contact.form.email')"
            id="form4Email"
            v-model="form4Email"
            wrapperClass="mb-4"
          />
        </div>

        <!-- Message input -->
        <div class="contact-fields">
          <MDBTextarea
            :label="$t('contact.form.message')"
            id="form4Textarea"
            v-model="form4Textarea"
            wrapperClass="mb-4"
          />
        </div>

        <!-- Checkbox -->
        <div class="form-check d-flex justify-content-center mb-4">
          <MDBCheckbox
            :label="$t('contact.form.checkbox')"
            id="form4CopyCheck"
            v-model="form4CopyCheck"
          />
        </div>

        <!-- Submit button -->
        <MDBBtn color="primary" block class="mb-4" disabled>{{
          $t("contact.form.button")
        }}</MDBBtn>
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
    const popoverMessage = ref(false);

    return {
      form4Name,
      form4Email,
      form4Password,
      form4Textarea,
      form4CopyCheck,
      popoverMessage,
    };
  },
};
</script>

<style scoped>
.contact-fields {
  background-color: white;
}
.contact-container {
  background-color: white;
  padding: 100px 0 100px;
}
</style>
