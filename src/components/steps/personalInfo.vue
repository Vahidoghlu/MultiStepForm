<template>
  <div>
    <h5 class="">Personal info</h5>
    <p class="text-muted mb-4">Please provide your name, email address and phone number.</p>
    <label for="name">Name</label>
    <input v-model="user.firstName" class="form-control mb-2" id="name" type="text"
           placeholder="Venecca Mint">
    <label for="mail">Email Address</label>
    <input v-model="user.email" class="form-control mb-2" id="mail" type="email"
           placeholder="veneccamint@gmail.com">
    <label for="phone">Phone number</label>
    <input @input="sanitizePhoneNumber" v-model="user.phone" class="form-control mb-2" id="phone"
           type="text" placeholder="+994 55 960 11 55">
    <p v-if="!isValidPhoneNumber(user.phone)" class="text-danger">Azərbaycana aid telefon nömrəsini daxil edin</p>
    <div v-if="v$.user.$invalid" class="alert alert-danger" role="alert">
      Formu düzgün doldurun
    </div>

  </div>
</template>

<script>
import useValidate from '@vuelidate/core'
import {required} from '@vuelidate/validators'
import {mapFields} from 'vuex-map-fields';
import {isValidPhoneNumber} from '@/lib/helpers/validations/isValidPhoneNumber';
import ButtonsNextPrev from "@/components/buttonsNextPrev.vue";

export default {
  name: "firstStep",
  components: {ButtonsNextPrev},
  setup(){
    return {v$: useValidate()}
  },
  validations() {
    return {
      user: {
        phone: {
          required
        },
      }
    }
  },

  computed: {
    ...mapFields(['user',]),
  },


  methods: {
    isValidPhoneNumber,
    sanitizePhoneNumber() {
      this.user.phone = this.user.phone.replace(/[^0-9\+\-]/g, '');
    },

  },

}
</script>

<style scoped>
@import "@/assets/css/parent.css";
</style>