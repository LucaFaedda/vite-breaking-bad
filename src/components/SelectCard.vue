<script>
import {store} from '../store'
import axios from 'axios'
    export default {
            data(){
                return{
                    store,
                    arrayArchetype:[]
                }
            },
            created(){
                axios.get('https://db.ygoprodeck.com/api/v7/archetypes.php').then((response) =>{
                 this.arrayArchetype = response.data
            })}

    }
</script>
<template lang="">
    <div>
        <div class="container bk-orange">
            <div class="row">
                <div class="col-4 ">
                    <select  class="form-select  mt-3" aria-label="Default select example" v-model="store.selected" @change="$emit('selezionaCarta')">
                    <option value="" disable-value>Seleziona Archetyipo</option>
                    <option v-for="item in arrayArchetype"  :value="item.archetype_name">{{item.archetype_name}}</option>
                </select>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
@use '../styles/partials/variabiles' as *;
    
</style>