<template>
  <div>

    <q-field
      :error="$v.form.title.$error"
      error-label="Este campo es requerido"
      class="q-mb-md">
      <q-input 
        autofocus
        autocomplete="off"
        v-model="form.title"
        type="text"
        :before="[{icon: 'person'}]"        
        float-label="Email"/>
    </q-field>

    <q-field
      :error="$v.form.category.$error"
      error-label="Este campo es requerido"
      class="q-mb-md">
      <q-select
        v-model="form.category"
        float-label="Categoria"
        radio
      :options="categories"/>
    </q-field>

    <q-field
      error-label="Este campo es requerido"
      class="q-mb-md">
      <q-uploader
        url=""
        :upload-factory="uploadFile"/>
    </q-field>

    <q-field
      error-label="Este campo es requerido"
      class="q-mb-md">
      <q-editor v-model="form.content" />
    </q-field>

    <div class="text-center q-pt-lg">
      <q-btn 
        :loading="loading_login"
        color="primary"
        label="LOGIN">      
        <span slot="loading">
          <q-spinner class="on-left"/>
          <span>Guardando...</span>
        </span>
      </q-btn>
    </div>


  </div>
</template>

<script>
  export default {
    name: 'newsComponent',
    data () {
      return {
        categories:[],
        form:{
          title: null,
          category: null,
          image: null,
          content: null
        },
        loading_login: false,
      }
    }
  }
</script>