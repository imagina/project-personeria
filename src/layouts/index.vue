<template>
  <q-page id="home" class="flex flex-center">
    <div>
      <profileComponent/>
    </div>
  </q-page>
</template>

<style>
</style>

<script>
    import profileComponent from 'src/components/app/user/profile/show'
export default {
    components:{
        profileComponent
    },
  name: 'PageIndex',
  data() {
    return {
      logo : this.$store.getters['site/getSettingMediaByName']('isite::logo1').path
    }
  }
}
</script>
<style lang="stylus">
  @import "~variables";
  #home
    background-image url(https://personeriadeibague.gov.co/assets/background/band.png)
    background-repeat no-repeat
    background-position top right
</style>