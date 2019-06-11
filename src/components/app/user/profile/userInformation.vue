<template>
  <div class="row">
    <div class="col-xs-5 flex flex-center q-mt-lg q-mb-lg" v-if="$store.state.auth.userData.mainImage">
      <img :src="$store.state.auth.userData.mainImage" class="avatar-full-width" style="max-width: 100px">
    </div>
    <div class="col-xs-7">
      <div class="row">
        <div class="col-xs-12 q-mt-xl min-line-height">
          <p class="text-color-primary">
            <b>{{$store.state.auth.userData.fullName}}</b>
          </p>
          <div class="row">
            <q-icon name="email" color="primary" class="min-line-height col-1"/>
            <span class="col-10">{{$store.state.auth.userData.email}}</span>
          </div>

          <div class="row" style="padding-top: 15px">
            <q-icon name="phone" color="primary" class="min-line-height col-1"/>
            <span class="col-10">{{$store.getters['auth/findField']('cellularPhone').value}}</span>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted(){
      console.warn(this.$store.state.auth.userData)
  }
}
</script>

<style scope>
  .avatar-full-width{
    width: 80%;
    border-radius: 50%
  }
  .min-line-height{
    line-height:5px;
  }
  .text-color-primary{
    color: #069535
  }
</style>