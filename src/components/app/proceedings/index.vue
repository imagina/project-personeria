/<template>
  <div>
    <q-list 
      inset-separator	
      no-border>
      <q-item
       v-for="(item, index) in news" 
      :key="index">
        <q-item-side avatar="https://i.pravatar.cc/300"/>
        <q-item-main 
          label="Suspendisse sagittis lorem dui"
          sublabel="24/11/18"/>
        <q-item-side 
          right icon="fa fa-download" 
          color="green"/>
      </q-item>
      <q-item-separator />
    </q-list>
  </div>
</template>

<script>
export default {
  data () {
    return {
      news:[{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}]
    }
  }
}
</script>