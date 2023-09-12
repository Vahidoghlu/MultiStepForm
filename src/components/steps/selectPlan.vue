<template>
  <div>
    <h5>Select your plan</h5>
    <p class="text-muted mb-4">You have the option of monthly or yearly billing</p>
    <div class="d-flex gap-2 justify-content-between">
      <selectcard
          v-model="planValue"
          :cardData="cardData"
      >
      </selectcard>
    </div>
  </div>
</template>

<script>
import Selectcard from "@/components/cards/selectcard.vue";
import {mapFields} from 'vuex-map-fields';

export default {
  name: "selectPlan",
  components: {Selectcard},

  computed: {
    ...mapFields(['planValue', 'cardData']),
  },

}
</script>

<style scoped>
@import "@/assets/css/parent.css";
</style>