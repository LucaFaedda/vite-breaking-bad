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
        AppListCard,

      },
      data() {
        return {
          
          store
        }
      },
      created(){
        this.eseguiListaCarte()
        this.archetypeLista()

      },
      methods: {
        eseguiListaCarte(){
          axios.get(store.url).then((response) =>{
            store.listaCard = response.data.data
            setTimeout(() => {store.loader = true}, 1000) 
            // mi ero dimenticato di cambiare. avevo tenuto il consoleLog
          })
        },
        archetypeLista(){
          axios.get(store.archetype).then((response) =>{
            store.archetypeArray = response.data})
          }
        // andava creata un'altra chiamata API, ovviamente va messa anche in store
      }
      
    }
</script>   
<template lang="">
  <div>
    <AppHeader message="Yu-Gi-Oh API"></AppHeader>
    <main>

      <AppMain  :caricamento ="loader"></AppMain>
    </main>
  </div>
</template>
<style lang="scss">
  @use './styles/general.scss' as *;
  
</style>
