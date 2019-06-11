<template>
  <q-page id="pageLogin" class="flex flex-center">

          <<div class="row q-mx-md" style="width: 350px">
    <img src="statics/logo.png" width="100%"/>
    <div id="form-login-right"
         class="col-12"
         style="padding: 30px 25px">

    <!-- USER -->
              <q-field
                :error="$v.form.first_name.$error"
                error-label="Este campo es requerido"
                class="q-mb-md">
                <q-input 
                  autofocus
                  autocomplete="off"
                  v-model="form.first_name"
                  type="text"
                  :before="[{icon: 'person'}]"
                  float-label="Nombre"
                />
              </q-field>


              <q-field
                :error="$v.form.last_name.$error"
                error-label="Este campo es requerido"
                class="q-mb-md">
                <q-input name="email"
                  autofocus
                  autocomplete="off"
                  v-model="form.last_name"
                  type="text"
                  :before="[{icon: 'person'}]"
                  float-label="Apellido"
                />
              </q-field>

              <q-field
                :error="$v.form.email.$error"
                error-label="Este campo es requerido"
                class="q-mb-md">
                <q-input name="email"
                  autofocus
                  autocomplete="off"
                  v-model="form.email"
                  type="text"
                  :before="[{icon: 'email'}]"
                  float-label="Email"
                />
              </q-field>

              <q-field
                :error="$v.form.password.$error"
                error-label="Este campo es requerido"
                class="q-mb-md">
                <q-input name="password"
                  autofocus
                  autocomplete="off"
                  v-model="form.password"
                  type="password"
                  :before="[{icon: 'lock'}]"
                  float-label="Contraseña"
                />
              </q-field>

              <q-field
                :error="$v.form.password_confirmation.$error"
                error-label="Este campo es requerido"
                class="q-mb-md">
                <q-input name="passwordConfirmation"
                  autofocus
                  autocomplete="off"
                  v-model="form.password_confirmation"
                  type="password"
                  :before="[{icon: 'lock'}]"
                  float-label="Confirmaciòn de Contraseña"/>
              </q-field>      

              <div class="text-center q-pt-lg">
                <q-btn :loading="loading_login"
                  color="primary"
                  name="submit"
                  @click="registerUser()">
                  Registrar
                  <span slot="loading">
                      <q-spinner-hourglass class="on-left"/>
                      Validando...
                    </span>
                </q-btn>
              </div>
          <div class="text-center q-mt-lg">
              <q-btn class="full-width"
                     @click="login()"
                     color="amber-9">
                  Iniciar Sesión
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
    import userService from 'src/services/users/service'
    import {alert} from '@imagina/qhelper/_plugins/alert'

  export default {
    data() {
      return {
        loading_login: false,
        form: {
          last_name: '',
          first_name: '',
          email: '',
          password: '',
          password_confirmation: '',
          roles: [],
          public_form: true,
          status: 1      
        }
      }
    }, 
    validations: {
      form: {
        last_name: {required},
        first_name: {required},
        email: {required, email},
        password: {required},
        password_confirmation: {required},
      }
    },
    methods:{
      registerUser(){
        this.$v.$touch();
        if (this.$v.$error) {
          alert.error('Por favor revise los campos de nuevo.', 'bottom');
          return
        }
        let data = {attributes:this.form}
        userService.register(data)
        .then(response=>{
          this.$router.push({name:"auth.login"})
          this.$q.notify({
            message: `Usuario creado favor verifica correo electronico para activar`,
            timeout: 0, // in milliseconds; 0 means no timeout
            type: 'positive',
            color: 'positive',
            position: 'bottom',
            closeBtn: true,
          })
        })
        .catch(error=>{
            alert.error('Por favor revise los campos de nuevo.', 'bottom');
        })
      },
      login(){
          this.$router.push({name:"auth.login"})
      }
    }
  }
</script>

<style lang="stylus">
  @import "~variables";
  #pageLogin
    background-image url("/assets/background/fondologin.png")
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
