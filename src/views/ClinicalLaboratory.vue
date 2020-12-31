<template>
  <div class="context">

    <div class="context__head">
      <div class="context__subtitle">
        Клинико-диагностическая лаборатория
      </div>
      <div class="context__title">
        Перечень тестов, выполняемых клинико-диагностической лабораторией
      </div>
    </div>

    <div class="context__information">
      <v-card 
        class="paragraph pt-9 pb-9 pl-7 pr-7"
        v-for="card in listItems"
        :key="card.name"
        @click="card.state = !card.state"
      >

        <v-row class="pl-2 pr-2">
          <h2>{{ card.name }}</h2>
          <v-spacer></v-spacer>
          <v-icon v-if="card.state" class="display-1">mdi-chevron-up</v-icon>
          <v-icon v-if="!card.state" class="display-1">mdi-chevron-down</v-icon>
        </v-row>

        <transition name="list">
          <div v-if="card.state" class="pt-3">
            <div
              v-for="(item, i) in card.items" :key="i"
              class="mb-4 mt-1"
            >
              <div class="paragraph__subtitle">
                {{ item.subtitle }}
              </div>
              <div class="paragraph__title">
                {{ item.title }}
              </div>
              <div class="paragraph__description">
                {{ item.description }}
              </div>
            </div>
          </div>
        </transition>

      </v-card>
    </div>

  </div>

</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'ClinicalLaboratory',
  computed: {
    ...mapState({
      listItems: s => s.listTestCDL.listItems
    })
  }
}
</script>

<style scoped>

</style>