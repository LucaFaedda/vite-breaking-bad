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
        },
    }
</script>
<template lang="">
    <div>
        <div class="container bg-primary mt-2 bg-light">
            <div class="row">
                <div >
                    <div v-if="store.loader == false" class="col-12 m-5 d-flex justify-content-center"><p><a href="https://giphy.com/gifs/the-magic-word-3ohzdQ1IynzclJldUQ">via GIPHY</a></p></div>
                    <div v-else class="col-12 d-flex flex-wrap justify-content-between my-2">
                        <!-- ci va sempre la dote notation con store -->
                        <AppListCard v-for="(item, index) in store.listaCard" :key="index" :carta="item"></AppListCard>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
    
</style>