<template>
  <div>

    <!-- Data User-->
    <section>
      <userInformationComponent/>
    </section>
    <q-card-separator />

    <!-- Btn Access to-->
    <section 
      class="row q-mt-lg q-mb-lg">
      <btnAccessComponent/>
    </section>
    <q-card-separator />

    <!-- Actas Recientes--> 
    <div 
      class="row q-mt-lg q-pl-md">
      <div 
        class="col-md-12">
        <p><b>Actas Recientes</b></p>
      </div>
    </div>
    <indexComponent/>
  </div>
</template>

<script>
  import indexComponent from 'src/components/app/proceedings/index'
  import btnAccessComponent from 'src/components/app/user/profile/btnAccess'
  import userInformationComponent from 'src/components/app/user/profile/userInformation'

  export default {
    components:{
      indexComponent,
      btnAccessComponent,
      userInformationComponent
    },
    data () {
      return {}
    }
  }
</script>