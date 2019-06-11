<template>
    <div>
        <div class="row">
            <div class="col-xs-12">
                <q-field class="">
                    <q-input
                            v-model="form.es.title"
                            float-label="Asunto"
                            :after="[{icon : 'local_offer'}]"/>
                </q-field>
            </div>
        </div>

        <div class="row q-mt-lg">
            <div class="col-xs-6 q-pr-sm">
                <q-datetime
                        :after="[{icon: 'access_time'}]"
                        v-model="form.time"
                        type="time"
                        format="HH:mm:ss"
                        float-label="Hora"/>
            </div>
            <div class="col-xs-6 q-pl-sm">
                <q-datetime
                        :after="[{icon: 'date_range'}]"
                        v-model="form.date"
                        format="YYYY-MM-DD"
                        type="date"
                        float-label="Fecha"/>
            </div>
        </div>

        <div class="row q-mt-lg">
            <div class="col-xs-12">
                <q-field class="">
                    <q-input
                            float-label="Ciudad"
                            :after="[{icon : 'location_on'}]"/>
                </q-field>
            </div>
        </div>

        <div class="row q-mt-lg">
            <div class="col-xs-12">
                <q-field class="">
                    <q-input
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
                            v-model="form.phone"
                            float-label="Número de contacto"
                            :after="[{icon : 'stay_current_portrait'}]"/>
                </q-field>
            </div>
        </div>

        <div class="row q-mt-lg">
            <div class="col-xs-12">
                Actividades
                <q-chips-input v-model="form.es.activities" placeholder="Nuevas Actividades" />
            </div>

        </div>

        <div class="row q-mt-lg">
            <div class="col-xs-12">
                Participantes
            </div>
            <div class="col-xs-10">
            <q-select
                    v-model="form.participants"
                    float-label="Seleciones los participantes"
                    multiple
                    :options="participantOptions"
            />
            </div>
            <div class="col-md-2 q-mt-md q-pl-lg">
                <new-participant @created="getParticipant(true)"/>
            </div>
        </div>

        <div class="row q-mt-lg">
            <div class="col-xs-12">
                <div class="q-mt-lg">
                    <p>Descripcion</p>
                    <q-editor
                            v-model="form.es.description"
                            height="300px"/>
                </div>
            </div>
        </div>

        <div class="row q-mt-lg q-mb-lg">
            <div class="col-xs-12 flex flex-center">
                <q-btn
                        rounded
                        label="guardar"
                        @click="createActs()"
                        color="primary"/>
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
                    es:{
                        title:'',
                        description:'',
                        activities: [],
                    },
                    time: '',
                    date: '',
                    cityId: '957',
                    address: '',
                    email: '',
                    phone: '',
                    createdAt:'',
                    participants: [],
                    user_id:this.$store.state.auth.userId,
                },
                url: '',
                participantOptions:[],
                loading:false
            }
        },
        validations: {
            form: {
                es: {
                    title: {required},
                    description:{required}
                },
                address:{required}

            }
        },
        mounted(){
            this.getParticipant(true)
        },
        methods: {
            createActs() {
                this.loading = true;
                this.form.createdAt=this.$moment(this.form.date,'YYYY-MM-DDTHH:mm:ss').format('YYYY-MM-DD') + ' ' + this.$moment(this.form.time,'YYYY-MM-DDTHH:mm:ss').format('HH:mm:ss')
                let data = this.form
                let configName = 'apiRoutes.acts.acts'
                if (!this.$v.$error) {
                    this.loading = true
                    actServices.crud.create(configName, data).then(response => {
                        alert.success('Acta creada Corectamente', 'top')
                        this.loading = false;
                        this.$emit('created')
                    }).catch(error => {
                        alert.error('Error al crear el acta', 'bottom', false, 2500)
                        this.loading = false;
                    })
                } else {
                    alert.error("Hya argunos errores en el Formulario", 'bottom', false, 2500)
                }

            },
            getParticipant(refresh = false){
                let params = {
                    refresh : refresh,
                    params : {filter : {user : this.$store.state.auth.userId}}
                }
                actServices.crud.index('apiRoutes.acts.participants',params).then(response => {
                    this.participantOptions=this.$helper.array.select(response.data);
                }).catch(error => {

                })
            }

        }
    }
</script>