<template>
  <div class="row justify-center">
    <div class="col-12 col-md-6">
  <q-tabs inverted color="green" animated v-model="courentTap">
    <q-tab default slot="title" name="list" label="Noticias" />
    <q-tab slot="title" name="create" label="Subir Noticia" />
    <q-tab-pane name="list">
      <!-- LIST COMPONENT -->
      <indexComponent/>
    </q-tab-pane>
    <q-tab-pane name="create">
      <!-- CREATE COMPONENT -->
      <createComponent @created="courentTap='list'"/>
    </q-tab-pane>
  </q-tabs>
    </div>
  </div>
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
        return {
            courentTap:'list'
        }
    }
  }
</script>