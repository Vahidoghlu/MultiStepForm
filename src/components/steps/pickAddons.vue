<template>
  <div>
    <h5>Pick add-ons</h5>
    <p class="text-muted mb-4">Add-ons help enhance your gaming experience.</p>
    <div class="row justify-content-between">

      <pickadds-select
          v-for="item in pickaddsData"
          :key="item.id"
          :value="item.id"
          :label="item.header"
          :desc="item.text"
          :price="item.price"
          v-model="pickAddOns"
      ></pickadds-select>


    </div>
  </div>
</template>

<script>
import pickaddsSelect from "@/components/cards/pickaddsSelect.vue";
import {mapFields} from "vuex-map-fields";

export default {
  name: "pickAddons",
  components: {pickaddsSelect},

  computed: {
    ...mapFields([ 'pickAddOns', 'pickaddsData']),
  },

}
</script>

<style scoped>
@import "@/assets/css/parent.css";
</style>