<template>
  <div class="clinicalLaboratory">
    <div class="clinicalLaboratory__head">
      <div class="head">
        <div class="head__title">
          Клинико-диагностическая лаборатория
        </div>
        <div class="head__subtitle">
          Перечень тестов, выполняемых клинико-диагностической лабораторией
        </div>
      </div>
    </div>
    <div class="clinicalLaboratory__context">
      <div class="context">
        <ul class="context__list list">
          <li
            class="list__item"
          >
          
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ClinicalLaboratory',

  data: () => ({
    listItems: [
      {
        title: '', discription: ''
      }
    ]
  })
}
</script>