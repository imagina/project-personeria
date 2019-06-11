/<template>
  <div>
    <q-list 
      inset-separator	
      no-border>
      <q-item
       v-for="(item, index) in acts"
      :key="index">
        <q-item-main>
          <q-item-tile label>{{item.title}}</q-item-tile>
          <q-item-tile sublabel>{{$d($moment(item.created_at, 'YYYY-MM-DD HH:mm').toDate(), 'short', $q.i18n.lang)}}</q-item-tile>
        </q-item-main>
        <q-item-side>
          <a :href="item.url" target="_blank" class="q-btn inline relative-position q-btn-item non-selectable q-btn-rectangle q-focusable q-hoverable bg-green text-white"><i aria-hidden="true" class="q-icon fa fa-download"> </i></a>
        </q-item-side>
      </q-item>
      <q-item-separator />
    </q-list>
    <q-inner-loading :visible="loading">
      <q-spinner-hourglass size="50px" color="primary"></q-spinner-hourglass>
    </q-inner-loading>
  </div>
</template>

<script>
    import ActServices from 'src/services/application/acts'
    import showComponent from 'src/components/app/proceedings/show'

    export default {
        components: {showComponent},
        data () {
            return {
                modalShow:false,
                acts: [],
                id:'',
                title: '',
                description: '',
                activities: [],
                time: '',
                date: '',
                city: '',
                address: '',
                email: '',
                phone: '',
                participants: [],
                loading: true,

        }
        },
        mounted(){
            this.getActs(true)
        },
        methods:{
            getActs(refresh = false){
                let params = {
                    refresh : refresh,
                    params : {filter : {user:this.$store.state.auth.userId}}
                };
                ActServices.crud.index('apiRoutes.acts.acts',params).then(response => {
                    this.acts=response.data;
                    this.loading = false;
                }).catch(error => {

                })
            },
            showAct(id){
                ActServices.crud.show('apiRoutes.acts.acts',id,{params:{}}).then(response => {
                    console.warn(response.data);
                    this.id=response.data.id;
                    this.title=response.data.title;
                    this.description=response.data.description;
                    this.activities=response.data.activities;
                    this.date=response.data.date;
                    //this.city=response.data.city.title;
                    this.address=response.data.address;
                    this.email=response.data.email;
                    this.ephone=response.data.phone;
                    this.eparticipants=response.data.participants;
                    this.loading = false;
                    this.modalShow = true;
                }).catch(error => {
                  console.warn(error)
                })
            }


        }
    }
</script>