<template>
  <q-tabs inverted color="green" animated>
    <q-tab default slot="title" name="list" label="Noticias" />
    <q-tab slot="title" name="create" label="Subir Noticia" />
    <q-tab-pane name="list">
      <!-- LIST COMPONENT -->
      <indexComponent/>
    </q-tab-pane>
    <q-tab-pane name="create">
      <!-- CREATE COMPONENT -->
      <createComponent/>
    </q-tab-pane>
  </q-tabs>
</template>

<script>
  // COMPONENTS
  import createComponent from 'src/components/app/news/create'
  import indexComponent from 'src/components/app/news/index'
  export default {
    components:{
      indexComponent,
      createComponent,
    },
    data(){
      return{
      }
    }
  }
</script>