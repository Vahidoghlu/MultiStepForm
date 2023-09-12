<template>
  <div class="row justify-content-around">
    <button v-if="step > 1" class="btn btn-secondary w-25" @click="prevStep">Previous</button>
    <button v-if="step <= 3" class="btn btn-primary w-25" @click="callBothMethods">Next</button>
    <button v-if="step > 3" class="btn btn-success w-25" @click="callBothMethods">Submit</button>
  </div>
</template>

<script>
import { isValidPhoneNumber } from "@/lib/helpers/validations/isValidPhoneNumber";
import { mapFields } from "vuex-map-fields";
import useValidate from '@vuelidate/core';
import { email, required } from "@vuelidate/validators";
import {pagination} from "@/lib/const/pagination";


export default {
  name: "buttonsNextPrev",
  data() {
    return {
      pagination
    }
  },
  setup() {
    const v$ = useValidate();
    return { v$ };
  },
  validations() {
    return {
      user: {
        firstName: {
          required
        },
        phone: {
          required
        },
        email: {
          required,
          email
        }
      }
    }
  },
  computed: {
    ...mapFields([
      'user',
      'step',
      "planValue",
      "pickAddOns",]),
  },
  methods: {
    isValidPhoneNumber,

    prevStep() {
      if (this.step > 1) {
        this.step--;
      }
    },
    submitForm() {
      this.v$.user.$touch();
      return !this.v$.user.$invalid && this.isValidPhoneNumber(this.user.phone)
    },
    callBothMethods() {
      if (this.submitForm()) {
        let targetStep = this.step + 1;
        this.goToStep(targetStep);
      }
    },
    goToStep(targetStep) {
      if (this.isStepComplete(targetStep)) {
        this.step = targetStep;
      } else {
        this.showErrorModal = true;
      }
    },
    isStepComplete(step) {
      switch (step) {
        case 1:
          return true;
        case 2:
          return (
              this.isValidPhoneNumber &&
              this.user.firstName &&
              this.user.email &&
              this.user.phone
          );
        case 3:
          return this.planValue !== null;
        case 4:
          return this.planValue !== null && this.pickAddOns[0];
        default:
          return false;
      }
    },
  }
}
</script>


<style scoped>

</style>