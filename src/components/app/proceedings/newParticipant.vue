<template>
    <div>
        <q-btn
                @click="modalParticipant = true"
                icon="add"
                color="primary"
                round/>
        <q-modal v-model="modalParticipant">
            <div class="layout-padding">
                <div class="row">
                    <div class="col-md-12">
                        <q-field
                                :error="this.$v.form.es.name.$error"
                                error-label="Dato requerido">
                            <q-input
                                    v-model="form.es.name"
                                    float-label="Nombre" />
                        </q-field>
                    </div>
                    <div class="col-md-12">
                        <q-btn
                                class="full-width"
                                color="primary"
                                @click="saveParticipant()"
                                label="Guardar"/>
                    </div>
                </div>
                <q-inner-loading :visible="loading">
                    <q-spinner-hourglass size="50px" color="primary"></q-spinner-hourglass>
                </q-inner-loading>
            </div>
        </q-modal>
    </div>
</template>

<script>
    import { required } from 'vuelidate/lib/validators';
    import actServices from 'src/services/application/acts'
    import  {alert} from '@imagina/qhelper/_plugins/alert'
    export default {
        data(){
            return{
                loading:false,
                modalParticipant: false,
                form:{
                    es:{name: ''},
                    user_id:this.$store.state.auth.userId,
                }
            }
        },
        validations: {
            form: {
                es: {
                    name: {required}
                },


            }
        },
        methods:{
            saveParticipant() {
                console.warn(config('apiRoutes.acts.participants'))
                this.loading = true;
                this.$v.form.es.name.$touch()
                if (this.$v.form.es.name.$error) {
                    this.$q.notify({
                        message: 'Por favor revise los campos de nuevo.',
                        position: 'top-right',
                        closeBtn: true})
                    return
                }
                let data = this.form
                let configName = 'apiRoutes.acts.participants'
                if (!this.$v.$error) {
                    this.loading = true
                    actServices.crud.create(configName, data).then(response => {
                        alert.success('El Participante creado Corectamente', 'top')
                        this.form.es.name = ''
                        this.modalParticipant = false
                        this.loading = false;
                        this.$emit('created')
                    }).catch(error => {
                        alert.error('Error al crear el acta', 'bottom', false, 2500)
                        this.loading = false;
                        console.warn(error)
                    })

                } else {
                    alert.error("Hya argunos errores en el Formulario", 'bottom', false, 2500)
                }

            },
        }
    }
</script>

<style scoped>

</style>