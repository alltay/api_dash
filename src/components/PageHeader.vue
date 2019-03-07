<template>
    <div class="d-flex justify-content-end flex-wrap">
      <div class="mr-auto p-2">
        <h2>{{meta.title}}</h2>
      </div>
      <form id="search" class="form-inline p-3">
          <input type="text" class="form-control" placeholder="Поиск" v-model="query">
      </form>
      <div class="p-2 text-center">
          <button type="button" class="btn btn-success mt-2" data-toggle="modal" data-target="#itemEditModal"
              v-on:click="action='add', setCurrent()">Добавить</button>
      </div>
      {{query}}
    </div>
</template>

<script>
  

export default {
  name: 'PageHeader',
  data () {
    return {
    }
  },
  props: {
    header: String,
    action: String,
    meta: Object,
    query: String
  },
  beforeUpdate(){
    this.$parent.query=this.query
  }
}
</script>

