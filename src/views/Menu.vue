<template>


    <v-row class="justify-space-around align-center">
      <div 
        class="card"
        v-for="card in cards"
        :key="card.url"
        @click="viewingInformation(card)"
        :class="card.class"
      >
        <div class="card__text">
          {{ card.department }}
        </div>  

      </div>
    </v-row>
    


</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Menu',
  
  computed: {
    ...mapState({
      cards: state => state.menuCard.cards
    })
  },

  methods: {
    viewingInformation (card) {
      this.$router.push(card.url)
    }
  }
}
</script>
