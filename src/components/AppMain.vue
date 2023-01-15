<script>
import AppListCard from './AppListCard.vue';
import {store} from '../store'
    export default {
        components:{
            AppListCard,
        },
        data(){
            return{
                store
            }
        }
    }
</script>
<template lang="">
    <div>
        <div class="container bg-primary mt-2">
            <div class="row">
                <div class="col-4 ">
                    <select class="form-select  mt-3" aria-label="Default select example"> <option selected>Scegli La razza</option></select>
                
                   
                </div>
            </div>
            <div class="row">
                <div class="col-12 d-flex flex-wrap justify-content-between my-2">
                    <AppListCard v-for="(item, index) in store.listaCard" :key="index" :carta="item"></AppListCard>

                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
    
</style>