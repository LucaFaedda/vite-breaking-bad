<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppListCard from './components/AppListCard.vue';
import SelectCard from './components/SelectCard.vue';

import axios from 'axios';

import {store} from './store.js'
    export default {
      components:{
        AppHeader,
        AppMain,
        AppListCard,
        SelectCard
      },
      data() {
        return {
          store
        }
      },
      created(){
        this.eseguiListaCarte()
      },
      methods: {
        eseguiListaCarte(){
          axios.get(store.url).then((response) =>{
            store.listaCard = response.data.data
            setTimeout(() => {store.loader = true}, 1000) 
            // mi ero dimenticato di cambiare. avevo tenuto il consoleLog
          })
        }
      }
      
    }
</script>   
<template lang="">
  <div>
    <AppHeader message="Yu-Gi-Oh API"></AppHeader>
    <SelectCard @selezionaCarta = "eseguiListaCarte"></SelectCard>
    <AppMain  :caricamento ="loader"></AppMain>
  </div>
</template>
<style lang="scss">
  @use './styles/general.scss' as *;
  
</style>
