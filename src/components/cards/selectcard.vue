<template>
  <div class="col-4" v-for="card in cardData" :key="card.id">
    <label
        :class="{ active: card.id === Number(modelValue) }"
        class="plan_card w-100 p-4"
        :for="card.id"
    >
      <div class="row">
        <component :is="getComponentType(card.header)"/>
        <p class="mt-4 text-center fw-bold">{{ card.header }}</p>
        <small class="text-muted text-center">{{ card.price }}</small>
      </div>
    </label>
    <input
        hidden
        type="radio"
        :name="card.header"
        :id="card.id"
        :checked="Number(modelValue) === card.id"
        @input="$emit('update:modelValue', $event.target.value)"
        :value="card.id"
    >
  </div>
</template>

<script>
import arcade from "@/components/image/arcade.vue";
import advanced from "@/components/image/advanced.vue";
import pro from "@/components/image/pro.vue";


export default {
  name: "selectcard",
  components: {arcade, advanced, pro},
  props: {
    cardData: {
      type: Array,
      default: () => [],
    },
    modelValue: {
      type: Number,
      default: null
    }
  },
  methods: {
    getComponentType(header) {
      switch (header) {
        case "Arcade":
          return arcade;
        case "Advanced":
          return advanced;
        default:
          return pro;
      }
    },
  },
};
</script>

<style scoped>
@import "@/assets/css/card.css";
</style>
