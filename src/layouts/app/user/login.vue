<template>
  <q-page id="pageLogin" class="flex flex-center">

    <div class="row q-mx-md" style="width: 350px">
      <img src="statics/logo.png" width="100%"/>
      <div id="form-login-right"
           class="col-12"
           style="padding: 30px 25px">

        <!-- USER -->
        <q-field
                :error="$v.form.username.$error"
                error-label="Este campo es requqrido"
        >
          <q-input name="username"
                   autofocus
                   autocomplete="off"
                   v-model="form.username"
                   type="text"
                   color="blue-grey"
                   :before="[{icon: 'person'}]"
                   @keyup.enter="authenticate()"
                   float-label="Email"
          />
        </q-field>
        <!-- PASS -->
        <q-field
                :error="$v.form.password.$error"
                error-label="Este campo es requqrido"
        >
          <q-input v-model="form.password"
                   type="password"
                   name="password"
                   color="blue-grey"
                   :before="[{icon: 'lock'}]"
                   @keyup.enter="authenticate()"
                   float-label="Contraseña"
          />
        </q-field>

        <!--=== LOGIN ===-->
        <div class="text-center">
          <q-btn :loading="loading_login"
                 color="blue-grey" name="submit"
                 @click="authenticate()">
            Iniciar sesiòn
            <span slot="loading">
                <q-spinner-hourglass class="on-left"/>
                Validando..
              </span>
          </q-btn>
        </div>
        <div class="text-center q-mt-lg">
          <q-btn
                  class="full-width"
                  @click="register"
                  color="amber-9" >
            Registro
          </q-btn>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
  //Plugins
  import {required, email, numeric, minLength} from 'vuelidate/lib/validators';
  //Services
  import authService from '@imagina/quser/_services/profile/index';

  export default {
    data() {
      return {
        form: {
          username: '',
          password: ''
        },
        rememberData: true,
        loading_login: false,
        inRequest : false
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
        if(!this.inRequest){
          this.$v.$touch();
          if (!this.$v.$error) {
            this.inRequest = true
            this.loading_login = true;
            const {username, password} = this.form;
            this.$store.dispatch("auth/AUTH_REQUEST", {username, password}).then((response) => {
              this.loading_login = false;
              this.inRequest = false
              this.$router.push({name:'app.config'})
            }).catch(error => {
              this.loading_login = false;
              this.inRequest = false
            });
          }
        }
      },
        register(){
            this.$router.push({name:"auth.register"})
        }
    }
  }
</script>
<style lang="stylus">
  @import "~variables";
  #pageLogin
    background-image url("https://personeriadeibague.gov.co/assets/background/fondologin.png")
    background-repeat no-repeat
    background-position top left


    .q-btn
      min-width 140px !important
    #form-login-left
      min-height 150px
      .bg-color
        background-color $blue-grey
        height 100%
        width 100%
</style>
