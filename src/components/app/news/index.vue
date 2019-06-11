<template>
  <div>
    <div
      class="row q-mb-md"
      v-for="(item, index) in news"
      :key="index">
      <pre></pre>
      <div class="col-5">
        <img
          :src="item.mainImage.path_string"
          class="responsive" style="max-width: 150px; width: 100%">
      </div>
      <div class="col-xs-5 q-body-1" style="padding-left: 15px">
        <p style="font-weight: bold">{{item.title}}</p>
        <div class="col-12">{{$d($moment(item.createdAt, 'YYYY-MM-DD HH:mm').toDate(), 'short', $q.i18n.lang)}}</div>
        <div class="col-12">
        {{item.summary}}
        </div>
      </div>
      <div class="col-2" v-if="parseInt(item.status) == 2">
        <a :href="item.url" target="_blank" class="q-btn inline relative-position q-btn-item non-selectable q-btn-rectangle q-focusable q-hoverable bg-green text-white"><i aria-hidden="true" class="q-icon fa fa-download"> </i></a>
      </div>
    </div>
  </div>
</template>

<script>
  import blogServices from '@imagina/qblog/_services/index'
  import ParticipantServices from 'src/services/application/acts'
export default {
  data () {
    return {
      news:[]
    }
  },
    mounted(){
     this.getPosts(true)
    },
    methods:{
      getPosts(refresh = false){
          let params = {
              refresh : refresh,
              params : {filter : {'user': this.$store.state.auth.userId}}
          }
          ParticipantServices.crud.index('apiRoutes.blog.posts',params).then(response => {
              this.news=response.data;
              console.warn(this.news)
          }).catch(error => {

          })
      }


    }
}
</script>