<template>
  <div>
    <!-- EMAIL FIELD -->
    <q-field
      :error="$v.form.username.$error"
      error-label="Este campo es requerido"
      class="q-mb-md">
      <q-input 
        autofocus
        autocomplete="off"
        v-model="form.username"
        type="text"
        :before="[{icon: 'person'}]"        
        float-label="Email"/>
    </q-field>
    <!-- PASSWORD FIELD -->
    <q-field
      :error="$v.form.password.$error"
      error-label="Este campo es requerido"
      class="q-my-md">
      <q-input 
        v-model="form.password"
        type="password"
        :before="[{icon: 'lock'}]"
        float-label="Password"/>
    </q-field>
    <!-- ACCTION BUTTON -->
    <div class="text-center q-pt-lg">
      <q-btn 
        :loading="loading_login"
        color="primary"
        @click="authenticate()"
        label="LOGIN">      
        <span slot="loading">
          <q-spinner-hourglass class="on-left"/>
          <span>VALIDATING...</span>
        </span>
      </q-btn>
    </div>
  </div>
</template>

<script>
  import {required, email, numeric, minLength} from 'vuelidate/lib/validators';
  import {alert} from '@imagina/qhelper/_plugins/alert'
  import {helper} from '@imagina/qhelper/_plugins/helper'

  export default {
    data () {
      return {
        rememberData: true,
        loading_login: false,
        form: {
          username: null,
          password: null
        },
      }
    },
    validations: {
      form: {
        username: {required},
        password: {required}
      }
    },
    methods: {
      async authenticate() {
        this.$v.$touch();
        if (this.$v.$error) {
          alert.error('Please review fields again.', 'bottom');
        } else {
          this.loading_login = !this.loading_login;
          const {username, password} = this.form;
          this.$store.dispatch("auth/AUTH_REQUEST", {username, password}).then(response => {
            this.loading_login = !this.loading_login;
          });
        }
      },
    }
  }
</script>