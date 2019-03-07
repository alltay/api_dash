<template>
    <div>
<!--       <ul class="list-group mb-3" >
        <li class="list-group-item d-flex justify-content-between align-items-center"
            v-for="(attr, index) in item.attrs" :key="attr.attr_id"
            v-bind:attr="attr">
            <span class="wide">
              {{attr.name}}
            </span>
            <select class="custom-select select-small" v-model="attr.is_card">
                <option is="SelectParamsList"
                        v-for = "(index, key, value) in is_card"
                        v-bind:param_name = "'В карточке ' +index"
                        v-bind:param_id = "Boolean(Number(key))" 
                        v-bind:current_item = "attr.display"></option>
            </select>
            <span class="badge badge-primary badge-pill">
              {{attr.weight}}
            </span>
            <button type="button" class="btn btn-success btn-sm ml-1" v-on:click="attr.weight++, sortArttrs()">∧</button>
            <button type="button" class="btn btn-success btn-sm ml-1 mr-1" v-on:click="attr.weight--, sortArttrs()">∨</button>
            <button type="button" class="btn btn-danger btn-sm" v-on:click="item.attrs.splice(index, 1)">Удалить</button>
        </li>
      </ul> -->
      <SortableList class="list-group mb-3"
          lockAxis="y"
          v-model="item.attrs"
          v-bind:items="item.attrs"
          v-bind:is_card="is_card"/>
    </div>
</template>

<script>

import SortableList from '@/components/sort/SortableList.vue'

export default {
  name: 'ItemEditAttributesLists',
  components: {
    SortableList,
  },
  props: {
    item: Object,
    is_card: Array,
  },
  beforeUpdate(){
    var count = 1;
    var lenght = this.item.attrs.length
    for(var i = 0; i < this.item.attrs.length; ++i){
      this.item.attrs[i].weight = this.item.attrs.length - count
          count++;
        }
    this.sortArttrs()
  },
  methods: {
    sortArttrs: function() {
      function compare(a, b) {
        if (a.weight < b.weight)
          return 1;
        if (a.weight > b.weight)
          return -1;
        return 0;
      }
      return this.item['attrs'].sort(compare);
    }
  }
}
</script>

<style>
.select-small {
    font-size: 12px;
    max-width: 150px;
}
</style>