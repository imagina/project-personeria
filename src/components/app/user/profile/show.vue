<template>
  <div>

    <img 
      style="position:absolute; right:-1px"
      src="/assets/app/bandera_Ibague.png">

    <!-- Data User-->
    <section class="row">
      <div class="col-xs-4">
      </div>
      <div class="col-xs-8">
      </div>
      <br><br><br><br><br><br>
    </section>

    <!-- Data User-->
    <q-card-separator />
    <section class="row q-mt-lg q-mb-lg">
      <div class="col-xs-12 flex flex-center">
        <q-btn 
          icon="view_list"
          size="lg"
          rounded
          color="primary" 
          label="CREAR NOTICIA"/>
      </div>
      <div class="col-xs-12 q-mt-lg">
        <p class="text-center">
          ¿Te están vulnerando algún derecho? ¿Tienes algo que reportar o denunciar? 
        </p>
      </div>

      <div class="col-xs-12 flex flex-center">
        <q-btn 
          icon="note_add"
          size="lg"
          rounded
          style="background:#D8AD1D;color:white" 
          label="CREAR Acta"/>
      </div>

      <div class="col-xs-12">
        <p class="text-center q-mt-lg">
          Si eres líder comunal, o presidente de 
          Junta de Acción Comunal, llena el siguiente formulario 
          para verificar los compromisos adquiridos. 
        </p>
      </div>

      <div class="col-xs-12 flex flex-center">
        <q-btn 
          icon="playlist_add_check"
          size="lg"
          rounded
          style="background:#D7281E;color:white"
          label="Radicación Online"/>
      </div>

    </section>

    <!-- Actas Recientes--> 
    <q-card-separator />
    <div class="row q-mt-lg q-pl-md">
      <div class="col-md-12">
        <p><b>Actas Recientes</b></p>
      </div>
    </div>
    <indexComponent/>

  </div>
</template>

<script>
  import indexComponent from 'src/components/app/proceedings/index'
  export default {
    components:{
      indexComponent
    },
    data () {
      return {}
    }
  }
</script>