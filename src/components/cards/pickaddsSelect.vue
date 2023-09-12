<template>
  <div class="form-check d-flex align-items-center mb-3 plan_card p-3 ps-5"
       :class="{ 'active': inputValue.includes(value) }">
    <input
        class="form-check-input d-inline-block me-5"
        type="checkbox"
        :id="'checkbox_' + value"
        :value="value"
        v-model="inputValue"
    >
    <label class="w-100 h-100 form-check-label d-inline-block d-flex align-items-center w-50"
           :for="'checkbox_' + value">
      <div class="col-9">
        <p class="m-0">{{ label }}</p>
        <small class="text-muted">{{ desc }}</small>
      </div>
      <p class="col-3 m-0">{{ price }}</p>
    </label>
  </div>
</template>

<script>
export default {
  name: "pickaddsSelect",
  props: {
    value: {},
    label: {},
    desc: {},
    price: {},
    modelValue: {
      type: Array,
      default: () => [],
    }
  },
  computed: {
    inputValue: {
      get() {
        return this.modelValue;
      },
      set(newValue) {
        this.$emit('update:modelValue', newValue)
      }
    }
  }
};
</script>

<style scoped>
@import "@/assets/css/card.css";
</style>
