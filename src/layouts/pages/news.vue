<template>
  <div class="q-px-md q-py-lg">

    <q-field  class="q-my-lg">
      <q-input 
        v-model="model" 
        float-label="Titulo de la Noticia" 
        :after="[{icon : 'local_offer'}]"/>
    </q-field>

    <q-field  class="q-my-lg">
      <q-select
        v-model="select"
        float-label="Categoría de la noticia"
        multiple
        chips
        :options="selectOptions"/>
    </q-field>

    <q-field class="q-my-xl">
      <q-uploader :url="url" v-model="form.image"/>
    </q-field>

    <div class="q-mt-xl">
      <p>Contenido de la Noticia</p>
      <q-editor v-model="form.content" />
    </div>

  </div>
</template>

<script>
  export default {
    data(){
      return{
        form:{
          title: '',
          category: '',
          image: '',
          content: ''
        },
        model: '',
        url: '',
        select: [],
        selectOptions: [
          {
            label: 'Google',
            value: 'goog'
          },
          {
            label: 'Facebook',
            value: 'fb'
          }
        ],
      }
    }
  }
</script>