<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppListCard from './components/AppListCard.vue';
import axios from 'axios';

import {store} from './store.js'
    export default {
      components:{
        AppHeader,
        AppMain,
        AppListCard
      },
      data() {
        return {
          listaCard: [],
          store
        }
      },
      created(){
        this.eseguiListaCarte()

      },
      methods: {
        eseguiListaCarte(){
          axios.get(store.url).then((response) =>{
            console.log(response.data.data)
            
          })
        }
      },
      
    }
</script>   
<template lang="">
  <div>
    <AppHeader message="Yu-Gi-Oh API"></AppHeader>
    <AppMain></AppMain>
  </div>
</template>
<style lang="scss">
  @use './styles/general.scss' as *;
  
</style>
