<template>


  <div class="row w-100">
    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-md-8 main_card p-1 ps-3">
          <div class="row">

            <sidebar></sidebar>

            <div class="col-md-6 offset-1">
              <div class="row h-100 align-content-center justify-content-between position-relative">
                <div class="">
                  <form @submit.prevent>
                    <component :is="currentStepComponent"></component>
                  </form>
                </div>
                <div class="position-absolute bottom-0 mb-5">
                  <buttons-next-prev></buttons-next-prev>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import personalInfo from "@/components/steps/personalInfo.vue";
import SelectPlan from "@/components/steps/selectPlan.vue";
import PickAddons from "@/components/steps/pickAddons.vue";
import FinishingUp from "@/components/steps/finishingUp.vue";
import Sidebar from "@/components/sidebar.vue";
import {mapFields} from "vuex-map-fields";
import ButtonsNextPrev from "@/components/buttonsNextPrev.vue";

export default {
  components: {
    ButtonsNextPrev,
    Sidebar,
    FinishingUp,
    PickAddons,
    SelectPlan,
    personalInfo
  },
  computed: {
    ...mapFields(['step']),
    currentStepComponent() {
      switch (this.step) {
        case 1:
          return personalInfo;
        case 2:
          return SelectPlan;
        case 3:
          return PickAddons;
        case 4:
          return FinishingUp;
        default:
          return personalInfo;
      }
    },
  },

};

</script>

<style scoped>
@import "@/assets/css/parent.css";
</style>
