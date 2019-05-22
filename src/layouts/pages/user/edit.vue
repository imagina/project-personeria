<template>
  <div>
      <div class="row banner">
        <div class="col-xs-12">
          <img src="assets/app/banner_profile_edit.png" width="100%">
        </div>
      </div>
    <editComponent/>
  </div>
</template>

<script>
  import editComponent from 'src/components/app/user/profile/edit'
  export default {
    components:{
      editComponent
    }
  }
</script>
