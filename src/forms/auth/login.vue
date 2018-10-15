<template>
  <div>
    <div v-if="auth.state === null">
      <p class="text-xl-center my-3 info-text">Enter your phone number, <br /> We will send you a PIN code to verify your phone.</p>
      <b-form v-if="show" class="form-material">
        <b-form-group id="phoneGroup"
                      label-for="phoneInput"
                      description="You will receive a verification code by text message(SMS).">
          <b-form-input id="phoneInput"
                        type="tel"
                        v-mask="'+254(7##)##-####'"
                        v-model.trim="input.phone"
                        @input="setPhone"
                        :state="valid.phone"
                        required
                        placeholder="Phone Number">
          </b-form-input>
          <b-form-invalid-feedback>{{feedback.phone}}</b-form-invalid-feedback>
        </b-form-group>
        <b-button @click="onContinue" class="btn-outline-primary btn-rounded btn-block mt-5"> Continue <i class="fas fa-arrow-right"></i></b-button>
      </b-form>
    </div>
    <div v-if="auth.state === 'pending'">
      <app-successicon class="mb-3" v-on:countdown="setRetry"></app-successicon>
      <strong class="text-xl-center info-text">Sent!</strong>
      <p class="text-xl-center my-3 info-text">An SMS with your confirmation code was sent to your phone.</p>
      <b-form class="form-material mb-3">
        <b-form-group id="phoneGroup"
                      label-for="phoneInput"
                      description="Enter your pin">
          <b-form-input id="phoneInput"
                        type="text"
                        v-mask="'####'"
                        v-bind:readonly="(readonly.pin)? true:false"
                        v-bind:disabled="(disabled.pin)? true:false"
                        v-model.trim="input.pin"
                        @input="setPin"
                        :state="valid.pin"
                        required>
          </b-form-input>
          <b-form-invalid-feedback>{{feedback.pin}}</b-form-invalid-feedback>
        </b-form-group>
      </b-form>
      <span v-if="retry.retry" class="text-center text-light">{{retry.text}}</span>
      <b-button v-else @click="onResend"  class="btn-outline-primary btn-rounded btn-block mt-5"> Retry </b-button>
    </div>
    <div v-if="auth.state === 'failed'">
      <app-erroricon v-on:countdown="setRetry" class="mb-3"></app-erroricon>
      <strong class="text-xl-center text-capitalize info-text">{{ error.title}}</strong>
      <p class="text-xl-center text-capitalize my-3 info-text" style="text-transform: capitalize;">{{ error.message }}</p>
      <b-button @click="onResend" v-bind:disabled="retry.retry ? true : false" v-bind:class="['btn-outline-primary btn-rounded btn-block mt-5', {active:retry.retry}]"> {{ retry.text }} </b-button>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import {mapState, mapMutations, mapActions, mapGetters} from 'vuex'
  import successicon from '@/components/animations/success.vue'
  import erroricon from '@/components/animations/error.vue'

  const { mask } = require('vue-the-mask')

  export default Vue.extend({
    data () {
      return {
        show: true
      }
    },

    components:{
      'app-successicon': successicon,
      'app-erroricon': erroricon
    },
    
    directives: {mask},

    computed: {
      ...mapState('auth',[
        'auth',
        'input',
        'valid',
        'error',
        'retry',
        'feedback',
        'readonly',
        'disabled'
      ]),

      ...mapGetters('auth', [
         
      ])
    },
    
    methods: {
      ...mapMutations('auth', [
        'setPhone',
        'setRetry',
        'setPin'
      ]),
      ...mapActions('auth', [
        'onContinue',
        'onResend'
      ]),
    }
  })
</script>