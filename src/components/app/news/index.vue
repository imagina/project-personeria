<template>
  <div>
    <div 
      class="row q-mb-md" 
      v-for="(item, index) in news" 
      :key="index">
      <div class="col-xs-6">
        <img 
          src="https://picsum.photos/150/120" 
          class="responsive">
      </div>
      <div class="col-xs-6 q-body-1">
        <p>01/11/19</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, 
          voluptates ipsam numquam exercitationem ipsum totam placeat quasi.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      news:[{},{},{},{},{},{},{},{},{},{}]
    }
  }
}
</script>