import { reactive } from 'vue'

export const store = reactive({
    url: 'https://db.ygoprodeck.com/api/v7/cardinfo.php',
    listaCard: [],
    loader: false,
    archetype: 'https://db.ygoprodeck.com/api/v7/archetypes.php',
    archetypeArray: []

})