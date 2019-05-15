<template>
  <div>

    <div class="row">
      <div class="col-xs-12">
        <q-field  class="">
          <q-input 
            v-model="form.subject" 
            float-label="Asunto" 
            :after="[{icon : 'local_offer'}]"/>
        </q-field>
      </div>
    </div>

    <div class="row q-mt-lg">
      <div class="col-xs-6 q-pr-sm">
        <q-datetime 
          :after="[{icon: 'access_time'}]"
          v-model="form.time" 
          type="time" 
          float-label="Hora"/>
      </div>
      <div class="col-xs-6 q-pl-sm">
        <q-datetime
          :after="[{icon: 'date_range'}]"
          v-model="form.date" 
          type="date" 
          float-label="Fecha"/>
      </div>
    </div>

    <div class="row q-mt-lg">
      <div class="col-xs-12">
        <q-field  class="">
          <q-input 
            v-model="form.city" 
            float-label="Ciudad" 
            :after="[{icon : 'location_on'}]"/>
        </q-field>
      </div>
    </div>

    <div class="row q-mt-lg">
      <div class="col-xs-12">
        <q-field  class="">
          <q-input 
            v-model="form.place" 
            float-label="Lugar" 
            :after="[{icon : 'directions'}]"/>
        </q-field>
      </div>
    </div>

    <div class="row q-mt-lg">
      <div class="col-xs-12">
        <q-field  class="">
          <q-input 
            v-model="form.email" 
            float-label="Correo Electónico" 
            :after="[{icon : 'email'}]"/>
        </q-field>
      </div>
    </div>

    <div class="row q-mt-lg">
      <div class="col-xs-12">
        <q-field  class="">
          <q-input 
            v-model="form.phone" 
            float-label="Número de contacto" 
            :after="[{icon : 'stay_current_portrait'}]"/>
        </q-field>
      </div>
    </div>

    <div class="row q-mt-lg">
      <div class="col-xs-12">
        Actividades
      </div>
    </div>

    <div class="row q-mt-lg">
      <div class="col-xs-12">
        Participantes
      </div>
    </div>

    <div class="row q-mt-lg">
      <div class="col-xs-12">
        <q-field>
          <q-uploader 
            :url="url" 
            v-model="form.attachments"/>
        </q-field>
      </div>
    </div>

    <div class="row q-mt-lg">
      <div class="col-xs-12">
        <div class="q-mt-lg">
          <p>Observaciones</p>
          <q-editor 
            v-model="form.observations" 
            height="300px"/>
        </div>
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
          subject: '',
          time:'',
          date:'',
          city:'',
          place:'',
          email:'',
          phone:'',
          activities:[],
          participants:'',
          attachments:'',
          observations:'',
        },
        url: '',
      }
    }
  }
</script>