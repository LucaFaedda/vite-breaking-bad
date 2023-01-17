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
          let nuovoUrl = `${store.url}${store.selected}`
          // si poteva aggiungere un nuovo url. selezionando quello che ho nello store e aggiungendo il selected che cambia ad ogni option che posso avere.

          axios.get(nuovoUrl).then((response) =>{
            store.listaCard = response.data.data
            setTimeout(() => {store.loader = true}, 3000) 
            // mi ero dimenticato di cambiare. avevo tenuto il consoleLog
          })
        }
      }
      
    }
</script>   
<template lang="">
  <div>
    <AppHeader class="bg-light border-bottom" message="Yu-Gi-Oh API"></AppHeader>
    <SelectCard @selezionaCarta = "eseguiListaCarte"></SelectCard>
    <AppMain  :caricamento ="loader"></AppMain>
  </div>
</template>
<style lang="scss">
  @use './styles/general.scss' as *;
  
</style>
