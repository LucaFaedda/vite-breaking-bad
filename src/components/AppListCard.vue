<script>
import {store} from '../store'
    export default {
        name: 'AppListCard',
        props:{
            carta: Object
        } // dimenticato mettere il props in appListCard
    }
</script>
<template lang="">
    <div>
        <div >
            <div class="card my-2" style="width: 18rem;">
                <img :src="carta.card_images[0].image_url" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">{{carta.name}}</h5>
                    <h6>{{carta.archetype}}</h6>
                </div>
            </div>

        </div>
    </div>
</template>
<style lang="scss">
    
</style>