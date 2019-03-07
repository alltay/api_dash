<template>
  <div class="MainPage p-2 ml-2">
    <h2>Главная</h2>
    <hr>
    <a href="https://docs.google.com/document/d/17dv39FDYp8_jbEBjUCRQ_BWygymfWBTVNlkuR4GHZWo/edit" class="badge badge-secondary" target="_blank">Документация</a>
    <hr>
  </div>

</template>


<script>

export default {
  beforeMount(){
    // Hide inform message
    $('.toast').toast('hide');
  },
}
</script>