<template>
  <div>

    <div class="row">
      <div class="col-xs-12">
        <q-field  class="">
          <q-input 
            v-model="form.name" 
            float-label="Nombres" 
            :after="[{icon : 'person'}]"/>
        </q-field>
      </div>
    </div>

    <div class="row q-mt-lg">
      <div class="col-xs-12">
        <q-field  class="">
          <q-input 
            v-model="form.lastName" 
            float-label="Apellidos" 
            :after="[{icon : 'person_outline'}]"/>
        </q-field>
      </div>
    </div>

    <div class="row q-mt-lg">
      <div class="col-xs-12">
        <q-field  class="">
          <q-input 
            v-model="form.identification" 
            float-label="Identificación" 
            :after="[{icon : 'more'}]"/>
        </q-field>
      </div>
    </div>

    <div class="row q-mt-lg">
      <div class="col-xs-12">
        <q-field  class="">
          <q-input 
            v-model="form.email" 
            float-label="Correo Electrónico" 
            :after="[{icon : 'email'}]"/>
        </q-field>
      </div>
    </div>

    <div class="row q-mt-lg">
      <div class="col-xs-12">
        <q-field  class="">
          <q-input 
            v-model="form.phone" 
            float-label="Número de Contacto" 
            :after="[{icon : 'stay_current_portrait'}]"/>
        </q-field>
      </div>
    </div>
    
    <div class="row q-mt-lg q-mb-lg">
      <div class="col-xs-12 flex flex-center">
        <q-btn 
          rounded
          label="guardar" 
          color="primary"/>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data(){
    return{
      form:{
        name:'',
        lastName:'',
        identification:'',
        email:'',
        phone:'',
      }
    }
  }
}
</script>