<template>
  <div class="overflow-hidden sidebar">
    <div class="container">
      <div
          @click="goToStep(steps.stepCount)"
          v-for="steps in pagination"
          :key="steps.id"
          class="row align-items-center justify-content-center mt-5 pagination"
          :class="{ 'disabled': !isStepComplete(steps.stepCount) }"
      >
        <span
            class="col-2 info_circle"
            :class="{ 'active': step === steps.stepCount }"
        >
          {{ steps.stepCount }}
        </span>
        <div class="col-6">
          <p class="text-light m-0">{{ steps.stepName }}</p>
          <h6 class="fw-bolder text-light m-0">{{ steps.title }}</h6>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { pagination } from "@/lib/const/pagination";
import { mapFields } from "vuex-map-fields";
import useValidate from "@vuelidate/core";
import { email, required } from "@vuelidate/validators";

export default {
  name: "sidebar",
  setup() {
    const v$ = useValidate();
    return { v$ };
  },
  data() {
    return {
      pagination,
    };
  },
  computed: {
    ...mapFields([
      "planValue",
      "pickAddOns",
      "user",
      "step",
    ]),
    isValidPhoneNumber() {
      const phoneRegex = /^(?:\+994|0)([1-9][0-9]{8})$/;
      return phoneRegex.test(this.user.phone);
    },
  },
  methods: {
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
          return true
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
          return this.planValue !== null &&  this.pickAddOns[0]
        default:
          return false;
      }
    },
  },
  validations() {
    return {
      user: {
        firstName: {
          required,
        },
        phone: {
          required,
        },
        email: {
          required,
          email,
        },
      },
    };
  },
};
</script>

<style scoped>
@import "@/assets/css/parent.css";
</style>
