<template>
    <div class="">
        <q-field class="">
            <q-input
                    :error="$v.form.es.title.$error"
                    v-model="form.es.title"
                    float-label="Titulo de la Noticia"
                    :after="[{icon : 'local_offer'}]"/>
        </q-field>
        <q-field class="q-my-lg">
            <q-select
                    v-model="form.category"
                    float-label="Categoría de la noticia"
                    radio
                    chips
                    :options="categoryOptions"/>
        </q-field>
        <q-field class="q-my-xl">
            <q-uploader
                    :key="uploaderID"
                    :url="uploaderUrl"
                    method="POST"
                    extensions=".gif,.jpg,.jpeg,.png,.pdf"
                    auto-expand
                    :additional-fields="additionalFields"
                    @fail="alert.error('File failed','bottom',false,2500)"
                    @uploaded="finishUploadFiles"
                    hide-upload-button
                    ref="uploadComponent"
                    @add="()=>{$refs.uploadComponent.upload()}"
                    :headers="headers"/>

        </q-field>
        <div class="q-mt-lg">
            <p>Contenido de la Noticia</p>
            <q-editor
                    :error="$v.form.es.description.$error"
                    v-model="form.es.description"
                    height="300px"/>
        </div>
        <div class="row q-mt-lg q-mb-lg">
            <div class="col-xs-12 flex flex-center">
                <q-btn
                        rounded
                        label="guardar"
                        @click="createPost()"
                        color="primary"/>
            </div>
        </div>
        <q-inner-loading :visible="loading">
            <q-spinner-hourglass size="50px" color="primary"></q-spinner-hourglass>
        </q-inner-loading>
    </div>
</template>

<script>
    /*Plugins*/
    import { required } from 'vuelidate/lib/validators';
    /*Services*/
    import blogService from '@imagina/qblog/_services/index'
    import {uid} from 'quasar'
    import  {alert} from '@imagina/qhelper/_plugins/alert'
    export default {
        data() {
            return {
                props: {},
                form: {
                    es:{
                        title: '',
                        description: '',
                        summary:''
                    },
                    category: '',
                    categories:[],
                    mediasSingle: [],
                    status:'0',
                    user_id:this.$store.state.auth.userId,
                },
                validations: {
                    title: {required},
                    description: {required},
                    summary: {required}
                },
                model: '',
                url: '',
                select: [],
                categoryOptions: [],
                loading:false,
                uploaderID: uid(),
                uploaderUrl: config('apiRoutes.media.file'),
                filter: {
                    search: '',
                    folderId: 0
                },
              uploadFile: true,
                headers: {
                    'Authorization': this.$store.state.auth.userToken
                },


            }
        },
        validations: {
            form: {
                es: {
                    title: {required},
                    description:{required}
                },
            }
        },
        mounted(){
            this.getCategories()
        },
        computed: {
            /**
             * Additional fields for uploader http request
             * @returns {*[]}
             */
            additionalFields() {
                return [
                    {
                        name: 'parent_id',
                        value: this.filter.folderId
                    }
                ];
            }
        },
        methods: {
        createPost() {
            this.loading = true;
            this.form.es.summary=this.form.es.description.substr(0,150);
            this.form.categories=[this.form.category];
            let data = this.form
            let configName = 'apiRoutes.blog.posts'

            if (!this.$v.$error) {
                this.loading = true;
                    blogService.crud.create(configName, data).then(response => {
                        alert.success('Noticia enviada satisfactoriamente', 'top');
                        this.loading = false;
                        this.$emit('created')
                    }).catch(error => {
                        alert.error('Lo lamentamos su noticia no fue enviada', 'bottom', false, 2500)
                        this.loading = false;
                    })

            } else {
                alert.error("Tiene algunos errores en el formulario", 'bottom', false, 2500)
            }

        },
        //Get post categories
        getCategories() {
            this.loadingCategories = true
            let configName = 'apiRoutes.blog.categories'
            let params = {//Params to request
                refresh: true,
                params: {filter:{'parent':'10'},include: 'parent'},
            }
            //Request
            blogService.crud.index(configName, params).then(response => {
                this.categoryOptions = this.$helper.array.select(response.data)
            }).catch(error => {
                this.$helper.alert.error('Failed: ' + error, 'bottom')
                this.loadingCategories = false
            })

        },

            finishUploadFiles(file, xhr) {
                let data=JSON.parse(xhr.response);
                this.form. mediasSingle={'mainimage':data.id};
                alert.success('Imagen cargada', 'top')
            },
    }
    }
</script>