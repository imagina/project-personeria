<template>
  <div>
    <div class="col-xs-12 flex flex-center">
      <q-btn 
        icon="view_list"
        size="lg"
        rounded
        color="primary"
        @click="$router.push({name:'app.noticias'})"
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
        @click="$router.push({name:'app.act'})"
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
      <a href="https://personeriadeibague.gov.co/radicacion-online"> <q-btn
              icon="playlist_add_check"
              size="lg"
              rounded
              style="background:#D7281E;color:white"
              label="Radicación Online"/></a>

    </div>
  </div>
</template>

<script>
  export default {
  }
</script>