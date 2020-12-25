<template>
  <div>
    <v-row>
      <div 
        class="card"
        v-for="card in cards"
        :key="card.title"
        @click="viewingInformation(card)"
      >
        <div class="card__text">
          <p>
            {{ card.title }}
          </p>
        </div>  
        
        <span 
          class="card__line" 
          :style="{ background: card.color }"
        ></span>
      
      </div>
    </v-row>
    
  </div>
</template>

<script>
import Modal from '@/components/Modal'

export default {
  name: 'MainPage',
  data: () => ({
    cards: [
      {
        title: 'Отделение функциональной диагностики',
        url: '/department-functional-diagnostics',
        color: '#27AE60'
      },
      {
        title: 'Отделение ультразвуковой диагностики',
        color: '#2D9CDB'
      },
      {
        title: 'Отделение лучевой диагностики',
        color: '#EB5757'
      },
      {
        title: 'Отделение эндоскопии',
        color: '#F2994A'
      },
      {
        title: 'Клинико-диагностическая лаборатория',
        url: '/ClinicalLaboratory',
        color: '#56CCF2'
      }
      ,
      {
        title: 'Микробиологическая лаборатория',
        color: '#9B51E0'
      }
    ],
  }),
  methods: {
    viewingInformation (card) {
      this.$router.push(card.url)
    }
  }
}
</script>

<style>
  .card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    margin: 0 30px 30px 0;
    width: calc(33.333% - 30px);
    height: 220px;
    padding: 30px;
    border-radius: 8px;
    background: #fff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    cursor: pointer;
    transition: .4s ease;
  }
  .card:active {
    transform: scale(.9);
    transition: .2s ease;
  }

  .card__text span {
    color: #828282;
    font-size: 18px;
  }
  .card__text p {
    color: #000000;
    font-size: 24px;
    font-weight: bold;
  }
  .card__line {
    display: block;
    position: absolute;
    width: 100px;
    height: 5px;
    bottom: 30px;
    background: #27AE60;
  }

</style>