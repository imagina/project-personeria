<template>
  <div>
    <img 
      class="bandera-position-absolute"
      src="/assets/app/bandera_Ibague.png">
    <profileComponent/>
  </div>
</template>

<script>
  import profileComponent from 'src/components/app/user/profile/show'
  export default {
    components:{
      profileComponent
    }
  }
</script>

<style scope>
  .bandera-position-absolute{
    position:absolute;
    right:0px
  }
</style>