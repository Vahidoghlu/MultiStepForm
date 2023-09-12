<template>
  <div>
    <h5>Finishing up</h5>
    <p class="text-muted mb-4">Double check everything look OK before confirming.</p>
    <div class="finishing p-5">
      <div class="row">
        <p class="col-6">{{ selectedCard.header }}</p>
        <p class="col-6">{{ selectedCard.price }}</p>
      </div>

      <hr>
      <div class="row" v-for="item in selectedPickAdOns" :key="item.id">
        <small class="text-muted col-6">{{ item.header }}</small>
        <small class=" col-6">{{ item.price }}</small>
      </div>

    </div>
    <div class="row mt-4">
      <p class="text-muted col-6 fw-bolder">Total</p>
      <h6 class=" col-6 fw-bolder">{{ totalAmount }}</h6>
    </div>
  </div>
</template>

<script>
import {mapFields} from "vuex-map-fields";

export default {
  name: "finishingUp",
  computed: {
    ...mapFields(['planValue', 'pickAddOns', 'cardData', 'pickaddsData']),
    selectedPickAdOns() {
      return this.pickaddsData.filter((card) => {
        return this.pickAddOns.includes(card.id)
      });
    },

    selectedCard() {
      return this.cardData.find((card) => {
        return this.planValue == card.id
      });

    },

    totalAmount() {
      let planPrice = parseFloat(this.selectedCard.priceNumber);
      let addOnsTotalPrice = this.selectedPickAdOns.reduce(
          (total, item) => total + parseFloat(item.priceNumber),
          0
      );

      return `$${(planPrice + addOnsTotalPrice).toFixed(2)}/mo`;
    },
  },

}
</script>

<style scoped>
@import "@/assets/css/parent.css";
</style>