<template>
    <div class="row justify-center">
        <div class="col-12 col-md-6">
            <q-tabs inverted color="green" animated v-model="courentTap">
                <q-tab default slot="title" name="list" label="Actas"/>
                <q-tab slot="title" name="create" label="Crear Acta"/>
                <q-tab-pane name="list">
                    <!-- LIST COMPONENT -->
                    <indexComponent/>
                </q-tab-pane>
                <q-tab-pane name="create">
                    <!-- CREATE COMPONENT -->
                    <createComponent @created="courentTap='list'"/>
                </q-tab-pane>
            </q-tabs>
        </div>
    </div>
</template>

<script>
    // COMPONENTS
    import indexComponent from 'src/components/app/proceedings/index'
    import createComponent from 'src/components/app/proceedings/create'

    export default {
        components: {
            indexComponent,
            createComponent,
        },
        data() {
            return {
                courentTap:'list'
            }
        }
    }
</script>