<template>
  <q-tabs inverted color="green" animated>
    <q-tab default slot="title" name="list" label="Actas" />
    <q-tab slot="title" name="create" label="Crear Acta" />
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
  import indexComponent from 'src/components/app/proceedings/index'
  import createComponent from 'src/components/app/proceedings/create'
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