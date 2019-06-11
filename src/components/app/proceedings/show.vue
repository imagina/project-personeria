<template>
  <div>
    <div class="row">
      <div class="col-xs-12">
        <q-field class="">
          <q-input
                  disable
                  v-model="form.es.title"
                  float-label="Asunto"
                  :after="[{icon : 'local_offer'}]"/>
        </q-field>
      </div>
    </div>

    <div class="row q-mt-lg">
      <div class="col-xs-6 q-pr-sm">
        <q-datetime
                disable
                :after="[{icon: 'access_time'}]"
                v-model="form.time"
                type="time"
                float-label="Hora"/>
      </div>
      <div class="col-xs-6 q-pl-sm">
        <q-datetime
                disable
                :after="[{icon: 'date_range'}]"
                v-model="form.date"
                type="date"
                float-label="Fecha"/>
      </div>
    </div>

    <div class="row q-mt-lg">
      <div class="col-xs-12">
        <q-field class="">
          <q-input
                  disable
                  v-model="form.city"
                  float-label="Ciudad"
                  :after="[{icon : 'location_on'}]"/>
        </q-field>
      </div>
    </div>

    <div class="row q-mt-lg">
      <div class="col-xs-12">
        <q-field class="">
          <q-input
                  disable
                  v-model="form.address"
                  float-label="Direccion"
                  :after="[{icon : 'directions'}]"/>
        </q-field>
      </div>
    </div>

    <div class="row q-mt-lg">
      <div class="col-xs-12">
        <q-field class="">
          <q-input
                  disable
                  v-model="form.email"
                  float-label="Correo Electónico"
                  :after="[{icon : 'email'}]"/>
        </q-field>
      </div>
    </div>

    <div class="row q-mt-lg">
      <div class="col-xs-12">
        <q-field class="">
          <q-input
                  disable
                  v-model="form.phone"
                  float-label="Número de contacto"
                  :after="[{icon : 'stay_current_portrait'}]"/>
        </q-field>
      </div>
    </div>

    <div class="row q-mt-lg">
      <div class="col-xs-12">
        Actividades
        <q-chips-input v-model="form.es.activities" placeholder="Nuevas Actividades" disable/>
      </div>

    </div>

    <div class="row q-mt-lg">
      <div class="col-xs-12">
        Participantes
      </div>
      <div class="col-xs-10">
        <q-select
                disable
                v-model="form.participants"
                float-label="Seleciones los participantes"
                multiple
                :options="participantOptions"
        />
      </div>
    </div>

    <div class="row q-mt-lg">
      <div class="col-xs-12">
        <div class="q-mt-lg">
          <p>Descripcion</p>
          <q-editor
                  disable
                  v-model="form.es.description"
                  height="300px"/>
        </div>
      </div>
    </div>
    <q-inner-loading :visible="loading">
      <q-spinner-hourglass size="50px" color="primary"></q-spinner-hourglass>
    </q-inner-loading>
  </div>
</template>

<script>
    import { required } from 'vuelidate/lib/validators';
    import actServices from 'src/services/application/acts'
    import NewParticipant from "./newParticipant";
    import  {alert} from '@imagina/qhelper/_plugins/alert'

    export default {
        components: {NewParticipant},
        data() {
            return {
                form: {
                    title:'',
                    description:'',
                    activities: [],
                    time: '',
                    date: '',
                    city: '',
                    address: '',
                    email: '',
                    phone: '',
                    participants: [],
                    user_id:this.$store.state.auth.userId,
                },
                url: '',
                participantOptions:[],
                loading:false
            }
        },

        mounted(){
            this.getAct(true)
        },
        methods: {
            getAct() {
                let params = {
                    refresh : refresh,
                    params : {filter : {user : this.$store.state.auth.userId}}
                }
                actServices.crud.show('apiRoutes.acts.acts',this.$route.params.id).then(response => {
                    this.form=response.data;
                }).catch(error => {

                })
            },

        }
    }
</script>