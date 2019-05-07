<template>
  <div class="">
    <q-field  class="">
      <q-input 
        v-model="model" 
        float-label="Asunto" 
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
      <q-uploader 
        :url="url" 
        v-model="form.image"/>
    </q-field>
    <div class="q-mt-lg">
      <p>Contenido de la Noticia</p>
      <q-editor 
        v-model="form.content" 
        height="300px"/>
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
            label: 'Categoría 1',
            value: 'Categoría'
          },
          {
            label: 'Categoría 2',
            value: 'Categoría'
          }
        ],
      }
    }
  }
</script>