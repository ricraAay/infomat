<template>
  <div class="context">

    <div class="context__head">

      <div class="context__subtitle">
        Отделение лучевой диагностики
      </div>
      <div class="context__title">
        Перечень услуг, выполняемых отделением лучевой диагностики
      </div>


      <div class="context__information">

        

        <div 
          class="paragraph" 
          v-for="(item, i) in listItems"
          :key="i"
        >
          <div class="paragraph__title">
            {{ item.title }}
          </div>
          <div class="paragraph__description">
            {{ item.description }}
          </div>
        </div>

      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'RadiationDiagnostics'
}
</script>